import {React,useEffect,useState} from 'react'
import './Banner.css'
import instance from './instants'
import requests from './requests'

function Banner() {
  const base_url = "https://image.tmdb.org/t/p/original";
const [movie,setMovie]=useState({})

//api
const fetchData=async ()=>{
  const response=await instance.get(requests.fetchTrending)
  setMovie(response.data.results[
   Math.floor( Math.random()*response.data.results.length)
  ]);
}

function truncate(str,n){
return  str?.length>n?str?.substr(0,n-1)+'...':str
}

useEffect(()=>{
    fetchData()
  },[])

 return (
  <div className='banner' style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>

<div className='bannerContent'>
 <h1 className='title'>{movie.title}</h1> 
 <h3 className='overview'>{truncate(movie?.overview,250)}</h3>  
</div>
 
</div>
 
 
 )
}

export default Banner
