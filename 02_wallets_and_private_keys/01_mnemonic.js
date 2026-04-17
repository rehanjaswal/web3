import { generateMnemonic, mnemonicToSeedSync } from "bip39";

// generate a mnemonic, it'll generate a 12 word mnemonic if i leave () empty, and a 24 word if i do generateMnemonic(256)
const mnemonic = generateMnemonic(256);
console.log(mnemonic);
const seed = mnemonicToSeedSync(mnemonic);  // converts mnemonic to seed (512 bits)

// pathway: mnemonic to seed to private keys to addresses