//https://www.codewars.com/kata/training-js-number-29-methods-of-arrayobject-concat-and-join/train/javascript

const bigToSmall = arr => {
     return [].concat(...arr).sort((a,b) => b-a).join('>');  
}



//https://www.codewars.com/kata/training-js-number-30-methods-of-arrayobject-reduce-and-reduceright/train/javascript

function tailAndHead(arr){
   let tailAndHeadArr = [];
   arr.map((x,i) => {
      let a = arr[i].toString().split('').map(Number);
      if(i != arr.length - 1){
         let b = arr[i + 1].toString().split('').map(Number);
         tailAndHeadArr.push(a[a.length - 1] + b[0]); 
      }    
   });
   return tailAndHeadArr.reduce((a,b) => a*b); 
}

//https://www.codewars.com/kata/training-js-number-31-methods-of-arrayobject-isarray-indexof-and-tostring/train/javascript

function blackAndWhite(arr){
    let result;
    if(Array.isArray(arr)) {
       arr.indexOf(5) != -1 && arr.indexOf(13) != -1 ? result = 'It\'s a black array' : result = 'It\'s a white array';
    } else {
      result = 'It\'s a fake array'
    }
    return result;
}

//https://www.codewars.com/kata/array-number-reduce/train/javascript


Array.prototype.reduce = function(process, initial) {
   let array = [...this];
   if(initial) {
     for(let i of array) {
       initial = process(initial,i);
     }
   } else{
     initial = array[0];
     array.shift(0);
     for(let i of array) {
       initial = process(initial,i);
     }
   }
   return initial;
}
