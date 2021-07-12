// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes
// No editar
// Luis Sandoval Cisternas 02/12/20 
const clients = [ 
    { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
    { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ'},
    { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA'},
    { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
    { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
];
const accounts = [
    { clientId: 6, bankId: 1, balance: 15000 },
    { clientId: 1, bankId: 3, balance: 18000 },
    { clientId: 5, bankId: 3, balance: 135000 },
    { clientId: 2, bankId: 2, balance: 5600 },
    { clientId: 3, bankId: 1, balance: 23000 },
    { clientId: 5, bankId: 2, balance: 15000 },
    { clientId: 3, bankId: 3, balance: 45900 },
    { clientId: 2, bankId: 3, balance: 19000 },
    { clientId: 4, bankId: 3, balance: 51000 },
    { clientId: 5, bankId: 1, balance: 89000 },
    { clientId: 1, bankId: 2, balance: 1600 },
    { clientId: 5, bankId: 3, balance: 37500 },
    { clientId: 6, bankId: 1, balance: 19200 },
    { clientId: 2, bankId: 3, balance: 10000 },
    { clientId: 3, bankId: 2, balance: 5400 },
    { clientId: 3, bankId: 1, balance: 9000 },
    { clientId: 4, bankId: 3, balance: 13500 },
    { clientId: 2, bankId: 1, balance: 38200 },
    { clientId: 5, bankId: 2, balance: 17000 },
    { clientId: 1, bankId: 3, balance: 1000 },
    { clientId: 5, bankId: 2, balance: 600 },
    { clientId: 6, bankId: 1, balance: 16200 },
    { clientId: 2, bankId: 2, balance: 10000 }
]
const banks = [
    { id: 1, name: 'SANTANDER' },
    { id: 2, name: 'CHILE' },
    { id: 3, name: 'ESTADO' }
];

/*
  SECCIÓN PROBLEMAS
    - No promover la copia:
	  - No preguntar en StackOverflow, foros, o similares ya que estas preguntas/respuestas quedan disponibles a otros candidatos
	  - No subir a repositorios públicos (github, o similares)
	  - Otros sitios como codepen o editores de texto on-line (codepen, repl, o similares), dejan guardado el código, por lo que les pedimos tampoco usar editores on-line, la mejor forma de debuggear su código es usando un interprete de javascript como node y ejecutarlo de manera local
	  - Para nosotros es fácil detectar pruebas con copia, no pierda su tiempo intentando hacerlo
	  - Posteriormente, se evaluará conocimiento en es6 en entrevistas presenciales
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
    - Los resultados son evaluados con un test automatizado, revise que sus retornos sean con la estructura de datos solicitada en cada pregunta.
	- Métodos menos verbosos, DRY, y buenas prácticas en el código mejoran el puntaje final de su prueba
	- Si necesita hacer supuestos que afecten las respuestas entregadas, por favor déjelos escritos en el cuerpo del correo cuando envíe su prueba (No en este archivo). Supuestos que contradigan lo solicitado, no serán considerados como válidos.
	- Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
            - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
*/

// 0 Arreglo con los ids de clientes
function listClientsIds() {
    return clients.map((client) => client.id);
  };
  
  // 1 Arreglo con los ids de clientes ordenados por rut
  function listClientsIdsSortByTaxNumber() {
    // CODE HERE
    let keytaxNumber = clients.map((client) => client.taxNumber);
    keytaxNumber = keytaxNumber.sort() //contiene los rut ordenados
    console.log(keytaxNumber)
    var arraynuevo = [];
    for (let index = 0; index < keytaxNumber.length; index++) {
      const element = keytaxNumber[index]
      for (let index2 = 0; index2 < clients.length; index2++) {
        const element2 = clients[index2].taxNumber;
        if (element == element2) {
          arraynuevo[index] = clients[index2].id //llena el array con los id segun el orden de los rut
        }
      }
      
    }
    return arraynuevo;
  };
  
  // 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
  function sortClientsTotalBalances() {
    // CODE HERE
    let arraynuevo = [];
    var arrayOrdenado = [];
    var arrayAux = [];
    var nombrecliente = [];
    for (let index = 0; index < clients.length; index++) {
      const element = clients[index].id;
      let sum = 0;
      for( let index2 = 0;index2<accounts.length;index2++){
        const element2 = accounts[index2].clientId;
        if (element==element2) {
          sum = sum+accounts[index2].balance;
        }
      }
      arraynuevo[index] = sum; //arrya con el balance de los clientes por id
    }
    arrayAux = arraynuevo.slice() //asigno el objeto a una copia para realizar cambios
    arrayOrdenado = burbujaDec(arrayAux) //ordenado de mayor a menor .reverse()
    //llenado del array
    for (let index = 0; index < arrayOrdenado.length; index++) {
      const element = arrayOrdenado[index];
      for (let index2 = 0; index2 < arraynuevo.length; index2++) {
        const element2 = arraynuevo[index2];
        if (element == element2) {
          nombrecliente[index] = clients[index2].name; //llena el array con los nombres segun el orden de del balance
        }
      }
      
    }
    console.log(arraynuevo)
    console.log(arrayOrdenado)
    return nombrecliente;
  };
  
  function burbujaDec(args){
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < args.length; j++) {
        if (args[i] > args[j]) { //invierte el orden
          aux = args[i];
          args[i] = args[j];
          args[j] = aux;
        }
      }
    }
    return args;
  };

  function burbujaCre(args){
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < args.length; j++) {
        if (args[i] < args[j]) { //invierte el orden
          aux = args[i];
          args[i] = args[j];
          args[j] = aux;
        }
      }
    }
    return args;
  };

  // 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
  function banksClientsTaxNumbers() {
    // CODE HERE
    var objetoOrdenado = new Object;
    let nombreordenado = clients.map((client) => client.name);
    let v;
    nombreordenado =nombreordenado.sort(); //clientes ordenados alfabeticamente
    for (let index = 0; index < banks.length; index++) { //recorro bancos
      var arrayidCliente = [];
      for (let index2 = 0; index2 < accounts.length; index2++) { //recorro las cuentas
        if (banks[index].id == accounts[index2].bankId) { //veo si la cuenta pertenece al banco
          if (arrayidCliente.length != 0 ) {
            if (busquedacliente(arrayidCliente,accounts[index2].clientId)) {
              arrayidCliente.push(accounts[index2].clientId);
            }
          }else{
            arrayidCliente.push(accounts[index2].clientId); //guardo al cliente
          }
        }
      }
      //aqui sabemos los clientes que tiene cada banco
      objetoOrdenado.id = banks[index].name;
      for (let u = 0; u < nombreordenado.length; u++) {
        for (let k = 0; k < arrayidCliente.length; k++) {
          v = arrayidCliente[k]; //ej {2,3,4,1} son las id del cliente
          
          for (let y = 0; y < clients.length; y++) {
            if (clients[y].id == v) {
              if (nombreordenado[u] == clients[y].name) {
                value = clients[y].taxNumber
                objetoOrdenado.rut = value; //buscar alternativa ***
                console.log("dfgdf",objetoOrdenado);
              }
            }
          }
        } 
      }
      //objetoOrdenado.id = banks[index].name;
      //console.log("dfgdf",objetoOrdenado);
    }
    return objetoOrdenado;
  };

  function busquedacliente(args1,args2){
    for (let i = 0; i < args1.length; i++) {
      if (args1[i] == args2  ) {
        return false;
      }
    }
    return true;
  };

  
  
  // 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
  function richClientsBalances() {
    // CODE HERE
    let Santander = [];
    const valor = 25000;
    for (let i = 0; i < clients.length; i++) { //recorro los clientes
      const element = clients[i]
      let sum=0;
      for (let j = 0; j < accounts.length; j++) { //recorro las cuentas
        const element2 = accounts[j];
        if (element.id == element2.clientId) { //si el id del cliente es igual al de la cuenta sumo el balance
          sum = sum+element2.balance;
        }
      }
      if (sum > valor) { //si la suma es mayor a 25000 guardo
        //Santander[i] = element;
        Santander.push(sum); //.push(sum,element)
      }
      
    }
    return Santander=burbujaDec(Santander);
  };


  
  // 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
  function banksRankingByTotalBalance() {
    // CODE HERE
    let totalbalancebanco = [];
    for (let i = 0; i < banks.length; i++) {
      const element = banks[i];
      sum = 0;
      for (let j = 0; j < accounts.length; j++) {
        const element2 = accounts[j];
        if (element.id == element2.bankId) {
          sum = sum+element2.balance;
        }
      }
      totalbalancebanco.push(sum);
      aux = totalbalancebanco;
    }
    
    return burbujaCre(aux);
  };
  
  // 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
  function banksFidelity() {
    // CODE HERE
    clientesBanco = [];
    objetofidelidad = [];
    muestra = [];
    for (let i = 0; i < banks.length; i++) {
      const element = banks[i];
      for (let j = 0; j < accounts.length; j++) {
        const element2 = accounts[j];
        if (element.id == element2.bankId) {
          if (clientesBanco.length == 0) { // si esta vacio agrego el primer cliente del banco
            clientesBanco.push(element2) //cliente
          }else{
            if (busquedacliente(clientesBanco,element2.clientId)) { //1ro array donde busco 2do a quien busco, si no lo encuentra devuelve true
              clientesBanco.push(element2)
            }
          }
        }
      }
      //objetofidelidad.push(element.name,clientesBanco)
      objetofidelidad = clientesotrosbancos(clientesBanco,element)
      muestra.push(objetofidelidad)
    }

    return muestra;
  };

  function clientesotrosbancos(args,args2){ // accounts[{:,:,:}]
    clientesfieles = [];
    for (let i = 0; i < args.length; i++) {
      cont = 0;
      contCfieles = 0;
      const element = args[i];
      for (let j = 0; j < accounts.length; j++) {
        const element2 = accounts[j];
        if (element.clientId == element2.clientId && element.bankId != args2.id) {
          cont++;
        }
      }
      if (cont == 0) {
        contCfieles++;
      }
      //console.log(args2);
      clientesfieles = [];
      clientesfieles.push(args2.name,contCfieles);
      return clientesfieles;
    }
  };
  
  // 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
  function banksPoorClients() {
    // CODE HERE

  }
  
  // 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. 
  // Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
  // No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
  function newClientRanking() {
    // CODE HERE
  }
  
  
  
  
  
  
  // No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
  // Cualquier cambio hará que su prueba quede invalidada automáticamente
  console.log('Pregunta 0');
  console.log(listClientsIds());
  console.log('Pregunta 1');
  console.log(listClientsIdsSortByTaxNumber());
  console.log('Pregunta 2');
  console.log(sortClientsTotalBalances());
  console.log('Pregunta 3');
  console.log(banksClientsTaxNumbers());
  console.log('Pregunta 4');
  console.log(richClientsBalances());
  console.log('Pregunta 5');
  console.log(banksRankingByTotalBalance());
  console.log('Pregunta 6');
  console.log(banksFidelity());
  console.log('Pregunta 7');
  console.log(banksPoorClients());
  console.log('Pregunta 8');
  console.log(newClientRanking());
  