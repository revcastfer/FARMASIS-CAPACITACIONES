


const initialState= {isloguin:false, usuario:""};

export default function reducer(state= initialState,action){
	switch(action.type){

     case 'loguin':
		
			window.localStorage.setItem("isloguin",true);
			window.localStorage.setItem('usuario',action.payload);		
		return {...state, usuario:action.payload,isloguin:true,};

	  case 'logout':

		   window.localStorage.setItem("isloguin",false);
		   window.localStorage.removeItem('ususario');
	         return {...state,isloguin:false,usuario:null};

	 default:
      return state}


	}




