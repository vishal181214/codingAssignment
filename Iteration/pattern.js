const Print_pattern = (N) => 
{
  var i = 0;
  var j = 0;
  var str = "";
 for(i=1;i<=N;i++)
 {
   for(j=1;j<=i;j++)
    {
      str += "*";
    }
      str += "\n"; 
 }
   console.log(str);
};
