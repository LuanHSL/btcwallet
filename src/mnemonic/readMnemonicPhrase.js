import * as readline from 'readline'; 

// Função para que o usuário digite a frase mnemônica
export async function readMnemonicPhrase() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return await new Promise(resolve => {
    rl.question('Digita a sua frase: ', (answer) => {
      rl.close();
      resolve(answer); 
    });
  });
}