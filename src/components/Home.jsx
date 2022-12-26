import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux';
import {logout} from './actions.js';
import {Outlet} from 'react-router-dom'
import {Navigate} from 'react-router-dom'


export default function Home(){


let dispatch=useDispatch();
let isLogin=useSelector(state=>state.isloguin);
    if(isLogin===false){
	return <Navigate to="/" /> }

	return (
		<div>
		<div>navbar</div>
		<label onClick={()=>dispatch(logout())} >logout</label>
		

		<Outlet/>
		</div>

		)
}
