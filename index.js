function PassMash() {
}

// createHash | credit to https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript#7616484
PassMash.prototype.createHash = (password) => {
    let hash = 0, i, chr;
    if (password.length === 0) return hash;
    for (i = 0; i < password.length; i++) {
        chr   = password.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

// createSalt
PassMash.prototype.createSalt = () => {
    return Math.random().toString();
}

PassMash.prototype.processHash = (password, stretch, salt) => {
    let i = 0;
    while (i < stretch) {
        i++;
        password = PassMash.prototype.createHash(password+salt);
    }
    return password;
}

// storePassword
PassMash.prototype.storePassword = (password, stretch) => {
    const salt = PassMash.prototype.createSalt();
    password = PassMash.prototype.processHash(password, stretch, salt);
    return {
        hash: password,
        salt: salt,
        stretch: stretch
    };
}

// comparePassword
PassMash.prototype.comparePassword = (password, record) => {
    return record.hash === PassMash.prototype.processHash(password, record.stretch, record.salt);
}


module.exports = PassMash;
