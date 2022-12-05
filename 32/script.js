"use strict"

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border: 'black',
        bg:'red'
    },
    maketest: function(){
        
    }

};
// console.log(options["colors"]["border"])

// delete options.name;

for (const key in options) {
    if(typeof(options[key]) ==='object'){
        for (const i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else{
       console.log(`свойство ${key} имеет значение ${options[key]}`); 
    }
    
}
console.log(Object.keys(options));
console.log(Object.keys(options).length);