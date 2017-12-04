import changeThemeReducer from '../modules/home/changThemeReducer';
import homeReducer from '../modules/home/homeReducer';
import bookReducer from '../modules/cart/bookReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    theme: changeThemeReducer,
    home: homeReducer,
    book : bookReducer
});
export default rootReducer;