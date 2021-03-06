import {Dimensions, Platform} from 'react-native';
export let wid = Dimensions.get('window').width;
export let hei = Dimensions.get('window').height;
export const iconBig = 20;
export const iconGiant = 25;
export const title = 14;
export const titleNormal = 13;
export const titleSmall = 10;
export const titleHeader = 30;
export const titleBig = 18;
export const titleGiant = 21;
export const defaultText = 14;
export const HEIGHT_FULL_WIDTH_IMAGE = hei / 3 + 20;

export const PARALLAX_HEADER_HEIGHT = 250;
export const PARALLAX_HEADER_HEIGHT_USER = 150;
export const STICKY_HEADER_HEIGHT = Platform.OS === 'ios' ? 60 : 40 ;