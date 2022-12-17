import React from 'react';
import Select from 'react-select';



const demo=[
	{label:"farmacia1",value:"farmacia1"},
	{label:"farmacia2",value:"farmacia2"},
	{label:"farmacia3",value:"farmacia3"},
	{label:"farmacia4",value:"farmacia4"},
	{label:"farmacia5",value:"farmacia5"}
	];





	 

export default function ComboSearch(){

	let [selection,setselection]=React.useState("");
	let handleSelectChange=(e)=>{
       setselection(e.value);console.log(e.value)};

return(<div>
	<Select  defaultValue={{label:"---seleccionar---", value:"null"}}
	options ={demo} 
	 onChange ={handleSelectChange} />



</div>


	)

}