

//let names = [1,2,3,4,5,6]

//let newname=names.map((name)=>{
  //  return name**2;
//})
//console.log(newname)

//Q2
//function grade(score) {
//    return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//           score >= 60 ? 'D' :
 //           'F';
// }

// console.log(grade(80))

// const car = {
// name:'Toyota',
//    model:'New',
//     year:2018
// }

// function newyear(carObject,newyear)
// {
//     carObject.year=newyear;
// }
// {
 //    const {model,year} = carObject;
 //    console.log(`Model is + ${model}`)
 //    console.log(`Year is + ${year}`)
    
// }
// newyear(car,2024)
// printcardetails(car)

// function isPrime(num) {
//     if (num <= 1) return false; // 0 and 1 are not prime numbers
 //    if (num <= 3) return true;  // 2 and 3 are prime numbers
 //    if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3

    // Check for factors from 5 to sqrt(num)
//     for (let i = 5; i * i <= num; i += 6) {
 //        if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
 //    return true;
// }

// Function to filter the array and return only prime numbers
// function getPrimes(arr) {
 //    return arr.filter(isPrime);
// }

// Example usage
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19, 23, 24, 29];
// const primes = getPrimes(numbers);

// console.log(primes)
//usecases of map,filter and reduce
// const users = [
 //  { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 }
// ];
// const adults = users.filter(user => user.age > 18);

// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(num => num * num);

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum: 10
// const person = {
 //  name: "John Doe",
 //  address: {
 //    street: "123 Elm St",
  //   city: "Somewhere",
  //   postalCode: "12345"
 //  },
//   contact: {
 //    phone: "555-1234"
 //  }
// };

// const phonenumber = person.contact?.phone;
// console.log(phonenumber)

// const email = person.contact?.email;
// console.log(email);
