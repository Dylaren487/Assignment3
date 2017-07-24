/**
 * Created by Admin on 7/20/2017.
 */
/**
 * Created by Admin on 7/20/2017.
 */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({press,label}) => {
    const { buttonStyle, buttonTextStyle } = styles;

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={press}
        >
            <Text style={buttonTextStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

styles = require('../Style/Style');

export default Button;