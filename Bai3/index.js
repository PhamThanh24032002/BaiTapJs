//1.Write a JavaScript program to list the properties of a JavaScript object

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}
function namee(student) {
    const conn = [];
    for(let item in student){
        conn.push(item)
    }
    return conn.join(',')
}
const result = namee(student);
console.log(result);

// let ducInfor = {
//     name:"duc",
//     address:{
//         city:"ha noi"
//     }
// }
// let dungInfor = {
//     name:"dung",
//     address:ducInfor.address
// }
// //edit
// dungInfor.name = "manh";
// dungInfor.address.city = "Ho Chi Mninh";

// //tt cua duc
// console.log(ducInfor.name);
// console.log(ducInfor.address.city);
// 2.Write a JavaScript program to get the length of a JavaScript object 
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  var length = Object.keys(student).length;
  
  console.log("Length of the object is: " + length);


  // 3.Write a JavaScript program to display the reading status (i.e. display book name, author name and
  var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
    }
  ];
  
  for (var i = 0; i < library.length; i++) {
    var book = library[i];
    var bookInfo = book.title + " của " + book.author;
  
    if ((book.readingStatus) == true) {
      console.log("Bạn đã đọc xong " + bookInfo);
    } else {
      console.log("Bạn chưa đọc " + bookInfo);
    }
  }

//   4.Write a JavaScript program to get the volume of a Cylinder with four decimal places using object
// classes
  function calculateCylinderVolume(radius, height) {
    const pi = Math.PI;
    const volume = pi * radius * radius * height;
    return volume.toFixed(4);
  }
  const cylinderVolume = calculateCylinderVolume(2, 5);
  console.log("Thể tích của hình trụ là: " + cylinderVolume);
  

// 5.Write a JavaScript program which returns a subset of a string 
  function getSubsets(str) {
    let subsets = [];
    
    // Generate all possible substrings of the input string
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let subset = str.substring(i, j);
        subsets.push(subset);
      }
    }
    
    return subsets;
  }
  
  console.log(getSubsets("dog")); // Output: ["d", "do", "dog", "o", "og", "g"]

//6.Write a JavaScript program to create a Clock.

  function show_time(){
    let date = new Date();
    const house = date.getHours();
    const miunints = date.getMinutes();
    const secont = date.getSeconds();
    let fulltop = house+':'+miunints+':'+secont;
    console.log(fulltop);
  }
  setInterval(show_time,1000)
  
//7. Write a JavaScript program to calculate the area and perimeter of a circle

  function chuvi_dientich(r) {
    
    const pi = Math.PI;
    chuvi = r*2*pi;
    dientich = pi*r*r;
    return {chuvi,dientich}
   
  }
 
  console.log(chuvi_dientich(5));

  var person = {
    name: "John",
    age: 30,
    address: "123 Main St",
    phone: "555-555-5555"
  };

  function getPersonLoop(obj) {
    const result = [];
    for(let item in obj){
      result.push(obj[item])
    }
console.log("bai 7");
    return result
  }
  console.log(getPersonLoop(person));

// 9.. Write a JavaScript function to get a copy of the object where the keys have become the values and

  function getInveted(obj){
    const newobj = {}
for(let item in obj ){
      newobj[obj[item]] = item
}
return newobj
  }
  console.log(getInveted(person));



  // 10 Viết một hàm JavaScript để kiểm tra xem một đối tượng có chứa thuộc tính đã cho hay không

  function LoopCheck(obj,keys){
    for(let item in obj){
       if(item === keys){
        return true
       }
    }
    return false

  }
  console.log(LoopCheck(person,'name'));
  console.log(LoopCheck(person,'gender'));

// bài 11 Viết một chương trình JavaScript để tính giai thừa của một số.

  function FakeToriers(giaithua) {
  if(giaithua===0){
    return 1
  }else{
    return giaithua *FakeToriers(giaithua-1) ;    
  }
  }
console.log( FakeToriers(10));
 

// selection sort


let array = [8, 7, 9, 2, 3, 1, 5, 4, 6];

function selectionsort(array){
  for(let i =0; i< array.length-1;i++){
    let min = i;
    for(let j = i+1;j <array.length;j++){
      if(array[min] > array[j]){
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp

  }
}
selectionsort(array)
console.log(array);