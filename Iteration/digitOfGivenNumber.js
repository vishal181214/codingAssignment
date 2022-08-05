const Number_Sum = (N) => 
{
  var sum = 0;
	while (N !== 0) {
            sum = sum + N % 10;
            N = parseInt(N / 10);
        }
	return sum;
};