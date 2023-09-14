import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import { weatherType } from '../utilities/weatherType'

const Tab = createBottomTabNavigator()

export default function Tabs({ weather }) {
  const weatherCondition = weather?.list[0].weather[0].main
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor:
            weatherType[weatherCondition]?.backgroundColor ?? 'lightgrey',
        },
        headerStyle: {
          backgroundColor:
            weatherType[weatherCondition]?.backgroundColor ?? 'lightgrey',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'white',
        },
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather?.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? 'white' : 'black'}
            />
          ),
          tabBarStyle: {
            backgroundColor: '#415573'
          },
          headerStyle: {
            backgroundColor: "#415573"
          }
        }}
      >
        {() => <UpcomingWeather weatherData={weather?.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? 'white' : 'black'}
            />
          ),
          tabBarStyle: {
            backgroundColor: '#1E3545',
          },
          headerStyle: {
            backgroundColor: '#1E3545',
          },
        }}
      >
        {() => <City weatherData={weather?.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
