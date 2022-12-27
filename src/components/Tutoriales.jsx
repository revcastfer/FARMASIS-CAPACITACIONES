import React from 'react';
import Categoria from './categoria';
import data from '../data/data.js'
import styled from "styled-components";
import {useSelector} from 'react-redux';



const ContenedorVideos=styled.div`
display:flex

`

export default function Tutoriales(){
	let titulo=useSelector((state)=>state.titulo);
let descripcion=useSelector((state)=>state.descripcion);
let url=useSelector((state)=>state.url);

return	(<div>	
   <ContenedorVideos>
	<Categoria data={data} />
	<div>
		<h4>{titulo}</h4>
		<video src={url}/>
		<div>{descripcion}</div>

	</div>
	</ContenedorVideos>

</div>)
}