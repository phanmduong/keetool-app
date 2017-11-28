import * as types from '../../constants/actionTypes';

export function getThemeDark() {
    return (dispatch) => {
        dispatch({
            type: types.THEME_DARK,
            themeColor: '#F23533'
        });
    }
}

export function getThemeLight() {
    return (dispatch) => {
        dispatch({
            type: types.THEME_LIGHT,

        });
    }
}

