security

#class

## 9

**bit rot** totally inevitable, nothing you can do to stop it.  **error correcting code** - if you recover only some of the memory, you can recover all of th data. but you should still use it. bc memory changes all the time.

contemporary attack on hardware: expose to moderate amounts of radiation, hoping bits will change.  seeing failures, you get insights to software mechanism being used to protect systems.

**attestation** secure co-processor running a stack up to "known software" -- what is **zeroization**?

## 8

**hashes** -- we need

**collision resistance** - hard to find x!=y where h(x) = h(y)

**preimage resistance** - given y, hard to find x such that y = h(x)


## 7

for confidential: publish e, pq ... secret: d

for signuatre (integrity) publish d, pq; secret e

putting public key on web not good enough:

...

**PKI** (public key infrastructure)

### use RSA 4092


advice on shit
----
standard is .. harder to get in conference than in journal .. most prestigious is conference

main sec conf are

- ndss  (network dist sys sec)
- IEEE conference on sec & privacy (oakland conference)
- usenix 
- ACM CCS 

also

- subconference called PETS (privacy enhancing ...) perfect paper for this

- financial crypto    ---  in the carribbean

- FOCI  ... free and open communications on the internet

look at the above three -- deadline for PETS is in feb ... may for foci

example papers for that 
-----
look at FOCI workshop online

PETS ..... should have procedings online .... 



## 6

**RSA**

- every integer can be represented as the product of primes
- factoring products of large primes is hard .. big p, big q, no good ways to factor pq right now. we say "factoring is intractable." but it's an assumption.
- **Fermat's Little Theorem** - (let's combine w **Euler's theorem**) - "if m has no common factors with pq, the m^(p-1)(q-1) = 1 % pq.
- idea behind RSA is: find an e & d such that e * d = c * (p-1)(q-1)+1
- publih e, pq, keep d private

**non repudiation** - "the purported maker of a statement will not be able to successfully challenge the validity of the statement or contract."

publish d, pq, keep e private. only i can compute (E(m). but anyone can compute D(c).

sign a lease? publish m[lease], E(m[lease])

now, m[lease] = D(E(m[lease])) ..... allows us to sign a document in such a way that signer cannot repudiate

## 5
"weak keys" - consider +0 in a caesar cipher

white house & kremlin use one-time pad via couriers ................. number stations are for this - they exist on military bases etc

**AES** -- doesnt believe nsa can break it

## 4
CIA

confidentiality, integrity, availabilitys 

## 3
rsa/aes secure

ssl no bc rc4 sucks + MITM (analogy playing two grandmasters against each other)

---

# rid

war is violent, political and instrumental

no cyber attack has ever really been an act of war

only some cyber attacks are weapons

---


# ross

## chap 1

policy   - goal
mechanism - means for achieving it
assurance - reliance we can put on each mechanism 
incentive - motivation system's guards have to do their job properly

subject - physical person
person - physical or legal person

principal - any entity that participates in a security system; incl. a compound of other principals
group - set of principals
role - set of functions assumed by different persons in succession

identity - a correspondence between the names of two principals
signifying that they refer to the same person or equipment

an NSA employee is observed in a toilet
stall at Baltimore Washington International airport selling key material to a
Chinese diplomat, then (assuming his operation was not authorized) we can
describe him as ‘*trusted but not trustworthy*’.

Secrecy - to the effect of the mechanisms used to limit the number of principals who can access information, such
as cryptography or computer access controls.

Conﬁdentiality - an obligation to protect some other person’s or
organization’s secrets if you know them.

Privacy - the ability and/or right to protect your personal information
and extends to the ability and/or right to prevent invasions. privacy can extend to families but not legal organizeations



## chap 2


> Humans are incapable of securely storing high-quality
cryptographic keys, and they have unacceptable speed and accuracy
when performing cryptographic operations. (They are also large,
expensive to maintain, difﬁcult to manage, and they pollute the
environment. It is astonishing that these devices continue to be
manufactured and deployed. But they are sufﬁciently pervasive that
we must design our protocols around their limitations.)
— Kaufmann, Perlman and Speciner [698]

Only amateurs attack machines; professionals target people.
— Bruce Schneier

pretexting - getting info under a false pretext

phishing - is like pretexting for customers

cognitive biases -- behavioral econimcs --

    people are bad at tidying up -- likely to leave ATM card behind when the machine gives htem money before giving card back
    
    prospect theory (dislike losing $100 already had more than they value winning $100)
   
    availability heuristic ... anchoring ...
   
  satisﬁcing — as situations are often
too hard to assess accurately, we have a tendency to plump for the alternative
that’s ‘good enough’ rather than face the cognitive strain of trying to work out
the odds perfectly

fundamental attribution error—
people often err by trying to explain things by intentionality rather than by
situation


> I write ‘identity theft’ in quotes as it’s a propaganda term for the old-fashioned offence of
impersonation. In the old days, if someone went to a bank, pretended to be me, borrowed money from them and vanished, then that was the bank’s problem, not mine. In the USA and the UK, banks have recently taken to claiming that it’s my identity that’s been stolen rather than their money, and that this somehow makes me liable. So I also parenthesise ‘victims’ — the banks are the real victims, except insofar as they commit secondary fraud against the customer. 
hah

> (Bear in mind that in thirty years’ time, all that might remain of the system you’re
building today is the memory of its more newsworthy security failures.)


salt & hash - add some rnadomness to the hash to make it harder to crack
