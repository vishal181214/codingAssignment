const Prime_Check = (N) => 
{
	 let count = 0;
	 for(let i = 1; i <= N; i++){
	   if(N%i === 0)
	    count++
	 }
	 if(count == 2)
	  return "YES"
	 else
	  return "NO"

};
