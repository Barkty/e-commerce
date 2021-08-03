const payForm = document.getElementById('checkForm');
payForm.addEventListener("submit", payWithStack, false);
function payWithStack(e) {
  e.preventDefault();
  
  let handler = PaystackPop.setup({
    key: pk_test_402d04ee561f58fb64dd36eae38e2051b249a8fe;
email: document.getElementById('exampleInputEmail3').value;
    amount: document.getElementById('exampleInputPassword').value * 100;
 onClose: function() {
   alert('Window closed.');
 },
 callback: function(response) {
   let message = 'Payment complete! Reference: ' + response.reference;
   alert(message);
 }
  });
handler.openIframe();
}