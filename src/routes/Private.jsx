import {Navigate,Outlet} from 'react-router-dom';
import Public from "./Public";
import {useSelector} from 'react-redux';


export default function Private(){
	let isLogin=useSelector(state=>state.isloguin);
if(!isLogin){
	return <Navigate to={Public} /> }

	return(
		<div>
			<Outlet/>
		</div>
		)
}