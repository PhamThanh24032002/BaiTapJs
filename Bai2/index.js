
// b1 tạo object 

// const nameInfir = {
//     //key  value
//     name:"ducdo",
//     job:"IT",
//     address:"HA Noi",
//     'name-info':"duc do"
// }

//ko co space
//khong gach giua

// b2 lấy value từ object  

// lấy cách thuong 
// document.write(nameInfir.name)

// // dùng để lấy key bằng string
// console.log(nameInfir['name-info'])



// //set value
// nameInfir['age'] = 30;
// nameInfir.age=30

// //set value đến object khi dynmaic key: là key đấy nó chỉ được xác dịnh ở thời gain runtime
// let name2 = "ducdo"
// nameInfir[name2] = 123;


// // batap 

// let objUserName = {}
// let username = 'username';
// let password = 'password';
// let email = 'email';


// objUserName[username] ="thanh"
// objUserName[password] = 123456
// objUserName[email]="thachpham240202@gmail.com"

// // console.log(objUserName)
// const status = {
//     '0': 'pending',
//     '1': 'complete',
// }
// const newArr =  [
//     {
//        label: 'pending',
//        value: 'pending'
//     },
//     {
//        label: 'complete',
//        value: 'complete'
//     }
// ]
// const obj = {
//     a:'123'
// }
// //cách gọi dynmaic
// //vì sao lại dùng [] để gọi obj vì arr la object,obj bao trùm arr
// for (const key in newArr) {
//     console.log(newArr[key]);
    
// }
// for(const [key,value] of Object.entries(obj)){
//     console.log(`${key}: ${value}`);
// }



// //json-obj
// {
//     "  "
// }

// bai 1 
const courses = [

    {name: "js", price:200 },
    {name: "php", price:100 },
    {name: "reactJs", price:500 },
];

const new_number = courses.map(function(item){
   return Object.assign({},item,{name:item.name+ " couses"})
});
// console.log(new_number);

// bai 2 

const result = courses.filter(function(item){
 if(item.price >= 200){
    return true

 }
  return false
});
// console.log(result);

// bài 3
const resultse = courses.filter(function(item){
    return item.id !== 1
    // if(item.id !== 1){
    //    return true

    // }
    //  return false
   });

//    console.log('resultse',resultse);
//hãy biến dổi mảng name ->js course
//thực hiện loc với phần tử mảng có price >= 200
// xóa pần tử mảng
//tính tổng giá các khóa h có i = 1ọc
//js merge object

// bài 4
const sum = courses.reduce(
    function(acc,curren){
        return acc+curren.price
    },0
)
console.log(sum);


const state = []
