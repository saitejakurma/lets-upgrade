let arr=[{
    name:"saiteja",
    age:19,
    city:"hyderabad",
    salary:"20,000",
},
{
    name:"Theja",
    age:19,
    city:"bangalore",
    salary:"43,000",
},
{
    name:"srikar",
    age:19,
    city:"bangalore",
    salary:"40,000",
},
{
    name:"jack",
    age:19,
    city:"kakinada",
    salary:"60,000",
},
{
    name:"ace",
    age:19,
    city:"vizag",
    salary:"90,000",
},
];

function firstarr(superarr){
    let yt=document.getElementById("blue");
    let pl="";
    superarr.forEach(function(a,index){
        let uy=`<tr>
         <td>${a.name}</td>
        <td>${a.age}</td>
        <td>${a.city}</td>
        <td>${a.salary}</td>
        <td><button onclick="deletearr(${index})">delete</button></td>
        </tr>`;

pl+=uy;
// console.log(uy);
// yt.innerHTML+=uy; 
    })
    yt.innerHTML=pl;
    // console.log(yt);

}
firstarr(arr);

function deletearr(index){
console.log(index);
arr.splice(index,1);
//console.log(arr);
firstarr(arr);
}



function search(){  
    let by=document.getElementsByClassName("zing")[0].value;
    let wat=document.getElementsByClassName("city")[0].value;
    console.log(by);
    console.log(wat);
   let hyo=arr.filter(function(a){
    if( (a.name.toUpperCase().indexOf(by.toUpperCase())!=-1) && (a.city.toUpperCase().indexOf(wat.toUpperCase())!=-1)){

      return a.name;
    }
    else{
        return false;
    }

    


    }
  
   )
   console.log(hyo);
   firstarr(hyo);
}