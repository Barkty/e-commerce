var billInfo = [];

document.getElementById('proceed').addEventListener('click', function(e) {
  e.preventDefault();
  var billName = document.forms['checkForm']['name'];
  if (billName.value == "") {
    alert(document.getElementById('exampleInputName').dataset.message);
billName.focus();
  } else {
    billInfo.push(billName.value);
  }
 var billPhone = document.forms['checkForm']['phone'];
if (isNaN(billPhone.value) || billPhone.value.length < 9) {
    alert(document.getElementById('exampleInputPhone').dataset.message);
billPhone.focus();
  } else {
    billInfo.push(billPhone.value);
  }
  var billAddress = document.forms['checkForm']['address']
if (billAddress.value == "") {
    alert(document.getElementById('exampleInputEmail1').dataset.message);
billAddress.focus();
  } else {
    billInfo.push(billAddress.value);
  }
var recName = document.forms['checkForm']['receiver-name']
if (billAddress.value == "") {
    alert(document.getElementById('exampleInputEmail2').dataset.message);
      recName.focus();
  } else {
    billInfo.push(recName.value);
  }
var recPhone = document.forms['checkForm']['receiver-phone']
if (recPhone.value == "" || recPhone.value.length < 9) {
    alert(document.getElementById('exampleInputPassword').dataset.message);
      recPhone.focus();
  } else {
    billInfo.push(recPhone.value);
  }
var recAddress = document.forms['checkForm']['receiver-address']
if (recAddress.value == "") {
    alert(document.getElementById('exampleInputEmail').dataset.message);
      recAddress.focus();
  } else {
    billInfo.push(recAddress.value);
  }
  alert(billInfo);
  localStorage.setItem('billInfo', billInfo);
  return true;
}
)