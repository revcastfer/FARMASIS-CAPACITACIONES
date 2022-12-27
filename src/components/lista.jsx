import Titulo from './titulo'; 

export default function Lista(props){

let nameGroup="";
for (let tit in props.lista){ nameGroup=tit };


return(
 <ul><h3>{nameGroup}</h3>
<Titulo objeto={props.lista[nameGroup]} />
 </ul> )
}

