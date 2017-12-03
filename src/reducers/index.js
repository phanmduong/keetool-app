import changeThemeReducer from '../modules/home/changThemeReducer';
import homeReducer from '../modules/home/homeReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    theme: changeThemeReducer,
    home: homeReducer
});
export default rootReducer;