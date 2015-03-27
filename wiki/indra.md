## longoverdueupdates

all client work on [[3eg]]

### server side

decouple indra-server and timeserver

indra-server and event-server are one

### client

web client is outside somehow from the device client

sends buffered data in rate-limited packets, if there is any

### scraper

simple script that takes a starttime and and endtime and delivers a CSV:

> participant_id, start_time, end_time, raw_values, attention_esense, meditation_esense, eeg_power, signal_quality

and prints all the stimuli that happened in that interval!

## event injector

quick bacon.js project

bonus interface show who's connected

## distributed 

### crazy

"synchronise" with someone ("subscribe", literally : synchronize your clocks)

now we can align anyone's data, so long as there is some chain of synchronizations between then

then its just a matter of sharing data between peers

### sane

its dcom it relays data to everyone in the 'room', without saving it 

## agnostic about schema
what are the pros/cons of mongoDB? where might we see real gains, and what are some of the pitfalls?

- pitfall: enabling apples to oranges data comparisons
- performance

can we just send indra data through tor? i.e. sensor data as pseudonymous as DCOM?