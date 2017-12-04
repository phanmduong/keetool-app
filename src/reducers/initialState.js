import {StyleSheet} from 'react-native';
import * as colorDark from '../styles/colorDark';
import * as style from '../styles/generalStyle';

let color = colorDark;
export default {
    home: {
        isLoading: false,
        data: [],
    },
    theme: {
        theme: false,
        colors: [color.colorGradient0, color.colorGradient1, color.colorGradient2],
        general:
            StyleSheet.create(style.style)

    },
    data: {
        data: [],
        staff: [],
        schedules: [],
        roles: [],
        study_sessions: [],
        registers: [],
        gens:[],
        courses: [],
    }

}
