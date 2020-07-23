//////////////////////CHP 2
// // 1
// var username;
// // 2
// let myname='MUHAMMAD HAMMAD';
// // 3
// var message;
// message='Hello World';
// alert(message);
// // 4
// let name='Jhone Doe';
// let age='15 years old';
// let expertise="Created Mobile Application Development";
// alert(name);
// alert(age);
// alert(expertise);
// // 5
// let pizza='PIZZA \n PIZZ \n PIZ \n PI \n P';
// alert(pizza);
// // 6
// let email='hammadriaz28@gmail.com';
// let text='My Email Address is';
// alert(text.concat(email));
// // 7
// let book =  'A smarter way to learn JavaScript';
// alert(book);
// // 8
// document.write('Yah! I can write HTML content through JavaScript');
// // 9
// let design =  '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(design);

////////////////////// CHP 3
// // 1
// age='I am 15 years old';
// alert(age);
// // 2
// let x=14;
// let visit=`You have visited this site ${x} times`;
// alert(visit);
// // 3
// var birthYear='2000'
// document.write("My birth year is "+ birthYear + '\n'+ 'Data type of my declared variable is number');
// // 4
// var name= prompt('ENTER YOUR NAME','XYZ');
// var productTitle = prompt('ENTER PRODUCT TITLE','TOY CAR');
// var quantity = prompt('ENTER QUATITY','3');
// document.write(` ${name} ordered ${quantity} ${productTitle} on XYZ Clothing store`);

///////////////// CHP 4
// // 1
// a='Hammad'; b='Pakistani'; c='student';
// // 2
// // legal
// a='legal'; $b='legal'; c22='legal'; d_1='legal'; eT='legal';
// // illegal
// @a='Illegal'; 2b='Illegal'; -c.s='Illegal'; /d='Illegal'; e>='Illegal';
// // 3
// document.write('Rules for naming JS variables');
// document.write('Variable names can only contain Letter, Number, Dollar Sign and Underscore For example $my_1stVariable ');
// document.write(' Variables must begin with a Letter, Dollar or underscore For example $name, _name or name');
// document.write(' Variable names are case Sensitive');
// document.write('Variable names should not be JS commands');

/////////////////////////CHP 5
// // 1
// a= +prompt('ENTER FIRST NUMBER (ADDITION)');
// b= +prompt('ENTER SECOND NUMBER (ADDITION)');
// c=a+b;
// document.write(`Sum of ${a} and ${b} is ${c}`);

// // 2
// // (SUBTRACTION)
// a= +prompt('ENTER FIRST NUMBER (SUBTRACTION)');
// b= +prompt('ENTER SECOND NUMBER (SUBTRACTION)');
// c=a-b;
// document.write(` SUBTRACTION of ${a} and ${b} is ${c}`);
// // (MULTIPLICATION)
// a= +prompt('ENTER FIRST NUMBER (MULTIPLICATION)');
// b= +prompt('ENTER SECOND NUMBER (MULTIPLICATION)');
// c=a*b;
// document.write(` MULTIPLICATION of ${a} and ${b} is ${c}`);
// // (DIVISION)
// a= +prompt('ENTER FIRST NUMBER (DIVISION)');
// b= +prompt('ENTER SECOND NUMBER (DIVISION)');
// c=a/b;
// document.write(`DIVISION of ${a} and ${b} is ${c}`);
// // (MODULUS)
// a= +prompt('ENTER NUMBER (MODULUS)');
// if (a<0){
// c=a*-1;
// }
// document.write(` MODULUS of ${a} is ${c}`);
// 3
// var x;
// document.write('Value after variable declaration is ' + x +'<br>')
// x=3;
// document.write('initial Value is ' + x+'<br>')
// x=++x;
// document.write('Value after increment is ' + x+'<br>')
// x=7+x;
// document.write('Value after addition is: ' + x+'<br>')
// x=--x;
// document.write('Value after decrement is ' + x+'<br>')
// x=x/3;
// document.write(' remainder after dividing the variable’s value by 3 : ' + x+'<br>')
// 4
// var x=600;
// document.write('Total cost to buy 5 tickets to a movie is : '+ x + 'PKR')
// 5
// var y=4;
// document.write('Table Of 4'+'<br>')
// for (let index = 0; index < 10; index++) {
//     c=y*(index+1);
//     document.write(y+ ' X '+(index+1)+ ' = '+ c + '<br>')
// }
// 6
// var t=25;
// c=(t*9/5)+32;
// document.write(t+'<Sup>' + 0 +'</Sup>'+'C' + ' is '+c+'<Sup>' + 0 +'</Sup>'+'F'+ '<br>')
// var tt=70;
// c=(tt-32)*5/9;
// document.write(t+'<Sup>' + 0 +'</Sup>'+'F' + ' is '+c+'<Sup>' + 0 +'</Sup>'+'C')
// 7
// document.write('<strong>'+'Shopping Cart'+'</strong>'+'<br>'+'<br>'+'<br>')
// var a=650;b=3;c=100;d=7;e=100;
// document.write(' Price of item 1 '+a +'<br>')
// document.write(' Price of item 2 '+b+'<br>')
// document.write(' Ordered quantity of item 1 '+c+'<br>')
// document.write(' Ordered Quantity of item 2 '+d+'<br>')
// document.write(' Shipping charges '+e+'<br>'+'<br>'+'<br>')
// document.write(' total cost of ur order  '+(a+b+c+d+e)+'<br>')
// 11
// document.write('<strong>'+' AGE CALCULATOR'+'</strong>'+'<br>'+'<br>'+'<br>')
// var x=2020;
// var y=1998;
// document.write('Current Year '+x+'<br>')
// document.write('Birth Year '+y+'<br>')
// document.write('Your Age Is '+(x-y)+'<br>')
// 12
// document.write('<strong>'+'THE GEOMETRIZER'+'</strong>'+'<br>'+'<br>'+'<br>')
// var x=20;
// document.write(' Radius of circle : '+(x)+'<br>')
// document.write('Circumference '+(x*2*3.142)+'<br>')
// document.write('The area is '+(3.142*x**2)+'<br>')



////////////////////////// CHP 6-9
// 1
// var x=+prompt('Enter value', '22');
// document.write('Result : ' + '<br>')

// document.write('The Value of a : ' + x + '<br>'+'<br>')

// document.write('...........................'+'<br>'+'<br>'+'<br>')

// document.write('The Value of ++a is : ' + ++x + '<br>')
// document.write(' NOw The Value of a : ' + x + '<br>'+'<br>'+'<br>')

// document.write('The Value of ++a is : ' + x++ + '<br>')
// document.write(' NOw The Value of a : ' + x + '<br>'+'<br>'+'<br>')

// document.write('The Value of ++a is : ' + --x + '<br>')
// document.write(' NOw The Value of a : ' + x + '<br>'+'<br>'+'<br>')

// document.write('The Value of ++a is : ' + x-- + '<br>')
// document.write(' NOw The Value of a : ' + x + '<br>'+'<br>'+'<br>')
// 2
// var a=2; b=1;
// var c=--a;
// document.write('a=2; b=1;'+ '<br>'+ ' The Value --a;  is : ' + c + '<br>')
// c=c- --b;
// document.write('The Value --a - --b;' + ' is : ' + c + '<br>')
// c=c + ++b;
// document.write('The Value --a - --b + ++b;   is : ' + c+ '<br>')
// c=c + b--;
// document.write('The Value  --a - --b + ++b + b--;  is : ' + c+ '<br>')
// 3
// var x=prompt('Enter  Name');
// document.write('Good Morning '+x)
// 5
// var x=prompt('Enter Number');
// for (let index = 0; index < 10; index++) {
//     if (x!=''){
//         c=x*(index+1);
//     document.write(x + ' X ' + (index+1) + ' = ' + c + '<br>' )
//     }
//     else{
//         x=5;
//         c=x*(index+1);
//         document.write(x + ' X ' + (index+1) + ' = ' + c + '<br>')
//     }
// }
// 6
// var x=prompt('Enter 1st Subject Name');
// var y=prompt('Enter 2nd Subject Name');
// var z=prompt('Enter 3rd Subject Name');
// var xo=+prompt('Enter 1st Subject marks');
// var yo=+prompt('Enter 2nd Subject marks');
// var zo=+prompt('Enter 3rd Subject marks');
//         document.write('<table>'+
//         '<tr>'+
//         '<th>'+ ' Subject ' +'</th>' +
//         '<th>'+ ' Total Marks' +'</th>'+
//         '<th>'+' Obtained Marks '  +'</th>'+
//         '<th>'+ ' Percentage '  +'</th>'+
//         '</tr>'+

//         '<tr>'+
//         '<td>'+ x +'</td>' +
//         '<td>'+ 100 +'</td>'+
//         '<td>'+ xo +'</td>'+
//         '<td>'+ xo +'%' +'</td>'+
//         '</tr>'+
//     '<tr>'+
//         '<td>'+ y +'</td>' +
//         '<td>'+ 100 +'</td>'+
//         '<td>'+ yo +'</td>'+
//         '<td>'+ yo +'%' +'</td>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>'+ z +'</td>' +
//             '<td>'+ 100 +'</td>'+
//             '<td>'+ zo +'</td>'+
//             '<td>'+ zo +'%' +'</td>'+
//             '</tr>'+
//         '<tr>'+
//             '<td>'+'</td>' +
//             '<td>'+ 300 +'</td>'+
//             '<td>'+ (xo+yo+zo) +'</td>'+
//             '<td>'+ ((xo+yo+zo)/3) +'%' +'</td>'+
//             '</tr>'+
//             '</table>')
////////////////////// CHP 9-11
// 1
// var x=prompt('Enter City Name');
// if (x=='karachi'){
//     document.write('Welcome to the city of Lights');
// }
// else{
//     document.write('Welcome to the Beautiful city');
// }
// 2
// var x=prompt('Enter Ur Gender');
// if (x=='male'){
//     document.write('Good Morning Sir');
// }
// if (x=='female'){
//     document.write('Good Morning Ma\'am');
// }
// 3
// var x=prompt('Enter traffic light colour');
// if (x=='red'){
//     document.write('Must Stop');
// }
// if (x=='yellow'){
//     document.write('Ready to Move');
// }
// if (x=='green'){
//     document.write('Move Now');
// }
// 4
// var x=prompt('Enter Remaining fuel in Car (Litres)','1.5');
// if (x<=0.25){
//     document.write('Please refill the fuel in your car');
// }
// else{
//     document.write('No Need of Fuel At this moment');
// }
// 5
// // a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// // b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// // c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// //  d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// //    e 
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// //  f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// 6
// var c=[];d=[];
// for (let index = 0; index < 3; index++) {
//      x=+prompt('Enter marks of Subjects out of 100','20')
//      d[index]=x;
//      c[index]=(x/300)*100;

// if (c[index]>=80){
//     document.write('Total marks : ' + 300 + '<br>'+'Marks Obtained : ' + d[index] + '<br>'+ 'Percentage : ' + c[index] + '%' + '<br>' +  'Grade : ' + 'A-One'+ '<br>' + 'Remarks : ' + 'Excellent' + '<br>'+ '<br>')
// }
// if (c[index]>=70 && c[index]<=80){
//     document.write('Total marks : ' + 300 + '<br>'+'Marks Obtained : ' + d[index] + '<br>'+ 'Percentage : ' + c[index] + '%' + '<br>' +  'Grade : ' + 'A'+ '<br>' + 'Remarks : ' + 'Good' + '<br>'+ '<br>')
// }if (c[index]>=60 && c[index]<=70 ){
//     document.write('Total marks : ' + 300 + '<br>'+'Marks Obtained : ' + d[index] + '<br>'+ 'Percentage : ' + c[index] + '%' + '<br>' +  'Grade : ' + 'B'+ '<br>' + 'Remarks : ' + 'You Need To improve'+ '<br>'+ '<br>' )
// }if (c[index]<60){
//     document.write('Total marks : ' + 300 + '<br>'+'Marks Obtained : ' + d[index] + '<br>'+ 'Percentage : ' + c[index] + '%' + '<br>' +  'Grade : ' + 'Fail'+ '<br>' + 'Remarks : ' + 'Sorry' + '<br>'+ '<br>')
// }
// }
// 7
// x=Math.random()*10
// y=prompt('Guess the Number (0-10)','2')
// if (x==y){
// document.write('Bingo! Correct answer')
// }
// else if((y-x)==1){
//     document.write('Close enough to the correct answer')
// }
// else{
//     document.write('You Lose')
// }
// 8
// y=prompt('Enter The Number (Multiple of 3)','2')
// if ((y%3) == 0){
// document.write('The Given Number Is divisible by 3')
// }
// else{
//     document.write('The Given Number Is not divisible by 3')
// }
// 9
// y=prompt('Enter The Number (Odd or eVEN cHECK)','2')
// if ((y%2) == 0){
// document.write('The Given Number Is eVEN')
// }
// else{
//     document.write('The Given Number Is ODD')
// }
// 10
// x=prompt('Enter TEMPERATURE','20')
// if (x>=40 && x<=70 ){
//    document.write('It is too hot outside' )
//     }
//     if (x>=30 && x<=40 ){
//         document.write('The Weather today is Normal' )
//          }
//          if (x>=20 && x<=30 ){
//             document.write('Todays Weather is cool. ' )
//              }
//              if (x>=10 && x<=20 ){
//                 document.write('OMG! Todays weather is so Cool' )
//                  }
// 11
// x=+prompt('Enter 1st digit','20')
// y=+prompt('Enter 2nd digit','20')
// z=prompt('Enter operand (+,-,*,/,%)','-')
// if (z=='+' ){
//    document.write('Sum of '+ x + ' & ' + y + ' is ' +  (x+y)  )
//     }
//     if (z=='-' ){
//         document.write('Subtract of '+ x + ' & ' + y + ' is ' +  (x-y)  )
//          }
//          if (z=='*' ){
//             document.write('Multiply of '+ x + ' & ' + y + ' is ' +  (x*y)  )
//              }
//              if (z=='/' ){
//                 document.write('Divide of '+ x + ' & ' + y + ' is ' +  (x/y)  )
//                  }
//                  if (z=='%' ){
//                     document.write('Remainder of '+ x + ' & ' + y + ' is ' +  (x%y)  )
//                      }

///////////////// CHP 12-13
// 1
// x=prompt('Enter a Character','2')
// if ((x-1)===parseInt(x-1)) {
//     document.write('Its a number');
// }
// else if ('string'===typeof(x)) {
//     if (x.toUpperCase()==x) {
//         document.write('Its a Upper Case Letter')
//     }
//     if (x.toLowerCase()==x) {
//             document.write('Its a Lower Case Letter')
//     }
// }else{
//     document.write('Its a Nothing');
// }
// 2
// x=+prompt('Enter First Integer');
// y=+prompt('Enter Second Integer');
// if (x>y){
//     document.write(x+' Larger');
// }
// else if (y>x){
//     document.write(y+' Larger');
// }
// else{
//     document.write(y+' equal');
// }
// 3
// x=+prompt('Enter Integer');
// if (x>0){
//     document.write(x+' postive');
// }
// else if (x<0){
//     document.write(x+' negative');
// }
// else{
//     document.write(x+' zero');
// }
// 4
// x=prompt('Enter a Character','t')
//     if (x=='a' || x=='e' || x=='i' ||x=='o' ||x=='u' ) {
//         document.write('Its a vowel True ')
//     }
// else{        
//     document.write('Its not a vowel false ')
// }
// 5
// x=prompt('Store Your Password','8678978')
// y=prompt('confirm Your Password','6757565')
// if (x==y) {
//     z=prompt('Enter Your Password','6757565')
//         if (z=='' ) {
//            alert(' Please enter your password')
//         }
//     if (z!='') {        
//      if (z==x) {
//        alert('password is correct')
//      }
//      else{
//     document.write('Its not correct')  
// }

//     }
// }
// else{
// document.write('Its not match')  
// }
// 6
// var greeting; 
// var hour = 13; 
// if (hour < 18) {
//      greeting = "Good day";
//  } else {
//      greeting = "Good evening";
//      } 
//  7
// var time=1900;
// if (time==1900){
//    if (time>=0 && time<12) {
//        document.write('GOOD MORNING')
//    }
// else if (time>=12 && time<17){
//     document.write('GOOD AFTERNOON');
// }
// else if (time>=17 && time<2100){
//     document.write('GOOD EVENING');
// }
// else if (time>=21 && time<23){
//     document.write('GOOD Night');
// }
// else{
//     document.write('None');
// }
// }
//////////////////////CHP 14-16
// 1
// var a;
// a = {
// studentNames:[];
// };
// 2
// var studentNames;
// studentNames = [];
// 3
// var a;
// a=['1','2','3','4'];
// 4
// var a;
// a=[1,2,3,4];
// 5
// var a;
// a=[3>2,1==1,'True'];
// 6
// var b;
// b=[1,'abc',7==67];
// 7
// var qualification;
// qualification=[ 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.', 'Phil.', 'PhD'];
// document.write('<strong>'+'QUALIFICATION' +'</strong>'+'<br>'+'<br>');
// for (let index = 0; index < qualification.length; index++) {
// document.write((index+1)+')'+ ' '+qualification[index]+'<br>');
// }
// 8
// var studentNames= ['Hammad','Asad','Faiq'];
// var score = [320,420,400];
// var percentage = ['64%','80%','77%'];
// for (let index = 0; index < studentNames.length; index++) {
//     document.write('Score Of '+studentNames[index]+' is '+score[index]+'.'+' Percentage: '+ percentage[index]+'<br>');
// }
// 9
// var color=['black','blue','red','white','purple'];
// a
// var i=0;
// document.write('COLORS : '+ color);
// x = prompt('what color do u want at beginning?');
// for (let index = 0; index < color.length; index++) {
//     if (x===color[index]) {
//        c= color.splice(index,1);
//         color.unshift(c);
//         document.write('<br>'+'Updated COLORS : '+ color);
//         break;
//     }else{
//         i=i+1
//     }
//     if (i==color.length) {
//         document.write('<br>'+'Ur color is not present');
//     }
//     }
// b
// var i=0;
// document.write('COLORS : '+ color);
// x = prompt('what color do u want at beginning?');
// for (let index = 0; index < color.length; index++) {
//     if (x===color[index]) {
//        c= color.splice(index,1);
//         color.push(c);
//         document.write('<br>'+'Updated COLORS : '+ color);
//         break;
//     }else{
//         i=i+1
//     }
//     if (i==color.length) {
//         document.write('<br>'+'Ur color is not present');
//     }
//     }
// c
// var i=0;j=0;c=0;d=0;
// document.write('COLORS : '+ color);
// x = prompt('what color do u want at first?\nblack,blue,red,white,purple');
// y = prompt('what color do u want at second?\nblack,blue,red,white,purple');
// for (let index = 0; index < color.length; index++) {
//   if (y===color[index]) {
//       c= color.splice(index,1);
//        color.unshift(c);
//    }else{
//        j=j+1
//    }
//    if (j==color.length) {
//        document.write('<br>'+'Ur second color is not present');
//    } 
//     if (x===color[index]) {
//        d = color.splice(index,1);
//         color.unshift(d);
//     }else{
//         i=i+1
//     }
//     if (i==color.length) {
//         document.write('<br>'+'Ur first color is not present');
//     }
//     if (index==color.length) {
//         document.write('<br>'+'Updated COLORS : '+ color);
//     }        
//     }
// d
// document.write('COLORS : '+ color);
//      color.splice(0,1);
//         document.write('<br>'+'Updated COLORS : '+ color);
// e 
// document.write('COLORS : '+ color);
// color.pop();
//    document.write('<br>'+'Updated COLORS : '+ color);
// f
// var i=0;
// document.write('COLORS : '+ color);
// x = prompt('what color do u want to add?','green');
// y = +prompt('what position do u want to add color?','2');
// var b=color;e= (color.length+1);i=color.splice(y,(e-y));
// for (let index = 0; index < (y+2); index++) {
//     if (y!=index) {
//         if (index==(y+1)) {
//             b[index] = i;
//             console.log(b)
//         }else{
//             b[index] = color[index]
//             console.log(b)
//         }
//     }
//     if (y==index) {
//         b[index] = x;
//         console.log(b)
//     }
//     }
//     document.write('<br>'+'Updated COLORS : '+ b);
// g
// document.write('COLORS : '+ color);
// y = +prompt('what position do u want to delete color?','2');
// var b=color;
// b.splice(y,1);
//     document.write('<br>'+'Updated COLORS : '+ b);
// 10
// var scores=[320,230,480,120];
// document.write('Scores of students : '+ scores+'<br>');
// var a = scores.sort();
// document.write('Ordered Scores of students : '+ a);
// 11
// var cities=['karachi','Lahore','Islamabad','Quetta','Peshawar'];
// var selectedCities=['Islamabad','Quetta'];
// document.write('Cities List : '+'<br>'+ cities +'<br>'+'<br>');
// document.write('Selected Cities : '+'<br>'+ selectedCities);
// // 12
// var arr1 = ['This ', ' is ', ' my ', ' cat']; 
// document.write('Array : '+'<br>'+arr1)
// arr1.join('-')
// document.write('<br>'+'<br>'+'String : '+'<br>'+arr1.join(' '));
// 13
// var a = ['keyboard','mouse','printer','monitor'];
// document.write('Devices:'+'<br>'+a+'<br>'+'<br>');
// for (let index = 0; index < a.length; index++) {
//     document.write('<br>'+'Out:'+'<br>'+a[index]);
// }
// 14
// var a = ['keyboard','mouse','printer','monitor'];
// document.write('Devices:'+'<br>'+a+'<br>'+'<br>');
// for (let index = (a.length-1); index > -1; index--) {
//     document.write('<br>'+'Out:'+'<br>'+a[index]);
// }
// 15
// var phoneManu = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony & Haier'];
// document.write('<select name="phone" id="phonemanu">'+
// '<option value="Apple">'+'Apple'+'</option>'+
// '<option value="Apple">'+'Samsung'+'</option>'+
// '<option value="Apple">'+'Motorola'+'</option>'+
// '<option value="Apple">'+'Nokia'+'</option>'+
// '<option value="Apple">'+'Sony & Haier'+'</option>'+'</select>');
//////////////////////// CHP 17-20
// 1
// var a;
// a=[[],[]];
// 2
// var b;
// b=[0,1,2,3,1,0,1,2,2,1,0,1];
// var i=0;
// for (let index = 0; index < b.length; index++) { 

//     if (i==4) {
//         document.write('<br>');
//         i=0;
//     }
//     document.write(b[index] + ' ');
//     i=i+1; 
// }
// 3
// for (let index = 0; index < 10; index++) {
//     document.write(index+1 + "<br>");
// }
// 4
// var x=+prompt('ENTER A NUMBER TO SHOW ITS MULTIPLICATIN TABLE');
// var y=+prompt('ENTER LENGTH');
// document.write(`MULTIPLICATION TABLE OF ${x} LENGTH ${y}`+"<br>" +"<br>");
// for (let index = 0; index < y; index++) {
//     var c = (index+1)*x;

// document.write(x + 'X' + (index+1) + '=' + c + "<br>" );
// }
// 5
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (let index = 0; index < fruits.length; index++) {
//     document.write(fruits[index] + "<br>");
// }
// document.write("<br>" + "<br>")
// for (let index = 0; index < fruits.length; index++) {
//     document.write(`ELEMENT AT INDEX ${index} LENGTH ${fruits[index]}` + "<br>");
// }
// 6
// var different = [[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ],[ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ],[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ],['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k'] ];
// var qty=['Counting','Reverse Countinbg', 'Even','Odd','Series'];
// for (let index = 0; index < qty.length; index++) {
//         document.write('<strong>' + qty[index] +  '</strong>' +'<br>'+ "<br>" + different[index] + "<br>"+"<br>");
//     }
// 7
// A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// b =  prompt('WELCOME TO ABC BAKERY. WHAT DO U WANT TO ORDER?','cake');
// for (let index = 0; index < A.length; index++) {
//     if (A[index] === b){
//         var a=1;
//         var c=index;
//     }     
// }
// if (a==1) {
//     document.write( b + ' is available at index ' + (c+1) + ' in our bakery');
// }
// else{
//     document.write('We are sorry. '+ b +' is not available in our bakery');
// }
// 8
// var A = [24, 53, 78, 91, 12];
//     document.write('Array Items : ' + A );
//     var b= A;
// for (let index = 0; index <b.length; index++) {
//     for (let index1 = 0; index1 < b.length; index1++) {
//         if (A[index]>A[index1]) {      
//             b.splice(index1,1);
//               }  
//               if (b.length > 1) {
//                   index=0;
//               }
//          }
//     }
//     document.write("<br>" +"THE LARGEST NUMBER IS " + b);
// 9
// i=0;
// A = [24, 53, 78, 91, 12];
//     document.write('Array Items : ' + A );
//     var b=A;
// for (let index = 0; index <b.length; index++) {
//     for (let index1 = 0; index1 < b.length; index1++) {
//         if (A[index]<A[index1]) {      
//           b.splice(index1,1);
//             }  
//             if (b.length > 1) {
//                 index=0;
//             }
//         } 

//     }
//     document.write("<br>" +"THE SMALLEST NUMBER IS " + b)
// 10
// var x=0;
// var i =0;
// while (x < 100) {
//     i=i+1;
//     x=5*i;
//     document.write(x +',');
// }
///////////////// CHP 21-25
// 1
// var firstName=prompt('Enter Your First Name');
// var lastName=prompt('Enter Your last Name');
// var fullName= firstName + ' ' + lastName;
// document.write('GOOD MORNING '+fullName);
// 2
// var firstName=prompt('ENTER YOUR FAVORITE MOBILE PHONE MODEL');
// var fullName= firstName.length
// document.write('MY FAVORITE MOBILE PHONE IS : '+firstName+'<br>'+'LENGTH OF STRING: '+fullName);
// 3
// var firstName='Pakistani'
// var fullName= firstName.indexOf('n')
// document.write('STRING: '+firstName+'<br>'+'INDEX OF \'n\' is : '+fullName);
// 4
// var firstName='Hello World'
// var fullName= firstName.lastIndexOf('l')
// document.write('STRING: '+firstName+'<br>'+'LAST INDEX OF \'l\' is : '+fullName);
// 5
// var firstName='Pakistani'
// var fullName= firstName.charAt('3')
// document.write('STRING: '+firstName+'<br>'+'CHARACTER AT INDEX 3 is : '+fullName);
// 6
// var firstName=prompt('Enter Your First Name');
// var lastName=prompt('Enter Your last Name');
// var fullName=firstName.concat(' ' + lastName);
// document.write('GOOD MORNING '+fullName);
// 7
// var x1='HYDERABAD';
// var x2='ISLAM'
// var x=x1.replace('HYDER',x2);
// document.write('CITY : '+x1 + '<br>'+'AFTER REPLACEMENT : '+x);
// 8
// var msg='Ali and Sami are best friends. They play cricket and football together';
// var z=msg;
// var x=msg.split(' ')
// for (let index = 0; index < x.length; index++) {
//     if(x[index]=='and'){
//         x[index]= '&' ;
// } 
// }
// var msg = x.join(' ');
// document.write('MESSAGE : '+ z + '<br>'+'AFTER REPLACEMENT (&) : '+msg);
// 9
// var a = '472';
// document.write('VALUE : ' + a + '<br>' + 'TYPE : '+ typeof(a)+'<br>'+'VALUE : ' + a + '<br>' + 'TYPE : '+ typeof(parseInt(a)) )
// 10
// var x=prompt('Enter SOMETHING');
// document.write('USER INPUT ' + x + '<br>' +'UPPER CASE : ' + x.toUpperCase() );
// 11
// var x=prompt('Enter SOMETHING');
// document.write('USER INPUT : ' + x + '<br>' +'TITLE CASE : ' + x.replace(x[0], x[0].toUpperCase()) );
// 12
// var a = 35.36;
// document.write('NUMBER : ' + a + '<br>' + 'RESULT : '+ a.toString().replace('.',[]))
// 13
// var x=prompt('Enter USERNAME');y=0;
// for (let index = 0; index < x.length; index++) {
//     if(x.includes('@') || x.includes(',') || x.includes('.')){
// y=y+1
//     }
// }
// if(y>=1){
//     alert('ENTER VALID USERNAME')
// }
// 14
// var y=0;
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var x = prompt('SEARCH BAKKERY ITEM BY NAME ');
// for (let index = 0; index < A.length; index++) {
//     if (A[index] == x.toLowerCase()) {
//         y = index;
//     }
// }
// if (y >= 0){
//      document.write('ITEM FOUND AT INDEX ' + (y+1) + ' in our BAkery ');      
// }
// else {
//     document.write('WE ARE SORRY. ITEM NOT FOUND IN OUR BAKERY');
// }
// 15
// var x = prompt('ENTER YOUR PASSWORD \nRequirements: \na. It should contain alphabets and numbers \nb. It should not start with a number \nc. It must at least 6 characters long '); z = 0; zz = 0; zzz = 0;
// if (x.length > 6) {
//     z = z + 1;
// }
// for (let index = 0; index < x.length; index++) {
//     if (x.charCodeAt(0) >= '65' && x.charCodeAt(0) <= '122') {
//         if ((x.charCodeAt(index) >= '48' && x.charCodeAt(index) <= '57') || (x.charCodeAt(index) >= '65' && x.charCodeAt(index) <= '122')) {
//         } else {
//             zz = zz + 1;
//         }

//     } else {
//         zzz = zzz + 1;
//     }
// }

// if ((z + zz + zzz) > 1) {
//     document.write('PASSWORD : ' + x + '<br>');
//     if (z >= 1) {
//         document.write('It must at least 6 characters long' + '<br>');
//     }
//     if (zz >= 1) {
//         document.write('It should contain alphabets and numbers' + '<br>');

//     }
//     if (zzz >= 1) {
//         document.write('It should not start with a number ' + '<br>');
//     }
// }
// 16
// var  university = 'University of Karachi'; 
// var x=university.split('');
// for (let index = 0; index < x.length; index++) {
//     document.write(x[index] + '<br>');
// }
// 17
// var firstName='Pakistan'
// var fullName= firstName.charAt((firstName.length-1))
// document.write('STRING: '+firstName+'<br>'+'LAST CHARACTER OF INPUT : '+fullName);
// 18
// var msg='The quick brown fox jumps over the lazy dog';z=0;
// var x=msg.split(' ')
// for (let index = 0; index < x.length; index++) {
//     if(x[index].toLowerCase()=='the'){
//         z=z+1;
// } 
// }
// var msg = x.join(' ');
// document.write('TEXT : ' + msg + '<br>' + 'There are '+ z  + ' Occurence of Word \'the\' ')


/////////////////////// CHP 26-30
// 1
// var x=+prompt('ENTER POSITIVE INTEGER');
// document.write(' number : '  +  x + '<br>' + ' round off value of the number : ' + Math.round(x) + '<br>' + ' floor value of the number : ' + Math.floor(x) + '<br>' + ' ceil value of the number : ' + Math.ceil(x) )
// 2
// var x=-prompt('ENTER NEGATIVE FLOATING POINT NUMBER');
// document.write(' number : '  +  (-x) + '<br>' + ' round off value of the number : ' + Math.round(-x) + '<br>' + ' floor value of the number : ' + Math.floor(-x) + '<br>' + ' ceil value of the number : ' + Math.ceil(-x) )
// 3
// var x=-4;
// y=Math.abs(x);
// document.write(' absolute value of ' + x + ' is ' + y);
// 4
// var x=Math.random()*6;
// document.write(' Random Dice Value ' + Math.ceil(x) );
// 5
// var x=Math.random()*2;
// document.write(' Random Coin Value ' + Math.ceil(x) );
// 6
// var x=Math.random()*2;
// document.write(' Random Coin Value ' + Math.ceil(x) );
// 7
// var x=prompt('ENTER YOUR WEIGTH');y=[];z=0;
// for (let index = 0; index < x.length; index++) {
//   if  (x.charCodeAt(index) >= '48' && x.charCodeAt(index) <= '57'){
//       y[z]=x[index];
//       z=z+1;
//   }   
// }
// document.write(' THE WEIGHT OF USER IS ' + y.join('') + 'Kilograms' );
// 8
// var y=Math.random()*10;
// var x=+prompt('GUESS GAME (1-10) \nENTER NUMBER');
// if (x==y){
//     document.write('CONGRATULATE ')
// }else{
//     document.write('U LOSE ')
// }
//////////////////////////////// CHP 31-34
// 1
// document.write(new Date());
// 2
// var y = new Date();
// var x=y.getMonth();
// if (x==0){ alert( 'CURRENT MONTH : JANUARY'); }
// if (x==1){ alert('CURRENT MONTH : FEBRUARY'); }
// if (x==2){ alert('CURRENT MONTH : MARCH'); }
// if (x==3){ alert('CURRENT MONTH : APRIL'); }
// if (x==4){ alert('CURRENT MONTH : MAY'); }
// if (x==5){ alert('CURRENT MONTH : JUNE'); }
// if (x==6){ alert('CURRENT MONTH : JULY'); }
// if (x==7){ alert( 'CURRENT MONTH :AUGUST'); }
// if (x==8){ alert( 'CURRENT MONTH :SEPTEMBER'); }
// if (x==9){ alert('CURRENT MONTH :OCTOBER'); }
// if (x==10){ alert('CURRENT MONTH : CURRENT MONTH :NOVEMBER'); }
// if (x==11){alert('CURRENT MONTH : DECEMBER'); }
// 3
// var y = new Date();
// var x=y.getDay();
// if (x==0){ alert( 'TODAY IS SUNDAY '); }
// if (x==1){ alert('TODAY IS MON'); }
// if (x==2){ alert('TODAY IS TUES'); }
// if (x==3){ alert('TODAY IS WED'); }
// if (x==4){ alert('TODAY IS THURS'); }
// if (x==5){ alert('TODAY IS FRIDAY'); }
// if (x==6){ alert('TODAY IS SAT'); }
// 4
// var y = new Date();
// var x=y.getDay();
// if (x==0){ alert( 'It\'s FUN DAY '); }
// if (x==6){ alert('It\'s FUN DAY'); }
// 5
// var y = new Date();
// var x=y.getDate();
// if (x<=15){ alert( ' First fifteen days of the month'); }
// if (x>=16){ alert('Last days of the month') }
// // 6
// var oldDate=new Date()

// document.write('CURRENT DATE : ' + oldDate+ '<br>')

// var goldDate = oldDate.getTime(1970,1,1)

// document.write('ELASPED MILLISECOND SINCE JANUARY 1, 1970 : '+ goldDate + '<br>' )

// var goldDate = oldDate.getTime(1970,1,1)

// document.write('ELASPED MINUTES SINCE JANUARY 1, 1970 : '+ goldDate/(1000*60) )
// 7
// var x=new Date()
// var y = x.getHours(1970,1,1)
// if (y<=12){
//     alert('IT\'s AM');
// }else{
//     alert('IT\'s PM');
// }
// 8
// var laterDate=new Date(2020,12,31)
// document.write('LATER DATE : '+ laterDate + '<br>' )
// 9
// var oldDate=new Date(2020,4,25);
// var today=new Date();
// var dif = today.getTime() - oldDate.getTime()
// document.write( Math.round(dif/(1000*60*60*24)) +' DAYS PASSED SINCE RAMZAN, 2020' +'<br>' )
// 10
// var oldDate=new Date(2015);
// var today=new Date();
// var dif = today.getTime() - oldDate.getTime()
// document.write('ON REFERENCE DATE ' +today + ', ' + Math.round(dif/(1000)) +' SECONDS PASSED SINCE BEGINNING OF 2015' +'<br>' )
// 11
// var today=new Date();
// today=today.toString();
// oldDateHour=today.split(' ');
// var x = oldDateHour[4].split(':');
// y=x[0]-1;x[0]=y;x=x.join(':');
// oldDateHour[4]=x;
// document.write('CURRENT DATE ' + today + '<br>' +' 1 HOUR Ago it was ' + oldDateHour.join(' ')+'<br>');
// 12
// var today=new Date();
// today=today.toString();
// oldDateHour=today.split(' ');
// var x = oldDateHour[3];
// y=x-100;x=y;;
// oldDateHour[3]=x;
// alert('CURRENT DATE ' + today + '\n' +' 1 HOUR Ago it was ' + oldDateHour.join(' '));
// 13
// var  x=+prompt('ENTER YOUR AGE');
// var y = new Date();
// y=(y.getFullYear())-x;
// document.write('YOUR BIRTH YEAR Is ' + y ) 
// 14
// var customerName='ABC Customer'
// var month=new Date();
// month=month.getMonth();
// var unit= 410;
// var chargesPerUnit=16;
// var netAmount=unit*chargesPerUnit;
// var latePayment=350;
// var grossAmount=latePayment+netAmount;
// document.write('Customer Name : '+customerName+ '<br>'+'Month : '+month+'<br>'+'Number of Units : '+unit+'<br>'+'Charges Per Unit : '+chargesPerUnit+'<br>'+'<br>'+'<br>'+ 'Net Amount Payable (With in Due Date) : '+netAmount+'<br>'+'Late payment surcharge : '+latePayment+'<br>'+'Gross Amount payable (After Due Date) : '+grossAmount)




////////////////////////// CHP 35-38
// 1
// function date(){
//     var y=Date()
//         document.write( y+ '<br>')
// }
// date()
// 2
// function greet(firstName,lastName){
//         document.write( 'GOOD MORNING ' + firstName + ' '  + lastName+ '<br>')
// }
// greet('Muhammad','Ali Sir')
// 3
// function sum(num1,num2){
//         y=num1+num2;
//         document.write( y+ '<br>')
//     }
//     sum(2,3)
// 4
// function calculator(num1,operator,num2){
//     if (operator=='-'){
//         y=num1-num2;
//         document.write( y+ '<br>')
//     }
//     if (operator=='*'){
//         y=num1*num2;
//         document.write( y+ '<br>')
//     }
//     if (operator=='+'){
//         y=num1+num2;
//         document.write( y+ '<br>')
//     }
//     if (operator=='/'){
//         y=num1/num2;
//         document.write( y+ '<br>')
//     }
// }
// calculator(2,'-',5)
// 5
// function squres(x){
// y=x**2;
// document.write( y+ '<br>')
// }
// squres(2)
// 6
// function factorial(x){
//     var y=1;
// for (let index = x; index > 0; index--) {  
//      y=index*y;
//     }
// document.write( y+ '<br>')
// }
// factorial(5)
// 7
// function count(start,end){
//     len=end-start;
//     if (len<0){
//         len=len*-1;
//     }

//     for (let index = 0; index < (len+1); index++) {
       
//         document.write(start+index + '<br>')
//     }
// }
// count(-10,10)
// 8
// function calcHypotenuse(base,perp){
//     var y=0;
//     function calcSquare(){
//       y=(base**2+perp**2)**(1/2);
//     }
//     calcSquare()
//     document.write('HYPOTENUSE '+y+ '<br>');
// }
// calcHypotenuse(2,3)
// 9
// function areaRec(width,height){
//   var  y=width*height;
//     document.write('Area of Rectangle is '+ y+ '<br>');
// }
// var width = 2;
// var height = 5;
// areaRec(2,3)
// areaRec(width,height)
// 10
// function palindrome(word){
//     var wordrev=[];x=0;
//     for (let index =  word.length-1; index >= 0; index--) {
//         wordrev[x]=word[index];
//         x=x+1;
// }
// wordrev=wordrev.join('')
// if (wordrev==word){
//     document.write('GIVEN word is Plindrome  ' + word )
//     }else{
//         document.write('GIVEN word is not Plindrome  ' + word )
//     }
// }
// palindrome('hamah')

// 11
// function capitalize(str) {
//     var y=[];
//     var word = str.split(' ')
//     for (let index = 0; index < word.length; index++) {
//         var x=word[index].replace(word[index][0] ,word[index][0].toUpperCase());
//          y[index] = x;
//     }
// word=y.join(' ');
//     document.write('GIVEN : ' + str + '<br>' + ' OUTPUT : ' + word )
// }

// capitalize('web development tutorial');

// 12
// function longwordfinder(str){
//     var x=0;y=0;xx=0;
//     for (let index = 0; index < str.length; index++) {
//         x=x+1;
// if(str[index]==' '){
//       var y=x;
//     xx=xx+1;
// x=0;
// }
// if (x>y){
// z=x;
// }
//     }
//  var  word = str.split(' ')
//     document.write('Largest Word in string : ' + str +'<br>'+ ' is : ' + word[xx-1])
// }
// longwordfinder('Web Development Tutorial');

// 13
// function charChecker(str,letter){
//     var x=0;
//     for (let index = 0; index < str.length; index++) {
//         if(str[index]==letter){
//             x=x+1;
//         }
//     }
// document.write('occurrences of the specified letter : ' + letter +  ' within the string. : ' + str  + ' is '+ x )
// }
// charChecker('JSResourceS.com','o')
// 14
// function calcCircumference(radius){
//   var  y=2*3.14*radius;
//     document.write('Circumference of Circle is '+ y);
// }
// function calcArea(radius){
//    var z=3.14*radius**2;
//      document.write('Area of Circle is '+ z);
// }
// calcCircumference(5)
// calcArea(5)


////////////////// CHP 38 to 42
// 1
// function powerOfNumber(a,b){
// let    x=a**b
// return x;
// }
// console.log(powerOfNumber(2,3))
// 2
// function leapYear(year){
//     let x = 2012;
//     let y = year-x;
//     if (y < 0 ) {
//         y = y*-1;
//     }
// if ((y%4)==0) {
//     return 'THE YEAR IS LEAP YEAR';
// }else{
//     return 'THE YEAR IS NOt LEAP YEAR';
// }

// }
// let year = +prompt('LEAP YEAR CHECKER \n ENTER YEAR')
// alert(leapYear(year))
// 3
// function perimS(a,b,c){
//     let s = (a+b+c)/2;
//     areaOfTriangle(a,b,c,s)
// }
// function areaOfTriangle(a,b,c,s){
//     let area = s*(s-a)*(s-b)*(s-c);
//    let x = `The perimeter S is  ${s} and  Area ${area}`;
//    console.log(x)
//    alert(x);
// }
// let a = +prompt('ENTER LENGTH OF TRIANGLE a');
// let b = +prompt('ENTER LENGTH OF TRIANGLE b');
// let c = +prompt('ENTER LENGTH OF TRIANGLE c');
// perimS(a,b,c);
// 4
// let x=0;y=0;
// let a = +prompt('ENTER Student Marks of 1st Subject out of 100');
// let b = +prompt('ENTER Student Marks of 2nd Subject out of 100');
// let c = +prompt('ENTER Student Marks of 3rd Subject out of 100');
// marksOfStudent();

// function marksOfStudent(){
// averageMark(a,b,c)
// percentageOfStud(x)
// alert('Ave. Marks is '+x+'\nPercentage is ' + y);
// }
// function averageMark(a,b,c){
//     x = (a+b+c)/3;

//  }
//  function percentageOfStud(x){
//      y = x + '%';
//         }
// 5
// let ind = 0;
// let x = prompt('ENTER PARAGRAPH')
// let i = prompt('ENTER CHAR AND GET ITS INDEX')
// let z=x.split(' ');
// function myIndexOf(charac){

//         if (i.length>1) {

//             for (let index = 0; index < z.length; index++) {

//             if (z[index]==i) {
//                 alert('Index Of '+i + ' is ' + ind );
//                         } 
//                         ind =(index+1)*2;
//                         console.log(ind,z[index])
//                     }              
//         }else{
//             for (let index = 0; index < x.length; index++) {
//             if ( x[index]==i) {
//     alert('Index Of '+ i + ' is ' + index);
//             }     
//         }
//     }

// }
// myIndexOf(i)
// 6
// let y=0;
// let x=prompt('Write Sentence and get it with No VOWELS (25 CHARACTER ONLY)')
// if (x.length<=25) {
//     deleteVowels(x)
//     document.write('SENTENCE: '+ x+'<br>'+'WITHOUT VOWELS: '+y.join('')) 
// }else{
//     alert('must Be 25 CHAR')
// }
// function deleteVowels(x){
//     y=x.split('');
//     console.log(y)
// for (let index = 0; index < y.length; index++) {

// if (y[index]=='a' || y[index]=='e' || y[index]=='i' || y[index]=='o' || y[index]=='u' || y[index]=='A' || y[index]=='E' || y[index]=='I' || y[index]=='O' || y[index]=='U' ) {
//      z = y.splice(index,1);
// }

// }
// }
// 7
// let z = []; w = []; i = 0;
// function twoVowels(x) {
//     x = x.split('')
//     for (let index = 0; index < x.length; index++) {
//         y = x.slice(index, index + 2)
//         switch (y.join('')) {
//             case 'aa':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'ae':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'ai':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'ao':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'au':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'ea':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'ee':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'ei':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'eo':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//             case 'eu':
//                 z[i] = y.join('');
//                 i=i+1;
//                 break;
//                 case 'ia':
//                     z[i] = y.join('');
//                     i=i+1;
//                     break;
//                 case 'ie':
//                     z[i] = y.join('');
//                     i=i+1;
//                     break;
//                 case 'ii':
//                     z[i] = y.join('');
//                     i=i+1;
//                     break;
//                 case 'io':
//                     z[i] = y.join('');
//                     i=i+1;
//                     break;
//                 case 'iu':
//                     z[i] = y.join('');
//                     i=i+1;
//                     break;
//                     case 'oa':
//                         z[i] = y.join('');
//                         i=i+1;
//                         break;
//                     case 'oe':
//                         z[i] = y.join('');
//                         i=i+1;
//                         break;
//                     case 'oi':
//                         z[i] = y.join('');
//                         i=i+1;
//                         break;
//                     case 'oo':
//                         z[i] = y.join('');
//                         i=i+1;
//                         break;
//                     case 'ou':
//                         z[i] = y.join('');
//                         i=i+1;
//                         break;
//                         case 'ua':
//                             z[i] = y.join('');
//                             i=i+1;
//                             break;
//                         case 'ue':
//                             z[i] = y.join('');
//                             i=i+1;
//                             break;
//                         case 'ui':
//                             z[i] = y.join('');
//                             i=i+1;
//                             break;
//                         case 'uo':
//                             z[i] = y.join('');
//                             i=i+1;
//                             break;
//                         case 'uu':
//                             z[i] = y.join('');
//                             i=i+1;
//                             break;
//             default:
//                 break;
//         }
//     }
//     document.write(x.join('') + '<br>' + 'Such occurrences are ' + z.length + ' which are '+z)
// }
// let a = 'Pleases read this application and give me gratuity';
// twoVowels(a)
// 8
// function conMeters(x){
// m = a*1000;
// document.write(m+ 'm' + '<br>')
// }
// function conFeet(x){
//     ft= a * 1000 * 3.281;
//     document.write(ft+'ft'+ '<br>')
// }
// function conInches(x){
//     inc=a*1000*3.218*12
//     document.write(inc+'in'+ '<br>')
// }
// function conCentimeters(x){
//     cm = a*1000*100;
//     document.write(cm+'cm'+ '<br>')
// }
// let a =prompt('ENTER DISTANCE B/W TWO CITIES IN Km')
// conCentimeters(a);conFeet(a);conInches(a);conMeters(a);
// 9
// function overTimeCalc(x){
//     pay = 12*x;
//     document.write('Pay: ' + pay+'Rs'+ '<br>'+'WORK for: '+x+'hrs')
// }
// overTimeCalc(45)
// 10
// let y=0;z=0;w=0;
// function currency(x){
//     if (x>=100) {
//         y=Math.floor( x/100);
//     }
//     if ((x-y*100)>=50) {
//         z=Math.floor((x-y*100)/50 );
//     }
//     if ((x-y*100-z*50)>=10) {
//         w=Math.floor((x-y*100-z*50)/10 );
//     }
// document.write('YOU HAVE '+y+'  HUNDREDS NOTES '+z+' FIFTY NOTES '+ w+' TEN NOTES')
// }
// let r =prompt('ENTER AMOUNT TO WITH DRAW')
// currency(r)
////////////////////////////////////// CHP 43 to 48
// 1
// let x = document.getElementById('body');
// let y = document.createElement('a');
// y.setAttribute('onclick','alertA()');
// yText = document.createTextNode('CLICK HERE');
// y.appendChild(yText);
// y.style.cursor = 'pointer'
// y.style.color = 'blue'
// x.appendChild(y)
// function alertA(){
//     alert('U click On a link')
// }
// 2
// function alertBuy(){
//     alert('THANKS FOR PURCHASING A PHONE FROM US')
// }
// 3
// var x =[0,1,2,3];y = ['Jhone','Doe','Mark','James'];w=[10,8,3,8];q=[];c=[];v='';c=[];cc=[];
// function delb(e){
//     // Selection
//     r  = e.parentNode.parentNode.parentNode;
//     // name track
//    yy = y.indexOf(r.childNodes[0].childNodes[3].innerHTML)
// //    remove from Array
//    c += y.splice(yy,1) ;
//    cc +=  w.splice(yy,1) ;
// //    remove html
//    r.remove()

//    q=0;
//    numA()
// }

// function numA(){
// for (let index = 0; index < y.length; index++) {
//   xx = document.getElementById('tableA').childNodes[index+2].childNodes[0].childNodes[1].innerHTML = index
//   console.log(xx)
    
// }
// }

// function list(){
// for (let index = 0; index < y.length; index++) {
//     z = document.getElementById('tableA')
//     q = `<tr>
//     <td>${x[index]}</td>
//     <td>${y[index]}</td>
//     <td>${w[index]}</td>
//     <td><button onclick="delb(this)">DELETE</button></td>
//  </tr>
//     `

//     z.innerHTML +=q
// }
// }
// list()
// 4
// function pic2(e){
// e.src = "pics/6.jpg"
// }
// function pic1(e){
//    e.src = "pics/5.jpg"
//    }
// 5
// let i = 0;
// function incP(){
//    i ++ 
//    x = document.getElementById('counter');
//    x.innerHTML =i;
// }

// function decM(){
//    i--
//    x = document.getElementById('counter');
//    x.innerHTML = i;
// }

//////////////////////// CHP 49 to 52
// 1
// function submit(){
//     a = document.getElementById('first-name').value
//     b = document.getElementById('last-name').value
//     c = document.getElementById('email').value
//     d = document.getElementById('country').value
//     e = document.getElementById('contact').value
//     console.log(a)
//     if (a=='' || b=='' || c=='' || d=='' || e=='' ) {
//         document.write('PLEASE FILL ALL DETAILS')
//     }else{
//         document.write('First Name: '+a+'<br>')
//         document.write('Last Name: '+a+'<br>')
//         document.write('Email: '+a+'<br>')
//         document.write('Country: '+a+'<br>')
//         document.write('Contact: '+a+'<br>')
//     }
// }
// 2
// function more(){
//     x = document.getElementById('p1');
//     x.innerHTML = document.getElementById('p1f').innerHTML;
// }
// 3
// dont understand the point

//////////////////////// CHP 58 to 67
// function modal(e){
// // get src
// src = e.src

// x=document.getElementById('modal')
// // new img element
// y = document.createElement('img')
// y.setAttribute('src',src) 

// // buttons
// btn1 = document.createElement('button')
// btn2 = document.createElement('button')
// btn1.innerText = '+ ZOOM IN'
// btn2.innerText = '- ZOOM OUT'
// btn1.setAttribute('onclick','incP(this)')
// btn2.setAttribute('onclick','decM(this)')

// // css
//    y.style.position = 'absolute'
//    y.style.top = '100px'
//     y.style.display = 'flex'
//    y.style.width = '600px'
//    y.style.height = '600px'


// btn1.style.position = 'absolute'
// btn2.style.position = 'absolute'
// btn1.style.bottom = '90px'
// btn2.style.bottom = '90px'
// btn1.style.left = '200px'
// btn2.style.left = '400px'
// // add
// x.appendChild(y)
// x.appendChild(btn1)
// x.appendChild(btn2)


// }

// var i = 600;
// function incP(){
//    i = i+10;
//    incr = i+'px';
//    y.style.width =  incr;
//    y.style.height = incr;
// }
// function decM(){
//    i = i-10;
//    decr = i+'px';
//    y.style.width = decr;
//    y.style.height = decr;
// }


//////////////////////// CHP 58 to 67
// // 1
// // i
// let x = document.getElementById('main-content');
// // ii
// console.log('CHILD Element of MAIN CONTAINER ARE ')
// console.log(x.children);
// // iii
// let y=document.getElementsByClassName('render')
// document.write('ALL ELEMENTS WHICH HAVE CLASS RENDER ' + '<br>')
// Array.from(y).forEach(function(element){
// z=element.innerHTML;
// document.write(z+'<br>')
// }
// )
// // iv
// let inp = document.getElementById('first-name');
// inp.value = 'MUHAMMAD HAMMAD';
// // v
// inp = document.getElementById('last-name');
// inp.value = 'RIAZ UDDIN';
// inp = document.getElementById('email');
// inp.value = 'hammadriaz28@gmail.com';
// 2
// i
// let i = document.getElementById('form-content');
// console.log(i.nodeType+' Element');
// ii
//  ii = document.getElementById('last-name');
// console.log(ii.nodeType);
// console.log(ii.childNodes)
// iii
// ii.childNodes = '<h1>HAMMAD</h1>'
// iv
// let zz = document.getElementById('main-content');
// console.log(zz.firstElementChild);
// console.log(zz.lastElementChild);
// v
// console.log(ii.previousElementSibling)
// console.log(ii.nextElementSibling)
// vi
// let t = document.getElementById('email');
// console.log(t.parentElement)
// console.log(t.nodeType)


