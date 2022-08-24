function f(a){
    console.log(a);
}

function throttle(func,ms){

    let isThrottle = false,
    savedArgs,
    savedThis;

   function wrapper(){
        if (isThrottle){
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottle = true;
   

    func.apply(this,arguments);

    setTimeout(function(){
        isThrottle = false;
        if (savedArgs){
            wrapper.apply(savedArgs,savedThis);
            savedArgs = savedThis = null;
        }
    },ms)
    }
    return wrapper;


}

let f1000 = throttle(f, 1000);

f1000(1); 
f1000(2);
f1000(3);