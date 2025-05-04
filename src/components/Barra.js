import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default function Barra() {
  return (
    <View style={styles.container}>
      <View style={styles.atual}>
        <Text style={styles.texto}>pomodoro</Text>
      </View>
      <View style={styles.regular}>
        <Text style={styles.texto}>pausa curta</Text>
      </View>
      <View style={styles.regular}>
        <Text style={styles.texto}>pausa longa</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#141A31",
    padding: 3,
    borderRadius: 50,
  },
  regular: {
    padding: 10,
    backgroundColor: "#141A31",
    borderRadius: 50,
    marginLeft: 2,
    marginRight: 2,
  },
  atual: {
    padding: 10,
    backgroundColor: "#72F3F7",
    borderRadius: 50,
    marginLeft: 2,
    marginRight: 2,
  },
  texto: {
    color: "#D9E0F7",
    fontWeight: "bold",
  },
})
