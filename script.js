console.log("Getting Bank Details...")

window.addEventListener("load", function() {
  const overlay = document.getElementById("loading-overlay");
  overlay.classList.add("fade-out");
  
  setTimeout(function() {
    overlay.style.display = "none";
  }, 500); 
});
