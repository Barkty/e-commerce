var billInfo = [];

document.getElementById('proceed').addEventListener('click', function(e) {
  e.preventDefault();
var recName = document.forms['checkForm']['receiver-name']
if (recName.value == "") {
    alert(document.getElementById('exampleInputEmail2').dataset.message);
      recName.focus();
  } else {
    billInfo.push(recName.value);
  }
var recAmount = document.forms['checkForm']['receiver-amount']
if (recAmount.value == "" || isNaN(rec)) {
    alert(document.getElementById('exampleInputPassword').dataset.message);
      recAmount.focus();
  } else {
    billInfo.push(recAmount.value);
  }
var recEmail = document.forms['checkForm']['receiver-email']
if (recEmail.value == "") {
    alert(document.getElementById('exampleInputEmail3').dataset.message);
      recEmail.focus();
  } else {
    billInfo.push(recEmail.value);
  }
  alert(billInfo);
  localStorage.setItem('billInfo', billInfo);
  return true;
}
)
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