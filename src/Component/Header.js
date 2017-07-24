import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { headerTextStyle, headerViewStyle } = styles;

    return (
        <View style={headerViewStyle}>
            <Text style={headerTextStyle}>{props.headerText}</Text>
        </View>
    );
};

styles = require('../Style/Style');

export default Header;
