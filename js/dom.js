let currentNode;

function addNewParagraph() {
  
   //to be completed
   
}

function domView() {
  let i;
  let nodeList;
  let output = "";

  //<p> elements
  nodeList = document.getElementsByTagName("p");
  
  //to be completed
  
  currentNode = document.getElementById("domview");
  currentNode.innerHTML = output;
  currentNode.style.visibility = "visible";
}

// provide this
function domHide() {
  currentNode = document.getElementById("domview");
  currentNode.style.visibility = "hidden";
}

window.onload = function () {
  document.getElementById("listdom").onclick = domView;
  document.getElementById("hidedom").onclick = domHide;
  document.getElementById("addpara").onclick = addNewParagraph;
  document.getElementById("altercell").onclick = alterCell;
};
