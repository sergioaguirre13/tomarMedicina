const tomarAmlodipina = document.getElementById("tomarAmlodipina");
const tomarValsartan = document.getElementById("tomarValsartan");
const reiniciarBtn = document.getElementById("reiniciar");

let blisterAmlo = document.getElementById("blisterAmlo");
let intBlisterAmlo = parseInt(blisterAmlo.textContent);
let blisterValsar = document.getElementById("blisterValsar");
let intBlisterValsar = parseInt(blisterValsar.textContent);

let cajasAmlo = document.getElementById("cajasAmlo");
let intCajasAmlo = parseInt(cajasAmlo.textContent);
let cajasValsar = document.getElementById("cajasValsar");
let intCajasValsar = parseInt(cajasValsar.textContent);

// Función para cargar los datos desde localStorage
function cargarDatos() {
  // Comprobar si hay datos en localStorage, si es así, cargar esos valores
  if (localStorage.getItem('blisterAmlo') !== null) {
    intBlisterAmlo = parseInt(localStorage.getItem('blisterAmlo'));
    blisterAmlo.textContent = intBlisterAmlo;
  }

  if (localStorage.getItem('cajasAmlo') !== null) {
    intCajasAmlo = parseInt(localStorage.getItem('cajasAmlo'));
    cajasAmlo.textContent = intCajasAmlo;
  }

  if (localStorage.getItem('blisterValsar') !== null) {
    intBlisterValsar = parseInt(localStorage.getItem('blisterValsar'));
    blisterValsar.textContent = intBlisterValsar;
  }

  if (localStorage.getItem('cajasValsar') !== null) {
    intCajasValsar = parseInt(localStorage.getItem('cajasValsar'));
    cajasValsar.textContent = intCajasValsar;
  }
}

// Función para guardar los datos en localStorage
function guardarDatos() {
  localStorage.setItem('blisterAmlo', intBlisterAmlo);
  localStorage.setItem('cajasAmlo', intCajasAmlo);
  localStorage.setItem('blisterValsar', intBlisterValsar);
  localStorage.setItem('cajasValsar', intCajasValsar);
}

// Función para reiniciar los datos
function reiniciarDatos() {
  // Restablecer los valores a los valores iniciales
  intBlisterAmlo = 4; // valor inicial de blisterAmlo
  intCajasAmlo = 20;  // valor inicial de cajasAmlo
  intBlisterValsar = 1; // valor inicial de blisterValsar
  intCajasValsar = 10;  // valor inicial de cajasValsar

  // Actualizar los elementos en la interfaz
  blisterAmlo.textContent = intBlisterAmlo;
  cajasAmlo.textContent = intCajasAmlo;
  blisterValsar.textContent = intBlisterValsar;
  cajasValsar.textContent = intCajasValsar;

  // Eliminar los datos de localStorage
  localStorage.removeItem('blisterAmlo');
  localStorage.removeItem('cajasAmlo');
  localStorage.removeItem('blisterValsar');
  localStorage.removeItem('cajasValsar');
  
  // También puedes recargar la página para que los valores se carguen desde los valores iniciales si se desean.
  // location.reload();
}

// Cargar los datos al cargar la página
window.onload = function() {
  cargarDatos();
};

// Event listener para el botón "TOMAR" de Amlodipina
tomarAmlodipina.addEventListener("click", function () {
  intBlisterAmlo -= 1;
  blisterAmlo.textContent = intBlisterAmlo;

  if (intBlisterAmlo < 1) {
    intBlisterAmlo = 8;
    intCajasAmlo -= 1;
    cajasAmlo.textContent = intCajasAmlo;
  }

  // Guardar los cambios en localStorage después de cada acción
  guardarDatos();
});

// Event listener para el botón "TOMAR" de Valsartan
tomarValsartan.addEventListener("click", function () {
  intBlisterValsar -= 1;
  blisterValsar.textContent = intBlisterValsar;

  if (intBlisterValsar < 1) {
    intBlisterValsar = 6;
    intCajasValsar -= 1;
    cajasValsar.textContent = intCajasValsar;
  }

  // Guardar los cambios en localStorage después de cada acción
  guardarDatos();
});

// Event listener para el botón "Reiniciar"
reiniciarBtn.addEventListener("click", function () {
  reiniciarDatos();
});
  