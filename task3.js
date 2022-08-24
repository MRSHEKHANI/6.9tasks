// Debounce decorator

let  f = debounce(console.log,1000);

function debounce(func,ms){
    let timeout;

    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this,arguments),ms);
        
    }
}

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);