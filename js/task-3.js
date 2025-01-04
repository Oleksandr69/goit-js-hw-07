const nameOutput = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');
nameInput.addEventListener('input', event => {
  const nameEvent = event.currentTarget.value.trim();
  nameOutput.textContent = nameEvent.length == 0 ? 'Anonymous' : nameEvent;
});
