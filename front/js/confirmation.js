const queryString = window.location.search
const urlParam = new URLSearchParams(queryString)
const orderId = urlParam.get("orderId")
console.log(orderId)