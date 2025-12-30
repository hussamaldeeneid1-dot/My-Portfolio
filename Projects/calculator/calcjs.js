window.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.getAttribute('data-value');

            if (value) {
                display.value += value;
            }
        });
    });

    document.getElementById('clear').addEventListener('click', () => {
        display.value = '';
    });

    document.getElementById('equals').addEventListener('click', () => {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
    });
});
