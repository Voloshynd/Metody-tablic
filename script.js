'use strict'; 
// Metoda filter

const tab = ['Dmytro', 'Ann', 'Anastasia', 'David']; 
const fiteredTab = tab.filter(item=>{
    return item.length <= 5;
    
}); 
 
console.log(fiteredTab);

// Map 

const answer = ['IvAn', 'AnAstasia', 'Hello']; 


const correctedAnswers = answer.map(item => // map() transformuje kazdy elelemt tablicy 
    item.toLocaleLowerCase()
);
console.log(correctedAnswers);


// every i some - zwraca booleanowe aznaczenia  
 const some = [4, 'qwq', 'asfqwaf'];
  console.log(some.some(item => typeof(item) === 'number')); // chociazby jeden elelemnet odpowiada zadanemu warunku 
  console.log(some.every(item => typeof(item) === 'number')); // kazdy element ma odpowidadac zadanemu warunku 

// Reduce 

const numbers = [4, 4, 6, 7, 12, 3, 6]; 
 const res = numbers.reduce((next, previuos) => next + previuos)// reduce przyjmuje dwa argumenty next i previuos - nazwe dowolne, moze przyjmowac jeszcze trzeci arument jako poczatkowe znaczenia 
 console.log(res);

 const nums = [4, 4, 6, 7, 12, 3, 6]; 
 const resNew = numbers.reduce((next, previuos) => next + previuos, 3)// reduce przyjmuje dwa argumenty next i previuos - nazwe dowolne, moze przyjmowac jeszcze trzeci arument jako poczatkowe znaczenia 
 console.log(resNew);



// reduce ze stringami 
const strs = ['apple', 'plum', 'melon']; 
 const res1 = strs.reduce((next, previuos) => next +', ' + previuos)
 console.log(res1);