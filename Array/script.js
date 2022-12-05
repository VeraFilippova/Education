// const arr =[1,2,3,6,8];
// arr.pop();  // удаляет последний эл. массива
// arr.push(10);    // добавляет новый эл.массива последним

// // for(let i=0; i<arr.length; i++){
// //     console.log(arr[i]);

// // }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// for (let value of arr) {
//     console.log(value);
// }

const str = `aa,cc,tt`;
const prod = str.split(","); //разбивает строку по символу

const prodd = str.sort(); // сортировка
console.log(prodd);

function copy (mainObj){
    let objCopy ={};
    let key;
    for(key in mainObj){
        objCopy[key]=mainObj[key];
    }
    return objCopy;
}



//Cоздание поверхностной копии объекта(создает копию на первой вложенности)
function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,             // первая вложенность
  b: 5,             // вторая вложенность
  c: {              //<- ссылочный объект (глубокая копия не создается )
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);
newNumbers.a = 7;
console.log(newNumbers);
console.log(numbers);


// *** ------- *** //
//Object.assign( )

const add ={
    d:17,
    e:20
};

console.log (Object.assign(numbers, add));  // Object.assign(arg1, arg2)  --- метод создает независимую поверхностную копию объекта

const clon = Object.assign({}, add);
clon.d=20;
console.log(add);
console.log(clon);


// *** ------- *** //
// slice();

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();      //  <- создает копию массива

newArray[1] = 'sldjnc';
console.log(oldArray);
console.log(newArray);


// *** ------- *** //
// ES6 ES8   -> ...   спред оператор
const  video = ['youTube', 'vimeo', 'rutube'],
        blog = ['wordpress', 'livejornal', 'blogger'],
        internet = [...video, ...blog, 'vk', 'fasebook'];

console.log(internet);        

