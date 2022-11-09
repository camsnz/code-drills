// -- Exercise 01 ----------------------------------------------
// Complete the calcGst() and calcShippingCost() functions.
// Look at calculateTotal() to see how they are used.
// ------------------------------------------------------------


// ------------------------------------------------------------
// These are reference values.
// This code should NOT change.
const GST_PERCENT = 10;
const postcodeToShippingPrice = {
    2000: 15,
    3000: 35,
    5000: 0,
    4000: 29
}

// ------------------------------------------------------------
// These two functions are the only code that should change
const calcGst = () => {}

const calcShippingCost = () => {}

// ------------------------------------------------------------
// This is the code that will run the functions
// This code should NOT change.
const calcTotal = (items, postcode) => {
    const price = items.reduce((acc, val) => acc+val, 0)
    return price + calcGst(price) + calcShippingCost(postcode);
}

module.exports = {
    calcTotal,
    calcShippingCost,
    calcGst
}