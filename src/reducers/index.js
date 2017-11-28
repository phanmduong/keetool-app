import changeThemeReducer from '../modules/home/changThemeReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    theme: changeThemeReducer,
});
export default rootReducer;