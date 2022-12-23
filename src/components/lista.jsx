import Titulo from './titulo'; 

export default function Lista(props){

let objetos=[];
for (let tit in props.lista){ objetos.push(props.lista[tit]) };
console.log(objetos);

return(
 <ul>
   {objetos.map(obj=><Titulo objeto={obj} />)}  
 </ul> )

}