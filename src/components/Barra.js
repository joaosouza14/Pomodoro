import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default function Barra() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.texto}>pomodoro</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.texto}>pausa curta</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.texto}>pausa longa</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 3,
    borderRadius: 50,
  },
  subContainer: {
    padding: 10,
    backgroundColor: "#348974",
    borderRadius: 50,
    marginLeft: 2,
    marginRight: 2,
  },
  texto: {
    fontWeight: "bold",
  },
})
