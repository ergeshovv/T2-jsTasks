var sum = 0;

function calculateSum(num) {
   for(var i = 1; i <= num; i++) {
     sum += i;
   } 
   return sum;
};

calculateSum(8);