//1.Declare four variables without assigning values and print them in console
var name;
console.log(name);

//2.How to get value of the variable myvar as output
var myvar = 1;
console.log(myvar);

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname;
var secondname;
var lastname;
var martialstatus;
var country;
var age;

//4. Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname,secondname,lastname,martialstatus,country,age;

//5. Declare variables and assign string, boolean, undefined and null data types
var string = "hi there...";
var yes = true;
var undefined;
var no_value = null;

/*6. Convert the string to integer
parseInt()
Number()
Plus sign(+)
*/
var string = "123456";
console.log(parseInt(string));

//7. Write 6 statement which provide truthy & falsey values.
function truefalse (val) {
    if (val==true) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}
