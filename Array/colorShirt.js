
function Unique_Shirts (arr,N) {
  
    let temp="";
    let dress=0;
    
    for(let i=0;i<N;i++)
    {
      let compare=0;
      for(let j=0;j<N;j++)
        if(arr[i]==arr[j])
          compare++;
        
      
      if(compare==1)
      {
        temp=temp+arr[i];
        dress++;
      }
          
    }
    return dress;
  }
  
  