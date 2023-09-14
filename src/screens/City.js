import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import IconText from '../components/IconText'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import moment from 'moment'

function City({ weatherData }) {
  const {
    container,
    imageBackground,
    cityText,
    cityName,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles
  const insets = useSafeAreaInsets()
  const { name, country, population, sunrise, sunset } = weatherData
  const formatter = new Intl.NumberFormat('en-US');
  return (
    <View
      style={[
        container,
        {
          // paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
      ]}
    >
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageBackground}
      >
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            style={populationText}
            value={`Population ${formatter.format(population)}`}
            icon="users"
            iconColor="white"
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            style={riseSetText}
            icon="sunrise"
            value={moment(sunrise).format('h:mm:ss a')}
            iconColor="white"
          />
          <IconText
            style={riseSetText}
            icon="sunset"
            value={moment(sunset).format('h:mm:ss a')}
            iconColor="white"
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  imageBackground: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white',
    fontWeight: 'bold',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default City
