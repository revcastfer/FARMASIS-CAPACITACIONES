export default function Titulo(props){
let nameObjs=[];
for (let obj in props.objeto){nameObjs.push(props.objeto[obj].titulo)};


	return(
		<ul>
		{nameObjs.map(name=><li>{name}</li>)}
	   </ul>)

}