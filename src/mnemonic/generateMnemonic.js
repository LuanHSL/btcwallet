import bip39 from 'bip39';

// Função para gerar uma nova frase mnemônica
export function generateMnemonic() {
  return bip39.generateMnemonic();
}