//https://www.codewars.com/kata/training-js-number-23-methods-of-arrayobject-push-pop-shift-and-unshift/train/javascript

function infiniteLoop(arr,d,n){
   if(d === 'right') {
    for (let i = 0; i < n; i++) {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
   }
   if(d === 'left') {
    for (let i = 0; i < n; i++) {
      arr[2].push(arr[0].shift());
      arr[0].push(arr[1].shift());
      arr[1].push(arr[2].shift());
    }
   }
  return arr;
}



//https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction/train/javascript

const shuffleIt = (arr,...shiftThis) => {
      for (el of shiftThis) {
         [arr[el[0]], arr[el[1]]] = [arr[el[1]], arr[el[0]]];
      }
      return arr;
}


//https://www.codewars.com/kata/training-js-number-24-methods-of-arrayobject-splice-and-slice/train/javascript

function threeInOne(arr){
   const slicedArray = [];
   const resultArray = [];
   for(let i = 0; i < arr.length; i+=3) {
      slicedArray.push(arr.slice(i,i+3));
   }
   slicedArray.map(el => resultArray.push(el.reduce((acc, val) => acc + val)));
   return resultArray;
}
