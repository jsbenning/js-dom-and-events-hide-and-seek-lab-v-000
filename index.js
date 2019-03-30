function getFirstSelector(selector){
  let sels = document.querySelector(selector);
  return sels;
}

function nestedTarget() {
  let nest = document.querySelector('#nested').querySelector('.target');
  return nest;
}

function deepestChild(){
  let deep = document.querySelector('div#grand-node');
  let kids = deep.children[0];
  while (kids.children[0]) {
    kids = kids.children[0];
  }
return kids;  
}

function increaseRankBy(n){
  let lists = document.getElementsByClassName('ranked-list');
  for (let x = 0; lists.length < 0; x++){
    let y = 0;
    let liNum = lists[x].getElementsByTagName('li')[y].innerHTML;
    while (liNum){
      liNum = parseInt(liNum + n);
      ++y;
    }
  }
}