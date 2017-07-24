import React from 'react';
import {Text, View, ScrollView,FlatList} from 'react-native';

const ItemList = (props) => {
    const {scrollViewStyle, listElementStyle} = styles;

    return (
        <ScrollView style={scrollViewStyle}>
            <FlatList
                data={props.list}
                renderItem={({item}) =>
                <View style={listElementStyle}>
                    <Text>{item.name}</Text>
                </View>}
            />
        </ScrollView>
    );
};

styles = require('../Style/Style');

export default ItemList;
