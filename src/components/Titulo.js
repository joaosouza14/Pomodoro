import React from "react"
import { Text } from "react-native"
import { StyleSheet } from "react-native"

export default function Titulo() {
  return <Text style={style.titulo}>pomodoro</Text>
}

const style = StyleSheet.create({
  titulo: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
})
