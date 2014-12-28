## design principles:
- main idea is to lower the barriers to the "reflection cycle"
- its up the the user (me) to secure or encrypt their entires


## work queue
.  
- write a function that generates a UserResponse + sends an email to user.email

- a script script recieves my emails and
- finds the "id" (after the +)
- find the body of my message
- deletes the email in the mailbox

now it can save the body under the user response of the right id and delete the email in the mailbox.  if that user response already has a body, make a new response with that entry.

---
a python script that 

1. finds the body of the message

test it on a corpa of databases!

2. finds some id in the address 

## implementation ideas

ok now its a backend problem - 

- a periodic job:
	* for each email address in the system, see if it's time to emali them
	* server generates a UserResponse and embeds its id in the email address
	* sends each user on the list an email
	
- upon receiving an email
	* find the id with which it's associated, use that to look up UserResponse
	* assign UserResponse a recievedDate and a message
	
### models

```User```  
	```- responses: {}```

```UserResponse:```  
```  -id:```  
```  -sentDate:```  
```	-recievedDate:```  
```	-message:```  
might as well add an ```-isEncrypted:``` field, just make it an optional arg
	
# functions

```assemblePromptEmail(user_response_id)```  
```getEmailResponseID```  
```getEmailBody(msg)```  

```if (emailResponseID) != None: processUserResponse(msg, emailResponseID) else: print('not a user response'); delete(message);```

## ok the *really* fun part

- frequency of reminder emails is a function of how many emails are in the system

ok now something *"important"*:

- "encrypt with a password" option - 

## email template

hi

you sent this email [timeago] ago

to add any entry, just reply to this email!

> [msg]

you can also submit an [encrypted entry]() if you'd