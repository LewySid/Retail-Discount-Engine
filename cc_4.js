// Step 1: Create Js file and link to HTML
// Step 2: Creating an array of products

let products = [
    { name: "lighsaber", category: "electronics", price: 200, inventory: 20 },
    { name: "helmet", category: "apparel", price: 100, inventory: 50 },
    { name: "Wookie Cookies", category: "groceries", price: 150, inventory: 15 },
    { name: "droid", category: "household", price: 300, inventory: 30 },
    { name: "speeder", category: "household", price: 500, inventory: 5 },
];
console.log("-----\nProducts:");
console.table(products); // Prints products as a table with aligned columns

// Step 3: Loop that cylces through products and applies discount

for (const product of products) {
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = 0.2;
            break;
        case "groceries":
            discount = 0.15;
            break;
        case "apparel":
        case "household":
            discount = 0.1;
            break;
        default:
            discount = 0;
    }

    product.discount = discount;
    product.discountPrice = product.price * (1 - discount);
}

console.log("-----\nAfter Applying Discounts:");
console.table(products); // Prints products with discounts in aligned columns

// Step 4: Applying additional discounts

let customerType = "regular";
function applyAdditionalDiscount(customerType){
    let additionalDiscount = 0;

    if (customerType === "senior") {
        additionalDiscount = 0.07;
    }
    else if (customerType === "student") {
        additionalDiscount = 0.05;
    }
    else {
        additionalDiscount = 0;
    }
    return additionalDiscount;
}

// Prints customer type and additional discount (for the default `customerType` variable)
console.log(`-----\nCustomer Type: ${customerType}, Additional Discount: ${applyAdditionalDiscount(customerType)}`);


// Step 5: Loops to simulate checkout process for 3 customers

console.log("-----\nCheckout Simulation:");

for (let customerOrdNum = 1; customerOrdNum <= 3; customerOrdNum++) {
    console.log(`-----\nCustomer Order Number ${customerOrdNum}:`);
    const type = ['senior', 'student', 'regular'][Math.floor(Math.random() * 3)]; // Randomly assigns customer type
    console.log(`Customer Type: ${type}`);

    // Calculate final price for each product after applying additional discount
    for (const product of products) {
        const additionalDiscount = applyAdditionalDiscount(type);
        let finalPrice = product.discountPrice * (1 - additionalDiscount);
        console.log(`Product: ${product.name}, Final Price: $${finalPrice.toFixed(2)}`);
    }

    // Reduce product inventory by how much is bought (for simplicity, we assume each customer buys 1 of each product)
    for (const product of products) {
        product.inventory -= 1;
    }

    // Displays customer order number and total cost
    const totalCost = products.reduce((total, product) => {
        const additionalDiscount = applyAdditionalDiscount(type);
        return total + product.discountPrice * (1 - additionalDiscount);
    }, 0);
    console.log(`Total Cost for Customer ${customerOrdNum}: $${totalCost.toFixed(2)}`); 
}

// Step 6: Logs key/ value pairs of a single product after discounts have been applied

console.log("-----\nProduct Details After Discounts:");
const sampleProduct = products[0]; // 
for (const key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}

// Step 7: All product info after inventory has been updated

console.log("-----\nAll Product Info After Inventory Update:");
for (const product of products) {
    const entries = Object.entries(product);
    const productInfo = entries.map(([key, value]) => `${key}: ${value}`).join(", ");
    console.log(productInfo);
}
