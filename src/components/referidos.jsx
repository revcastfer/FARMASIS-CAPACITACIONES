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



	return(
		<div>

		<div>
		<form>
		
		<TipoDatos>tus datos:</TipoDatos>
	    <ImputsReferidos placeholder="tus nombre: " type="text"/>
		<ImputsReferidos placeholder="tus apellidos:" type="text"/>
		<ImputsReferidos placeholder="tu numero de contacto:" type="phone"/>
		<ImputsReferidos placeholder="relacion con el referido:" type="text"/>
		<TipoDatos>datos del referido:</TipoDatos>
		<ImputsReferidos placeholder="nombre del referido:" type="text"/>
		<ImputsReferidos placeholder="apellido del referido" type="text"/>
		<ImputsReferidos placeholder="numero de contacto del referido" type="phone"/>
		<button style={butonStyle}>enviar</button>
		</form>
		</div>


		</div>
		)
}