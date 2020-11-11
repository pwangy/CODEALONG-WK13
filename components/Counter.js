import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <View>
      <Text style={styles.counterText}>{count}</Text>

      <Button title='TAP ME' onPress={() => setCount(count + 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  counterText: {
    fontSize: 90,
    color: "blue"
  },
});