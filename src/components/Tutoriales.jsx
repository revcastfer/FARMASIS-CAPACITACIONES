import React from 'react';
import Categoria from './categoria';
import data from '../data/data.js'
import styled from "styled-components";
import {useSelector} from 'react-redux';

const Titulovideos=styled.h1`
font-size: 56px;color: #f5b041
`;


let reproductor=styled.div`
@media (min-width:720px){
	background-color:#F6FDFB;}`



const Descripcionvideos=styled.div`
font-size: 20px;
color grey;
position:absolute;
right: 5%
`

const ContenedorVideos=styled.div`
display:flex

`

export default function Tutoriales(){
	let titulo=useSelector((state)=>state.titulo);
let descripcion=useSelector((state)=>state.descripcion);
let url=useSelector((state)=>state.url);

return	(	
   <ContenedorVideos>
	<Categoria data={data} />
	<reproductor>
		<Titulovideos>{titulo}</Titulovideos>
		<video src={url}/>
		<Descripcionvideos>{descripcion}</Descripcionvideos>

	</reproductor>
	</ContenedorVideos>
)
}