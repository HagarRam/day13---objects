// console.log("4");
// let person = {key:"value", good:"bad"};
// console.log(person["key"]);

// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random()*100)+1}johnson ave`,
//     city:'Brooklyn',
//     state:'NY',
//     zipcode:'11206'
// }
// console.log(`The address is ${restaurant["address"]} in ${restaurant["city"]} state ${restaurant["state"]} and the zipcode ${restaurant["zipcode"]}`);
// //object - item(id), total(function)

//ex.0
//1
let student = {   
    name: "Adam",
    age : 19,
    grade: 5,
    classes: ["a","b"],
}
//2
let book = {
    title :"the road not taken",
    author :"anna",
    year :1990,
    genre :"drama",
    publisher:"abc",
    pages :200,
    isbn :"abc"
}
book.number = 4;
//3
const car = {
    make: "Tesla",
     model: "Model S",
     year: 2020,
     color: "Red",
     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
   };
   console.log(car.features[1]);
//4
let store = {
name :"farm",
location: "tel aviv",
categories: 'animals',
products: [{names: "dog", price:5, quantity:8},
         {names: "cat", price:3, quantity:4},
        {names: "horse", price:1, quantity:10}],
}
function totalPrice(store){
    let sum = 0;
    for(let i = 0; i<store.products.length;i++){
        sum +=store.products[i].price * store.products[i].quantity
    }
    console.log(sum);
}

//ex.1
//1
let person = {
    age : 18,
    height: 170,
    weight: 60,
}
function valueOfPerson(x){
   console.log(`the age is ${x.age} his height ${x.height} and weight ${x.weight}`);
    }
valueOfPerson(person);
//2
function lengthOfObject(x){
    console.log(x.length);
}
lengthOfObject(person);
//3
let client = "John";
const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

function displayGroceries(){
    console.log(groceries.fruits);
}

function cloneGroceries(user){
     client = [...user];
    client = "betty"
    let shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.paid = false;
}

//ex.2
let book1 = {
    items: [
   {title: "The road not taken by anna up", alreadyRead: false},
   {title: "To know how to live by gray lol", alreadyRead: true},
   {title: "The damage by tom kim", alreadyRead: false}
]}

function readABook(book2){
    for(let i =0 ; i<book2.items[i].length;i++){
    if (book2.items[i].alreadyRead){
        console.log(`You already read "${book2.items[i].title}"`);
    }
    else{
        console.log(`You still need to read "${book2.items[i].title}"`);
    }
}}
readABook(book1);
//ex.3
const myPenguin = {
    name: "Penguin Pete",
    origin: "The Penguin Family",
    author: "Lucy Dahl",
    notes: "Penguin Pete is the main character in a series of children's books written by Lucy Dahl. He is a playful and adventurous penguin who lives with his family in the South Pole.",
  };
  console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}!`);
    myPenguin.canFly = true;
    myPenguin['chirp'] = function(){
        console.log("CHIRP CHIRP! Is this what penguins sound like?");
    }
  myPenguin.chirp();
myPenguin['sayHello'] = function(){
    console.log(`Hello, I'm a penguin and my name is ${this.name}!`)
}
myPenguin.sayHello();
myPenguin.name = "Penguin Nuna";
myPenguin["fly"] =function(){
    if(this.canFly){
        console.log("I can fly!");
    }
    else{
        console.log("No flying for me!");
    }
}
myPenguin.fly();
//didnt understand 13,14

//ex.4
myPenguin.favoirteFoods = ['burger','chips','avocado'];
console.log(myPenguin.favoirteFoods[1]);
let firstFavFood = myPenguin.favoirteFoods[0];
myPenguin.favoirteFoods.push("gelato");
console.log(myPenguin.favoirteFoods.length);
myPenguin.favoirteFoods.pop();
myPenguin.favoirteFoods.push("pineapples");
let lastFavFood = myPenguin.favoirteFoods[myPenguin.favoirteFoods.length -1];
console.log(lastFavFood);
myPenguin.favoirteFoods1 = function(){
    for(let i = 0; i < this.favoirteFoods.length; i++){
        console.log(`Hello, I'm a penguin. my name is ${this.name}! and my favoirte food is ${this.favoirteFoods[i]} `);
    }
};
myPenguin.favoirteFoods1();

//ex.5
const gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
  };
  
  const ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
  };
  
  const fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
  };

  let penguins = {names: [`${gunter.name}`,`${ramon.name}`,`${fred.name}`]};
  console.log(penguins.names);
  let firstPenguin = penguins.names[0];
  console.log(firstPenguin);
  let secondPenguin = penguins.names[1];
  let len = penguins.names.length;
  console.log(penguins.names[len -1]);
  penguins.names.push(myPenguin.name);
  myPenguin.canFly = true;
  penguins['sayHello'] = function(){
    console.log(`Hello, Im a penguin and my name is ${this.names[0]}!`)
}
penguins.sayHello();
penguins["namePenguins"] = function(){
    for(let i = 0; i<penguins.names.length; i++){
        console.log(`the value of ${penguins.names[i]} is ${i}`);
    }
}
penguins.namePenguins();
penguins["sayHello1"] = function(){
    for(let i = 0; i<penguins.names.length; i++){
        console.log(`Hello, I'm a penguin and my name is ${this.names[i]}!`);
    }

}
penguins.sayHello1();
// //not working
penguins["newProperty"] = function(){
    for (let i = 0; i < this.length; i++) {
      this[i].numberOfFeet = 2;
      console.log("numberOfFeet:", this[i].numberOfFeet);
    }
  };
penguins.newProperty();
//didnt understand, ex5,part12
 penguins["canFly2"] = function(){
    for(let i = 0; i < penguins.length; i++){
        if(penguins[i].canFly){
            console.log(`${penguins.names[i]} can fly!`)
        }
        else{
            continue;
        }
    }
 }
 penguins.canFly2();

 //ex.6
 let store1 = {
    name: "max20",
    location: "tel Aviv",
    categories:"home",
    products:[{names: "pot", price:5, quantity:8},
             {names: "oven", price:3, quantity:4},
             {names: "oven", price:5, quantity:4},
            {names: "broom", price:1, quantity:10}],
}

store1["totalPrice"] = function(name2){
    let totalPrice1 = 0;
    for(let i = 0; i<this.products.length ;i++){
        if(this.products[i].names === name2){
            totalPrice1 += this.products[i].price;
        }
    }
    console.log(totalPrice1);
    }
store1.totalPrice("oven");

//ex.7
let school = {
    name: "yarkon",
    location: "hod hasharon",
    student: [{names: "hagar", age:5, grade:8, classes:"C"},
            {names: "hila", age:3, grade:4, classes:"C"},
            {names: "mika", age:5, grade:4, classes:"A"}],
    teacher: [{name: "dana", subject: "history", gradeLevel:[8,2,3]},
            {name: "liat", subject: "math", gradeLevel:[1,4,6]},
            {name: "maya", subject: "sport", gradeLevel:[5,2,7]}
]};

school["inClass"] = function(nameTecher, nameStudent){
    for(let i = 0; i<this.student.length; i++){
    for(let j = 0; i<this.teacher.length; j++){
        let gradeStudent = this.student[i].grade;
        if(this.teacher[j].gradeLevel.includes(gradeStudent) ){
            console.log(`${this.teacher[j].name} is ${this.student[i].names}'s teacher`);
        }
        else{
            console.log(false);
        }

    }
    }
}
// school.inClass("dana", "hagar");

//ex.8
const library = {
    name: "Springfield Public Library",
    location: "Springfield",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Novel",
        publisher: "Charles Scribner's Sons",
        pages: 180,
        isbn: "978-0-7432-6555-2",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Novel",
        publisher: "J.B. Lippincott & Co.",
        pages: 281,
        isbn: "978-0-044-93349-2",
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Novel",
        publisher: "Little, Brown and Company",
        pages: 214,
        isbn: "978-0-316-76953-3",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Novel",
        publisher: "T. Egerton",
        pages: 279,
        isbn: "978-0-141-19031-4",
      },
    ],
  };
  library["allTitle"] = function(x){
    for(let i = 0; i<this.books.length; i++){
        for(let j = 0; j < this.books.length; j++){
            if(this.books[i].genre == x){
                console.log(this.books[i].title);
            }
            else{
                continue;
            }


        }

  }
}

library.allTitle("Novel");