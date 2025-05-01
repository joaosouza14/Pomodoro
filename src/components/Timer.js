import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Timer() {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>17:59</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 300,
    height: 300,
    borderRadius: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    color: "#000",
    fontSize: 100,
    fontWeight: "bold",
  },
})
