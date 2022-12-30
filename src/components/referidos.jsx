import React from 'react';
import styled from "styled-components";


const ImputsReferidos=styled.input`
display:block;
margin:20px;
height:30px;
width:300px;
border-radius:10px;
border: 1px solid grey`

const TipoDatos=styled.div`
color:#09b5c1;
font-size:20px
`
const butonStyle={width: "80px", padding:"8px", borderRadius:"8px",
border:"none", backgroundColor:"#09b5c1"};

export default function Referidos(){

let handleSubmit=(e)=>{alert("prueba submit");e.preventDefault()  }

	return(
		<div>

		<div>
		<form onSubmit={handleSubmit}>
		
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
		</form>
		</div>


		</div>
		)
}