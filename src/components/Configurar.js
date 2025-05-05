import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native"
import engrenagem from "../../public/engrenagem.png"

export default function Configurar({ setTempos }) {
  const [modalVisivelConfig, setmodalVisivelConfig] = useState(false)
  const [numeroPomodoro, setNumeroPomodoro] = useState("25")
  const [numeroPausaCurta, setNumeroPausaCurta] = useState("5")
  const [numeroPausaLonga, setNumeroPausaLonga] = useState("15")

  const onFechar = () => {
    const novosTempos = {
      pomodoro: parseInt(numeroPomodoro) * 60,
      curta: parseInt(numeroPausaCurta) * 60,
      longa: parseInt(numeroPausaLonga) * 60,
    }
    setTempos(novosTempos)
    setmodalVisivelConfig(false)
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivelConfig}
        onRequestClose={() => setmodalVisivelConfig(false)}
      >
        <View style={styles.frame}>
          <View style={styles.containerModalConfig}>
            <View style={styles.containerInputs}>
              <View style={styles.cadaInput}>
                <Text style={styles.texto}>Pomodoro</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setNumeroPomodoro}
                  value={numeroPomodoro}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.cadaInput}>
                <Text style={styles.texto}>Pausa Curta</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setNumeroPausaCurta}
                  value={numeroPausaCurta}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.cadaInput}>
                <Text style={styles.texto}>Pausa Longa</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setNumeroPausaLonga}
                  value={numeroPausaLonga}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <TouchableOpacity style={styles.botaoFechar} onPress={onFechar}>
              <Text style={styles.texto}>Salvar & Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setmodalVisivelConfig(true)}>
        <Image source={engrenagem} style={styles.imagem} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerModalConfig: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerInputs: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  cadaInput: {
    alignItems: "center",
    margin: 10,
  },
  input: {
    height: 40,
    width: 70,
    margin: 12,
    borderWidth: 0.1,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "rgba(202, 202, 202, 0.57)",
  },
  botaoFechar: {
    backgroundColor: "#72F3F7",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 3,
  },
  imagem: {
    width: 50,
    height: 50,
    margin: 10,
  },
  texto: {
    color: "#141A31",
    fontSize: 15,
    fontWeight: "bold",
  },
})
