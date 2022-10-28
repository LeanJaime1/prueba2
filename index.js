'use strict';

/*
 * Jaime, Leandro
 */


class Disco {
    constructor(nombre, Autor, Codigo, Pistas){
        this.nombre = nombre;
        this.Autor = Autor;
        this.Codigo = Codigo;
        this.Pistas = Pistas
    }
}

class Pista{
    constructor(Nombre, Duracion){
        this.Nombre = Nombre;
        this.Duracion = Duracion
    }
}


// Arrays
let discos = [];
let pistas = [];





// Función Cargar:
const Cargar = () => {
    
    

        //pido datos y valido que los campos no esten vacios
        let nombreDisco = prompt('Ingrese el nombre del disco'); 
        
        while(nombreDisco.length === 0){
            alert('Coloque el nombre del disco por favor');
            nombreDisco = prompt('Ingrese el nombre del disco');
        }

        let autorDisco = prompt('Ingrese el autor del disco');
        
        while(autorDisco.length === 0){
            alert('Coloque el nombre del autor por favor');
            autorDisco = prompt('Ingrese el autor del disco');
        }

        let codigoDisco = parseInt(prompt('Ingrese el código del disco entre 1 y 999'));

        while(codigoDisco.length === 0 || isNaN(codigoDisco) || codigoDisco < 1 || codigoDisco > 999){
            alert('Coloque el codigo del disco correcto por favor');
            codigoDisco = prompt('Ingrese el codigo del disco');
        }
        

       //pido los datos de las pistas y valido
       let nombrePista = prompt('Ingrese el nombre de la pista');
       
       while(nombrePista.length === 0){
            alert('Coloque el nombre de la pista por favor');
            nombrePista = prompt('Ingrese el nombre de la pista');
        }

       let duracionPista = parseInt(prompt('Ingrese la duración de la pista en segundos entre 0 y 7200')) ;

       while(duracionPista.length === 0 || isNaN(duracionPista) || duracionPista < 0 || duracionPista > 7200){
            alert('La duración de la pista no es correcta');
            duracionPista = prompt('Ingrese la duración de la pista en segundos entre 0 y 7200');
        }
      

        //agrego las variables a la clase Pista
       let pistaActual = new Pista(nombrePista, duracionPista);

       //las agrego al array pistas
       pistas.push(pistaActual);

       let discoActual = new Disco(nombreDisco, autorDisco, codigoDisco, pistas);

       discos.push(discoActual);

       

        alert(`Discos cargados: ${discos.length}, podes cargar mas discos si queres`);

         
     console.log(discos);
    }



    



// Función Mostrar:
const Mostrar = () => {



discos.forEach(disco =>{
    document.getElementById('info').innerHTML += `
    
    <div id="contenedor">
        <div >
            <h3>Nombre del disco: ${disco.nombre}</h3>
            <p>Autor: ${disco.Autor}</p>
            <p>Codigo: ${disco.Codigo}</p>
        </div>
        </br>
    `
})

pistas.forEach(pista=>{
    document.getElementById('info2').innerHTML += `
    <div>
    <ul class="contenedor-pistas-${discos.Codigo}">
        <li>Pistas: ${pista.nombre} </li>
    </ul>
</div>
</div>
</br>`
})




    /*
    // Variable para ir armando la cadena:
    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá*/
};

// Todas las funciones que necesites:
