import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

function useFetchWeather() {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState({})

  async function fetchWeatherData() {
    if (location?.coords.latitude && location?.coords.longitude) {
      try {
        setLoading(true)
        const res = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${location?.coords.latitude}&lon=${location?.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`,
        )
        const data = await res.json()
        setWeather(data)
      } catch (error) {
        setError('Could not fetch weather')
      } finally {
        setLoading(false)
      }
    }
  }
  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      await fetchWeatherData()
    })()
  }, [!location?.coords.latitude, !location?.coords.longitude])

  return { loading, error, weather }
}
export default useFetchWeather
