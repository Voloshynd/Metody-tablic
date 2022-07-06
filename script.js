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


 // Object.entries()
 const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log( `${key}: ${value}`);
    console.log(typeof key, value);
  };

const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));
  
// Itearcja po obiektach za pomoca Object.entries() i metody forEach() 

const object = { foo: 'bar', baz: 42 };
Object.entries(object).forEach(([key, value]) => console.log(`${key}: ${value}`));

const object2 = {
    Ivan: 'person',
    Ann: 'person',
    dog: 'animal', 
    cat: 'animal' 
};


// Object.entries(object2).forEach(([key]) => console.log(key)); 
const newPersonsNames = []; 
 const newPersons = Object.entries(object2).filter((item)=> {
    if(item[1] === 'person'){
        newPersonsNames.push(item[0]);
     
    }});

    console.log(newPersonsNames);


    const films = [
        {
            name: 'Titanic',
            rating: 9
        },
        {
            name: 'Die hard 5',
            rating: 5
        },
        {
            name: 'Matrix',
            rating: 8
        },
        {
            name: 'Some bad film',
            rating: 4
        }
    ];
    // const newArr = []; 
    // function showGoodFilms(arr) {
      
    //    arr.filter(item =>{
    //     if(item.rating >= 8 ) newArr.push(item)
    //    }
    //    )
    //    console.log(newArr);
    // };

    // showGoodFilms(films); 


    //1.
//     function showListOfFilms(arr) {
//    const listOfFilms = arr.map(item => item.name).join(', ');
//    console.log(typeof listOfFilms);
//     }

//     showListOfFilms(films);


//2.
    // function showListOfFilms(arr) {
    //     const listOfFilms = arr.map(item => item.name).toString();
    //     console.log(  listOfFilms);
    //      }
     
    //      showListOfFilms(films);

//3.

        //  function showListOfFilms(arr) {
        //     const listOfFilms =  arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
        //     console.log(listOfFilms)
        // };

        // showListOfFilms(films) 

// 1.
        // function setFilmsIds(arr) {
        //     let idx = 0; 
        //     const listOfFilms = arr.map(item => Object.assign(item, {id: `${idx++}`}))
        //     console.log(listOfFilms);
        // };

        // setFilmsIds(films)

//2.

function setFilmsIds(arr) {
    return arr.map((film, i) => { // metoda map() przyjmuje dwa argumenty 
        film.id = i;
        return film;
    });
}
setFilmsIds(films);


// 1.


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    console.log(arr.every(film => film.id || film.id === 0 ? `${film.id} true` : false))
}

checkFilms(tranformedArray);