import {useDispatch} from 'react-redux';
import {selectVideo} from './actions';
import styled from "styled-components";
import Media from 'react-media';


//videos debajo titulo a menos de 900px
const VideoDiv=styled.div`
display:block;
width: 100%;
height:350px;
@media (min-width:900px){
	display:none;
}

`
//menu a mas de 900px
const MenuStyle=styled.li`
display:flex;
font-size:18px;
color:grey;
cursor: pointer;
@media screen and (max-width:900px){
	display:none}

 `
//menu a menos de 900px
const MenuStyle2=styled.li`
display:flex;
font-size:30px;
color:grey;
cursor: default;
@media screen and (min-width:900px){
	display:none}

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

function handleClick(name){dispatch(selectVideo(search(name)));
let collection=document.getElementsByClassName(null);

for (let i = 0; i < collection.length; i++) {
            collection[i].style.color="grey";
            collection[i].style.fontWeight='normal'};

 let selected=document.getElementById(name).style;
 selected.color="orange";
 selected.fontWeight='bold' }

	return(
		<div>
		{  nameObjs.map(  name=><div>

			<MenuStyle id={name} className="null" onClick={()=>handleClick(name)} > {name} </MenuStyle>
			<MenuStyle2 id={name} className="null" > {name} </MenuStyle2>
			<VideoDiv> <video src={search(name).url}/></VideoDiv> 

			</div>  )  }
	   </div>)

}