function thor(){
    const ht= document.getElementsByClassName("Thor");
    const newurl="https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/06/Avengers-Endgame-Thor-feature.jpg"; 
   
    ht[0].src=newurl;
    console.log(ht[0].src);
//     const ele=document.getElementById("Thor");
//     const newurl="https://qph.fs.quoracdn.net/main-qimg-db1fe32fc8c4fd238354142f0fbcb5f7"; 
//    ele.src=newurl;
}
function spider(){
    const ht= document.getElementsByClassName("Thor");
    const newurl="http://hd.wallpaperswide.com/thumbs/spider_man_selfie-t2.jpg"; 
   
    ht[0].src=newurl;
    
}
function IronMan(){
    const ht= document.getElementsByClassName("Thor");
    const newurl="https://i1.wp.com/www.thisweekinvideogames.com/wp-content/uploads/2020/08/IronMan.png?fit=800%2C445&ssl=1"; 
   
    ht[0].src=newurl;
}
function changetext(){
const yt=document.getElementsByClassName("fine");
let tu=yt[0].value;
console.log(tu);
console.log("tej")
const yt1=document.getElementsByClassName("iy");
yt1[0].value=tu;
//yt[1].innerHTML=tu;

}
let ut=[
    {
        name:"tej",
        age:60,
        country:"india",
        hobbies:[ "cricket", "football", "swiming"],
        

    },
    {
        name:"sai",
        age:19,
        country:"us",
        hobbies:[ "cricket", "football", "swiming"],
        

    },
    {
        name:"balu",
        age:19,
        country:"us",
        hobbies:[ "cricket", "football", "swiming"],
        

    }
]
/*@Q3*Create an array of objects with objects having the following properties
A. {name (string), age (number), country (string), hobbies array (string [ ] ) }
B. Write a function to display all the objects on the console
*/
function ui(){
    console.log(ut);
}
ui();   
let io=[];
function up (){
  ut.forEach(function( a){
   let ty=a.country
  if(ty=="india"){
      io.push(a);
  }
})
}


up();
let iu=[];
console.log("country is india"+io);


function ul (){
    ut.forEach(function( a){
     let ty=a.age
    if(ty>30){
        iu.push(a);
    }
  })
  }
ul();
console.log("age more than 30"+iu);
