function check_evenOdd(num)
{
  if(num % 2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function check_prime(number)
{
  // logic
}




for(let i = 1; i <= 10; i++)
  {
    let result = check_evenOdd(i) // true or false
    let result2 = check_prime(i)

    if(result2 == true)
    {
      console.log(i,"is prime")
    }
    else
    {
      console.log(i,"is prime")
    }

    if(result == true)
    {
      console.log(i,"is even");
    }
    else
    {
      console.log(i,"is odd");
    }
  }