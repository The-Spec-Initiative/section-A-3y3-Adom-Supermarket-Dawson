
const supermarket = [
    {
    id: 1,
    name: "Rice (5kg)",
    price: 120.00,
    image: "/img/rice.jpg"
  },
  {
    id: 2,
    name: "Bread",
    price: 15.00,
    image: "/img/b.jpg"
  },
  {
    id: 3,
    name: "Milk",
    price: 12.00,
    image: "/img/m.jpg"
  },
  {
    id: 4,
    name: "Eggs (crate)",
    price: 55.00,
    image: "/img/g.jpg"
  },
  {
    id: 5,
    name: "Sugar (1kg)",
    price: 18.00,
    image: "/img/s.jpg"
  },
  {
    id: 6,
    name: "Cooking Oil (1L)",
    price: 35.00,
    image: "/img/c.jpg"
  },
  {
    id: 7,
    name: "Tomatoes",
    price: 10.00,
    image: "/img/t.jpg"
  },
  {
    id: 8,
    name: "Onions",
    price: 8.00,
    image: "/img/on.jpg"
  },
  {
    id: 9,
    name: "Canned Fish",
    price: 20.00,
    image: "/img/c.jpg"
  },
  {
    id: 10,
    name: "Biscuits",
    price: 7.00,
    image: "/img/bis.jpg"
  }
];

const items = document.querySelector(".items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];


if (items) {
  supermarket.forEach(item => {
    items.innerHTML += `
      <div class="it" data-id="${item.id}">
        <img src="${item.image}" width="150">
        <p>${item.name}</p>
        <div class="sub">
          <p>GH¢${item.price}</p>
          <button class="btn">
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    `;
  });

  items.addEventListener("click", e => {
    const btn = e.target.closest(".btn"); 
    if (!btn) return;
    const id = Number(btn.closest(".it").dataset.id);
    const product = supermarket.find(item => item.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  });
}
const cartCount = document.querySelector(".cart-count");

function updateCartCount() {
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

updateCartCount();

const cartDisp = document.querySelector(".cart-disp");
function updateCartCount() {
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

if (cartDisp) {
  if(cart.length <1){
    cartDisp.innerHTML += `<p class="item-mess">No Item Here</p>`
  }
  else{
    cart.forEach((item) => {
    cartDisp.innerHTML += `
      <div class="sub-item" data-id="${item.id}">
        <div class="item-image">
          <img src="${item.image}" width="150px">
        </div>
        <div class="item-details">
          <h3 class="item-name">${item.name}</h3>
          <p class="item-price">GH¢${item.price}</p>
        </div>
        <button class="rem">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `;
  });
  }
cartDisp.addEventListener("click", (e) => {
  const rem = e.target.closest(".rem");
  if (!rem) return;
  const itemEl = rem.closest(".sub-item");
  const id = Number(itemEl.dataset.id);
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  itemEl.remove();
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  cartTt(); 
  cartClear();
});
}
updateCartCount();
cartClear();



const sub = document.querySelector(".sub-total");

function cartTt() {
  if (!sub || !cart) return;
  sub.innerHTML = "";
  const cartTotal = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const p = document.createElement("p");
  const order = document.createElement("h1");
  const discount = document.createElement("p")
  order.textContent = "Order Summary"
  p.textContent = `Total: GH¢${cartTotal.toFixed(2)}`;
  const num = document.createElement("p")
  num.textContent = `Number of Items :  ${cart.length}`
  sub.append(order)
  sub.append(num)

  if(cartTotal >= 100){
    const dis = 0.1;
    let newDis = cartTotal * dis;
    let newTotal = cartTotal - newDis;
    discount.textContent = `Discount : Congrats, you have a discount of 10%, `
    p.textContent = `Total: GH¢${newTotal.toFixed(2)}`;
  }
  else{
    discount.textContent = `Discount: 0 `

  }
    sub.append(discount)

  sub.append(p);
}

cartTt();

