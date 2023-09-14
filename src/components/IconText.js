import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

function IconText({ icon, value, iconColor, style }) {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={50} color={iconColor} />
      <Text style={style}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
   }
})
export default IconText
