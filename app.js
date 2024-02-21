// solution for ques 1 given below


function outer() {
    message = 'Hello from outer function!';
   function inner() {
    console.log(message);
   }
   return inner;
   }
   let innerFunc = outer();
   innerFunc();



//    solution for ques 2 given below ..



console.log(myLet);
  let myLet = 20;
