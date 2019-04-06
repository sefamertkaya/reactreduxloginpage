
import {CONTROL_USER} from "./../actions/controlUser"

export default function userReducer(state, action) {

    switch (action.type) {

        case CONTROL_USER :
            return action.payload.control;

        default:
            return false;
    }
    
    
    
}