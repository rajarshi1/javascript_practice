export default function chunk(arr, n) {

    let newArray = [];
    let temp = [];
    for (let i = 0; i < arr.length; ++i) {
        if (i % n != 0 || i == 0) {
            temp.push(arr[i]);
        
        }
        else {
            newArray.push(temp);
            temp = [];
            temp.push(arr[i]);
        }

    }
    if (temp.length > 0) {
        newArray.push(temp);
    }
    return newArray;
}

