//http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals,count){
   const resultAmount = [];
   count.map(el => animals.match(new RegExp(el,'g')) === null ? resultAmount.push(0) : resultAmount.push(animals.match(new RegExp(el,'g')).length));
   return resultAmount;
}


//http://www.codewars.com/kata/573975d3ac3eec695b0013e0


function findSimilarity(str,word){
   const result = [];
   const regstr=word[0] + word.slice(1,-1).replace(/./g,".") + word.slice(-1);                     
   const reg1=new RegExp("^" + regstr + "$");  
   str.split(' ').map(el => reg1.test(el) ? result.push(el) : result.push());
   return result.join(' ');
}

//https://www.codewars.com/kata/573bca07dffc1aa693000139

const regex=/^-?9\d*?0{4}$/;
