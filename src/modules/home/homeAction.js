import * as types from '../../constants/actionTypes';

export function setThemeLight() {
    return (dispatch) => {
        dispatch({
            type: types.THEME_LIGHT
        });

    }
}

export function setThemeDark() {
    return (dispatch) => {
        dispatch({
            type: types.THEME_DARK
        });

    }
}
