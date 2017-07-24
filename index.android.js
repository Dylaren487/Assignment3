/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Picker,
    Image
} from 'react-native';
import Header from './src/Component/Header';

export default class Assignment3 extends Component {

    state = {
        currentTextInput: "Chiangmai",
        tempUnit: 'c',
        day: [],
        background: 'http://www.weatherwizkids.com/wp-content/uploads/2015/02/downsampled-weather-bg.jpg',
    };

    componentWillMount() {
        this.handleFetch();
    }

    handleFetch() {
        var appid = '560588cff47ae8a8df0af3e66a968695';
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.currentTextInput + '&mode=json&appid=' + appid)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    day: [
                        {
                            'weather': responseJSON.list[0].weather[0].main,
                            'temp': responseJSON.list[0].main.temp,
                            'icon': 'openweathermap.org/img/w/' + responseJSON.list[0].weather[0].icon + '.png',
                            'dateTime': responseJSON.list[0].dt
                        }, {
                            'weather': responseJSON.list[8].weather[0].main,
                            'temp': responseJSON.list[8].main.temp,
                            'icon': 'openweathermap.org/img/w/' + responseJSON.list[8].weather[0].icon + '.png',
                            'dateTime': responseJSON.list[8].dt
                        }, {
                            'weather': responseJSON.list[16].weather[0].main,
                            'temp': responseJSON.list[16].main.temp,
                            'icon': 'openweathermap.org/img/w/' + responseJSON.list[16].weather[0].icon + '.png',
                            'dateTime': responseJSON.list[16].dt
                        }, {
                            'weather': responseJSON.list[24].weather[0].main,
                            'temp': responseJSON.list[24].main.temp,
                            'icon': 'openweathermap.org/img/w/' + responseJSON.list[24].weather[0].icon + '.png',
                            'dateTime': responseJSON.list[24].dt
                        }, {
                            'weather': responseJSON.list[32].weather[0].main,
                            'temp': responseJSON.list[32].main.temp,
                            'icon': 'openweathermap.org/img/w/' + responseJSON.list[32].weather[0].icon + '.png',
                            'dateTime': responseJSON.list[32].dt
                        }
                    ]
                });
                console.log(this.state.day)
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    handleTextInput(event) {
        var name = event.nativeEvent.text;
        this.setState({
                currentTextInput: name,
            },
        );
        this.handleFetch();
    }

    renderTempBlock() {
        const {weatherOutputTempDay, weatherOutputTempText, weatherOutputTempImage} = styles
        return this.state.day.map(day =>
            <View key={day.dateTime} style={weatherOutputTempDay}>
                <Text style={weatherOutputTempText}>{this.timeStampToMonth(day.dateTime)}</Text>
                <Text style={weatherOutputTempText}>{this.timeStampToDay(day.dateTime)}</Text>
                <Text style={weatherOutputTempText}>{day.weather}</Text>
                <Image source={{uri: 'http://'+day.icon , isStatic: true}}
                       style={weatherOutputTempImage} resizeMode='cover'/>
                <Text style={weatherOutputTempText}>{this.displayTemp(day.temp)}</Text>
            </View>
        )
    }

    timeStampToDay(timestamp) {
        var t = new Date(timestamp * 1000);
        var formatted = moment(t).format("DD");
        return formatted;
    }

    timeStampToMonth(timestamp) {
        var t = new Date(timestamp * 1000);
        var formatted = moment(t).format("MMMM");
        return formatted;
    }

    displayTemp(temp) {
        if (this.state.tempUnit == 'c') {
            return this.roundToOnePrecision(this.kelvinToCelcius(temp));
        } else if (this.state.tempUnit == 'f') {
            return this.roundToOnePrecision(this.kelvinToFahrenheit(temp));
        } else {
            return this.roundToOnePrecision(temp);
        }
    }

    kelvinToCelcius(temp) {
        return temp - 273.15;
    }

    kelvinToFahrenheit(temp) {
        return ((temp * 9) / 5) - 459.67
    }

    roundToOnePrecision(num) {
        return (Math.round(num * 10)) / 10
    }

    render() {
        const {controllerStyle, textInputStyle, pickerStyle, weatherOutputStyle, weatherOutputHeadTextStyle, weatherOutputTempBox,backgroundImage} = styles;

        return (
            <View style={{flex: 1}}>
                <Image source={{uri: this.state.background}} style={backgroundImage}>
                <ScrollView>
                    <Header headerText={'Weather Forecast'}/>
                    <View style={controllerStyle}>
                        <TextInput style={textInputStyle} onSubmitEditing={(event) => this.handleTextInput(event)} placeholder={"City name"}/>
                        <View style={pickerStyle}>
                            <Picker
                                selectedValue={this.state.tempUnit}
                                onValueChange={(itemValue, itemIndex) => this.setState({tempUnit: itemValue})}>
                                <Picker.Item label="Celsius" value="c"/>
                                <Picker.Item label="Fahrenheit" value="f"/>
                                <Picker.Item label="Kelvin" value="k"/>
                            </Picker>
                        </View>
                    </View>
                    <View style={weatherOutputStyle}>
                        <View>
                            <Text style={weatherOutputHeadTextStyle}>{this.state.currentTextInput}</Text>
                        </View>
                        <View style={weatherOutputTempBox}>
                            {this.renderTempBlock()}
                        </View>
                    </View>
                </ScrollView>
                    <View style={[controllerStyle,{paddingTop: 10, borderTopWidth:1}]}>
                        <Text style={{flex: 1.5,paddingTop: 12,}}>Background image: </Text>
                        <View style={pickerStyle}>
                        <Picker
                            selectedValue={this.state.background}
                            onValueChange={(itemValue, itemIndex) => this.setState({background: itemValue})}>
                            <Picker.Item label="Cloud" value="http://www.weatherwizkids.com/wp-content/uploads/2015/02/downsampled-weather-bg.jpg"/>
                            <Picker.Item label="Rain" value="http://all4desktop.com/data_images/original/4249074-rain.jpg"/>
                            <Picker.Item label="Windy" value="https://i2.wp.com/pdl.warnerbros.com/wbmovies/intothestorm/tumblr/img/bgTumblr.jpg?w=960"/>
                        </Picker>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

var moment = require('moment');

styles = require('./src/Style/Style');

AppRegistry.registerComponent('Assignment3', () => Assignment3);
