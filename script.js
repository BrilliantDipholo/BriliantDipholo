const videoTopics=document.getElementById("videoTopics");
const videotopic1=document.getElementById("videotopic1");
const videotopic2=document.getElementById("videotopic2");
const videotopic3=document.getElementById("videotopic3");
const vidContent=document.getElementById("vidContent");
const home=document.getElementById("home");
const backhome=document.getElementById("back-home");
backhome.onclick=function(){
    vidContent.classList.add("hide");
    videoTopics.classList.remove("hide");
    home.classList.remove("hide");
}
videotopic1.onclick=function(){
    vidContent.classList.remove("hide");
    videoTopics.classList.add("hide");
    home.classList.add("hide");
}
videotopic2.onclick=function(){
    vidContent.classList.remove("hide");
    videoTopics.classList.add("hide");
    home.classList.add("hide");
}
videotopic3.onclick=function(){
    vidContent.classList.remove("hide");
    videoTopics.classList.add("hide");
    home.classList.add("hide");
}