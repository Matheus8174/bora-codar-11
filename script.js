const passwordInputHiddenIcon = document.querySelector('input[type="password"] + span')
const passwordInput = document.querySelector('input[type="password"]')

let toggleHidden = false

function shouldShowPassword() {
  const type = password.getAttribute('type')

  if(type === 'password') password.setAttribute('type', 'text');

  if(type === 'text') password.setAttribute('type', 'password');
}

passwordInputHiddenIcon.onclick = () => {
  shouldShowPassword()

  toggleHidden = !toggleHidden

  const _class = passwordInput.getAttribute('class')

  passwordInput.classList.remove(_class)

  passwordInput.classList.add(
    toggleHidden
    ? 'password-visible'
    : 'password-hidden'
  )
}
