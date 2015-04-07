### scraper

simple script that takes a starttime and and endtime and delivers a CSV:

> participant_id, start_time, end_time, raw_values, attention_esense, meditation_esense, eeg_power, signal_quality

and prints all the stimuli that happened in that interval!

(node query -> python write to file)

### server side

buy a clean webfaction instance ::)))))

build a dedicated timeserver

think: *"how can i pipe today?"

maybe routing and db-saving are different processes dnode

maybe multiple instances + basic logging->analytics SaaS

### client

connected status in the UI + reconnects to the device on "stale" signal

bad signal quality -> RED POPUP

connection screen tries again + timeouts with a "reconnect" button + tips for pairing

fun connection screen with facts 

*if ok* disconnect from the device when navigating away from the page 

confirm navigate away, "you're connected to indra! are you sure you want to disconnect from the indra network?"

### event injector

quick bacon.js project

**bonus** interface show who's connected 

fun at the end of the tunnel i guess

----

## distributed 

### crazy

"synchronise" with someone ("subscribe", literally : synchronize your clocks)

now we can align anyone's data, so long as there is some chain of synchronizations between then

thru **TOR** (duh)

### sane

its dcom it relays data to everyone in the 'room', without saving it.  15-sec caches. 

you can just press "save" to capture it

**produces a shared dataset that can be synchronised with video**

### agnostic about schema
what are the pros/cons of mongoDB? where might we see real gains, and what are some of the pitfalls?

- pitfall: enabling apples to oranges data comparisons
- performance

can we just send indra data through tor? i.e. sensor data as pseudonymous as DCOM?