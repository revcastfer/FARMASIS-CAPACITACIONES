import React from 'react';
import styled from "styled-components";
import RefeImagen from './imgs/referidos.jpeg'
import RefeImagencompleta from './imgs/referidosCompleto.jpeg'
import fondoHex from './imgs/fondoHexagonos.jpg'


const Formulario=styled.form`
width:50%;
position:relative;
background-image:url(${fondoHex});
background-size:contain`

const ImputsReferidos=styled.input`
display:block;
margin:20px;
height:30px;
width:80%;
border-radius:10px;
border: 1px solid grey`

const TipoDatos=styled.div`
color:#09b5c1;
font-size:20px
`
const butonStyle={width: "80px", padding:"8px", borderRadius:"8px",
border:"none", backgroundColor:"#09b5c1"};


const Contenedor=styled.div`
display:flex;
min-height:600px;
`



const ImagenesDerecha=styled.div`
display:flex;
background-size:cover;
background-repeat:no-repeat;
width:50%;
height:0px

justify-content:center;
background-image:url(${RefeImagencompleta});
@media (max-width:900px){
background-image:url(${RefeImagen});
right:0px}
`

const formCentrar={position:"absolute",left:"8%", top:"7%",
width:"100%"}







export default function Referidos(){

let handleSubmit=(e)=>{alert("prueba submit");e.preventDefault()  }

	return(
		

		<Contenedor>
		<Formulario  onSubmit={handleSubmit}>
		<div style={formCentrar}>
		<TipoDatos>tus datos:</TipoDatos>
	    <ImputsReferidos placeholder="Tus nombres: " type="text"/>
		<ImputsReferidos placeholder="Tus apellidos:" type="text"/>
		<ImputsReferidos placeholder="Tu numero de contacto:" type="tel"/>
		<ImputsReferidos placeholder="Tu relacion con el referido:" type="text"/>
		<TipoDatos>datos del referido:</TipoDatos>
		<ImputsReferidos placeholder="Nombre del referido:" type="text"/>
		<ImputsReferidos placeholder="Apellido del referido" type="text"/>
		<ImputsReferidos placeholder="Numero de contacto del referido" type="phone"/>
		<button style={butonStyle}>enviar</button>
		</div>

		</Formulario>

		<ImagenesDerecha>
		
		</ImagenesDerecha>



		</Contenedor>


		
		)
}