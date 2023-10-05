//create a function using classic syntax
/*export is used to make the function public so that another file like calling.js can b exported*/
/*export */
function showAlert(){
    alert("Iam from classic function");
}
//function stored in a variable
f=function(){
    console.log("I am from function stored in a variable");
}
//es6 arrow function
g=()=>{
    console.log("Iam from arrow function");
}
//classic func with parameters
function add(a,b){
    return a+b;
}
//arrow func with parameters
add2=(a,b)=>{
    console.log(a+b);
}
/* to export all functions then
export{showAlert,f,g,add,add2}*/
