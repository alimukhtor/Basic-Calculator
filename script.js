const displayBoard = function(){
  const boardContainerNode = document.getElementById("board-container")
  let nums = 24;
  for(let numbers = 1; numbers <=nums; numbers++){
    let newElement = document.createElement("div")
    newElement.classList.add('cells')
    newElement.innerText = numbers;
    boardContainerNode.appendChild(newElement)
  }
}



window.onload = function() {
  displayBoard()

}
