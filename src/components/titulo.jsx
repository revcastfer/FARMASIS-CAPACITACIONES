import {useDispatch} from 'react-redux';
import {selectVideo} from './actions';
import styled from "styled-components";



export default function Titulo(props){

let dispatch=useDispatch();	
let nameObjs=[];
for (let obj in props.objeto){nameObjs.push(props.objeto[obj].titulo)};

let search=(titulo)=>{
for (let obj in props.objeto){if(props.objeto[obj].titulo===titulo ){
return props.objeto[obj]}

}

}




	return(
		<div>
		{nameObjs.map(name=><div id={name} onClick={()=>dispatch(selectVideo(search(name))) } > {name} </div>)}
	   </div>)

}