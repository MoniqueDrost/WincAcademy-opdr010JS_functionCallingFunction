// Hey kiddo
/* const myAge = function(age) {
        if (age >=18) { 
        return true;
    }
        return false;
}

const checkAge = function(age) {
    if (myAge(age) === true) {
    return console.log("Hello there");    
    }
           
    return console.log("Hey kiddo")
}

console.log (checkAge(3)); */

//VAT calculations part I

/* const calculateVat = function(price) {
    return (price*0.19);
}

const calculateVatIncluded = function(price) {
    const VatIncluded = (calculateVat(price))+price;
    return VatIncluded
}

console.log (calculateVatIncluded(10)); */

//VAT calculations part II

const calculateVatAmount = function (totalAmount, vatPercentage) {
    const vatAmount = totalAmount - (totalAmount / (1 + vatPercentage));
    return vatAmount;
}

const calculateBasePriceAndVatAmount = function (totalAmount, vatPercentage) {
    vatAmount = (calculateVatAmount(totalAmount, vatPercentage));
    basePrice = totalAmount - vatAmount;
    return (basePrice, vatAmount);
}

console.log(calculateBasePriceAndVatAmount(1000, 0.19));