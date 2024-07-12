// Função para derivar um novo par de chaves a partir de uma conta
export function deriveKeyPair(account, index) {
  return account.derive(index).derive(0);
}