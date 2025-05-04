import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Titulo from "./src/components/Titulo"
import Barra from "./src/components/Barra"
import Timer from "./src/components/Timer"
import Configurar from "./src/components/Configurar"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Titulo />
      </View>
      <View style={styles.containerBarra}>
        <Barra />
      </View>
      <View style={styles.containerTimer}>
        <Timer />
      </View>
      <View style={styles.containerConfigurar}>
        <Configurar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2240",
    alignItems: "center",
  },
  containerTitulo: {
    flex: 0.5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerBarra: {
    flex: 1,
    justifyContent: "flex-start",
  },
  containerTimer: {
    flex: 2,
    justifyContent: "flex-start",
  },
  containerConfigurar: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
})
