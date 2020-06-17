var btadicionar = document.getElementById('add')
btadicionar.onclick = function addDo(){
	var container = document.querySelector('#app ul')
	var afazer = document.querySelector('#app input')
	var newToDo = document.createElement('li')
	var text = document.createTextNode(afazer.value);
	var excluir = document.createElement('a')
	excluir.appendChild(document.createTextNode('excluir'))
	excluir.setAttribute('href','#')
	excluir.setAttribute('onclick','excluir(document.querySelector(#app ul li))')
	container.appendChild(newToDo)
	container.appendChild(excluir)
	newToDo.appendChild(text)
}
function excluir(op){
	var container = document.querySelector('#app ul')
	excluir.removeChild(op)
}