const string = 'apple, banana, kiwi';

// // 1. Өгсөн string - ийн бүх үсгийг том болго: 'APPLE, BANANA, KIWI'
// // -- Энд кодоо бичнэ үү!
function toUpperCase(string) {
    let sum = "";
    for (let i = 0; i < string.length; i++) {
        let a = string[i].charCodeAt(0);
        a = a >= 97 ? a - 32 : a;

        sum += String.fromCharCode(a)
    }
    return sum;
}
console.log(toUpperCase(string))



// // 2. Өгсөн string - ийг дараах хэлбэртэй болго: 'Apple; Banana; Kiwi'
// // -- Энд кодоо бичнэ үү!
function joinArray(string, char) {
    let result = '';
    for (let i = 0; i < string; i ++) {
        result += char;
    }
    return result + string;
}
console.log(joinArray(string, ', '));







const array = ['d', 'e', 'c', 'a', 'b'];

// 3. Өгсөн array - ыг үсгийн дарааллаар эрэмблэ.
// -- Энд кодоо бичнэ үү!
const arr = (array)
   console.log(arr.sort());


// 4. Өгсөн array - ын голын 3н элемэнтийг салгаж аваад array1 - гэсэн хувьсагчид хийнэ.
//    array болон array1 ийг хэвлэ.
// -- Энд кодоо бичнэ үү!
const $splace = (array)
$splace.splice(1, 3)
console.log($splace)

// // 5. Өгсөн array - ын эхний элемэнтийг устага
// // -- Энд кодоо бичнэ үү!
const $delete = (array)
$delete.shift()
console.log($delete)

// 6. Өгсөн array - ын сүүлийн элемэнтийг устага
// -- Энд кодоо бичнэ үү!
const $delet = (array)
$delet.pop()
console.log($delet)

// 7. Өгсөн array - ын урд 'z' үсэг нэм
// -- Энд кодоо бичнэ үү!
const $unshift = (array)
$unshift.unshift('z')
console.log($unshift)

// 8. Өгсөн array - ын ард 'j' үсэг нэм
// -- Энд кодоо бичнэ үү!
const $push = (array)
$push.push('j')
console.log($push)

// 9. Өгсөн array - ыг JSON string болго.
// -- Энд кодоо бичнэ үү!
const $JSON = (array)
let jsonObject = JSON.stringify($JSON)

console.log(jsonObject)