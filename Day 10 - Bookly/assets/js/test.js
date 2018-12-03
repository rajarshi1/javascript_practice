document.querySelector('.addData').addEventListener('click', addBook);
window.addEventListener('keypress', (e) => {
    if(e.charCode == 13) addBook();
});

var obj = {
    Mysticysm: [{name:"Mystics Musings",status:false},{name:"An Autobiography of a yogi",status:false}],

    Fiction: [{name:"Angels and Demons",status:false},{name:"The Alchemist",status:false},{name:"The White Tiger",status: false}],
}


// arr1 = JSON.parse(localStorage.getItem('arr2')) || {}; 




function addBook(){
    // console.log("helloworld");
    let getValueName = document.getElementById('input').value;
    var getValueCategory = document.getElementById('category').value;
    // console.log(getValueCategory);
     
        if(obj[getValueCategory] === undefined){
            obj[getValueCategory] = [];
        }
        var x = {};
        x.name = getValueName;
        x.status = false;
        obj[getValueCategory].push(x);
    displayfn();
    document.getElementById('input').value = "";
    // localStorage.arr2 = JSON.stringify(obj);
}


document.querySelector('.addData').addEventListener('click', addBook)
var itemList = document.querySelector('.item_list');
displayfn();



function displayfn(){
        getValueName = document.getElementById('input').value;
        document.querySelector('.item_list').innerHTML = "";
        var i = 0;
        for (item in obj) {
            console.log(obj[item]);
            obj[item].forEach(arrObj => {
                itemList.innerHTML += `<li><p> ${arrObj.name} </p><span><i data-cross=${i} class="fas fa-times"></i></span></li>`;
            });
            i++;
            // console.log(obj);
        }
}

