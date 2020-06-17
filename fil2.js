/*var ajax = new XMLHttpRequest();
ajax.open('GET','https://api.github.com/users/adryells');
ajax.send(null);

ajax.onreadystatechange = function(){
    if (ajax.readyState === 4){
        console.log(JSON.parse(ajax.responseText))
    }
}*/
let myPromise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/adryells');
        xhr.send(null)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 ){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('erro na requisicao');
                }
        }
    }
    
});
}
myPromise()
.then(function(response){console.log(response)})
.catch(function(error) {console.warn(error)});