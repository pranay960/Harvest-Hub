function changeWeight(operation) {
    var weight = document.getElementById('weight');
    var price = document.getElementById('price');
    var weightChange = operation === '+' ? 1 : -1;
    weight.value = parseInt(weight.value) + weightChange * 50;
    var newPrice = parseInt(price.textContent.split(' ')[1]) + 4 * weightChange;
    price.textContent = 'Price: ' + newPrice;
}