import {useDispatch} from 'react-redux';
import {selectVideo} from './actions';
import styled from "styled-components";
import Media from 'react-media';


const VideoDiv=styled.div`
display:block;
width: 100%;
height:350px;
@media (min-width:900px){
	display:none;}

`
const MenuStyle=styled.li`
font-size: 30px;
color:grey;
@media (min-width:900px){
	font-size:18px;}
`


export default function Titulo(props){

let dispatch=useDispatch();	
let nameObjs=[];
for (let obj in props.objeto){nameObjs.push(props.objeto[obj].titulo)};

let search=(titulo)=>{
for (let obj in props.objeto){if(props.objeto[obj].titulo===titulo ){
return props.objeto[obj]}

}

}


let handleClick=(name)=>{ dispatch(selectVideo(search(name))) }

	return(
		<div>
		{  nameObjs.map(  name=><div>

			<MenuStyle id={name} onClick={()=>handleClick(name)}>  {name} </MenuStyle>
			<VideoDiv> <video src={search(name).url}/></VideoDiv> 

			</div>  )  }
	   </div>)

}