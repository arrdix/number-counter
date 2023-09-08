let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {

    console.log(btns);

    btn.addEventListener('click', function(ev){

        console.log(ev.currentTarget.classList);
        const click = ev.currentTarget.classList;
        if (click.contains('decrease')) {
            count--;
        }
        else if (click.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count < 0) {
            value.style.color = 'rgb('+(Math.abs(count) * 30)+', 0, 0)';
        } else if (count > 0) {
            value.style.color = 'rgb(0, '+(count * 30)+', 0)';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});