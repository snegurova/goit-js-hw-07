const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

const onChange = (event) => {
  output.textContent = event.currentTarget.value.trim() || 'Anonymous';
};

input.addEventListener('input', onChange);