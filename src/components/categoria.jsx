
import Lista from './lista';


export default function Categoria(props){
let groups=[];
for (let grupos in props.data){groups.push(props.data[grupos])};


return(

<div>{ groups.map(lista=><Lista lista={lista}/> )} </div>

	)


}