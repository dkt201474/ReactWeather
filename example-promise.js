function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('Error : Something is wrong with your parameters');
        }
    });
}


addPromise(13).then(function(temp) {
    console.log('Relult : ', temp);
}, function (err) {
    console.log('Error : ', err);

});
