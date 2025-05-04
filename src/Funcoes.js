// Função de formatação do texo do tempo
export function formatTime(timeInSeconds) {
  const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0")
  const seconds = String(timeInSeconds % 60).padStart(2, "0")
  return `${minutes}:${seconds}`
}

// Função da Contagem
export function iniciarContagem(setTimeLeft, setIsRunning, intervalRef) {
  intervalRef.current = setInterval(() => {
    setTimeLeft((prevTime) => {
      if (prevTime <= 1) {
        clearInterval(intervalRef.current)
        setIsRunning(false)
        return 0
      }
      return prevTime - 1
    })
  }, 1000)
}

// Função de Resetar
export function resetarContagem(
  setTimeLeft,
  setIsRunning,
  intervalRef,
  tempoInicial = 25 * 60
) {
  clearInterval(intervalRef.current)
  setTimeLeft(tempoInicial)
  setIsRunning(false)
}
