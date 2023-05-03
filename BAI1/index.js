// const array = [4, 5, 6, 7];

// Array.prototype.mapCus = function (callback) {
// const newarr = [];
//   for (let item of this) {
//     newarr.push(callback(item));
//   }
//   return newarr;
// };
// const result = array.mapCus(
//     function (item) {
//   return item * 4;
// }
// );

// console.log(result);

// const user =
//  [
//     {
//         name:"thanh",
//         email:"thanh@gmail.com"
//     },
//     {
//         name:"thanh 2",
//         email:"thanh2@gmail.com"
//     },
//     {
//         name:"thanh 3",
//         email:"thanh3@gmail.com"
//     },
// ]

// Array.prototype.mapArr = function(callback){
//     const newArr = [];
//     for (let index of this) {
//         newArr.push(callback(index))
//     }
//     return newArr
// }
// const Result = user.mapArr(
//     function(element){
//         let key = element.email
//         return {[key]:element}
//     }

// )
// console.log(Result);

const words = ['spay','limits','excute','sqlite','java']

Array.prototype.filterCustom = function(callback){
    let wordnew = []
    for(let item of this){
        const bien =callback(item)
        if(bien){
            wordnew.push(item)
        }
    }
    return wordnew
}

const Result = words.filterCustom(
    function(element){
        return element.length >4
    }
)
console.log(Result);

const array1 = [1,2,3,4]

Array.prototype.reduceCustom =  function(callback,initiaValue){

    let i =0;
    let accumulator;

    if(initiaValue === undefined){
        accumulator = this[0];
        i++;
    }else{
        accumulator = initiaValue
    }
    while(i < this.length){
        console.table({
            i:i,
            accumulator: accumulator,
            value:this[i]
        })
        accumulator = callback(accumulator,this[i],i)
        i++;
    }
    return accumulator
}

let result = array1.reduceCustom(

    function(accumulator,currenValue,index){

        return accumulator+currenValue
    },
);
console.log(result);

const arrayInput = [1, 2, 3, 1];

// function CountNumberOccurrences(arrayInput,Occurrences){
//     let count = 0;

//     for(let i=0;i<arrayInput.length;i++){
//       if(arrayInput[i]==Occurrences)
//         count ++;
//     }

//     console.log("Phần tử "+Occurrences+" xuat hien "+count+ " lan");
// }
// CountNumberOccurrences(arrayInput, 9);

// function CountNumberOccurrences(arrayInput,number){

//  const result= arrayInput.reduce(
//     function(accumulator,currenValue){
//     let Occurrences;

//         if(currenValue === number){
//             Occurrences = 1
//         }else{
//             Occurrences =0
//         }
//         return accumulator+Occurrences;
//     },
//     0
//   )
// console.log(result);
// }
// const resultCount = CountNumberOccurrences(arrayInput,1)

// function maxElementArray(arrayInput) {
//   const is = arrayInput.reduce(function (accumulator, currenValue) {

//     if (accumulator > currenValue) {
//       return accumulator;
//     } else {
//       return currenValue;
//     }
//      }
//   );
//   console.log(is);
// }
// maxElementArray(arrayInput);
