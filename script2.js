console.log("Getting Bank Details...")

document.addEventListener("DOMContentLoaded", function() {
 const overlay = document.getElementById("loading-screen");

 
  setTimeout(function() {
    overlay.classList.add("fade-out");
    

    setTimeout(function() {
      overlay.style.display = "none";
    }, 1000); 

  }, 3000); 
});

