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

const itemSelect = document.getElementById("item");
const quantityInput = document.getElementById("quantity");
const totalText = document.getElementById("total");
const orderForm = document.getElementById("orderForm");
const ordersDiv = document.getElementById("orders");

function updateTotal() {
const price = parseInt(
itemSelect.options[itemSelect.selectedIndex].dataset.price
);

const quantity = parseInt(quantityInput.value);

totalText.textContent = `Total: $${price * quantity}`;
}

itemSelect.addEventListener("change", updateTotal);
quantityInput.addEventListener("input", updateTotal);

orderForm.addEventListener("submit", function(event) {
event.preventDefault();

const item = itemSelect.value;
const quantity = quantityInput.value;

const price = parseInt(
itemSelect.options[itemSelect.selectedIndex].dataset.price
);

const total = price * quantity;

ordersDiv.innerHTML += `
<div style="background:white;padding:10px;margin:10px 0;border:2px solid black;">
<strong>Order Placed!</strong><br>
Item: ${item}<br>
Quantity: ${quantity}<br>
Total: $${total}

<a href="${download}" download
const total = price * quantity;
const download = itemSelect.options[itemSelect.selectedIndex].dataset.download;
style="
display:inline-block;
margin-top:15px;
padding:12px 20px;
background:#4CAF50;
color:white;
text-decoration:none;
border-radius:6px;
font-weight:bold;
">
Download ${item}
</a>
</div>
`;
});

updateTotal();