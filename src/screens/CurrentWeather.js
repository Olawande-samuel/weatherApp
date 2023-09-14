import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

export default function CurrentWeather({ weatherData }) {
  const {
    wrapper,
    container,
    temperature,
    feels,
    highLow,
    description,
    message,
    bodyWrapper,
    highLowWrapper,
  } = styles
  const insets = useSafeAreaInsets()
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData
  const weatherCondition = weather[0].main
  return (
    <View
      style={[
        wrapper,
        {
          backgroundColor: weatherType[weatherCondition]?.backgroundColor,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{`${temp}° `}</Text>
        <Text style={feels}>Feels like {feels_like}</Text>
        <RowText
          topText={`High: ${temp_max}`}
          bottomText={`Low: ${temp_min}`}
          topStyle={highLow}
          bottomStyle={highLow}
          wrapperStyle={highLowWrapper}
        />
      </View>
      <RowText
        topText={weather[0]?.description}
        bottomText={weatherType[weatherCondition]?.message}
        topStyle={description}
        bottomStyle={message}
        wrapperStyle={bodyWrapper}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'white',
  },
  highLowWrapper: {
    flexDirection: 'row',
    gap: 16,
  },
  highLow: {
    fontSize: 20,
    color: 'white',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    color: 'white',
  },
  message: {
    fontSize: 25,
    color: 'white',
  },
})
