// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']



//Write a JavaScript function to count the occurrence of a substring in a string.
// Input (String, String) -> ('The world of the dogs', 'the')
// Output (Number) -> 2



//  Write a JavaScript function to strip leading and trailing spaces from a string.
// Input (String) -> ('Hello World   ')
// Output String -> "Hello World"

function strip(str){
    return str.trim();
}

// Write a JavaScript function to truncate a string to a certain number of words.
// Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
// Output ( String ) -> "The quick brown fox"



// Write a JavaScript function to alphabetize a given string.(A -z)
// Input (String) -> 'United States'
// Output 'SUadeeinsttt'
function alphabetize_string(str) {
    return str.split('').sort().join('').trim();
}
console.log(alphabetize_string('United States'));


// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// Input ( String String) -> ('abcd', 'AbcD')
// Output Boolean -> true
// ('ABCD', 'Abce') -> false

function testStr(str1, str2){
    return str1.toUpperCase() === str2.toUpperCase();
}