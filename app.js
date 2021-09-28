console.log("this is js project");


function cal(){

    console.log("clicked");

    let p=document.getElementById('p');
    let r=document.getElementById('r');
    let n=document.getElementById('n');
    let print=document.getElementById('print');

   if(p.value>0 && r.value>0 && n.value>0){

    let int=p.value * r.value * n.value/100;
    print.innerHTML="Interest is =  "+int + " rs";
   }
   else{
       print.innerHTML="Please Enter Positive Values and upto 0 values";
   }
  

   
}