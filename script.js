let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let value = button.innerText;
    if(button.classList.contains('clear')) {
    display.value = display.value.slice(0, -1);
    return;
}
if(button.classList.contains('equal')) {
    try {
    display.value = eval(display.value);
    } catch (e) {
    display.value = 'Error';
    }
    return;
}
    display.value += value;
    });
});
