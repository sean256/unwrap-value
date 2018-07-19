unwrap-value
===========

Safely and quickly access deep properties

[![NPM version](https://badge.fury.io/js/unwrap-value.png)](http://badge.fury.io/js/unwrap-value)

# Usage

```js
const unwrap = require('unwrap-value');

const cat = {
	name: 'Captain Nikko',
	owner: {
		name: 'Sean',
	},
};

// Get deep properties on objects
unwrap(() => cat.name) // returns 'Captain Nikko'
unwrap(() => cat.owner.name) // returns 'sean'
unwrap(() => cat.owner.phone) // returns undefined

// With arrays
const dogs = [
	{ name: 'Leela' },
	{ name: 'Raven' }
]

unwrap(() => dogs[1].name) // returns 'Raven'
unwrap(() => dogs[3].name) // returns undefined

// without arrow functions (ugly)
unwrap(function() { return cat.owner.name }) // returns 'sean'
```


# Performance

This table shows how it performs compared to the manual approach or by using the popular object-path module.

#### 10,000 iterations

|method      |time in ms|
|------------|----------|
|manual      |1.046ms   |
|unwrap-value|2.867ms   |
|object-path |9.322ms   |