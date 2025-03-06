const products = [
    { name: 'Яблуко', quantity: 3, isActive: true},
    { name: 'Банан', quantity: 5, isActive: false},
    { name: 'Полуниця', quantity: 2, isActive: true},
];

function getTotalQuantity(products) {
    return products.reduce((sum, products) => products.isActive === true ? sum + products.quantity : sum, 0);
}

console.log(getTotalQuantity(products))