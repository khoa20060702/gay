const productList = JSON.parse(localStorage.getItem('products')) || [];
        
                
    productList.forEach(function (product) {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Giá tiền: ${product.price}</p>
        `;
        document.getElementById("product-list").appendChild(productItem);
    });