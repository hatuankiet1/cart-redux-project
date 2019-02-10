import *  as Message from './../Constants/Message';
import *  as Types from './../Constants/ActionType';


var initialState = Message.MSG_WELCOME;

const message = (state = initialState,action)=>{
    
    switch(action.type)
    {   
        case Types.CHANGE_MESSAGE:
            return action.message;
        default :
            return state;
    }
    
}

export default message;