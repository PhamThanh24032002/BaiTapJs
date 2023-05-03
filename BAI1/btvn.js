
// const arr = ['php', 'Javasscript', 'FrondEnd', 'ReactJs']

// Array.prototype.reverseCustom = function (callback) {
//      const newarr =[]
//     for (let item of this) {
//         newarr.push(callback(item))
//     }
//     return newarr.reverse()
// }

// const Result = arr.reverseCustom(
//     function(element){
//         return element
//     }
// )
// console.log(Result);
// const word = ["have git word"];

// Array.prototype.mapCustom = function (callback) {
//   const words = this[0].split(" ");
//   const result = [];
//   for(let item of words) {
//     const respon = callback(item);
//     result.push(respon);
//   }
//   return result.join(" ");
// }

// const Result = word.mapCustom(
//   function(element){
//     return element.toUpperCase();
//   }
// )

// console.log(Result);

// const words = ["have git word"];

// Array.prototype.capitalizeWords = function () {
//     const words = this[0].split(" ");
//     const result = [];

//     for (let item of words) {
//       const capitalizedItem = item.slice(0, 1).toUpperCase() + item.slice(1);
//       result.push(capitalizedItem);
//     }

//     return result.join(" ");
//   };

//   const capitalizedWords = words.capitalizeWords();
//   console.log(capitalizedWords); // "Have Git Word"
//   document.write(capitalizedWords); // hiển thị "Have Git Word" trên trang web
// function countVowels(str) {
//     const vowelList = "aeiouAEIOU";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (vowelList.indexOf(str[i]) !== -1) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   // Test thử hàm
//   console.log(countVowels("do viet duc")); // Kết quả mong đợi: 4
  
//   document.write(countVowels("do viet duc")); // hiển thị "Have Git Word" trên trang web

  
//   function isPrime(num) {
//     // Kiểm tra nếu số nhỏ hơn 2 thì không phải số nguyên tố
//     if (num < 2) {
//       return false;
//     }
  
//     // Duyệt từ 2 đến căn bậc 2 của số để kiểm tra số nguyên tố
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if ( num % i === 0) {
//         return false;
//       }
//     }
  
//     // Nếu không chia hết cho bất kỳ số nào trong khoảng từ 2 đến căn bậc 2 của số
//     // thì số đó là số nguyên tố
//     return true;
//   }
//   console.log(isPrime(1)); // true
//   document.write(isPrime(1)); // hiển thị "Have Git Word" trên trang we
  




// thuật toán nổi bọt


// let arratOrder = [
//   3,1,8,2,7
// ]
// cach 1
// let i =0;
// while(i < arratOrder.length){
// let j =0;
//     while(j < arratOrder.length-i){
//       console.table({
//         i:i,
//         j:j,
//         a_j:arratOrder[j],
//         a_j_1:arratOrder[j+1]
//       })
//       if(arratOrder[j] > arratOrder[j+1]){
//         let tmp = arratOrder[j]
//         arratOrder[j] = arratOrder[j+1]
//         arratOrder[j+1] = tmp
//       }
//       j++
//     }
//     i++
// }
// document.write(arratOrder)



// cach 2 
// let i =0;
// while(i < arratOrder.length-1){
// let j = arratOrder.length-1;
//     while(j > i){
//       console.table({
//         i:i,
//         j:j,
//         a_j:arratOrder[j],
//         a_j_1:arratOrder[j-1]
//       })
//       if(arratOrder[j] < arratOrder[j-1]){
//         let tmp = arratOrder[j]
//         arratOrder[j] = arratOrder[j-1]
//         arratOrder[j-1] = tmp
//       }
//       j--
//     }
//     i++
// }
// document.write(arratOrder)

// for khởi tạo 1 lần chạy n lần, bản chất của for giống kiểu static chi khowir tao 1 L
arr = [1,2,7,2,9]

let i =0;
while(i < arr.length - 1){
  let j = arr.length-1;
  while(j > i){
    if(arr[j] < arr[j-1
    
    ]){
      let tmp = arr[j]
      arr[j] = arr[j-1]
      arr[j-1] = tmp
    }
    j--
  }
  i++
}
document.write(arr)

