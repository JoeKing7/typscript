"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerzas;
    (function (fuerzas) {
        fuerzas[fuerzas["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        fuerzas[fuerzas["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerzas[fuerzas["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerzas[fuerzas["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(fuerzas || (fuerzas = {}));
    const fuerzaFlash = fuerzas.fuerzaFlash;
    const fuerzaSuperman = fuerzas.fuerzaSuperman;
    const fuerzaBatman = fuerzas.fuerzaBatman;
    const fuerzaAcuaman = fuerzas.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
