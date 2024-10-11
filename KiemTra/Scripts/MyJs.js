function updateQuantity(button, change) {
    const input = button.parentNode.querySelector('input');
    let value = parseInt(input.value);
    value += change;
    if (value < 1) value = 1;  // Không cho phép số lượng nhỏ hơn 1
    input.value = value;
    updateTotal();
}

function updateTotal() {
    let total = 0;
    const prices = document.querySelectorAll('.item-price');
    const quantities = document.querySelectorAll('.item-quantity input');

    prices.forEach((price, index) => {
        const priceValue = parseInt(price.textContent.replace(/\D/g, '')); // Lấy giá trị số từ chuỗi
        const quantityValue = parseInt(quantities[index].value);
        total += priceValue * quantityValue; // Tính tổng tiền
    });

    document.querySelector('.total').textContent = 'Tổng: ' + total.toLocaleString('vi-VN') + 'đ';
    document.querySelector('.item-count').textContent = [...quantities].reduce((sum, input) => sum + parseInt(input.value), 0);
}