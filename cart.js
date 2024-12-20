
const cartItems = [
    {
        id: 1,
        name: "Nasi A.Gepuk",
        price: 99000,
        image: "Nasigepuk15.png",
        quantity: 0
    },
    {
        id: 2,
        name: "Hot Coconut Coffee",
        price: 85000,
        image: "Hotcafe2.png",
        quantity: 0
    },
    {
        id: 3,
        name: "Hot Klepon Coffee",
        price: 99000,
        image: "Hotcleponcaffe4.png",
        quantity: 0
    },
    {
        id: 4,
        name: "Tuna Bakar&Kangkung",
        price: 98500,
        image: "Tunabakar6.png",
        quantity: 0
    },
    {
        id: 5,
        name: "Ice Milk Coffee",
        price: 99900,
        image: "icemilkcoffe01.jpg",
        quantity: 0
    },
    {
        id: 6,
        name: "Indomie Goreng Telor",
        price: 90000,
        image: "Indomiegorengtelur7.png",
        quantity: 0
    },
    {
        id: 7,
        name: "Cha Kangkung",
        price: 95750,
        image: "Cahkangkung8.png",
        quantity: 0
    },
    {
        id: 8,
        name: "Hot Taro",
        price: 96750,
        image: "Hottaro3.png",
        quantity: 0
    },
    {
        id: 9,
        name: "Nasi Ayam Bakar madu",
        price: 69000,
        image: "nasibakar09.png",
        quantity: 0
    },
    {
        id: 10,
        name: "Frencee Frincee",
        price: 70000,
        image: "FrenceFrice12.png",
        quantity: 0
    },
    {
        id: 11,
        name: "Kentang & Nugget",
        price: 70000,
        image: "Kentangnugget10.png",
        quantity: 0
    },
    {
        id: 12,
        name: "Hot Matcha Latte",
        price: 69000,
        image: "hotmatchalate04.jpg",
        quantity: 0
    },
    {
        id: 13,
        name: "Vietnam Dripp",
        price: 69000,
        image: "canvaproduk01.png",
        quantity: 0
    },
    {
        id: 14,
        name: "Hot Red Velvet",
        price: 60000,
        image: "hotredvelvet03.jpg",
        quantity: 0
    },
    {
        id: 15,
        name: "Black Coffee",
        price: 65000,
        image: "blackcoffe02.jpg",
        quantity: 0
    }
];

function displayCartItems() {
    const cartList = document.querySelector(".cart-list");
    let totalPrice = 0;

    cartList.innerHTML = "";

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        cartItemDiv.appendChild(itemImage);

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        cartItemDiv.appendChild(itemName);

        const itemPrice = document.createElement("div");
        itemPrice.textContent = `Rp. ${item.price.toLocaleString()}`;
        cartItemDiv.appendChild(itemPrice);

        const quantityElement = document.createElement("div");
        quantityElement.textContent = `Quantity: ${item.quantity}`;
        cartItemDiv.appendChild(quantityElement);
    
        const increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.addEventListener("click", () => {
            item.quantity++;
            displayCartItems(); 
        });
        cartItemDiv.appendChild(increaseButton);

        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.addEventListener("click", () => {
            if (item.quantity > 0) {
                item.quantity--;
                displayCartItems(); 
            }
        });
        cartItemDiv.appendChild(decreaseButton);

        cartList.appendChild(cartItemDiv);

        totalPrice += item.price * item.quantity; 

        
        quantityElement.textContent = `Quantity: ${item.quantity}`;
    });

    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = `Rp. ${totalPrice.toLocaleString()}`;
}


// Fungsi proses checkout
function checkout() {
    // menghitung total harga
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    // pesan konfirmasi untuk checkout
    const confirmation = confirm(`Total: Rp. ${totalPrice.toLocaleString()}\n\nAnda yakin akan melanjutkan pembelian?`);

    if (confirmation) {
       
        alert("Checkout Berhasil!");
    } else {
        alert("Checkout Gagal.");
    }
}

// memanggil fungsi displayCartItems 
document.addEventListener("DOMContentLoaded", () => {
    displayCartItems();
});


