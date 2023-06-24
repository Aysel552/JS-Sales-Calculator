const button = document.querySelector("#btn");
button.addEventListener("click", calculateSales);

function calculateSales(e) {
    e.preventDefault();
    const price = document.querySelector("#price").value;
    const sale = document.querySelector("#salesDelivery").value;

    if (price === "" || price === "0") {
        Swal.fire({
            icon: 'error',
            title: "Indicate the price, please!",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    let newPrice = price * ((100 - sale) / 100);
    let saleAmount = price - (price * (100 - sale) / 100);

    document.querySelector("#newPrice").textContent = newPrice.toFixed(2);
    document.querySelector("#salesAmount").textContent = saleAmount.toFixed(2);
}