import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Titulo from "./src/components/Titulo"
import Barra from "./src/components/Barra"
import Timer from "./src/components/Timer"
import Configurar from "./src/components/Configurar"

export default function App() {
  const [tempoInicial, setTempoInicial] = useState(25 * 60)
  const [tempoRestante, setTempoRestante] = useState(25 * 60)
  const [tempoRodando, setTempoRodando] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Titulo />
      </View>
      <View style={styles.containerBarra}>
        <Barra
          setTempoInicial={setTempoInicial}
          setTempoRestante={setTempoRestante}
          setTempoRodando={setTempoRodando}
        />
      </View>
      <View style={styles.containerTimer}>
        <Timer
          tempoInicial={tempoInicial}
          tempoRestante={tempoRestante}
          setTempoRestante={setTempoRestante}
          tempoRodando={tempoRodando}
          setTempoRodando={setTempoRodando}
        />
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
