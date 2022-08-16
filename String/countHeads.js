
var Count_Occ = (s) => 
{
    let arr = s.split("").sort();
    let heads = "";
    let visit = [];
    let k = 0;
    let res = "";
    for(let i=0;i<arr.length;i++)
    {
      let count = 0;
      for(let j=i;j<arr.length;j++)
      {
        if(arr[i] === arr[j])
        {
          heads = arr[i];
          count++;
        }
      }
      if(!visit.includes(heads) && count >= 2)
      {
        visit[k] = heads;
        visit[k+1] = count;
        k= k + 2;
      }
    }
      res = visit.join("");
    return res;

};
 
