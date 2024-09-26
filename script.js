

function imgUpload(){
    var input=document.getElementById("img");
    var dataurl=input.files[0];
    var fr=new FileReader();
    fr.readAsDataURL(dataurl);
 fr.addEventListener("load",()=>{
    var url=fr.result;
    doc.innerHTML+=`
    <br>
 <div>
 <img class="img" src=${url} />
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    `

  var time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

var content=document.getElementsByClassName("img");
for (var i = 0; i < content.length; i++) {
    content[i].scrollIntoView();
}
    setTimeout(()=>{
        doc.innerHTML+=`
        
        <br>
 <div class="ai-message">
            <p>Wow, this is ok</p>
        <small class="smally">${time}</small>
  <br>
  </div>
       
        <br>
        `
    },1300);



 })



}

var userinput=document.getElementById("userinput");


userinput.addEventListener("keydown",(e)=>{

if(e.key ==="Enter"){
    mySend();
    userinput.value="";
}

})




function mySend(){



  var time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});


if(userinput.value == "edit this picture" || userinput.value =="edit picture" || userinput.value == "edit"){
setTimeout(()=>{

var width=prompt("Width");
var height=prompt("Height");

var img=document.querySelector(".img");
img.style.width=width;
img.style.height=height;
},1000)
}



var usertext=userinput.value;
var doc=document.getElementById("doc");

userinput.focus();

doc.innerHTML += `
        <br>
    
 <div class="user-message">
            <p>${usertext}</p>
       <br>
  <small class="small">${time}</small>
        <br>
         </div>

        <br>        
        <br>
        <br>
        `


        var content=document.getElementsByClassName("user-message");
for (var i = 0; i < content.length; i++) {
    content[i].scrollIntoView();

}


 


var path="https://ambiguous-humane-begonia.glitch.me/ai";
        
        fetch(path)
        .then(res => res.json())
        .then(data => appendData(data))
        .catch(error => console.log(error))

        function appendData(data) {
            var doc=document.getElementById("doc");
 

                for (var i = 0; i < data.length; i++) {
                
            if(usertext === data[i].question){


            var response=data[i].response;

            setTimeout(()=>{
                doc.innerHTML += `
                <br>
                <br>
 <div class="ai-message">

            <p>${response}</p>
        <br>    
  <small class="smally">${time}</small>
        <br>
        </div>
        `
             var aicontent=document.getElementsByClassName("ai-message");
for (var i = 0; i < aicontent.length; i++) {
    aicontent[i].scrollIntoView();

}
 
    },1000)
         

         

          if(response === "Number?"){
            var nom =prompt("Enter number");
          
            setTimeout(()=>{
                doc.innerHTML += `
 
        <br>
        <br>
 <div class="ai-message">
            <a href="tel:${nom}" style="color:blue">${nom}</p>
       <br>    
  <small class="smally">${time}</small>
        <br>
        </div>
        
        
        <br>
        <br>
        `
    },1000)
}   


  if(response === "reloading" || response === "Bye"){

    setTimeout(()=>{
            window.location.reload();
        
        },1000)
            
}           


            }






        }
    }



}


var codey="0009"

        // var formdata={
        //     "id":"4",
        //     "firstName":"Amzi",
        //     "lastName":"Akrofi"
        // }

        // function sendy(){
        //     fetch("person.json",{
        //         method:"POST",
        //         headers:{
        //             "Content-Type":"application/json",
        //         },
        //         body : JSON.stringify(formdata)
        //     })
        //     .catch(err => alert(err))
        // }


        // fetch('person.json')
        //     .then((response) => response.json())
        //     .then((data) => appendData(data))
        //     .catch(function (err) {
        //         console.log('error: ' + err);
        //     });


