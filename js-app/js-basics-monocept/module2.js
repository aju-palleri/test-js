const DataService=function(){
    let obj={};

    obj.doTask1=function(){
        console.log("Doing task1");
    }

    obj.doTask2=function(){
        console.log("Doing task2");
    }
    return obj;

}();//immediately invoked function expression


DataService.doTask1();
DataService.doTask2();