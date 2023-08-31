import React, { useState } from 'react'
import logback from "../recpimg/logback.jpg"
import { styled } from 'styled-components'
import "../register/register.css"
import food1 from "../recpimg/food1.png"
import food2 from "../recpimg/food2.png"
import {FaUserCircle,FaEye} from "react-icons/fa"
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebase-config'

  const Wrapper = styled.body`
    .register{
        background-image:url(${logback}) ;
    background-repeat: no-repeat;
    background-size: cover;
    height: 740px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    width: 100%;
    }
    .div1{
      background-color: black;
      width:1100px;
      height:570px;
      position:absolute;
      top:3%;
      right:10%;
      margin-top:100px
      
    }
    .div2{
      background-color: white;
      width:500px;
      height:570px;
      position:absolute;
      top:0%;
      right:55%;

    }
    .div3{
      background-color: white;
      width:600px;
      height:570px;
      position:absolute;
      top:0%;
      right:0%;

    }
    .create{
      font-size:40px;
      margin-top:-1px;
      font-weight:bold;
      text-align:center;
    }
    .su{
      display:grid;
      text-align:center;
      margin-bottom:5px;
    }
    .su label{
      font-size:25px;
      font-weight:bold;
    }
    .su div input{
      border-radius:10px;
      font-size:20px;
      font-weight:lighter;
      text-align:center;
      color:black;
      margin-top:5px;
      width:370px;
      height:30px;
      margin-left:10px;
      border-bottom:2px solid black;
      border-top:0;
      border-left:0;
      border-right:0;

    }
    .su div{
      display:flex;
    }
    .bute:hover{
      opacity:0.8;
    }
    `;

export default function Register() {
  const navigate= useNavigate()

   
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    
    const reges=async(e)=>{
      e.preventDefault()
      if(password===confirmpassword){
        try {
          createUserWithEmailAndPassword(auth,email,password)
            .then(async(res)=>{
              const user=res.user;
              await updateProfile(user,{
                displayname:username
              })
              navigate("/");
            })          
        } catch (error) {
          console.log(error.message)
        }
      }
      else{
        console.log("Invalid Password")
      }
    }
  

  return (
   <>
   <Wrapper>
    
    <div className='register'>
      <div>
        <div className='div1'>
        <div className='div2'>
            <img src={`${food1}`} style={{marginLeft:"50px",marginTop:"20px"}} width="300px" height="250px" />
            <img src={`${food2}`} width="400px" height="270px"/>
        </div>
        <div className='div3'>
        <div className='logo' style={{ display:"flex",marginTop:"5px",fontWeight:"bold",fontStyle:"italic",fontFamily:"sans-serif",fontSize: "30px", marginLeft: "10px", cursor: "pointer" }} >
                            <label style={{letterSpacing:"2px"}}>COOKBOOK </label>
                            <span style={{fontSize:"11px",marginLeft:"15px",marginTop:"5px",height:"30px",width:"65px",fontFamily:"serif"}}>the best online recipes</span>

                        </div>
            <form onSubmit={reges}>
              <h1 className='create'>Create an Account</h1>
              <div className='su'>
                <label>USERNAME</label>
                
                <div><FaUserCircle style={{width:"80px",height:"50px",marginLeft:"30px",marginTop:"-9px"}}/><input type='text'   value={username} onChange={(e)=>{setusername(e.target.value) }} placeholder='Enter UserName' /></div>
              </div>
              <div className='su'>
                <label>EMAIL</label>
                
                <div><FaUserCircle style={{width:"80px",height:"50px",marginLeft:"30px",marginTop:"-9px"}}/><input type='email'  value={email}onChange={(e)=>{setemail(e.target.value) }}  placeholder='Enter Email' /></div>
              </div>
              <div className='su'>
                <label>PASSWORD</label>
                
                <div><FaEye style={{width:"80px",height:"50px",marginLeft:"30px",marginTop:"-9px"}}/><input type='password' value={password}onChange={(e)=>{setpassword(e.target.value) }}   placeholder='Enter Password' /></div>
              </div>
              <div className='su'>
                <label>CONFIRM PASSWORD</label>
                
                <div><FaEye style={{width:"80px",height:"50px",marginLeft:"30px",marginTop:"-9px"}}/><input type='password'  value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value) }}  placeholder='Enter Password' /></div>
              </div>
              <div style={{display:"flex"}}>
              <p style={{color:"black",textDecoration:"none",marginLeft:"50px",fontSize:"20px",textAlign:"start"}}>Already a member ? <a  style={{color:"red",fontWeight:"bold",border:"none"}}href='#'>Log In</a></p>
              <button style={{color:"blue",display:"none",border:"none",backgroundColor:"white",width:"190px",height:"40px",marginTop:"10px",marginLeft:"100px",marginRight:"0px",fontSize:"20px"}}>Generate Password</button>
              </div>
              <input className='bute' type='submit' value="Register" style={{marginLeft:"35%",marginTop:"-10px",backgroundColor:"black",color:"white",fontSize:"30px",textAlign:"center",border:"none",borderRadius:"12px",width:"200px",height:"60px"}} />
            </form>

        </div>

        </div>
      </div>
      
      </div>
      </Wrapper>

    
   </>
  )
}
