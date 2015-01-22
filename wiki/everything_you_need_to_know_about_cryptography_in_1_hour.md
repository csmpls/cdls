original link: [everything you need to know about cryptography in one hour](https://www.youtube.com/watch?v=jzY3m5Kv7Y8)

## HASHING: 
use SHA-256
maybe use SHA-3 when it's vetted

## SYMMETRIC AUTHENTICATION
use HMAC-SHA256
guarantee you can't have two idenitical data sent as input to HMAC-SHA256


## BLOCK CIPHERS
use AES-256
dangerous to let attackers see cipher text made iwth different, but related, keys - "related-key attack"

## BLOCK CIPHER MODE OF OPERATIONS
Use CTR mode
DONT use modes that provide both encrpytion & authentication
Use HMAC-SHA256 (or some MAC) to authenticate your encrypted data.....you MUST verify the authenticity of your encrypted data BEFORE you run it through your block cipher

## Passwords
use scrypt to convert it to a key
always hash passwords - DO NOT encrypt them.

## SSL
Distribute an assymetric signature verification key (or a hash of that key) with the client side, and use that to bootstrap your cryptography