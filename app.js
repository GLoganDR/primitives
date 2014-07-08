// this is a single line comment
//

/* this
 * is
 * a
 * multiline
 * comment
 */

var a = 3;
var b = 2;
var c = a + b;

console.log('this is a string');
console.log (a);
console.log (b);
console.log (c);

var first = 'sally';
var last = 'smith';
var fullname = first + " " + last

console.log(first);
console.log(last);
console.log(fullname);

var d = Math.pow(2,8);

console.log('2^8 ===', d);

var a = 3;
var b = 4;
var c = 5;
var d = 6;
var base = ((a+b)/(b-c)) * ((b-a)/(c-d));
var exp = b+a;
var e = Math.pow(base, exp);
console.log(e);


//branching with if/else statement
//


var age = 20;

if(age >= 21){
  console.log('you are legal to drink');
}else{
  console.log('you are NOT legal to drink');
}

// this is the maximum allowed rating you can see
//

if(age >= 0 && age <= 5){
  console.log('G rated');
}else if(age < 13){
  console.log('PG rated');
}else if(age <= 13){
  console.log('PG-13 rated');
}else if(age === 17){
  console.log('R rated');
}else if(age === 18){
  console.log('NC-17 rated');
}else{
  console.log('X rated');
}

// this is a switch statement
//

var color = 'blue';
switch(color){
  case 'green':
    console.log('i see green');
  case 'blue':
    console.log('i see blue');
  case 'orange':
    console.log('i see orange');
  case 'pink':
    console.log('i see pink');
  case 'black':
    console.log('i see black');
    break;
  default:
    console.log('that is not a valid color');
}

// while loop
// 

while(a < 10){
  console.log('a is looping...', a);
 //a++;
 //a = a + 1;
 a += 2;
}

// for loop
// 

for(var i = 0; i < 10; i++){
  console.log('i +++', i);
}
