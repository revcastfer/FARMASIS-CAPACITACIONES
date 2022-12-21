


const initialState={isloguin:false, usuario:""};

export default function reducer(state= initialState,action){
	switch(action.type){

     case 'loguin':
		
			window.localStorage.setItem("isloguin",true);
			window.localStorage.setItem('usuario',action.payload);		
		return {...state,isloguin:window.localStorage.getItem("isloguin"),usuario:window.localStorage.getItem("usuario")};

	  case 'logout':

		   window.localStorage.setItem("isloguin",false);
		   window.localStorage.removeItem('ususario');
	         return {...state,isloguin:window.localStorage.getItem("isloguin"),usuario:window.localStorage.getItem("usuario")};

	 default:
      return state ;}


	}




