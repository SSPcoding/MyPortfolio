function revealTospan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        //create two spans
        let parent=document.createElement("span");
        let child=document.createElement("span");

        //parent and child both sets theor respectrive clases
        parent.classList.add("parent");
        child.classList.add("child");

        //span parent gets child and child gets elem details
        child.innerHTML=elem.innerHTML;
        parent.appendChild(child);
        //elem replaces it value withg parent span
        elem.innerHTML=""
        elem.appendChild(parent)
    });
}

revealTospan();

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("year1").textContent = new Date().getFullYear();


let t1=gsap.timeline();
t1.from(".child span" ,{
        x: 100,
        delay: 1,
        stagger: 0.2,
        duration: 2,
        ease: Power3.easeInOut,
    })
t1.to(".parent .child",{
        y:"-100%",
        duration: 0.5,
        delay: 1,
        ease: Circ.easeInOut,
    })
t1.to(".loader",{
    height: 0,
    duration:1,
    ease: Circ.easeInOut,
})
t1.to(".green",{
    height: "100%",
    delay:-.85,
    top:0,
    duration:1,
    ease: Circ.easeInOut,
    
})
t1.to(".green",{
    height: "0%",
    duration:1,
    delay:-.2,
    ease: Circ.easeInOut,
})

function updateDate(){
    const now=new Date();
    const datestring=now.toLocaleDateString();
    const timestring=now.toLocaleTimeString();

    document.getElementById("current-date").textContent=datestring;
    document.getElementById("current-time").textContent=timestring;

}

updateDate();
setInterval(updateDate, 1000);

function loadMultipleClassesAfterDelay(classNames, delayInSeconds) {
    const delayMs = delayInSeconds * 1000;
    setTimeout(() => {
      classNames.forEach(className => {
        document.querySelectorAll(`.${className}`).forEach(el => {
          el.style.opacity = '1';
          el.style.visibility = 'visible';
        });
      });
    }, delayMs);
  }

loadMultipleClassesAfterDelay(['home', 'row1', 'row2'], 7);
  

document.getElementById("downloadResumeBtn").addEventListener("click", function () {
    const resumeLink = document.createElement("a");
    resumeLink.href = "assets\Sanket suman Patra (1).pdf";
    resumeLink.download = "Sanket_Resume.pdf";
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
  });

  document.querySelectorAll('#nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    });
  });