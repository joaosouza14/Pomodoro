import React, { useEffect, useState, useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native"
import Svg, { Circle } from "react-native-svg"
import { formatTime, iniciarContagem, resetarContagem } from "../Funcoes"

export default function Timer({
  tempoRestante,
  setTempoRestante,
  tempoRodando,
  setTempoRodando,
  tempoInicial,
}) {
  // Parametros do timer
  const refIntervalo = useRef(null)

  // Parametros do circulo de progresso animado
  const raio = 135
  const grosura = 7
  const circunferencia = 2 * Math.PI * raio
  const progressAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (tempoRodando) {
      iniciarContagem(setTempoRestante, setTempoRodando, refIntervalo)
    }

    return () => clearInterval(refIntervalo.current)
  }, [tempoRodando])

  useEffect(() => {
    const progress = tempoRestante / tempoInicial
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start()
  }, [tempoRestante, tempoInicial])

  // Função de chamada para Startar e Pausar o timer
  const onPlayPause = () => {
    setTempoRodando((prev) => !prev)
  }

  // Função de chamada para Resetar o timer
  const onResetar = () => {
    resetarContagem(
      setTempoRestante,
      setTempoRodando,
      refIntervalo,
      tempoInicial
    )
    progressAnim.setValue(1)
  }

  const strokeDashoffset = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circunferencia],
  })

  // Renderização do componente
  return (
    <TouchableOpacity onPress={onPlayPause} onLongPress={onResetar}>
      <View style={[styles.container, styles.wrapper]}>
        {/* Circulo de progresso do timer */}
        <Svg width={raio * 2 + grosura} height={raio * 2 + grosura}>
          <Circle
            cx={raio + grosura / 2}
            cy={raio + grosura / 2}
            r={raio}
            stroke="#141A31"
            strokeWidth={grosura}
            fill="none"
          />
          <AnimatedCircle
            cx={raio + grosura / 2}
            cy={raio + grosura / 2}
            r={raio}
            stroke="#72F3F7" // cor da linha de progresso
            strokeWidth={grosura}
            fill="none"
            strokeDasharray={circunferencia}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin={`${raio + grosura / 2}, ${raio + grosura / 2}`}
          />
        </Svg>

        {/* Timer */}
        <View style={styles.timerTextContainer}>
          <Text style={styles.timerText}>{formatTime(tempoRestante)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

// Componente animado do Circle
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

// Estilização
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141A31",
    width: 300,
    height: 300,
    borderRadius: 500,
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "-7px -7px 10px rgba(0, 0, 0, 0.03), 7px 7px 10px rgba(0, 0, 0, 0.4), ",
  },
  timerTextContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    fontSize: 90,
    fontWeight: "bold",
    color: "#D9E0F7",
  },
})
