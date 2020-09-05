//Q1. Program to find particular character in a string //
let dat1="jack";
console.log(dat1.indexOf('a'));
//Q2. Program to convert minutes to seconds
let dat2='2';
let time=dat2 * 60
console.log(time);
//Q3. Program to search element in a array of strings
let arr=[-10,-30,30];
let vt=arr.find(function(a){
    return a>0;
})
console.log("search element is"+vt);

//Q4. Program to display only elements containing 'a' in the term of array
let arr1=["sai","jack","tej"];
let er=[];
let at=arr1.forEach(function(a){
  
let e=a.indexOf("a");
// console.log(e);
if(e>0){
er.push(a);
}


});
console.log("elements are :"+er);


////Q5. Print an array in reverse order
let  yt=["sai","teja","nine"];
console.log(yt);
let ty=["sai","teja","nine"].reverse();
console.log(ty);

