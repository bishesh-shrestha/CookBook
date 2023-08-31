import React, { useEffect, useState } from 'react'
import { Router, Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import Switch from "react-switch";
import { useProductContext } from '../context/usecontext';



export default function Nav() {
   const  {tex,settex,bgg,toggle,checked,handle_Change,cool} = useProductContext()
    const [menu, setmenu] = useState(false);
    
    const Nav= styled.nav`
        .Nav-bar .menu{
            display:none;
            position:absolute;
            top:0.75rem;
            right:0.5rem;
            flex-direction: column;
            justify-content:space-between;
            width:2.25rem;
            height:2rem;
        }
        .Nav-bar .menu span{
            height:0.4rem;
            width:100%;
            background-color:black;
            border-radius:0.2rem;
        }

        @media (max-width:680px){

            .Nav-bar .menu {
                display:flex;
                
            }
            .Nav-bar{
                flex-direction:column;
                align-items:start;
            }
            .Nav-bar .Nav-element{
                display:none;
                flex-direction:column;
                width:100%;
                margin-bottom:0.24rem;
            }
            .Nav-bar .Nav-element ul li{
                width:100%;
                text-align:center;
            }
            .Nav-bar  ul .open{
                display:flex;
            }
            .Nav-bar .Nav-element ul li navbar-link{
                margin:0.2rem 0.5rem;
            }

        }



    `;
    
   
    return (
    <>
           <Nav>
                <div className={`Nav-bar  text-black bg-white`} style={{backgroundColor:cool?"white":"black",color:"black",position:"sticky",top:"0",borderRadius:"30px",marginTop:"20px",height:"80px"}} >
                    <div className='navbar-lists' style={{ display: "flex" }}  >
                        <div className='logo' style={{color:cool?"black":"white", display:"flex",marginTop:"5px",fontWeight:"bold",fontStyle:"italic",fontFamily:"sans-serif",fontSize: "40px", marginLeft: "30px", cursor: "pointer" }} >
                            <label style={{letterSpacing:"2px"}}>COOKBOOK </label>
                            <span style={{fontSize:"16px",marginLeft:"20px",marginTop:"8px",margin:"12px",height:"30px",width:"95px",fontFamily:"serif"}}>the best online recipes</span>

                        </div>
                        <div className='menu' onClick={()=>{setmenu(!menu)}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        
                        <div className='Nav-element'  style={{ fontSize: '30px',textDecoration:"none",color:"black", cursor: "pointer", marginLeft: "150px" ,marginTop:"0px"}}>
                            <ul className={menu?"open":"Nav-brands"} style={{ listStyleType:"none",display: "flex",textDecoration:"none" }} >
                                <div className='nav-item' style={{border:"none", display: "flex",fontWeight:"bold",fontFamily:"serif" }}>
                                    <li className="nav-items "> <NavLink className="navbar-link" to="/"
                                                          style={{textDecoration:"none",color:cool?"black":"white" }}  >Home</NavLink></li>
                                    <li className='nav-items ' style={{ marginLeft: '40px',textDecoration:"none" }}><NavLink  className="navbar-link" style={{textDecoration:"none",color:cool?"black":"white"}}  to="/about"
                                                           >About</NavLink></li>
                                    <li className='nav-items ' style={{ marginLeft: '40px',textDecoration:"none"  }}><NavLink  className="navbar-link" to="/courses"
                                                         style={{border:"none",textDecoration:"none" ,color:cool?"black":"white"}}  >Courses</NavLink></li>
                                    
                                    <li style={{display:"flex"}}>
                                    <li className='nav-items ' style={{ marginLeft: '40px',textDecoration:"none"  }}><NavLink className="navbar-link"  to="/login"
                                                          style={{border:"none",textDecoration:"none",listStyle:"none",color:cool?"black":"white"}} >Login</NavLink></li>
                                    <li className='nav-items ' style={{ marginLeft: '40px',textDecoration:"none"  }}><NavLink  className="navbar-link" to="/register"
                                                          style={{border:"none",textDecoration:"none" ,color:cool?"black":"white"}}  >Register</NavLink></li>
                                      <li className='nav-items ' >
                                    
                                      <input type='checkbox' onClick={handle_Change} />
                                      <label  style={{marginLeft:"10px",color:cool?"black":"white"}}>{toggle}</label>
                                      </li>
                                       
                                    </li>
                                    
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
                </Nav>
                
            </>
            )
}
