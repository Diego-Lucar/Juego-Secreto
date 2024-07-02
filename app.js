let numeroSecreto = 0 ;
let intentos = 0;
let listaNumerosSortedados = [];
let numeroMaximo = 10 ;
function asignarTextoElemento (elemento , texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto ;
}

function GenerarNumeroSecreto() {
    let numerogenerado =  Math.floor(Math.random()*numeroMaximo+1)   
    //si el numero generado esta en la lista 
    console.log(listaNumerosSortedados);
    if (listaNumerosSortedados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {
        if (listaNumerosSortedados.includes(numerogenerado)){
            return GenerarNumeroSecreto();
        } else{
            listaNumerosSortedados.push(numerogenerado);
            return numerogenerado;
        }
    }
        
   
}

function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`ACERTASTE EN ${intentos} ${(intentos===1)? 'VEZ':'VECES'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
        /*Una vez que el usuario acerto el numero secereto, con la funcion de arriba podremos desbloquear el boton
        de'nuevo juego'
        */
    } else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        } else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    
    }   
    return; 
}
//FUNCION PARA LIMPIAR LA CAJA DONDE INGRESAMOS EL NUMERO
function limpiarCaja (){
    document.getElementById('valorUsuario').value = '';
//TAMBIEN SE PUEDE USAR EL querySelector pero se pondria ('#valorUsuario')
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indidica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=GenerarNumeroSecreto();
    console.log(numeroSecreto)
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desactivar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();