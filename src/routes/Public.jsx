import {Navigate,Outlet} from 'react-router-dom';
import Private from "./Private";
import {useSelector} from "react-redux";


export default function Public(){
	let isLogin=useSelector(state=>state.isloguin);
if(isLogin){
	return <Navigate to={Private} /> }

	return(
		<div>
			<Outlet/>
		</div>
		)
}