//https://www.codewars.com/kata/training-js-number-26-methods-of-arrayobject-map/train/javascript

function isolateIt(arr){
  const resultArr = [];
  arr.map(el => {
      if (el.length % 2 === 0) {
          el = el.split('');
          el.splice((el.length) / 2, 0, '|');
          resultArr.push(el.join(''));
      } else {
         el = el.split('');
         el.splice((el.length - 1) / 2, 1, '|');
         resultArr.push(el.join(''));
      }
  });
  return resultArr;
}

//https://www.codewars.com/kata/training-js-number-27-methods-of-arrayobject-filter/train/javascript

function countGrade(scores){
  return {
            S: scores.filter(el => el === 100).length,
            A: scores.filter(el => el < 100 && el >= 90).length,
            B: scores.filter(el => el < 90 && el >= 80).length,
            C: scores.filter(el => el < 80 && el >= 60).length,
            D: scores.filter(el => el < 60 && el >= 0).length,
            X: scores.filter(el => el === -1).length
         };
  }
  
  
  //https://www.codewars.com/kata/training-js-number-28-methods-of-arrayobject-every-and-some/train/javascript
  
  function mirrorImage(arr){
      let a = 0;
      let b = 0;
      arr.some((x,i) => {
         a = arr[i].toString();
         if(i === arr.length - 1) {
            b = 0;
         } else {
            b = arr[i + 1].toString().split('').reverse().join('');
            return a === b;
         }
      });
      if (a && b) { 
          a = Number(a);
          b = Number(b.split('').reverse().join(''));
          return [a,b];
      } else {
          return [-1,-1];
      } 
}

//https://www.codewars.com/kata/training-js-number-25-methods-of-arrayobject-reverse-and-sort/train/javascript

function sortIt(arr){
  const result = arr.slice();
  return result.sort((a,b) => {
             let n = arr.filter(x => x === a).length;
             let m = arr.filter(y => y === b).length;
             return n == m ? b - a : n - m;
         }); 
}
