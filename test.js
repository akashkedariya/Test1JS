
const accountId = 12345678                   // Not change beacause 'const'
let accountEmail = "samip@gmail.com"            // Current use
var accountPassword = "samip@123"               // old time use
accountCity = 'SUrat'                            // default

// accountId = 55555555                     
accountEmail = "alpesh@gmail.com"

// console.log(accountId)
// console.table([accountEmail, accountPassword, accountCity])

let x ;
// x ++ ;
// x ++ ;
// console.log(typeof x)

let result = multiply(4,5)

function multiply(p1,p2){

    return p1 * p2 
}

// console.log(result)

// ================================================================================

// let stu_obj = {}
// stu_obj.name = 'Hiren'  // Add
// stu_obj.city = 'Surat'
// stu_obj.name = 'Tarun'  // Update
// console.log(stu_obj.name)

let stu_obj = new Object()
stu_obj.name = 'Hiren'  // Add
stu_obj.city = 'Surat'
stu_obj.name = 'Tarun'  // Update
// console.log(stu_obj['name'])

// ================================================================================

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age:50,
//     eyeColor: "blue"
//   };
  
// // console.log(person)
// delete person['age']
// console.log(person)

// ================================================================================

myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

//   console.log(myObj.myCars.car1)

// console.log(myObj)

// ================================================================================

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  },
  fullDetailes : function(){
    let full = this.name + ' ' + this.age

    return full

  }
}

// console.log(myObj.fullDetailes())

// ================================================================================

// const person2 = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Build a Text
// // let text = " "
// // let student = new Object()
// let student = {}
// student.city = 'Surat'
// for (let x in person2){
//   console.log(x,person2[x])
//   // text += person2[x] + ' '

//   student.x = person2[x]
//   // console.log(person2[x])
// }

// console.log(student)
// console.log(text)

// ================================================================================

const person3= {
  name: "John",
  age: 30,
  city: "New York"
};

let obj = Object.values(person3)
let obj2 = Object.keys(person3)

// console.log(obj,obj2)
// let text = " "
let student = {}
student['Newcity'] = 'Surat'
for (let x in person3){
  
  student[x] = person3[x]

}
// console.log(student)

// ================================================================================

// for (let n=1; n<=5; n ++){
//   // console.log(n)
//   for (let j=1; j<n+1 ; j ++)
//     console.log('*')
// }

// ================================================================================

const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text3 = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  // text3 += fruit + ": " + amount + "<br>";
  // console.log(fruit,amount)
}

// console.log(text3)
// document.getElementById("demo").innerHTML = text3;


// ================================================================================

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// let objects = JSON.stringify(person)
// console.log(objects)

// ================================================================================

function Emp(f_name,l_name){
  this.first_name = f_name;
  this.last_name = l_name;

  return this.first_name

}
const objects = new Emp('Anand', 'Maurya')

console.log(objects)

// ================================================================================


// ================================================================================



// ================================================================================


// ================================================================================



// ================================================================================


// ================================================================================



// ================================================================================


// ================================================================================



// ================================================================================


// ================================================================================



// ================================================================================



// ================================================================================



// ================================================================================



// ================================================================================



// ================================================================================


// ================================================================================



// ================================================================================


// ================================================================================



// ================================================================================


// ================================================================================



// ================================================================================


// ================================================================================



// ================================================================================