export default function compact(arr) {
	let newArray = arr.filter(i => {if(i) return true;})
	return newArray;
}

// function compact(arr) {

//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==false || null || 0 || "" || undefined || NaN ){
//             arr.splice(i,0);
//         }
//         else{
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;  
// }
// compact([1,"",1]);