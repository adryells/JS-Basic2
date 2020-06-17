
function checaIdade(idade){
    return new Promise(
        function(resolve,reject){
            if(idade > 18){
                resolve()
            }else{
                reject()
            }
    }
    )};


checaIdade(30)
.then(function(response){
    console.log('ok');
})
.catch(function(error){
    console.warn('erro');
})