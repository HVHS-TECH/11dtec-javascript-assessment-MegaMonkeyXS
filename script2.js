console.log("Getting Bank Details...");

document.addEventListener("DOMContentLoaded", function () {

    // Loading Screen
    const overlay = document.getElementById("loading-screen");

    setTimeout(function () {
        overlay.classList.add("fade-out");

        setTimeout(function () {
            overlay.style.display = "none";
        }, 1000);

    }, 3000);

    // Elements
    const itemSelect = document.getElementById("item");
    const quantityInput = document.getElementById("quantity");
    const totalText = document.getElementById("total");
    const orderForm = document.getElementById("orderForm");
    const ordersDiv = document.getElementById("orders");

    // Update total price
    function updateTotal() {
        const selected = itemSelect.options[itemSelect.selectedIndex];
        const price = parseInt(selected.dataset.price) || 0;
        const quantity = parseInt(quantityInput.value) || 1;

        totalText.textContent = `Total: $${price * quantity}`;
    }

    itemSelect.addEventListener("change", updateTotal);
    quantityInput.addEventListener("input", updateTotal);

    // Handle order
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selected = itemSelect.options[itemSelect.selectedIndex];

        const item = selected.value;
        const quantity = parseInt(quantityInput.value) || 1;
        const price = parseInt(selected.dataset.price) || 0;
        const download = selected.dataset.download || "#";

        const total = price * quantity;

        ordersDiv.innerHTML += `
            <div style="
                background:white;
                padding:15px;
                margin:10px 0;
                border:2px solid black;
                border-radius:8px;
            ">
                <h3 style="margin-top:0;">Order Placed!</h3>

                <p><strong>Item:</strong> ${item}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Total:</strong> $${total}</p>

                <a href="${download}" download
                    style="
                        display:inline-block;
                        margin-top:10px;
                        padding:12px 20px;
                        background:#4CAF50;
                        color:white;
                        text-decoration:none;
                        border-radius:6px;
                        font-weight:bold;
                    ">
                     Download ${item}
                </a>

                <p style="
                    margin-top:15px;
                    font-size:13px;
                    color:#666;
                ">
                    This download is only a <strong>.jar</strong> file for Minecraft and is not intended or used for any malicious purpose.
                </p>
            </div>
        `;
    });

    updateTotal();

});