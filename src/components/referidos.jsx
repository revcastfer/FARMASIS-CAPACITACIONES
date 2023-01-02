import React from 'react';
import styled from "styled-components";
import Media from 'react-media';
import RefeImagen from './imgs/referidos.jpeg'
import soporteImagen from './imgs/soporte.jpeg'

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
@media (max-width:900px){
justify-content:center;

}`

const Imagen=styled.div`
width:55%;
height:100%;
display:flex;
flex-direction:row;
`

const Imagen2= {Media (maxWidth:"900px"){
display:none} }



const Formulario=styled.form`
width:50%`

export default function Referidos(){

let handleSubmit=(e)=>{alert("prueba submit");e.preventDefault()  }

	return(
		

		<Contenedor>
		<Formulario  onSubmit={handleSubmit}>
		
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
		</Formulario>

		<Imagen>
		<img  src={RefeImagen}/>

		
		<img style={Imagen2} src={soporteImagen}/>
		

		</Imagen>



		</Contenedor>


		
		)
}