import { generateMnemonic } from 'bip39';


const mnemonic = generateMnemonic(256);    // 256 will generate a 12 word mnemonic; entropy = randomness of password (basically strength)
console.log(mnemonic)

// 2048 word dictionary, 2 to the power 11 is 2048, so each word contains 11 bit data.
// more the entropy, more secure and strong is the passcode
// checksum = entropy / 2
// then add bits, add = entropy + checksum
// words = (entropy + checksum) / 11 -> divide by 11 cuz each word contains 11 bits, so total bits divided by no. of bits in one word will give us total no of words

