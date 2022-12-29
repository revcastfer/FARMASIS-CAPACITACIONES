import React from 'react';
import Categoria from './categoria';
import data from '../data/data.js'
import styled from "styled-components";
import {useSelector} from 'react-redux';

const Titulovideos=styled.h1`
font-size: 56px;color: #29d8db
`

const Descripcionvideos=styled.div`
font-size: 20px;
color grey;
position:absolute;
right: 10%
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
	<div>
		<Titulovideos>{titulo}</Titulovideos>
		<video src={url}/>
		<Descripcionvideos>{descripcion}</Descripcionvideos>

	</div>
	</ContenedorVideos>
)
}