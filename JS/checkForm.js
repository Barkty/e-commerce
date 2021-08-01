var form = document.getElementById('proceed').addEventListener('click', function(e) {
  e.preventDefault();
  var billName = document.forms['checkForm']['name'];
  if (billName.value == "") {
    alert(document.getElementById('exampleInputName').dataset.message);
  } else {
    billName.focus();
  }
 var billPhone = document.forms['checkForm']['phone'];
if (isNaN(billPhone.value) || billPhone.value < 9) {
    alert(document.getElementById('exampleInputPhone').dataset.message);
  } else {
    billPhone.focus();
  }
  var billAddress = document.forms['checkForm']['address']
if (billAddress.value == "") {
    alert(document.getElementById('exampleInputEmail1').dataset.message);
  } else {
    billAddress.focus();
  }
var recName = document.forms['checkForm']['receiver-name']
if (billAddress.value == "") {
    alert(document.getElementById('exampleInputEmail2').dataset.message);
  } else {
    recName.focus();
  }
var recPhone = document.forms['checkForm']['receiver-phone']
if (recPhone.value == "") {
    alert(document.getElementById('exampleInputPassword').dataset.message);
  } else {
    recPhone.focus();
  }
var recAddress = document.forms['checkForm']['receiver-address']
if (recAddress.value == "") {
    alert(document.getElementById('exampleInputEmail').dataset.message);
  } else {
    recAddress.focus();
  }
  return false;
}
)