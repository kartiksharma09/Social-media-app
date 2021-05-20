import {combineReducers} from 'redux';
import a from './alert';
import auth from './auth';


export default combineReducers({
    a,
    auth
});