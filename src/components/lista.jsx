import Titulo from './titulo'; 

export default function Lista(props){

let objetos=[];
for (let tit in props.lista){ objetos.push(tit) };

console.log(objetos);
return(
 <ul>
   {props.lista.objetos.map(obj=> <Titulo objeto={obj} />) }  
 </ul> )

}