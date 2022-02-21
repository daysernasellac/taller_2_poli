/**callbacks */

function respuesta(res) {
  console.log(res);
}

function sumar(num1, num2, funcionCallBack) {
  let resp = num1 + num2;
  funcionCallBack(resp);
}

sumar(10, 15, respuesta);

let promesa = new Promise((res, rej) => {
  let status = true;
  if (status) {
    res("Resolvio correcto");
  } else {
    rej("Se produjo un error");
  }
});

/*Opcion 1
promesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
*/

/* Opcion 2
promesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
*/

/*setTimeout*/
/*
let promesa2 = new Promise((res) => {
  console.log("Inicio promesa");
  setTimeout(() => res("Promesa correcta"), 3000);
  console.log("Fin promesa");
});

promesa2.then((valor) => console.log(valor));
*/
/*async uan funcion regresa una promesa*/
async function funcionConPromesa() {
  return "Funcion con promesa y async ";
}

//funcionConPromesa().then((valor) => console.log(valor));

/* await esperar resultado de una promesa*/
/**async/await */

async function funcionConAsynAwait() {
  let miPromesa = new Promise((res) => {
    res("Promesa con await");
  });
  console.log(await miPromesa);
}

//funcionConAsynAwait();

async function testAPI() {
  console.log("Inicio.................");
  let miPromesa = new Promise((res) => {
    setTimeout(() => {
      res("Promesa con await y settimeout");
    }, 3000);
  });
  console.log(await miPromesa);
  console.log("Fin.................");
}

testAPI();
