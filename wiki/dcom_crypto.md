(1) server gives everyone a private key & take their public key,
(2) server generates a symmetric key, encrypts it with everyone's public key, and gives it out

then we just need to generate new symmetric keys whenever someone enters or leaves the room?

and we trust SSL for "signing" server's keys? and client's public keys?


[how i would implement broadcast encryption](http://security.stackexchange.com/questions/2728/how-would-i-implement-broadcast-encryption):

> If you use RSA (that's the most probable), then here are the sizes: an encrypted message always has the same size than the modulus; for a 1024-bit RSA key, this means 128 bytes. The encryption process includes some padding, which adds an internal overhead of at least 11 bytes. Thus, the maximum size of a data blob which is to be encrypted with a 1024-bit RSA key is 128-11 = 117 bytes.

> I am not sure why you would want to wrap the symmetric key in a SOAP or JSON message. If it is encrypted then the receiver must decrypt it; since an encrypted RSA message really looks like a bunch of random bytes with no visible structure, this means that the receiver already knows what to expect. What would SOAP or JSON add at that point ? Maybe you would like to do it the other way round, i.e. encrypt (with RSA) the symmetric key, and then wrap the result (the 128-byte encrypted message) into a SOAP or JSON message ?

john percival says, of SSL, 

> Distribute an asymmetric signature verification key (or a
hash thereof) with the client side of client-server software, and
use that to bootstrap your cryptography.


### needs
on the server side we're   
- encrpting a random string with various public keys 

on the client side we're   
- generating private/public key pairs  
- decrypting a symmetric key with our private key,   
- using a symmetric key to encrypt & decrypt messages using AES.  

### tools
- SJCL [supports assymetric crypto + has methods for serializing public keys](https://github.com/bitwiseshiftleft/sjcl/wiki/Asymmetric-Crypto), seems to be all-around the easiest solution
- [google/end-to-end](https://github.com/google/end-to-end) RSA in the browser
- for RSA, [cryptico looks relevant](https://github.com/wwwtyro/cryptico)
- some relatively small github project called [elliptic](https://github.com/indutny/elliptic)
- stanford has [some RSA in js](http://www-cs-students.stanford.edu/~tjw/jsbn/) but unclear how to use it (to me today)