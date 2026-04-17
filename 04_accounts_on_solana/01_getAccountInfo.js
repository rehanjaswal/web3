// curl -X POST https://api.mainnet-beta.solana.com -H "Content-Type: application/json" -d '{                      
//     "jsonrpc": "2.0",                                                                                                                           
//     "id": 1,                                                                                                                                    
//     "method": "getAccountInfo",                                                                                                                 
//     "params": [                                                                                                                                 
//       "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",                                                                                           
//       {"encoding": "base64"}                                                                                                               
//     ]                                                                                                                                           
//   }'
 

// this is for accounts with lamports and data

// run this in terminal and you'll get the account info

// output: 


// {"jsonrpc":"2.0","result":{"context":{"apiVersion":"3.1.8","slot":403733450},"value":{"data":["AQAAAAXqnPFs5BGY8aSZN8iMNwqU1K//ibW6y470XmMku3j3VmTlcg9mDAAGAQEAAAAF6pzxbOQRmPGkmTfIjDcKlNSv/4m1usuO9F5jJLt49w==","base64"],"executable":false,"lamports":161948999575,"owner":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA","rentEpoch":18446744073709551615,"space":82}},"id":1}