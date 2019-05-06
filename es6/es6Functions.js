// Using Default Value for Parameter

 function calculate(inr=1,convRate=60){

   // if(convRate === undefined){
   //     convRate = 60;
   // }
 
    return inr * convRate;
 }

 // Rest Parameters

   function sum(a,b,...numbers){

      let total = 0;
// forEach function takes a arrow function as argument
    
console.log(numbers.length);

    numbers.forEach(eachNumber => 
              total+=eachNumber);
   
      console.log(total);
   }

 const usd = calculate();

 console.log(usd);
// JavaScript coverts the list of Numbers into an 
// array since ... rest parameter is used
 sum(1,2,3,4,5);


 // Spread Parameter

   function calculate(a,b,c){

      console.log(a+b+c);
      console.log(a);
      console.log(b);
      console.log(c);
   }

   let data = [2,4,6];

   calculate(...data);

   const electiveMarks = [70,60,80];
   const coreMarks = [90,92,98]

   const merge = [electiveMarks,...coreMarks];

   console.log(merge);

   const inital ={id:101,name:'Ramesh'};
   const updated = {age:45};
   const markScored =[89,78,90];
   const mergeObj = {...inital,...updated,
                   marks:[...markScored]};

   console.log(mergeObj);