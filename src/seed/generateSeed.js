import bip39 from 'bip39';

// Função para gerar uma nova seed a partir de uma frase mnemônica
export function generateSeed(mnemonic) {
  return bip39.mnemonicToSeedSync(mnemonic)
}