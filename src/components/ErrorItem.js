import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

function ErrorItem() {
  const { container, errorMessage } = styles
  return (
    <View style={container}>
      <Text style={errorMessage}>Sorry something went wrong</Text>
      <Feather name="frown" size={100} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center',
  },
})
export default ErrorItem
