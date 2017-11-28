import React from 'react';
import {
    AsyncStorage,
} from 'react-native';export function setTheme() {
    return async function () {
        try {
            await AsyncStorage.setItem('@ColorDark',
                `
                export const none = 'transparent';
                export const textColor = 'rgb(255, 255, 255)';
                export const colorGradient0 = '#7D9CEF';
                export const colorGradient1 = '#C86AD9';
                export const colorGradient2 = '#333760';
                export const textColorNotActive = 'rgba(255, 255, 255, 0.2)';
                export const shadowColor = 'rgba(0,0,0,0.5)';
                export const star = '#ffff05';
                export const blueDashboard = '#4697E8';
                export const buttonPlay = 'rgba(155, 141, 171, 0.4)';
                export const buttonNext = 'rgba(255, 255, 255, 0.4)';
                `
            );
            await AsyncStorage.setItem('@ColorLight',
                `
                export const none = 'transparent';
                export const textColor = 'rgb(255, 255, 255)';
                export const colorGradient0 = '#7D9CEF';
                export const colorGradient1 = '#C86AD9';
                export const colorGradient2 = '#333760';
                export const textColorNotActive = 'rgba(255, 255, 255, 0.2)';
                export const shadowColor = 'rgba(0,0,0,0.5)';
                export const star = '#ffff05';
                export const blueDashboard = '#4697E8';
                export const buttonPlay = 'rgba(155, 141, 171, 0.4)';
                export const buttonNext = 'rgba(255, 255, 255, 0.4)';
                `
            );
        } catch (error) {
        }
    }

}

export function getTheme() {
    return async function () {
        try {
            const dark = await AsyncStorage.getItem('@ColorDark');
            console.log(dark);
            const light = await AsyncStorage.getItem('@ColorLight');
            console.log(light);

        }
        catch (error) {
        };
    }
}

