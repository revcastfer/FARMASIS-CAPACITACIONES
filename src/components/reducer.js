
let localUser=localStorage.getItem('usuario');
let localIsConected=localStorage.getItem('isloguin');

const initialState={isloguin:localIsConected, usuario:localUser};

export default function reducer(state= initialState,action){
	switch(action.type){

     case 'loguin':
		if(!initialState.isloguin){
			window.localStorage.setItem("isloguin",true);
			window.localStorage.setItem('usuario',action.payload)}
		else{
			window.localStorage.setItem("isloguin",false);
			window.localStorage.removeItem('ususario');
		return {...state,isloguin:localIsConected,usuario:localUser}}break;

	  case 'logout':
		if(initialState.isloguin){
		   window.localStorage.setItem("isloguin",false);
		   window.localStorage.removeItem('ususario')
	         return {...state,isloguin:localIsConected,usuario:localUser}};break;

	 default:
      return state ;


	}




}