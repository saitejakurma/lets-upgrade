window.onload = function () {
let arr=[{
    name:"sai",
    num:9,
},

];
if (localStorage.getItem("superheroes") == null) {
    localStorage.setItem("superheroes", JSON.stringify(arr));
  }
};
function display(superarray=undefined){
    let pi="";
    if (superarray == undefined) {
        superheroes = JSON.parse(localStorage.getItem("superheroes"));
      } else {
        superheroes = superarray;
      }
    superheroes.forEach(function(a){
        let spu=`<tr><td>${a.name}</td>
        <td>${a.source}</td>
        <td>${a.des}</td>
        <td>${a.num}</td>
        <td>${a.pass}</td>
        </tr>`
       // localStorage.
        pi+=spu;
    }
    )
 let gt=document.getElementById("dine");
 console.log("name"+gt);
 gt.innerHTML=pi;

}
display();


function addbus(e){
    e.preventDefault();
   let name=document.getElementById("name").value;
   let source=document.getElementById("source").value;
   let des=document.getElementById("destination").value;
   let num=document.getElementById("number").value;
   let pass=document.getElementById("passenger").value;
console.log(name);
let ski={};
ski.name=name;
ski.source=source;
ski.des=des;
ski.num=Number(num);
ski.pass=pass;

let superheroes = JSON.parse(localStorage.getItem("superheroes"));

//   localStorage.setItem("arr",);
// let superheroes =localStorage.getItem("arr");
superheroes.push(ski);
 //console.log(superheroes);
localStorage.setItem("superheroes",JSON.stringify(superheroes));
//   //localStorage.setItem("arr","arr");
console.log(superheroes);
display();
let sname=document.getElementById("name").value="";
   let ssource=document.getElementById("source").value="";
   let sdes=document.getElementById("destination").value="";
   let snum=document.getElementById("number").value="";
   let spass=document.getElementById("passenger").value="";


}
function search(){
    
        let searchValue = document.getElementById("source").value;
        let superheroes = JSON.parse(localStorage.getItem("superheroes"));
        let newdata = superheroes.filter(function (superhero) {
          return (
            superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
          );
        });
      
        display(newdata);
      

}