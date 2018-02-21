function prime(n){
    var array = [2]
    var sqrt = Math.sqrt(n);
    var judge = 0;
  
    for(var i = 3; i <= n; i= i + 2){
      judge = 0
      for(var j = 0; j < array.length; j++){
        if(i % array[j] == 0){
          judge = 1;
          break;
        }
      }
      if(judge == 0){
        array.push(i);
        console.log(i);
        
      }
    }
    //return array;
  }

prime(10000);