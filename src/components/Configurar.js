import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import engrenagem from "../../public/engrenagem.png"
import musica from "../../public/musica.png"

export default function Configurar() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={engrenagem} style={styles.imagem} />
      </View>
      <View>
        <Image source={musica} style={styles.imagem} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000",
    padding: 3,
  },
  imagem: {
    width: 50,
    height: 50,
    margin: 10,
  },
})
