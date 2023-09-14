import 'intl'
import 'intl/locale-data/jsonp/en'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Tabs from './src/components/Tabs'
import useFetchWeather from './src/hooks/useFetchWeather'
import ErrorItem from './src/components/ErrorItem'

function App() {
  const { loading, error, weather } = useFetchWeather()
  if (weather && weather?.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {error ? (
        <ErrorItem />
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default App
