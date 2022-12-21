
import React from 'react';
import styled from "styled-components";
import logo from './imgs/logosinfondo.png';
import fondo from './imgs/fondoLog.jpg';
import ComboSearch from './ComboSearch'

import reducer from './reducer';
import {useDispatch,useSelector} from 'react-redux';
import {loguin,logout} from './actions.js';



const PanInicial=styled.div`

background-image:url(${fondo});
position:relative;
display:flex;
justify-content:center;
background-size:cover;
background-repeat: no-repeat;
min-width: auto;
background-attachment: fixed;
width: 100%;
height:100vh;



`


const Ingreso=styled.div`
background-color:#F6FDFB;
border: 3px solid #09b5c1;
width: 400px;
height: 300px; 
border-radius:25px;
font-size:30px;
position:absolute;
color: #033953;
top:200px;
text-align:center;
padding:15px;
`
const imgStyle={width: "auto",
height: "100px" ,
position:"absolute",
top:"0px",left:"0px"
};

const inputs={width: "80%", padding:"8px", borderRadius:"8px",border:"1px solid grey"};
const buton={width: "80%", padding:"8px", borderRadius:"8px",border:"none", backgroundColor:"#09b5c1"};


 



export default function Login(){


let estadoUsusario=useSelector(state=>state.usuario);
let dispatch=useDispatch();
let usuario=document.getElementById("usuario").value;


return(
<PanInicial> 

<img src={logo} style={imgStyle} alt="logo farmasis"/>
    <Ingreso>
	<span><h4>acceso a usuarios</h4></span> 
	
	<form onSubmit={dispatch(loguin(usuario))}>
	<ComboSearch />
		<div>
		<input style={inputs} placeholder="usuario" type="text" id="usuario" value={estadoUsusario}/>
	</div>
	<div>
		<input style={inputs} placeholder="Contraseña" type="text" id="contraseña"/>
	</div> 
	<button style={buton}>ingresar</button>
	</form>
	</Ingreso>
</PanInicial>)

}