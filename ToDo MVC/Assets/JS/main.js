document.getElementById('submit').addEventListener('click', addlist);

var arr1 = [];

// var getValue = document.getElementById('input').value;
var ul = document.createElement('ul');
document.body.appendChild(ul);

function addlist(){
    var getValue = document.getElementById('input').value;
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = getValue;
    arr1.push(getValue);
    document.getElementById('input').value= "";
}

// document.write(arr1);
// console.log(arr1);