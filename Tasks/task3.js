/*1.Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######         */
for(var i=1; i<=4; i++){
    console.log("*".repeat(i));
}

/*2.Iterate through the string array and print it contents
      var strArray= ["<option>Jazz</option>",
      ,<option>Blues</option>",
      ,<option>New Age</option>",
      ,<option>Classical</option>",
      ,<option>Opera</option>"] 
*/
for(var i=0; i<=strArray.length; i++)
{
    console.log(strArray[i]);
}

//Arrays :
var myarray=[11,22,33,44,55];
//write a code to count the elements in the array . Don’t use length property
let count = 0;
for(var i=0; i!=undefined; i++)
{
    count=count+1;
}
//console.log(count);

//Declare an empty array;
let Arr = [];

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let food = ["Thalassery Biryani","Idiyappam","Naadan Beef Fry","Sadya","Puttu","Banana Fritters","Appam","Malabar Parotta","Kerala Beef and Curry","Karimeen","Kadala Curry","Puttu",
"Palada Payasam","Pumpkin","Erissery Lentil Curry","Prawn Curry","Fish Moilee","Dosa","Idili","Chapati","Prawncurry","Ghee Roast"];

//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log(food[5]);

//Find the length of your foods array
console.log(foods.length);

/*
Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {

}
}
dataHandling(friends);
*/
friends[0] = "Munnabai";

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica
for(var i=0; i<=2; i++)
{
    console.log(friends[i]);
}

//Find the person is ur friend or not
function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) 
    {
        if(input.includes(name)){
        return true;
        }
        else{ 
        return false;
        }
    
    }
    }
let found = dataHandling(friends,"Jeff");
console.log(found);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
    function dataHandling(input){
    //Your code goes here
    let friends = friends1.concat(friends2);
    friends.sort();

    }
    dataHandling(friends);

//1.Get the first item, the middle item and the last item of the array
let first = friends[0];
let last = friends[friends.length-1]
let middle = friends[Math.round((friends.length-1)/2)];

//2. Add your name to the end of the friends array, and add another name to beginning
friends.push("abijith");
friends.unshift("guvi");

//3.Add Mr or Ms to the names in the friends array
for (var i = 0; i < input.length; i++) {
    if(friends[i]==="MaryJane"){
        var sirname = ["Ms", friends[i]];
        friends[i] = sirname.join(" ");
    }
}

//4. Concat all the names the friends array and return as comma "," seperated string
let joinnames = friends.join(",");

//5. Find the friends names who has letter ‘a’ and return the list.
for (var i = 0; i < input.length; i++) {
    if (friends[i].includes("a")){
        return friends[i];
    }
}

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let sum = 0;
for (var i = 0; i < input.length; i++){
    sum = sum + friends[i].length;

}
let avg = sum/friends.length;

//7. Find the names and return the list starting with letter M.
list = [];
for (var i = 0; i < input.length; i++) {
    if(friends[i][0] == "M"){
        list.push(friends[i]);
    }
}

//8. Find the name with max characters and return the name.
var arr = Object.values(namesLength);
var max = Math.max(...arr);

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

var name = getKeyByValue(namesLength, max);

//9. Find the name with min characters and return the name
var arr = Object.values(namesLength);
var min = Math.min(...arr);

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

var name = getKeyByValue(namesLength, min);

//Find the average in the array below.
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];

var sum = 0;
var count = 0;
for (let i = 0; i < friendsInfo.length; i++) {
    if (typeof(friendsInfo[i]) == typeof(6)) {
        sum += friendsInfo[i];
        count += 1;
    }
}
var average = sum / count;

//Print the contents of the input variable
var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    //Your code goes here
    for(var j=0; j<input[i].length; j++){
        console.log(input[i][j]);
    }
}
}
dataHandling(input);

//__________Objects:____________
/*
What the output
*/
myobject = {1:one,"11":1,"name":"arun"}
console.log(myobject[11]); 
console.log(myobject.name);
//Changed the above code for getting output without error
//Output
1
arun 

/*Add a new key value pair to myobject
key : ten
value : ten
*/
myobject = {1:one,"11":1,"name":"arun"}
//your code goes here
myobject.ten = "ten";
console.log(myobject);
{"1":"one","11":1,"name":"arun","ten":"ten"}; // Quotes might not get displayed that fine

/*
Write out an object literal to represent the data below.
Guvi, Geek, 6, IIT-M RP,Chennai
*/
var Obj = {"Guvi" : ["Guvi", "Geek", 6, "IIT-M RP","Chennai"]};

//How would you represent the following data using a combination of object literals and arrays?

var thisObject = {
    "Guvi" : ["Guvi", "Geek", 6, "IIT-M RP", "Chennai"], 
    "Amazon" : ["Amazon", "Inc", 31, "SP Infocity", "Chennai"],
    "Google": ["Google", "Alphabet", 34, "Amphitheater Parkway", "MountainView"],
    "Tesla" : ["Tesla", "Inc", 32, "333 Santana Row", "San Jose"]
}
