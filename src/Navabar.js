import {React,useState,useEffect} from 'react'
import './Navabar.css'

function Navabar() {
const  [show,setShow]=useState(false)

useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(window.scrollY>440){
        setShow(true)
    }else{
        setShow(false)
    }
})
},[])
console.log(show);
  return (
    <div className={`nav ${show && 'navBlack'}`}>
    <img style={{width:'200px',height:'80px'}} src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
    </div>
  )
}

export default Navabar