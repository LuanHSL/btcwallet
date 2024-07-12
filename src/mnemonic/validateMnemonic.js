import { generateMnemonic } from './generateMnemonic.js'
import { readMnemonicPhrase } from './readMnemonicPhrase.js'

// Função para verificar a frase mnemônica digitada pelo o usuário
export async function validateMnemonic() {
  const correctMnemonic = generateMnemonic()
  console.log("Sua frase:", correctMnemonic)

  let userInput = ""
  let isValid = false

  while (!isValid) {
    userInput = await readMnemonicPhrase()

    if (userInput === correctMnemonic) {
      isValid = true
      console.log("Frase digitada corretamente!")
    } else {
      console.log("Frase incorreta. Tente novamente.")
    }
  }

  return correctMnemonic
}