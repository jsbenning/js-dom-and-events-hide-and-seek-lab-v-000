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
  for (let x = 0; lists.length > x; ++x){
    for (let y = 0; lists[x].getElementsByTagName('li').length > y; ++y){
      lists[x].getElementsByTagName('li')[y].innerHTML = parseInt(lists[x].getElementsByTagName('li')[y].innerHTML) + parseInt(n);
    }
  }
}