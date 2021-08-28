# Pass-Smash

Utilities for creating and comparing hashes, salts, and stretches for passwords

Available at https://www.npmjs.com/package/pass-smash

## Installation

`npm install pass-smash`

## Usage

Import the package (`const passMash = require('pass-mash')`), then create a PassMash object using `new PassMash`

### createHash

`passMash.createHash(password)`

Password should be a string. This returns a hash (string) of the input.

### createSalt

`passMash.createSalt()`

Randomly generated decimal; used in the `storePassword` and `comparePassword` functions.

### processHash

`passMash.processHash(password, stretch, salt)`

Concatenates the `password` with the `salt`, then the resulting hash again with the `salt`. Repeats for `stretch` iterations before returning the resulting hash.

### storePassword

`passMash.storePassword(password, stretch)`

Returns a record object, which contains

```
{
    hash: password, // the password, having been hashed with the salt a number of times equal to the stretch
    salt: salt, // generated on the fly with createSalt()
    stretch: stretch
}
```

### comparePassword

`passMash.comparePassword(password, record)`

Returns true if the provided password, once hashed and stretched with the salt and stretch of the record object, matches the hash stored in the record object.
