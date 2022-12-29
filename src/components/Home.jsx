import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux';
import {logout} from './actions.js';
import {Outlet} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import logo from './imgs/logosinfondo.png';
import olas from './imgs/olas.jpg';

const imgStyle={width: "200px",
height: "100px" ,
display:"block"};

const olasStyle={height: "35px"};

const userStyle={
	fontSize:"40px",
	color:"#01578c",
};




const Navbar=styled.div`
position: relative;
flex-direction: column;
display: flex;
background-color: #eeeeee;

`
const UserInfo=styled.div`
position: absolute;
right:0px;
top:0px;
display: flex;
justify-content:flex-end;
flex-direction: column;
margin:0px
`
const LogoutStyle=styled.div`
position: absolute;
right:0px;
top:65px;
color:blue`

const Opciones=styled.div`
position: relative;
display: flex;
justify-content: space-around`



export default function Home(){


let dispatch=useDispatch();
let user=useSelector(state=>state.usuario);
let isLogin=useSelector(state=>state.isloguin);
    if(isLogin==="false"){
	return <Navigate to="/" /> }

	return (
		<div>
		<Navbar>
		
		<img src={logo} style={imgStyle}/>
		

        <Opciones>
		<div>Referidos </div>
		<div>Video-tutoriales</div>
       </Opciones>

		<UserInfo>
		<h1 style={userStyle}>Bienvenido: {user}</h1>
		<LogoutStyle><span onClick={()=>dispatch(logout())} >logout</span></LogoutStyle>
		</UserInfo>
		<img src={olas} style={olasStyle}  />
		</Navbar>

		<Outlet/>
		</div>

		)
}
