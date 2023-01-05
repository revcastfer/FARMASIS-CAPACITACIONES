import React from 'react';
import Categoria from './categoria';
import data from '../data/data.js'
import styled from "styled-components";
import {useSelector} from 'react-redux';
import fondoHex from './imgs/fondoHexagonos.jpg'

const Titulovideos=styled.h1`
font-size: 50px;color: #f5b041;
left:0px
`;


let Reproductor=styled.div`
@media (max-width:900px){
	display:none;}`



const Descripcionvideos=styled.div`
font-size: 20px;
color grey;
position:absolute;
right: 5%
`

const ContenedorVideos=styled.div`
display:flex;
background-image:url(${fondoHex});
background-size:cover;
@media (max-width:900px){
	background-size:contain;
	}


`

export default function Tutoriales(){
	let titulo=useSelector((state)=>state.titulo);
let descripcion=useSelector((state)=>state.descripcion);
let url=useSelector((state)=>state.url);

return	(	
   <ContenedorVideos>
	<Categoria data={data} />
	<Reproductor>
		<Titulovideos>{titulo}</Titulovideos>
		<video src={url}/>
		<Descripcionvideos>{descripcion}</Descripcionvideos>

	</Reproductor>
	</ContenedorVideos>
)
}