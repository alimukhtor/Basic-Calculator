const displayBoard = function(){
  const boardContainerNode = document.getElementById("board-container")
  for(let numbers = 1; numbers <=24; numbers++){
    let newElement = document.createElement("div")
    newElement.classList.add('cells')
    newElement.innerText = numbers;
    boardContainerNode.appendChild(newElement)
  }
}



window.onload = function() {
  displayBoard()

}
