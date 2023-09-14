import { Text, View } from "react-native"

function RowText({topText, bottomText, topStyle, bottomStyle, wrapperStyle}) {
  return (
    <View style={wrapperStyle}>
        <Text style={topStyle}>{topText}</Text>
        <Text style={bottomStyle}>{bottomText}</Text>
    </View>
  )
}
export default RowText