const findSum = (n) => {
    var i = 0;
    var sum =0;
      for(i=1;i<=n;i++)
      {
        if(i%2===0)
        sum = sum + i;
      }
      return sum;
  };
  
  