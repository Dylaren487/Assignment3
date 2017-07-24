/**
 * Created by Admin on 7/21/2017.
 */
'use strict';

var React = require('react-native');

var {StyleSheet} = React;

module.exports = StyleSheet.create({
    controllerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    textInputStyle: {
        flex: 5,
    },
    headerViewStyle: {
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    },
    headerTextStyle: {
        fontSize: 20,
        fontWeight: '600'
    },
    listElementStyle:{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 2,
        backgroundColor: '#f8f8fa',
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e5e6eb',
        marginLeft: 5,
        marginRight: 5,
        flex: 1
    },
    buttonTextStyle:{
        alignSelf:'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle:{
        alignSelf: 'stretch',
        backgroundColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        flex: 1
    },
    pickerStyle:{
        alignSelf: 'stretch',
        backgroundColor: '#dddddd',
        borderRadius: 5,
        borderColor: '#999999',
        borderWidth: 0.5,
        marginLeft: 5,
        marginRight: 5,
        flex: 2.5
    },
    weatherOutputStyle:{
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0,height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 10
    },
    weatherOutputHeadTextStyle:{
        alignSelf:'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    weatherOutputTempBox:{
        flexDirection: 'row'
    },
    weatherOutputTempDay:{
        flex: 1
    },
    weatherOutputTempText:{
        alignSelf:'center',
    },
    weatherOutputTempImage:{
        alignSelf:'center',
        height: 50,
        width: 50
    },
    backgroundImage:{
        height: null,
        flex: 1,
        width: null
    }
});