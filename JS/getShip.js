var billInfo = localStorage.getItem('billInfo');

document.getElementById('uber').addEventListener('click', function(e){
 var uber = e.target.dataset.size;
  billInfo.push(uber);
  alert(uber);
})
document.getElementById('kwik').addEventListener('click', function(e){
 var kwik = e.target.dataset.size;
  billInfo.push(kwik);
  alert(kwik);
})
document.getElementById('courier').addEventListener('click', function(e){
  var courier = e.target.dataset.size;
  billInfo.push(courier.value);
})
document.getElementById('mrDelivery').addEventListener('click', function(e){
  var delivery = e.target.dataset.size;
  billInfo.push(delivery.value);
})
var y = confirm(billInfo);
if (y = true) {
localStorage.setItem('billInfo', billInfo);
} else {
  return false;
}