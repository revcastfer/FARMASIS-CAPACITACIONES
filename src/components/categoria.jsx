
import Lista from './lista';




export default function Categoria(props){


return(

<div>{props.data.map( grupo=><Lista lista={grupo} /> )}</div>

	)


}