import bitcoin from 'bitcoinjs-lib'

// Função para gerar um endereço Bitcoin a partir de uma chave pública
export function generateAddress(publicKey, network) {
  return bitcoin.payments.p2pkh({
    pubkey: publicKey,
    network,
  }).address
}