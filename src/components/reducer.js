
let localUser=localStorage.getItem('isloguin');
let localIsConected=localStorage.getItem('usuario');

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
			state.isloguin=localIsConected ;
			state.localUser=localUser; 
		return state };break;

	case 'logout':
		if(initialState.isloguin){
		   window.localStorage.setItem("isloguin",false);
		   window.localStorage.removeItem('ususario')
	         state.isloguin=localIsConected ;
			 state.localUser=localUser; 
		return state };break;

	 default:
      return state ;


	}




}