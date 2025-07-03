// let nom_number = 25;
// let nom_bool = true;
// let nom_object = {fName : "Barry", lastName:"Alpha Oumar", age:25}
// let nom_array =["barry AOB",25, false];
// let nom_string = "AOB Academy Online GN";

// console.log(nom_number);
// console.log(typeof(nom_number))

// console.log(nom_bool);
// console.log(typeof(nom_bool));

// console.log(nom_object);
// console.log(typeof(nom_object))

// console.log(nom_array);
// console.log(Array.isArray(nom_array))

// console.log(nom_string)
// console.log(typeof(nom_string))

// class Personne{
//     constructor(fName, lastName, age){
//         this.fName = fName;
//         this.lastName = lastName;
//     }
//     sayHello(){
//         console.log(`Bonjour ${this.fName}: Je suis suis ${this.lastName} et j'ai ${this.age} ans.`)
//     }
// }
// let personne = new Personne("Alpha Oumar", "Barry", 25);
// personne.sayHello()

/*Exercice sur les opérateurs */
// /*Exo 1*/
// let a = 5, b = "5"; 
// console.log(`Le nombre ${a} == "5" est il vrai ? la reponse est: `, a == b);
// console.log(`Le nombre ${a} === "5" est il vrai ? la reponse est: `,a === b);
// console.log(`Le nombre ${a} != "5" est il vrai ? la reponse est: `,a != b);
// console.log(`Le nombre ${a} !== "5" est il vrai ? la reponse est: `,a !== b);
// /*Exo 2*/
// let age = 20, inscrit = true;
// let autorise = (age >= 18) && (inscrit = true)



// if {
//     let autorise = true;
//     console.log(`Votre autorisation est à : ${autorise}`);
// }
// if((age >= 18) && (inscrit)){
//     let refuse;
//     console.log(`Votre autorisation est à : ${autorise}`);
// };

let a = 10, b = 3, x = 5, y = "5";
//          +, *, /, %, **
 console.log(`a + b : ${a + b}`);
 console.log(`a - b :${a-b}`);
 console.log(`a * b :${a*b}`);
 console.log(`a / b : ${a/b}`);
 console.log(`a % b:${a%b}`);
 console.log(`a ** b :${a**b}`);//x sup y, x

 console.log(`x == y: ${x == y}`);
 console.log(`x === y: ${x === y}`);
 console.log(`x != y : ${x != y}`);
 console.log(`x !== y : ${x!==y}`);
 console.log(`x > y :${x>y}`);
 console.log(`x >= y :${x>=y}`);
 console.log(`x < y : ${x<y}`);
 console.log(`x <= y: ${x <= y}`);

 //Les opérateurs logique && et || 
 let isStudent = true, isTeacher = false;
 console.log(`isStudent && isTeacher : ${isStudent && isTeacher}`);
 console.log(`isStudent || isTeacher : ${isTeacher || isStudent}`);
 let not_isSteacher = !isTeacher
 console.log(`!isTeacher :${not_isSteacher}`)
 console.log(!isStudent)
//Le ternaire
a = 19;
let resul = (a >= 18)? "Majeur":"Mineur";
console.log(resul)
