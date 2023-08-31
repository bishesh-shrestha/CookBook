import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import recept1 from "../recpimg/recept1.jpg"
import recept2 from "../recpimg/recept2.jpg"
import recept3 from "../recpimg/recept3.jpg"
import recept4 from "../recpimg/recept4.jpg"
import recept5 from "../recpimg/recept5.jpg"
import { styled } from 'styled-components';


export default function Walpaper() {
  const Header=styled.header`
    @media (max-width:480px){
     
     .p{
      position:absolute;
      top:30%
      font-size:20px;
      color:black;
     }
   }
  `;
  return (
    <Header>
    <div style={{position:'absolute',top:"0",zIndex:"-1",opacity:"0.866"}}>
   
    <Carousel    showThumbs={false} autoPlay={true} transitionTime={5} infiniteLoop={true} showStatus={false}  >
    <div>
                    <img className="img  " src={recept1}  alt='picture'  style={{width:"100%",height:"650px"}}/>
                    <p  className="p " style={{position:"absolute",color:"white",top:"50%",fontSize:"80px",fontWeight:"bold",left:"10%",opacity:"1"}}>Welcome To Our CookBook</p>
                </div>
                <div>
                    <img className="img" src={recept2}  alt='picture'  style={{width:"100%",height:"650px"}}/>
                    <p  className="p" style={{position:"absolute",color:"white",top:"50%",fontSize:"80px",fontWeight:"bold",left:"10%",zIndex:"2",opacity:"2"}}>Welcome To Our CookBook</p>

                   
                </div>
                <div>
                    <img className="img" src={recept3}  alt='picture' style={{width:"100%",height:"650px"}} />
                                        <p  className="p" style={{position:"absolute",color:"white",top:"50%",fontSize:"80px",fontWeight:"bold",left:"10%",opacity:"1"}}>Welcome To Our CookBook</p>

                    
                </div>
                <div>
                    <img className="img" src={recept4}  alt='picture' style={{width:"100%",height:"650px"}} />
                                        <p  className="p" style={{position:"absolute",color:"white",top:"50%",fontSize:"80px",fontWeight:"bold",left:"10%",opacity:"1"}}>Welcome To Our CookBook</p>

                   
                </div>
                <div>
                    <img className="img" src={recept5} alt='picture'  style={{width:"100%",height:"650px"}} />
                                        <p  className="p" style={{position:"absolute",color:"white",top:"50%",fontSize:"80px",fontWeight:"bold",left:"10%",opacity:"1"}}>Welcome To Our CookBook</p>

                   
                </div>


        </Carousel>
      
    </div>
    </Header>
  )
}
