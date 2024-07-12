import 'dotenv/config';

import bitcoin from 'bitcoinjs-lib'

import { validateMnemonic } from './mnemonic/validateMnemonic.js'
import { generateSeed } from './seed/generateSeed.js'
import { createRootWallet } from './wallet/createRootWallet.js'
import { deriveAccount } from './wallet/deriveAccount.js'
import { deriveKeyPair } from './wallet/deriveKeyPair.js'
import { generateAddress } from './address/generateAddress.js'

async function generateWallet() {
  const network = bitcoin.networks[process.env.BITCOIN_NETWORKS]
  const mnemonic = await validateMnemonic()
  const seed = generateSeed(mnemonic)
  const rootWallet = createRootWallet(seed, network)
  const account = deriveAccount(rootWallet)
  const node = deriveKeyPair(account, 0)
  const address = generateAddress(node.publicKey, network)

  return {
    address: address,
    privateKey: node.toWIF()
  }
}

const data = await generateWallet()
console.log(data)
