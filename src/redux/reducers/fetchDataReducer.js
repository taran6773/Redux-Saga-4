import {types} from '../Types'

const initialState={
    laoding:false,
    user:{},
    error:{}
}

const fetchDataReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.SEND_REQUEST:
            return{
                ...state,
                laoding:true
            }
            case types.SEND_REQUEST_SUCCESS:
                return{
                    ...state,
                    laoding:false,
                    user:action.payload,
                    error:{}
                }
                case types.SEND_REQUEST_FAILURE:
                    return{
                        ...state,
                        laoding:false,
                        user:{},
                        error:action.error
                    }
    
        default:
            return{
                state
            }
    }
}

export default fetchDataReducer;