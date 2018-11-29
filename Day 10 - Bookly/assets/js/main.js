document.querySelector('.addData').addEventListener('click', addtoArr);
window.addEventListener('keypress', (e) => {
    if(e.charCode == 13) addtoArr();
});



var arr1 = [
    // {
    //     name: "something",
    //     category: "";
    // },
    // {
    //     name: "something",
    //     category: "";
    // },
];


function addtoArr(){
    // console.log("helloworld");
    let getValueName = document.getElementById('input').value;
    var getValueCategory = document.getElementById('category').value;
    // console.log(getValueCategory);
    var obj = {
        name: getValueName,
        category: getValueCategory
    }
    arr1.push(obj);
    displayfn();
    document.getElementById('input').value = "";
}


var itemList = document.querySelector('.item_list');

function displayfn(){
    document.querySelector('.item_list').innerHTML = "";
    var i = 0;
    for (item of arr1) {
        itemList.innerHTML += `<li><p> ${item.name} </p><span><i data-cross=${i} class="fas fa-times"></i></span></li>`;
        i++;
    }
}

searchInput.addEventListener('keyup', searchArr);


function searchArr(){
    let getValueName = document.getElementById('searchInput').value;
    // console.log(getValueName);
    itemList.innerHTML = "";
    var i = 0;
    for (item of arr1) {
        if(item.name.includes(getValueName)){
            itemList.innerHTML += `<li><p> ${item.name} </p><span><i data-cross=${i} class="fas fa-times"></i></span></li>`;
        }
        i++;
    } 
}