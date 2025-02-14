let happy=document.getElementsByClassName("happy")[0];

let sad=document.getElementsByClassName("sad")[0];

let free=document.getElementsByClassName("free")[0];
let get=document.getElementsByClassName("in")[0];
let claim=document.getElementsByClassName("claim")[0];
let white=document.getElementsByClassName("white")[0];



happy.addEventListener("mouseover",function(){
    this.style.transform="scale(1.1)";
    this.style.zIndex="5"
})

happy.addEventListener("mouseout", function(){
    this.style.transform="scale(1)";
    this.style.zIndex="1"
})

sad.addEventListener("mouseover",function(){
     this.style.transform="scale(1.1)";
    this.style.zIndex="5"

})

sad.addEventListener("mouseout",function(){
     this.style.transform="scale(1)";
    this.style.zIndex="1"

})

free.addEventListener("mouseover",function(){
      this.style.transform="scale(1.1)";
      this.style.zIndex="5"


})
free.addEventListener("mouseout",function(){
     this.style.transform="scale(1)";
     this.style.zIndex="1"

})
get.addEventListener("mouseover",function(){
    this.style.transform="scale(1.1)";
    this.style.zIndex="5"


})
get.addEventListener("mouseout",function(){
   this.style.transform="scale(1)";
   this.style.zIndex="1"

})
claim.addEventListener("mouseover",function(){
    this.style.transform="scale(1.1)";
    this.style.zIndex="5"


})
claim.addEventListener("mouseout",function(){
   this.style.transform="scale(1)";
   this.style.zIndex="1"

})
white.addEventListener("mouseover",function(){
    this.style.transform="scale(1.1)";
    this.style.zIndex="5"


})
white.addEventListener("mouseout",function(){
   this.style.transform="scale(1)";
   this.style.zIndex="1"

})