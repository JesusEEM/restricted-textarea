const area = document.querySelector('#recuadro');
const spanContador = document.querySelector('#contador')
const p = document.querySelector('#p-length');

let contador = 0;

area.addEventListener('keydown', (tecla) => {

    if(contador < 250 && tecla.key !== "Backspace") {
        contador++;
        spanContador.innerHTML = contador;
    } else {
        contador--;
        spanContador.innerHTML = contador;
    }

    if(contador === 250) {
        area.classList.add('full');
    } else {
        area.classList.remove('full');
    }
})


area.addEventListener('change', (event) => {
    contador = event.target.value.length;
    spanContador.innerHTML = contador;
});

