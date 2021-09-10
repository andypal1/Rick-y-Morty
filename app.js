/*const nombres{'javier', 'ana','Victoria'};
const otras{'javier',34, true, undefined, "más texto"};

// indiceoposicion  0 ,   1      ,  2   ,  3        ,      4    ,     5      ,   6      ,   7     ,   8       ,   9    ,  10
const nombres = ['Jonh', 'Javier', 'Ana', 'Victoria', 'Catalina', 'Angelica', 'Veronica', 'Andrea', 'Mariana', 'Susana', 'Pepe'];
// valor o elem    Jonh    Javeir    ANa     Vic       Cata

nombres.push('Juana');
// console.log(nombres[0]);
//        11                   11            10 = 10 + 1;
for(let index = 0; index < nombres.length; index++){
  console.log(nombres[index])
}

console.log(nombres)


const otras=['javier',34, true, undefined, "más texto"];

for(let index = 0; index < otras.length; index++) {
    console.log(otras)
    };

    // Objetos | las propiedades son edad, apellido, signo, los valores de esas propiedades son 20, peña piscis.

    const jhon={
        edad: 20,
        apellido: "Peña",
        signo: "piscis",
        casado: false,
        cabello: null,
        amigos: ["pedro", "ana", "melisa"],
        mascota:{
            peso: 20,
            nombre: "marco",
        },
    };

    console.log(jhon.amigos[1])
    console.log(jhon.mascota.nombre)
    */
    const root = document.getElementById('root');
    const url = 'https://rickandmortyapi.com/api/character';
    
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(datos => {
        const arreglo = datos.results;
        let mensaje = '';
        for(let i = 0; i < arreglo.length; i++){
          console.log(arreglo[i])
          mensaje +=  `
          <div class="col s12 m6 l3">
            <div class="card">
              <div class="card-image">
                <img src=${arreglo[i].image}>
              </div>
              <div class="card-content">
                <span class="card-title">${arreglo[i].name}</span>
                <p>Gender: ${arreglo[i].gender}</p>
                <p>Species: ${arreglo[i].species}</p>
                <p>Status: ${arreglo[i].status}</p>
                <p>Origin: ${arreglo[i].origin.name}</p>
                <p>Location: ${arreglo[i].location.name}</p>
              </div>
            </div>
          </div> `
        }
        root.innerHTML = mensaje;
      }
      )
    