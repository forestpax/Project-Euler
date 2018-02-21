//自然数n以下の素数を配列に格納して返す。
function primenumbers(n){
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
    }
  }
  return array;
}

function judgeprime(n){
  var array = [2]
  var sqrt = Math.sqrt(n);
  var judge = 0;
  var judge2 = 0;

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
    }
  }
  for(var i = 0; i < array.length; i++){
    if(n % array[i] == 0){
      judge = 1;
      break;
    }
  }
  if(judge == 0){
    return "prime";
  }else{
    return "not-prime"
  }
}

function primeFactorization(n,out) {
  // 平方根を保存
  var s = Math.floor(Math.sqrt(n));
  var r = 0;
  var resultprime = [];
  var resultexp = [];
  // 2から平方根までの素因数を求める
  for (var i = 2;i <= s;i++) {
    if ((n % i) == 0) {
      r = 0; // 指数カウンタクリア
      do {
        r++; // 指数カウンタプラス
        n = n / i;
      } while ((n % i) == 0);
      // 素因数iを指数とともに保存
      resultprime.push(i);
      resultexp.push(r);
    }
  }
  // 残った素数を追加
  if (n > s) {
    resultprime.push(n);
    resultexp.push(1);
  }
  //第2引数が、prime ⇒ 素因数の配列
  //第2引数が、exp ⇒ 各素因数の指数の配列
  if(out == "prime"){
    return resultprime;
  }else if(out == "exp"){
    return resultexp;
  }

}

function primenumbers2(n){
  var prime = [2,3];
  var sqrt = 0;
  var judge = 0;
  var k = 1;
  var array = [];
  while(6 * k < n){
    array = [(6 * k - 1) , (6 * k + 1)];
    sqrt = Math.sqrt(array[1]);
    for(var i = 0; i < prime.length; i++){
      for(var j = 0; j < array.length; j++){
        if(array[j] % prime[i] == 0){
          array.splice(j,1);
        }
      }
      if(array.length == 0 || sqrt < prime[i]){
        break;
      }
    }
    for(var i = 0; i < array.length; i++){
      prime.push(array[i]);
    }
    k = k + 1;
  }
  if(n < prime[prime.length - 1]){
    prime.pop();
  }
  return prime;
}

var n = 10000000;
console.time('timer2');
console.log(primenumbers2(n));
console.timeEnd('timer2');
