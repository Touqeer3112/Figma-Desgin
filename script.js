// const toggleBtn = document.getElementById('toggleCategories');
// const dropdown = document.getElementById('categoriesDropdown');

// toggleBtn.addEventListener('click', () => {
//   dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
// });
 const cartData = [
      { title: "T-shirts with multiple colors", price: 78.99, qty: 1 },
      { title: "T-shirts with multiple colors", price: 78.99, qty: 2 },
      { title: "T-shirts with multiple colors", price: 78.99, qty: 3 }
    ];

    function loadCart() {
      const container = document.getElementById("cart-items");
      container.innerHTML = "";
      cartData.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <img src="https://via.placeholder.com/70">
          <div class="item-info">
            <div class="item-title">${item.title}</div>
            <div class="item-meta">Size: medium, Color: blue<br>Seller: Artel Market</div>
            <div class="item-actions">
              <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
              <button class="save-btn">Save for later</button>
            </div>
          </div>
          <div class="qty-price">
            <div>$${(item.price * item.qty).toFixed(2)}</div>
            <select onchange="updateQty(${index}, this.value)">
              ${Array.from({length: 10}, (_, i) => `<option value="${i+1}" ${item.qty==i+1?"selected":""}>Qty: ${i+1}</option>`).join('')}
            </select>
          </div>
        `;
        container.appendChild(div);
      });
    }

    function removeItem(index) {
      if (confirm("Remove this item?")) {
        cartData.splice(index, 1);
        loadCart();
      }
    }

    function removeAll() {
      if (confirm("Remove all items?")) {
        cartData.length = 0;
        loadCart();
      }
    }

    function updateQty(index, value) {
      cartData[index].qty = parseInt(value);
      loadCart();
    }

    window.onload = loadCart;