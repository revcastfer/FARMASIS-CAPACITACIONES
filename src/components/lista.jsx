import Titulo from './titulo'; 

export default function Lista(props){

let nameGroup="";
for (let tit in props.lista){ nameGroup=tit };


return(
 <ul><span>{nameGroup}</span>
<Titulo objeto={props.lista[nameGroup]} />
 </ul> )
}

