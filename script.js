
const scriptURL = 'https://script.google.com/macros/s/AKfycbxoDIB3bw0dez-SThaoriwO3j4m7UZtLTsETYEgE5_Sp2FfIlu88_IXiJHivon1Ex6L9Q/exec'
  const form = document.forms['submit-to-google-sheet']
  const messagesent = document.getElementById("messagesent")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        messagesent.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            messagesent.innerHTML = ""

        }, 6000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
