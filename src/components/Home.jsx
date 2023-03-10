import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux';
import {logout} from './actions.js';
import {Navigate,Outlet,NavLink} from 'react-router-dom'
import logo from './imgs/logosinfondo 3.png';
import baner1 from './imgs/baner1.jpg'
import Redirect from 'react-router-dom'
import Media from 'react-media';
import baner from './imgs/baner.JPG'


const logoStyle={width: "200px",
height: "100px" ,
position:"relative",
left: "40px",
top:"10px"
};

const banerLogoStyle={position: "absolute",left:'-20px',
height: "128px"};






const UserName=styled.span`
    	font-size:35px;
    	font-weight: bold;
	color:#033953;
	@media (max-width:900px){
	font-size:25px;
	@media (max-width:700px){
	font-size:18px;

}`
	


const inicialLetterStyle={
	backgroundColor: "purple",
	width: "65px",
    height: "65px" ,
    borderRadius:"45px",
    margin:"5px",
    fontSize:"45px",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
   


}


const Navbar=styled.div`
position: relative;
flex-direction: column;
display: flex;
background-image:url(${baner});
background-size:cover;
background-repeat: no-repeat




`
const UserInfo=styled.div`
position: absolute;
right:10px;
top:1px;
display: flex;
margin:0px;
`
const Logout=styled.div`
position: absolute;
right:81px;
top:40px;
color:red;
font-size:25px;
font-weight:bold
`

const DivOpcionsNav=styled.div`
position: relative;
display: flex;
justify-content: space-around;
width:80%;
left:300px;
@media (max-width:900px){
justify-content:space-evenly;
left:220px;

}
`




const otionsLinksNavbar=({isActive})=>{
	return{
		
	color: isActive ? 'orange':'#033953',
	fontWeight: isActive? "bold" : 'normal',
	textDecoration: isActive? "none" : 'underline',
	fontSize:'24px',
}
}



export default function Home(){

let isLogin=useSelector(state=>state.isloguin);
let dispatch=useDispatch();
let user=useSelector(state=>state.usuario); 

let handleLogout=()=>{dispatch(logout())}

if(isLogin==="false"){
	return <Navigate to="/" /> }
	return (
		<div>
		<Navbar>
		
		<img src={baner1} style={banerLogoStyle}/>
		<img src={logo} style={logoStyle}/>
		
		

        <DivOpcionsNav>
		<NavLink  to="/Home/Referidos" style={otionsLinksNavbar} >Referidos </NavLink>
		<NavLink  to="/Home/Tutoriales" style={otionsLinksNavbar} >Video-tutoriales</NavLink>
       </DivOpcionsNav>


       <div>
		<UserInfo>
		<UserName>Bienvenido: {user}</UserName><div style={inicialLetterStyle}>{user[0]}</div>
		<Logout><span onClick={handleLogout} >Logout</span></Logout>
		</UserInfo>
		
		</div>


		
		</Navbar>

		<Outlet/>
		</div>

		)
}
