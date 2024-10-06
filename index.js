let navItem2 = document.getElementById("navItem2");
let resumeContainer = document.getElementById("resume");




navItem2.addEventListener("click",function(){
    let resumeExpirence = document.createElement("div");
    resumeContainer.appendChild(resumeExpirence);
    let exhead = document.createElement("h1");
    exhead.textContent = "Expirence"
    resumeExpirence.appendChild(exhead);
});