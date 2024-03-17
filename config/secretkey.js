module.exports = {
    secretKey : 'tnsdydPrivateKey', //private key
    option : {
        algorithm : "HS256", //hash func
        expiresIn : "1m",  //token duration
        issuer : "tnsdyd" //publisher
    }
}