
let localIsLogin=window.localStorage.getItem("isloguin");
let localUser=window.localStorage.getItem("usuario");

const initialState= {isloguin:localIsLogin,usuario:localUser,titulo:"bienvenido a farmasis",
descripcion:"bienvenido a farmasis bienvenido a farmasis",url:""}; 

export default function reducer(state= initialState,action){
	switch(action.type){

     case 'loguin':
		
			window.localStorage.setItem("isloguin",true);
			window.localStorage.setItem('usuario',action.payload);		
		return {...state, usuario:action.payload,isloguin:true,};

	  case 'logout':

		   window.localStorage.setItem("isloguin",false);
		   window.localStorage.removeItem('usuario');
	         return {...state,isloguin:false,usuario:null};

	   case 'select':
	   	    return{...state,titulo:action.payload.titulo,
	   	          descripcion:action.payload.descripcion,
	   	                          url:action.payload.url}



	 default:
      return state}


	}




