import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux';
import {logout} from './actions.js';
import {Outlet} from 'react-router-dom'
import {Navigate} from 'react-router-dom'


export default function Home(){


let dispatch=useDispatch();
let user=useSelector(state=>state.usuario);
let isLogin=useSelector(state=>state.isloguin);
    if(isLogin==="false"){
	return <Navigate to="/" /> }

	return (
		<div>
		<div>Referidos </div>
		<div>Video-tutoriales</div>
		<div >Bienvenido: {user}</div>
		<div ><span onClick={()=>dispatch(logout())} >logout</span></div>
		

		<Outlet/>
		</div>

		)
}
