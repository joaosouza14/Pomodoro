import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export default function Barra({
  setTempoInicial,
  setTempoRestante,
  setTempoRodando,
}) {
  const [selecionado, setSelecionado] = useState("pomodoro")

  const botoes = [
    { id: "pomodoro", label: "Pomodoro", tempo: 25 * 60 },
    { id: "curta", label: "Pausa Curta", tempo: 5 * 60 },
    { id: "longa", label: "Pausa Longa", tempo: 15 * 60 },
  ]

  const handleSelecionar = (id, tempo) => {
    setSelecionado(id)
    setTempoInicial(tempo)
    setTempoRestante(tempo)
    setTempoRodando(false) // pausa se estiver rodando
  }

  return (
    <View style={styles.container}>
      {botoes.map((botao) => {
        const ativo = selecionado === botao.id
        return (
          <TouchableOpacity
            key={botao.id}
            style={ativo ? styles.atual : styles.regular}
            onPress={() => handleSelecionar(botao.id, botao.tempo)}
          >
            <Text style={ativo ? styles.textoAtual : styles.texto}>
              {botao.label}
            </Text>
          </TouchableOpacity>
        )
      })}
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
    fontSize: 15,
    fontWeight: "bold",
  },
  textoAtual: {
    color: "#1E2240",
    fontSize: 15,
    fontWeight: "bold",
  },
})
