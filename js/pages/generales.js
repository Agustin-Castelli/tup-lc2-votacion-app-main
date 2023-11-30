const tipoEleccion = 2;
const tipoRecuento = 1;
const comboPeriodo = document.getElementById('selectPeriodo');
const comboCargo = document.getElementById('selectCargo');
const comboDistrito = document.getElementById('selectDistrito');
const comboSeccion = document.getElementById('selectSeccion');

document.addEventListener('DOMContentLoaded', () => {seleccionAnio()});

async function seleccionAnio() {
    try{
        
        const respuesta = await fetch(`https://resultados.mininterior.gob.ar/api/menu/periodos`);
        if (respuesta.ok){
            const datosPeriodo = await respuesta.json();
            
            // VERIFICACION: console.log(datosPeriodo)

            for (let i = 0; i < datosPeriodo.length; i++){
                opcion = datosPeriodo[i];
                opcionElementoAnio = document.createElement('option');
                opcionElementoAnio.value = opcion;
                opcionElementoAnio.text = opcion;
                comboPeriodo.appendChild(opcionElementoAnio);
            }

           // console.log(comboPeriodo.value)

            opcionSeleccionadaAnio = await esperarSeleccionAnio();
            // PARA VERIFICAR QUE FUNCIONA BIEN LA FUNCION: console.log('Opción seleccionada:', opcionSeleccionada);
            
            await seleccionCargo(opcionSeleccionadaAnio);
        }
        else{
            console.log('Error al obtener los datos de la API del combo AñO.');
        }
    }

    catch(error){
        console.log('Error al ejecutar la función comboAnio().', error);
    }
}



// ---------------------- INICIO SECCION DE FUNCIONES PARA LOS ELEMENTOS SELECCIONADOS POR EL USUARIO ----------------------




function esperarSeleccionAnio(){
    return new Promise((resolve) => {
        
        // Agrega un event listener para el evento 'change' del select
        comboPeriodo.addEventListener('change', function handler(){
            
            // Una vez que el usuario selecciona una opción, resuelve la promesa con el valor seleccionado
            resolve(comboPeriodo.value);


            // Elimina el event listener después de que se haya seleccionado una opción
            comboPeriodo.removeEventListener('change', handler);

        });
    });
}


function esperarSeleccionCargo(){
    return new Promise((resolve) => {
        
        // Agrega un event listener para el evento 'change' del select
        comboCargo.addEventListener('change', function handler(){
            
            // Una vez que el usuario selecciona una opción, resuelve la promesa con el valor seleccionado
            resolve(comboCargo.value);

            // Elimina el event listener después de que se haya seleccionado una opción
            comboCargo.removeEventListener('change', handler);

        });
    });
}


function esperarSeleccionDistrito(){
    return new Promise((resolve) => {
        
        // Agrega un event listener para el evento 'change' del select
        comboDistrito.addEventListener('change', function handler(){
            
            // Una vez que el usuario selecciona una opción, resuelve la promesa con el valor seleccionado
            resolve(comboDistrito.value);

            // Elimina el event listener después de que se haya seleccionado una opción
            comboDistrito.removeEventListener('change', handler);

        });
    });
}


function esperarSeleccionSeccion(){
    return new Promise((resolve) => {
        
        // Agrega un event listener para el evento 'change' del select
        comboSeccion.addEventListener('change', function handler(){
            
            // Una vez que el usuario selecciona una opción, resuelve la promesa con el valor seleccionado
            resolve(comboSeccion.value);

            // Elimina el event listener después de que se haya seleccionado una opción
            comboSeccion.removeEventListener('change', handler);

        });
    });
}



// ---------------------- FIN SECCION DE FUNCIONES PARA LOS ELEMENTOS SELECCIONADOS POR EL USUARIO ----------------------





async function seleccionCargo(opcionSeleccionadaAnio){
    try{
        respuestaApi = await fetch("https://resultados.mininterior.gob.ar/api/menu?año=" + opcionSeleccionadaAnio); // DEFINO LA VARIABLE GLOBALMENTE.
        if(respuestaApi.ok){
            datosCargo = await respuestaApi.json();

            // console.log(datosCargo);

            // ABAJO RECORRO EL ARREGLO DE OBJETOS QUE DEVUELVE LA API, Y EN BASE AL TIPO DE ELECCION ASIGNO
            // EL CARGO Y SU ID CORRESPONDIENTE (PARAMETROS) DE CADA OBJETO DE LA LISTA 'CARGOS'.
            datosCargo.forEach((eleccion) => {
                if (eleccion.IdEleccion == tipoEleccion) {
                    eleccion.Cargos.forEach((cargo) => {
                        opcionElementoCargo = document.createElement('option');
                        opcionElementoCargo.value = cargo.IdCargo;
                        opcionElementoCargo.text = cargo.Cargo;
                        comboCargo.appendChild(opcionElementoCargo);
                    })
                }
            });

            opcionSeleccionadaCargo = await esperarSeleccionCargo();

            await seleccionDistrito(opcionSeleccionadaCargo);

        }
        else{
            console.log('Error al obtener los datos de la API del combo CARGO.');
        }
    }

    catch{
        console.log('Error al ejecutar la funcion seleccionCargo().');
    }
}



async function seleccionDistrito(opcionSeleccionadaCargo){
    try{
        datosCargo.forEach((eleccion) => {
            if (eleccion.IdEleccion == tipoEleccion) {
                eleccion.Cargos.forEach((cargo) => {
                    if (cargo.IdCargo == opcionSeleccionadaCargo){
                        cargo.Distritos.forEach((distrito) => {
                            opcionElementoDistrito = document.createElement('option');
                            opcionElementoDistrito.value = distrito.IdDistrito;
                            opcionElementoDistrito.text = distrito.Distrito;
                            comboDistrito.appendChild(opcionElementoDistrito);
                        })
                    }
                })
            }
        });

        opcionSeleccionadaDistrito = await esperarSeleccionDistrito();

        await seleccionSeccion(opcionSeleccionadaDistrito);
    }

    catch{
        console.log("Error al ejecutar la funcion seleccionDistrito().");
    }
}


async function seleccionSeccion(opcionSeleccionadaDistrito){
    try{
        datosCargo.forEach((eleccion) => {
            if (eleccion.IdEleccion == tipoEleccion) {
                eleccion.Cargos.forEach((cargo) => {
                    if (cargo.IdCargo == opcionSeleccionadaCargo){
                        cargo.Distritos.forEach((distrito) => {
                            if (distrito.IdDistrito == opcionSeleccionadaDistrito){
                                distrito.SeccionesProvinciales.forEach((seccionProvincial) => {
                                    idSeccionProvincial = document.getElementById('idSeccionProvincial');
                                    idSeccionProvincial.value = seccionProvincial.IDSeccionProvincial;
                                    seccionProvincial.Secciones.forEach((seccion) => {
                                        opcionElementoSeccion = document.createElement('option');
                                        opcionElementoSeccion.value = seccion.IdSeccion;
                                        opcionElementoSeccion.text = seccion.Seccion;
                                        comboSeccion.appendChild(opcionElementoSeccion);
                                    })

                                })
                            }
                        })
                    }
                })
            }
        });

        opcionSeleccionadaSeccion = await esperarSeleccionSeccion();
    }

    catch{
        console.log("Error al ejecutar la funcion seleccionSeccion().")
    }
}



async function filtrarBtn(){
    try{
        if (comboPeriodo.value == 0 || comboCargo.value == 0 || comboDistrito.value == 0 || comboSeccion.value == 0){
            let mensajeMenuBar = document.getElementById('mensaje-menu-bar');
            console.log(mensajeMenuBar.textContent);
            if (comboPeriodo.value == 0){
                mensajeMenuBar.innerText = 'Faltan seleccionar los siguientes campos: Año, Cargo, Distrito y Sección.';
            }
            else{
                if (comboCargo.value == 0){
                    mensajeMenuBar.innerText = 'Faltan seleccionar los siguientes campos: Cargo, Distrito y Sección.';
                }
                else{
                    if(comboDistrito.value == 0){
                        mensajeMenuBar.innerText = 'Faltan seleccionar los siguientes campos: Distrito y Sección.';
                    }
                    else{
                        if(comboSeccion.value == 0){
                            mensajeMenuBar.innerText = 'Faltan seleccionar los siguientes campos: Sección.';
                        }
                        else{
                            mensajeMenuBar.innerText = '';
                        }
                    }
                }
            }
        }

        else{
            const circuitoId = "";
            const mesaId = "";
            const categoriaId = 2;          
            const url = `https://resultados.mininterior.gob.ar/api/resultados/getResultados?anioEleccion=${opcionSeleccionadaAnio}&tipoRecuento=${tipoRecuento}&tipoEleccion=${tipoEleccion}&categoriaId=${categoriaId}&distritoId=${opcionSeleccionadaDistrito}&seccionProvincialId=${idSeccionProvincial.value}&seccionId=${opcionSeleccionadaSeccion}&circuitoId=${circuitoId}&mesaId=${mesaId}`
            const respuestaApiDatosFiltrados = await fetch(url);

            //mensajeMenuBar.innerText = ''

            if (respuestaApiDatosFiltrados.ok){
                datosFiltrados = await respuestaApiDatosFiltrados.json();

                console.log(datosFiltrados);

                
                let cargo = opcionSeleccionadaCargo;
                let distrito = opcionSeleccionadaDistrito;
                let seccion = opcionSeleccionadaSeccion;

                alert(cargo);
                alert(distrito);
                alert(seccion);
                /*
                let tituloGenerales = document.getElementById('titulo-generales');
                let subtituloGenerales = document.getElementById('subtitulo-generales');
                tituloGenerales.innerText = "Elecciones " + opcionSeleccionadaAnio + " | GENERALES";
                subtituloGenerales.innerText = opcionSeleccionadaAnio + " > GENERALES" + cargo + " > " + distrito + " > " + seccion;
                */
            }
            else{
                alert('Error al obtener los datos de la API.');
            }
            
        }

    }

    catch{
        alert('Error al ejecutar la función filtrarBtn().');
    }
    
}




/*

PREGUNTAS PARA EL 28/12:

1. COMO HAGO PARA QUE NO SE DUPLIQUEN LAS OPCIONES DE LOS COMBOS CUANDO VUELVO A CLICKEAR SOBRE ELLOS (USAR EL METODO
    DE LIMPIEZA NO ME SIRVE, YA QUE LUEGO NO SE VUELVEN A CARGAR LAS OPCIONES UNA VEZ QUE SE LIMPIAN).

2. (RESUELTO) ----------> COMO HAGO PARA PODER MODIFICAR EL TEXTO DEL MENU-BAR DENTRO DE LA FUNCION filtrarBtn(), EL METODO ESCRITO NO FUNCIONA.

3. (DEPENDE DEL PUNTO 4.) ------>   COMO HAGO PARA MODIFICAR EL TEXTO DE TITULO Y SUBTITULO DEL CONTAINER REFERIDOS A LO QUE EL USUARIO SELECCIONE.

4. COMO PUEDO SOLUCIONAR EL TEMA DE OBTENER EL VALOR DE LA OPCION QUE ELIJA EL USUARIO DE CADA
    COMBO (YA SEA VALUE O TEXT) APARTE DE UTILIZAR LAS FUNCIONES 'esperarSeleccion' QUE UTILICÉ.

5. ESTAN BIEN UTILIZADAS LAS FUNCIONES ASYNC? EN QUE CASOS SI Y EN CUALES NO? POR QUE?


*/