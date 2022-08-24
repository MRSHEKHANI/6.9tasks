// Delaying decorator

// function f(x) {
//   console.log(x);
// }

function delay(f,ms){

    return function(){
        setTimeout(() =>f.apply(this,arguments) , ms);
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); 
f1500("test"); 

// without using arrow function

function f(x){
    console.log(x);
}

function delay(f,ms){

    return function(...args){
        let storethis = this;
        setTimeout(function(){f.apply(storethis,args)},ms)
    }
}
let f1100 = delay(f, 1100);
let f1700 = delay(f, 1700);

f1000("test"); 
f1500("test"); 