 
 function arrayMin(arr) {
    let N = arr.length;
   for(let i=0;i<N;i++)
   {
     for(let j=0;j<N;j++)
     {
       if(arr[j]>arr[j+1])
       {
         let temp = arr[j+1];
         arr[j+1] = arr[j];
         arr[j] = temp;
       }
     }
   }
   return arr[0];
 
 }
 
 function arrayMax(arr) {
   let N = arr.length;
   for(let i=0;i<N;i++)
   {
     for(let j=0;j<N;j++)
     {
       if(arr[j]<arr[j+1])
       {
         let temp = arr[j+1];
         arr[j+1] = arr[j];
         arr[j] = temp;
       }
     }
   } 
   return arr[0];
 }
 
 