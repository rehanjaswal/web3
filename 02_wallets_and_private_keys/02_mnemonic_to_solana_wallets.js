import nacl from "tweetnacl";  // crypto library, used to generate ed25519 keypairs (solana uses this), eth uses secp256k1
// nacl: object containing crypto functions
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";  // solana SDK (software development kit)

const mnemonic = generateMnemonic();
console.log(mnemonic);
const seed = mnemonicToSeedSync(mnemonic);

for (let i = 0; i < 4; i++) {
    const path = `m/44'/501'/${i}'/0'`; // master_node/purpose/coin_type/address/change
    const derviedSeed = derivePath(path, seed.toString("hex")).key; // derivedPath(path, seedHex)
    const secret = nacl.sign.keyPair.fromSeed(derviedSeed).secretKey;
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}