/*console.log("Hello from Node.js");

function add(x,y)
{
 return x+y;
}

let b= add(4,5);
console.log(b); */


function fizzbuzz(n)
{
   for( let i=0;i<=20;i++)
   {
      let str="";

      if(i%3===0)
      {
       str="fizz";
      }
      if(i%5===0)
      {
       str+="buzz";
      }
      if(str=='')
      {
       str+=i;
      }
      console.log(str);
   }
}

fizzbuzz(20);  
