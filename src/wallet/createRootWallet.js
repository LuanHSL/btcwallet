import bip32 from 'bip32';

// Função para criar uma carteira raiz a partir de uma seed
export function createRootWallet(seed, network) {
  return bip32.fromSeed(seed, network);
}