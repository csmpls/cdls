# you connect to a wifi network on your phone

a [captive portal](http://en.wikipedia.org/wiki/Captive_portal) that redirects users to a shared webapp. optionally, the greater internet is not accessible.

from there, services are local. your data does **not** leave that physical space. you're connected only to the other people on the network

## implementation

toshiro recommends [DNAT](https://en.wikipedia.org/wiki/Network_address_translation#DNAT):

> The exact thing you'd need for a captive portal is probably DNAT
(destination NAT): http://www.netfilter.org/documentation/HOWTO/NAT-HOWTO-6.html#ss6.2

> Actually in most cases you could probably just reply to all DNS requests
from the client with the server's local address (since most clients will
get their dns servers via dhcp).