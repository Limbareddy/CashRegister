const Bill=document.querySelector(".input-bill");
const Cashtaken=document.querySelector(".cash-taken");
const checking=document.querySelector(".btn-checking");
const message=document.querySelector(".error-message");
const NoOfNotes=document.querySelectorAll(".notes");
const next=document.querySelector(".next-button");
const hiding=document.querySelectorAll('.hide');
const output=document.querySelector("#output");
// console.log(hiding);

hiding[0].style.display="none";
hiding[1].style.display="none";
hiding[2].style.display="none";

next.addEventListener("click" ,function hide(){
     if((Bill.value !=" ") && (Bill.value) >0){
        next.style.display="none";
       output.style.display="none";
        hiding[0].style.display="block";
hiding[1].style.display="block";
hiding[2].style.display="block";
  showmessage(" ")

     }
else
{
    showmessage("Enter bill value  greater than 0")
}

});


const  Notes=[2000,500,100,20,10,5,1];
checking.addEventListener("click", Validator);

 function Validator() {
    hidemessage()
    if(Number(Bill.value) > 0  && Cashtaken.value!="")
    {
        if(Number(Cashtaken.value)>= Number(Bill.value)){
            // console.log(Cashtaken)
            const amountTobeReturned = Cashtaken.value-Bill.value;
            output.style.display="block";
           output.innerText= " Return : "+ amountTobeReturned;
         
            change(amountTobeReturned);


        }
        else
        {
            showmessage(" Do you want to work here")
            output.style.display="none";
        
        }

    }
    else{
        
        showmessage(" Enter Cash amount greater than 0")
        output.style.display="none";
        // showmessage(errormessage);
    }
}


function hidemessage(){
    message.style.display="none";
}
function showmessage(errormessage){
    message.style.display="block";
    message.innerText=errormessage
}


function change(amountTobeReturned){
    for(let i=0; i<Notes.length; i++){
        const NotestobeReturn= Math.trunc(amountTobeReturned/ Notes[i])
    
    amountTobeReturned= (amountTobeReturned %Notes[i])
    NoOfNotes[i].innerText=NotestobeReturn
    }
}

checking.addEventListener("click", Validator);
