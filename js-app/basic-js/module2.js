let Counter=function(){
    //private members

    let privateCounter=0;

    function changeBy(val){
        privateCounter+=val;
    }

    //public functions
    return{
        increment: function(){
            changeBy(1);
        },

        decrement(){
            changeBy(-1);
        },

        value(){
            return privateCounter;
        }
    }

}();

// console.log(Counter);

console.log(Counter.value());
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.value());
Counter.decrement();
Counter.decrement();
console.log(Counter.value())

