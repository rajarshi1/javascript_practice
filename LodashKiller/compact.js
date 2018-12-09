export default function compact(arr) {
	let newArray = arr.filter(i => {if(i) return true;})
	return newArray;
}
