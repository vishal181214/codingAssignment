const Find_Five = (N) => 
{
	 let count=0;
	 while(N!==0){
	   if(N%10==5)
	   count=count+1;
	   N=parseInt(N/10);
	 }
	 return(count);
};
