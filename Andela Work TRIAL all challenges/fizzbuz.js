let i=0;
for(i=1;i<=20;i++){
    if(i%5===0&&i%3===0){
        console.log("FizzBuzz");

    }
    elseif(i%5===0){
        console.log("Buzz");
    }
    elseif(i%3===0){
      console.log("Fizz");  
    }
    else{
        console.log(i);
    }
}