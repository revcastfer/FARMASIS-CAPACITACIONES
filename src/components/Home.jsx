import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux';
import {logout} from './actions.js';
import {Navigate,Outlet,NavLink} from 'react-router-dom'
import logo from './imgs/logosinfondo 3.png';
import baner1 from './imgs/baner1.jpg'

import Media from 'react-media';
import baner from './imgs/baner.JPG'

const imgStyle={width: "200px",
height: "100px" ,
position:"relative",
left: "40px",
top:"10px"
};

const baner1Style={position: "absolute",maxWidth: "300px",
height: "123px"};

const banerStyle={position: "absolute",minWidth: "80%",
height: "124px",left:"300px"};

const UserStyle=styled.span`
	font-size:45px;
	color:#033953;
	@media (max-width:900px){
	font-size:25px;}`
	


const inicialStyle={
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




`
const UserInfo=styled.div`
position: absolute;
right:10px;
top:10px;
display: flex;
margin:0px;

`
const LogoutStyle=styled.div`
position: absolute;
right:81px;
top:40px;
color:red;
font-size:25px`

const Opciones=styled.div`
position: relative;
display: flex;
justify-content: space-around;
width:80%;
left:300px
`

const NavOptionStyle={
	fontSize:"24px",
	color:"#033953",
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
		<img src={baner} style={banerStyle}/>
		<img src={baner1} style={baner1Style}/>
		<img src={logo} style={imgStyle}/>
		
		

        <Opciones>
		<NavLink to="/Home/Referidos" style={NavOptionStyle}>Referidos </NavLink>
		<NavLink to="/Home/Tutoriales" style={NavOptionStyle}>Video-tutoriales</NavLink>
       </Opciones>


       <div>
		<UserInfo>
		<UserStyle>Bienvenido: {user}</UserStyle><div style={inicialStyle}>{user[0]}</div>
		<LogoutStyle><span onClick={handleLogout} >Logout</span></LogoutStyle>
		</UserInfo>
		
		</div>


		
		</Navbar>

		<Outlet/>
		</div>

		)
}
