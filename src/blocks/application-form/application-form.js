export const useApplicationForm = () => {
  const [nameInput, phoneInput, btn] = document.querySelector('.application-form').elements
  const bodyRequest = {name: nameInput.value, number: phoneInput.value}

  const sendForm = (url, method, body) => {
    return fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
  }

  btn.addEventListener('click', e => {
    e.preventDefault()
    sendForm('https://google.com', 'POST', bodyRequest)
      .then(response => response.json())
      .catch(e => {
        throw alert(new Error(e))
      })
      .then(() => alert('Ожидайте звонка'))
  })
}