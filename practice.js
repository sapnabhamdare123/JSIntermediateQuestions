// Q 1. Write a function to generate the first n numbers in the Fibonacci sequence.

// let n = 9;
// a = 0;
// b = 1;
// c = 0 
// for(let i=0; i<n; i++){
//     console.log(c);
//     a = b;
//     b = c 
//     c = a + b;
// }




// Q2. Given an array of integers, return indices of the two numbers such that they add up to a specific target.


// let arr = [2,5,3,4,5];
// let target = 10 ;
// let len = arr.length;
// let sum = 0 ;
// let arr2 = []
// for(let i=0; i<len; i++){
//     for(let j=i+1; j<len; j++){
//         if(arr[i] + arr[j] == target){
//             arr2[0] = i;
//             arr2[1] = j;
//         }
//     }
// }

// console.log(arr2);




//  Q 5. Given an array 'nums' of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].


// let arr = [1,2,3];
// pro = 1;
// let arr2 = [];
// for(let i=0; i<arr.length; i++){
//     pro = 1;
//     for(let j=0; j<arr.length; j++){
//         if(arr[i] != arr[j]){
//             pro = pro * arr[j]
//         }
//         else{
//             continue;
//         }
//     }
//     arr2[i] = pro;
// }
// console.log(arr2);




// Q 7. Find the kth largest element in an unsorted array.

// let arr = [5,4,7,2,8,6];
// let kth = 3;
// let a = arr.sort()
// console.log(a[arr.length-kth]);




// Q 10. Write a function to check if a given string is a palindrome.


// let str = "madam";
// let b = str.split("").reverse().join('')
// if(b == str){
//     console.log("string is a palindrome");
// }
// else {
//     console.log("String is not a palindrome")
// }



// Q3. Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// let str = '({[]})'

// if(str === "({[]})"){
//     console.log("true");
// }
// else{
//     console.log("false")
// }




// Q 6. Given an array of strings, group anagrams together.

// let str = "bts";
// let str2 = "stb";
// let arr = [];
// let arr2 = [];
// if(str.length == str2.length){
//     for(let i=0; i<str.length; i++){
//        arr[i] = str[i];
//        arr2[i] = str2[i];
//     } 

//     let b = arr2.sort();
//     let c = arr.sort();
//     let s = 0;
//     for(let k=0; k<str.length; k++){
//         if(c[k] == b[k]){
//             s = 1;
//         }
//         else {
//             s = 0;
//             break;
//         }
//     }
//     if(s == 1){
//         console.log("yes");

//     }
//     else {
//         console.log("no");
//     }
// }
// else {
//     console.log("not a anagram");
// }





// 4. Given a string, find the length of the longest substring without repeating characters.

let str = "abba";
let arr = [];
for(let i=0; i<str.length; i++){
    for(let j=i+1; j<str.length; j++){
        if(str[i]==str[j]){
            arr[i] = str[i];
        }
    }

}
console.log(arr.length);