/* eslint-disable eqeqeq */
import React, { Component} from 'react';
import Axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import moment from'moment';
import Loader from 'react-loader-spinner';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import OneDay from './OneDay/OneDay';
import FiveDays from './FiveDays/FiveDays';
import DefaultImg from './DefaultImg.jpg';
import Polonne from './Polonne.png';
import FoX from './fox.png';
import FavoriteCities from './FavoriteCities/FavoriteCities';
import style from './App.css';


class App extends Component {

  state = {
    input: '',
    input5: '',
    geo: {},
    data: {},
    isLoading: true,
    validateInput: false,
    errorStatus: false,
    bgUrl: '',
    date: '',
    time: '',
    location: '',
    city: '',
    id: '',
    favorList: JSON.parse(localStorage.getItem('favorList')) || [],
  }
  componentDidMount(){
    this.getData();
    this.clock();

  }

  changeInput = (e) => {
    let value = e.target.value;
    this.setState({
      input: value,
    })
  }

  favListWeather = async(e) => {
    let id = e.target.id;
    await this.setState({
      input: id,
    })
    this.getData();
    
  }

  clock = () =>{
    setInterval(() =>{
     let timeNow = moment().format('HH:mm:ss'); 
     let dateNow = moment().format('MMM Do YY');
    //  console.log(dateNow);
    //  console.log(timeNow);
     this.setState({
       date: dateNow,
       time: timeNow,
     })
    },1000);
  }
  favorListCity = () => {
    if(this.state.city === ''){
      return
    }
    if(!this.state.favorList.includes(this.state.city.toLowerCase())){
      let list = this.state.city.toLowerCase();
    
    this.setState(prev => ({
      favorList: [...prev.favorList, list]
    }));
    let result = JSON.parse(localStorage.getItem('favorList')) || []
    result.push(list);
    localStorage.setItem('favorList', JSON.stringify(result));
  } else {
    console.log('poka');
  }
  }
  deletLi = e => {
    e.stopPropagation();
    let id = e.target.dataset.id;
    let result = JSON.parse(localStorage.getItem('favorList'));
    let filterEl = result.filter(el => el != id);
    localStorage.setItem('favorList', JSON.stringify(filterEl));
    this.setState({
      favorList: filterEl
    })
  }

  markerClick=(e)=> {
    // console.log(e);
    let lat=e.latLng.lat();
    let lng=e.latLng.lng();
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=b5ec4144af2651a6b2eb07fb26d8ba0c&lang=ua`).then(result=>this.writeStateWithLonLgt(result))
  }

  writeStateWithLonLgt=(result)=> {
    // console.log(result);
    this.setState({
      input: result.data.name,
      city: result.data.name,
      location: result.data.sys.country,
      isLoading:false,
      data: result.data
    })
    Axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=200&q=${this.state.input || 'Kiev'}`)
      .then(res => {
        // console.log(res.data.hits[Math.floor(Math.random()* res.data.hits.length)].largeImageURL);
        if(res.data.hits.length >0){
          this.setState({
            bgUrl: res.data.hits[Math.floor(Math.random()* res.data.hits.length)].largeImageURL,
            input: ''
          })
        } else {
          this.setState({
            bgUrl: DefaultImg
          })
        }
      })
  }
  getData = (e) => {
    e && e.preventDefault();
    const input = this.state.input;
    Promise.all([Axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=fb3757a2d30c94cbe235dd02fdb9710a&q=${input || 'Kiev'}&units=metric`),
  Axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=200&q=${input || 'Kiev'}`)])
  .then(res => {
    // console.log(res);
    this.setState({
      data: res[0].data,
      isLoading: false,
      bgUrl: res[1].data.hits[Math.floor(Math.random()* res[1].data.hits.length)].largeImageURL,
      location: res[0].data.sys.country,
      city: res[0].data.name,
      geo: res[0].data.coord,
      id: res[0].data.id,
      input5: this.state.input,
      errorStatus: false,
      input: ''
    })
  })
  
  .catch((error) => {
    if(error){
      (Axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=c60dd86e9ebff9397278842665cf0376&q=${input || 'Kiev'}&units=metric`))
      .then(res => {
        this.setState ({
          data: res.data,
          isLoading: false,
          bgUrl: input === 'polonne'|| input ==='Polonne' ? Polonne : DefaultImg,
          city: res.data.name,
          location: res.data.sys.country,
          errorStatus: false,
          input: ''
        })
      })
      .catch(err => this.setState({errorStatus: true,}))
      
    }
    console.log(error);
  })
  }

  render() {
    const {data, input, input5, bgUrl, date, time, location, city, favorList, errorStatus} = this.state;
    return (
      <div className={style.App} style={ { backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bgUrl})`}}>
        {this.state.isLoading ? <div className={style.loader}><Loader type="Puff" color="#fff" height="100" width="100"/><p className={style.loaderText}>Loading...</p></div> : 
        <div>
          <Header key={data.id} errorStatus={errorStatus} getData={this.getData} input={input} changeInput={this.changeInput} date={date} time={time} location={location} city={city} favorListCity={this.favorListCity} favorList={favorList}/>
          <FavoriteCities  favorList={favorList} favListWeather={this.favListWeather} deletLi={this.deletLi}/>
          <Menu/>
          <Switch>
            <Route exact path="/Weather_App_byFoX/" render={() => <OneDay  data={data} markerClick={this.markerClick} temp={data.main.temp} pressure={data.main.pressure} humidity={data.main.humidity} sunrise={data.sys.sunrise} sunset={data.sys.sunset} wind={data.wind.speed} temp_min={data.main.temp_min} temp_max={data.main.temp_max}/>}/>
            <Route path="/Weather_App_byFoX/MoreDays" render={() => <FiveDays input={input5}/>}/>
          </Switch>
        </div>}
          <p className={style.fox}>Made by FoX <img className={style.fox_img} src={FoX} alt="FoX"/></p>
      </div>
    );
  }
}

export default App;