import {StyleSheet} from 'react-native';
import * as colorDark from '../styles/colorDark';
import * as styles from '../styles/generalStyle'
let color =  colorDark ;
export default {
    home: {
        isLoading: false,
        data: [],
    },
    theme: {
        theme : true,
        colors : [color.colorGradient0, color.colorGradient1, color.colorGradient2],
        general :
            StyleSheet.create(styles.styles)
    },

    }
