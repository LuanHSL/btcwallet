## Bitcoin Wallet Project

This project implements a simple Bitcoin wallet using Node.js, developed based on the Blockchain Developer with Solidity Bootcamp by DIO in partnership with Binance. The base code for this implementation was taken from [this repository](https://github.com/digitalinnovationone/formacao-blockchain-dio/tree/main/Modulo%2001%20Fundamentos%20da%20Blockchain/Curso%2001%20Introducao%20a%20Blockchain/Criando%20e%20utilizando%20a%20sua%20carteira%20de%20criptomoedas).

### Implemented Improvements

In addition to the course's basic structure, this project includes the following improvements:

- **Code Organization:** The code has been divided into separate files for better organization, readability, and maintenance.
- **Environment Configuration:** Implementation of a `.env` file to manage environment variables, allowing easy switching between development and production modes.
- **Mnemonic Phrase Input:** The user can now enter their own mnemonic phrase to generate the private key and wallet address.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/LuanHSL/btcwallet
   ```

2. **Navigate to the Project Folder:**

   ```bash
   cd btcwallet
   ```

3. **Install the Dependencies:**

   ```bash
   npm install
   ```

### Running the Project

1. **Start the Application:**

   ```bash
   npm start
   ```

2. **Follow the Instructions in the Terminal:**

   The project will prompt you to enter a mnemonic phrase (optional). It will then generate a new block on the blockchain and display information about it.

## Contributions

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License. 
