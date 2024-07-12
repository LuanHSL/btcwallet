// Função para derivar uma conta a partir da carteira raiz
export function deriveAccount(rootWallet) {
  const path = process.env.DERIVATION_PATH;
  return rootWallet.derivePath(path);
}