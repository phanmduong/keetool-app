import {StyleSheet} from 'react-native';
import * as colorDark from '../styles/colorDark';
import * as style from '../styles/generalStyle';

let color = colorDark;
export default {
    book:{
        isLoading: false,
        books: [],
        isLoadingOrder : false,
        status : 0,
    },
    home: {
        isLoading: false,
        data: [],
    },
    theme: {
        theme: false,
        colorText: '#FFFFFF',
        colors: [color.colorGradient0, color.colorGradient1, color.colorGradient2],
        colorsDrawer: [color.colorGradient0, color.colorGradient1],
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
        classes: [],
        classInfo:{},
        call_history: [],
        bases: [],
        moneyCollect: [],
        tele_calls: [],
        marketing_campaigns: [],
        summary_marketing_campaign: [],
        paidList: [],
        rooms: [],
        subscribers_list: [],
        subscriber: [],
        campaigns:[],
        email_templates:[],
        email_forms:[],
        shift_sessions: [],
        shift_register: [],
    }

}
