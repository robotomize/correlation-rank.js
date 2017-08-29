# Pearson correlation rank

In statistics, the Pearson correlation coefficient (PCC, pronounced /ˈpɪərsən/), also referred to as the Pearson's r, Pearson product-moment correlation coefficient (PPMCC) or bivariate correlation, is a measure of the linear correlation between two variables X and Y. It has a value between +1 and −1, where 1 is total positive linear correlation, 0 is no linear correlation, and −1 is total negative linear correlation. It is widely used in the sciences. It was developed by Karl Pearson from a related idea introduced by Francis Galton in the 1880s.

## Description
This is my implementation of the package to calculate the Pearson correlation coefficient.

## Requirements
* npm
* ecmascript 5, ecmascript 2016, ecmascript 2017

## Install
```
npm i correlation-rank
```
or
```
git clone https://github.com/robotomize/correlation-rank-js.git 
```

## Use
```js
import Correlation from 'correlation-rank'
const correlation = require('./correlation-rank');

correlation.rank([], []);
correlation.determination([], []);
```

## For a sample
The first value is the correlation coefficient and the second coefficient of determination

### 
```
node example
0.7949559026877182
0.6319548872180449
```

