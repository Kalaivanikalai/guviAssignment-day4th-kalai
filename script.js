// Task - 1 | 
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var a = JSON.stringify(obj1);
var b = JSON.stringify(obj2);

console.log(a!=b);

// Task - 2 and 3 | print all countries flag ,name, region, sub region and population :-

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();


request.onload = function () {
    
   if (request.status == 200){
    
    let valpass = JSON.parse(request.responseText)
    valpass.map((res) =>{
        console.log(res.flags.svg);
        console.log(res.region);
        console.log(res.subregion);
        console.log(res.population);
    })
   } 
   else{
    request.onerror = function () {
        console.log("request failed")
    }    
   }
};

