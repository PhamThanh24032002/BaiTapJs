// const cars = [
//     {
//         'make': 'audi',
//         'model': 'r8',
//         'year': '2012'
//     }, 
//     {
//         'make': 'ford',
//         'model': 'fusion',
//         'year': '2015'
//     }, 
//     {
//         'make': 'kia',
//         'model': 'optima',
//         'year': '2012'
//     },
// ];

// output
// const cars = {
//     'audi': [
//         {
//             'model': 'r8',
//             'year': '2012'
//         }, {
//             'model': 'rs5',
//             'year': '2013'
//         },
//     ],

//     'ford': [
//         {
//             'model': 'mustang',
//             'year': '2012'
//         }, {
//             'model': 'fusion',
//             'year': '2015'
//         }
//     ],

//     'kia': [
//         {
//             'model': 'optima',
//             'year': '2012'
//         }
//     ]
// }

// const result = {}
// cars.forEach(
//     function(item){
//         keyGroup = item.make;
//         if(!result[keyGroup]){
//             result[keyGroup] = []
//         }
//         result[keyGroup].push(item)
//     }
// )
// console.log(result);

const courses = [
    {name:'js',price:200},
]
const courses2 = [{name:'js',price:200},]
 function equa(courses,courses2){
    let istrue = false
    courses.forEach(
        function (item,index) {
            if(item.name == courses2[index]['name'] && item.price == courses2[index]['price']){
                istrue = true
                if(istrue == true){
                    console.log("2 chuỗi này giống nhau");
                    document.write("2 chuỗi này giống nhau")
                }
            }
        }
    );
    return istrue
}
const result =equa(courses,courses2);
console.log(result);
document.write(result)

function isSame(courses,courses2){
    let istrue = false
    courses.forEach(
        function (item,index) {
            if(item.name === courses2[index]['name'] && item.price === courses2[index]['price']){
                istrue = true
                if(istrue == true){
                    console.log("2 chuỗi này giống nhau");
                    document.write("2 chuỗi này giống nhau")
                }else{
                    document.write("2 chuỗi này khác nhau")
                }
            }
        }
    );
    
    return istrue
}

console.log(isSame(courses,courses2));