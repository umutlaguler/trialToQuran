import { combineReducers } from "redux";
import vecizeReducer from '../reducer/vecizeReducer';
import photoReducer from '../reducer/photoReducer';


export default combineReducers({
    vecizeReducer,
    photoReducer

})