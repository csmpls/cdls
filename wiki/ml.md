test set error > training set error, overfitting
	validation set;;mitigate, measure error on
	cross-validation;;divide into k-folds, k-1 to test on remaining fold, cyclically

overfitting;;0 error rate on 4 training points, that may not work, the reality of life

cross-validation mitigates overfitting
	leave-one-out cross-validation;;gold-standard of course, but large computational cost. sometimes worth it, treatment, you cant afford error with 30 data points

hyper-parameters;;C in svm, order of polynomial basis in regression, depth of a decision tree, etc..outer-layer parameter

---

squared error;;(bias)^2 + variance + noise

often a paucity of data will constrain the model simplicity/complexity

---

discriminative;;posterior probabilities are the main concern p(y|x)
generative;;joint distribution is main concern p(x,y) - fx. a bayes net

---

maximum likelihood principle;;make that choice on the parameter that maximizes the likelihood of seeing the data....all a guess, u really cant do any better than that...simple as that.........(fisher,1920)

log-likelelihood;;l(P;D) = S ln*p + (n-s)ln(l-p)........we simplify here to find p.....take derivative set it to 0 and solve for p 

black swan paradox

---

theta;;parameters

german tank problem;;allies estimating german tank production. when we destroy a tank, we see its serial number. 


---

frequentist approach: theta is an unknown contest, already known, weare making our best guess at it from th data

bayesian approach: theta is a random variable, P(th), prior distribution, then you observe D......we permit ourselves to talk aobut prior probabilities, about likelihood functions of data given prior.  P(theta|D) is the posterior.

look up diff etween bayesian adnf requentist approach

--

expectation of a random variable

discrete - PMF
continuous - density

E[x] = Sig x P(x)
E[X1+x2+x3] = E[x1] + E[x2] + E[x3]
E[g(x)] = Sig g(x) p(x)   (similar for densities in continuous)

canononical definitions:  
E[x] = mean of mu
varience[x] = E[(x-mu)^2] = E[x^2 - 2x*mu  + mu^2]

covarience[x,y] = E[x] - E[[x-E(x)][y - E[y]]
if x and y are independent, covarience = 0













