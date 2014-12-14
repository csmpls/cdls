# How do multi-user sensor applications affect user behavior?

Traditional sensor-based applications give the user "n-of-one" feedback, collecting data from the user and displaying it back to her (cf. Fitbit, BASIS, Samsung Gear, etc). However, some applications are beginning to integrate data from multiple users and provide group-level feedback: [1,3,6] share physical activity metrics to motivate people to exercise; [5] demonstrates an application that displays, in real time, conversational dominance to persons participating in a meeting; [7] presents applications that convey states of presence or absence to intimate partners.

How do data about other people's behavior, derived from mobile, wearable sensors, alter our behavior? What mechanisms are responsible for these changes? 

While some of these studies have engaged with the former question [3,6,5,2], the latter question has not been explored deeply in the literature (see Motivation).

In this class, I will investigate how social psychology can help us predict and understand how people react to sensor data from multiple, co-present users. A few cursory questions:

- To what kinds of influence do sensor data make users susceptible? Are patterns of influence different in large groups than in intimate, two-person settings?
- Does behavior change when users believe that others can or cannot access the same interface that they can?
- To what extent is behavior affected by the data users see? Do people trust the sensors more than their intuition?

## Motivation 

Kim et al. [5] found that use of the application correlated with more balanced meetings, but how did the application acheive this effect? While [1,3,6] could work by exploiting jealousy, guilt or shame (exercise is perceived as good, exercising serves as a social signal), [5] presents a less clear-cut case. Dominance can be perceived as good or bad, depending on the person and the situation.

Brandon et al. [2], who employed a similar interface, claimed that the effects were due to users' self-determination to be more cooperative:

> "The system shouldn’t make high-level inferences (e.g. dominance or participation level), because we believed that this would lead to false inferences, and participants’ refusal of the system [...] Speaking less than other participants doesn’t necessarily mean that the participant is not actively participating. *Whether social behavioral changes are desired when the system shows that a participant has spoken rarely, is up to the participant.*"

Brandon et al. assume that users make conscious decisions to alter their behavior based on their interpretations of the interface. This is not necessarily the case. Users could be influenced unconsciously, and/or be manipulating their behavior for other reasons.

In both [2] and [5], the interface ostensibly existed in order to bring about the social change observed - this alone could yield an effect. Users might also have modified their behavior simply because they were attemtping to match the behavior of their peers (i.e. to comply with social norms). Finally, the interfaces in [2] and [5] were known to be visible to all other users; participants might have altered their behavior (consciously or unconsciously) because they feared sending negative social signals via the interface.

To what extent were these changes induced by some feature of the data that was displayed? Can the presence of an interface stimulate predictable behavioral changes, independent of what data it dispalys? How did the way these data were displayed affect behavioral outcomes?

While these questions focus around group settings, I am also interested in exploring how these questions play out in two-person settings as well, e.g. between close friends or intimate partners.

<!-- Algorithms for analyzing sensor data are becoming more robust, enabling software to learn about more than a person's physical activity: recent work has draw inferences about users' mood and attitude [] and, by sampling data from multiple users at once, researchers have been able to make group-level social observations as well [].  -->

## References

[1] Aharony, Nadav, Wei Pan, Cory Ip, Inas Khayal, and Alex Pentland. “The Social fMRI: Measuring, Understanding, and Designing Social Mechanisms in the Real World,” 445. ACM Press, 2011. doi:10.1145/2030112.2030171.

[2] Brandon, Merel, Simon Epskamp, Thomas de Groot, Tim Franssen, Bart van Gennep, and Thomas Visser. “The Effects Visual Feedback on Social Behavior during Decision Making Meetings.” In Human Interface and the Management of Information. Interacting with Information, edited by Gavriel Salvendy and Michael J. Smith, 6772:219–28. Berlin, Heidelberg: Springer Berlin Heidelberg, 2011. http://link.springer.com/10.1007/978-3-642-21669-5_26.

[3] Consolvo, Sunny, Katherine Everitt, Ian Smith, and James A. Landay. “Design Requirements for Technologies That Encourage Physical Activity,” 457. ACM Press, 2006. doi:10.1145/1124772.1124840.

[4] Hung, Hayley, Gwenn Englebienne, and Laura Cabrera Quiros. “Detecting Conversing Groups with a Single Worn Accelerometer,” 84–91. ACM Press, 2014. doi:10.1145/2663204.2663228.

[5] Kim, Taemie, Agnes Chang, Lindsey Holland, and Alex Sandy Pentland. “Meeting Mediator: Enhancing Group Collaboration with Sociometric Feedback.” In CHI’08 Extended Abstracts on Human Factors in Computing Systems, 3183–88. ACM, 2008.

[6] Lin, James J., Lena Mamykina, Silvia Lindtner, Gregory Delajoux, and Henry B. Strub. “Fish’n’Steps: Encouraging Physical Activity with an Interactive Computer Game.” In UbiComp 2006: Ubiquitous Computing, edited by Paul Dourish and Adrian Friday, 4206:261–78. Berlin, Heidelberg: Springer Berlin Heidelberg, 2006. http://link.springer.com/10.1007/11853565_16.

[7] Vetere, Frank, Martin R. Gibbs, Jesper Kjeldskov, Steve Howard, Florian “Floyd” Mueller, Sonja Pedell, Karen Mecoles, and Marcus Bunyan. “Mediating Intimacy: Designing Technologies to Support Strong-Tie Relationships,” 471. ACM Press, 2005. doi:10.1145/1054972.1055038.


## Cursory reading list

Bell, Genevieve, Tim Brooke, Elizabeth Churchill, and Eric Paulos. “Intimate Ubiquitous Computing.” In In: Proceedings of Ubicomp 2003, ACM, 3–6. Press, 2003.

Bray, R. M., Johnson, D. and Chilstrom, J. T. J. 1982. Social influence by group members with minority opinions: A comparison of Hollander and Moscovici.. Journal of Personality and Social Psychology, 43: 78–88. 

DiMicco, Joan Morris, Katherine J Hollenbach, Anna Pandolfo, and Walter Bender. “The Impact of Increased Awareness While Face-to-Face.” Human–Computer Interaction 22, no. 1–2 (2007): 47–96.

DiMicco, Joan Morris, Anna Pandolfo, and Walter Bender. “Influencing Group Participation with a Shared Display,” 614. ACM Press, 2004. doi:10.1145/1031607.1031713.

DiMicco, Joan Morris, and Walter Bender. "Group reactions to visual feedback tools." Persuasive Technology. Springer Berlin Heidelberg, 2007. 132-143.

Donath, J., Karahalios, K. and Viégas, F. Visiphone: Connecting domestic spaces with audio. Proceedings of the International Conference on Auditory Display (ICAD). International Community for Auditory Display.

Dourish, P. Extending awareness beyond synchronous collaboration. Proceedings of the CHI'97 Workshop on Awareness in Collaboration Systems. New York: ACM.

Erickson, T., Smith, D. N., Kellogg, W. A., Laff, M. R., Richards, J. T. and Bradner, E. Socially translucent systems: Social proxies, persistent conversation, and the design of 'Babble'. Proceedings of the Conference on Human Factors in Computing Systems (CHI 99). New York: ACM.

Gutwin, C. and Greenberg, S. Effects of awareness support on groupware usability. Proceedings of the Conference on Human Factors in Computer Systems (CHI 98). New York: ACM.

Hackman, J. R. 1976. “Group influences on individuals.”. In Handbook of Industrial and Organizational Psychology, Edited by: Dunnette, M. D. 1455–1525. Chicago, IL: Rand-McNally.

Harry, Drew, Joshua Green, and Judith Donath. "Backchan. nl: integrating backchannels in physical space." Proceedings of the SIGCHI conference on Human factors in computing systems. ACM, 2009.

Kjeldskov, Jesper, Martin Gibbs, Franks Vetere, Steve Howard, Sonja Pedell, Karen Mecoles, and Marcus Bunyan. “Using Cultural Probes to Explore Mediated Intimacy.” Australasian Journal of Information Systems 11, no. 2 (2007).

Lisetti, Christine Laetitia, and Fatma Nasoz. “Using Noninvasive Wearable Computers to Recognize Human Emotions from Physiological Signals.” EURASIP J. Appl. Signal Process. 2004 (January 2004): 1672–87. doi:10.1155/S1110865704406192.

Leshed, Gilly, et al. "Visualizing real-time language-based feedback on teamwork behavior in computer-mediated groups." Proceedings of the SIGCHI Conference on Human Factors in Computing Systems. ACM, 2009.

Olguín, Daniel Olguín, Benjamin N Waber, Taemie Kim, Akshay Mohan, Koji Ara, and Alex Pentland. “Sensible Organizations: Technology and Methodology for Automatically Measuring Organizational Behavior.” Systems, Man, and Cybernetics, Part B: Cybernetics, IEEE Transactions on 39, no. 1 (2009): 43–55.

Shmueli, Erez, Vivek K. Singh, Bruno Lepri, and Alex Pentland. “Sensing, Understanding, and Shaping Social Behavior.” IEEE Transactions on Computational Social Systems 1, no. 1 (March 2014): 22–34. doi:10.1109/TCSS.2014.2307438.

Slovák, Petr, Paul Tennent, Stuart Reeves, and Geraldine Fitzpatrick. “Exploring Skin Conductance Synchronisation in Everyday Interactions.” In Proceedings of the 8th Nordic Conference on Human-Computer Interaction: Fun, Fast, Foundational, 511–20. NordiCHI ’14. New York, NY, USA: ACM, 2014. doi:10.1145/2639189.2639206.

Stasser, G. and Stewart, D. 1992. Discovery of hidden profiles by decision-making groups: Solving a problem versus making a judgment.. Journal of Personality and Social Psychology, 63: 426–434. [CrossRef], [Web of Science ®], [CSA]

Sturm, Janienke, Olga Houben-van Herwijnen, Anke Eyck, and Jacques Terken. “Influencing Social Dynamics in Meetings through a Peripheral Display,” 263. ACM Press, 2007. doi:10.1145/1322192.1322238.

Sung, Michael, and AP Pentland. “PokerMetrics: Stress and Lie Detection through Non-Invasive Physiological Sensing.” Ph. D. thesis, MIT Media Laboratory, 2005.

Varni, Giovanna, Gualtiero Volpe, and Antonio Camurri. “A System for Real-Time Multimodal Analysis of Nonverbal Affective Social Interaction in User-Centric Media.” IEEE Transactions on Multimedia 12, no. 6 (October 2010): 576–90. doi:10.1109/TMM.2010.2052592.

Vinciarelli, Alessandro, Maja Pantic, Dirk Heylen, Catherine Pelachaud, Isabella Poggi, Francesca D’Errico, and Marc Schröder. “Bridging the Gap between Social Animal and Unsocial Machine: A Survey of Social Signal Processing.” Affective Computing, IEEE Transactions on 3, no. 1 (2012): 69–87.

Vlachostergiou, Aggeliki, George Caridakis, and Stefanos Kollias. “Context in Affective Multiparty and Multimodal Interaction: Why, Which, How and Where?,” 3–8. ACM Press, 2014. doi:10.1145/2666242.2666245.
