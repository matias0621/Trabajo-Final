const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
let curso = "";

//Objeto que almacena valores de ángulo mínimo y máximo para un valor
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: "Java" },
  { minDegree: 31, maxDegree: 90, value: "Javascript" },
  { minDegree: 91, maxDegree: 150, value: "Kotlin" },
  { minDegree: 151, maxDegree: 210, value: "C++" },
  { minDegree: 211, maxDegree: 270, value: "C#" },
  { minDegree: 271, maxDegree: 330, value: "Python" },
  { minDegree: 331, maxDegree: 360, value: "Java" },
];
//Tamaño de cada pieza
const data = [16, 16, 16, 16, 16, 16];
//Color de fondo para cada pieza
let pieColors = [
  "#FF0000",
  "#FF6A6A",
  "#FF0000",
  "#FF6A6A",
  "#FF0000",
  "#FF6A6A",
];


//Crear gráfico
let myChart = new Chart(wheel, {
  //Plugin para mostrar texto en gráfico circular
  plugins: [ChartDataLabels],
  //Tipo de gráfico circular
  type: "pie",
  data: {
    //Etiquetas (valores que se mostrarán en el gráfico)
    labels: ["Javascript", "Java", "Python", "C#", "C++", "Kotlin"],
    //Configuración para dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      //Mostrar etiquetas dentro del gráfico circular
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 16 },
      },
    },
  },
});
//valor de visualización basado en el randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Felicidades te ganaste el curso de ${i.value}</p>`;
      curso = i.value;
      verficarCurso(curso)
      spinBtn.disabled = false;
      break;
    }
  }
};
//Conteo de spinner
let count = 0;
//100 rotaciones para la animación y la última rotación para el resultado
let resultValue = 101;
//Empieza a girar
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Valor final vacío
  finalValue.innerHTML = `<p>Buena suerte!</p>`;
  //Generar grados aleatorios para detenerse
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Intervalo para animación de rotación
    /*
    Inicialmente, para hacer que el gráfico circular gire más rápido, establecemos resultValue en 101 para que gire 101 grados a la vez y esto se reduce en 1 con cada recuento. Finalmente, en la última rotación, giramos 1 grado a la vez.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Actualizar gráfico con nuevo valor
    myChart.update();
    //Si rotación>360 restablecerlo de nuevo a 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});

function abrirVentana(url){
  window.open(url, "_black");
}

function verficarCurso(cursos){
  if (cursos == "Kotlin"){
    abrirVentana("https://www.youtube.com/watch?v=BQaxPwZWboA&list=PLNdFk2_brsRdYF0FXDtSaGvluzBNHRbNe")
  }
  else if (cursos == "C++"){
    abrirVentana("https://www.youtube.com/watch?v=dJzLmjSJc2c&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh")
  }
  else if (cursos == "C#"){
    abrirVentana("https://www.youtube.com/watch?v=6EBNIgkrU74&list=PLU8oAlHdN5BmpIQGDSHo5e1r4ZYWQ8m4B")
  }
  else if (cursos == "Python"){
    abrirVentana("https://www.youtube.com/watch?v=Kp4Mvapo5kc&list=PLNdFk2_brsRdgQXLIlKBXQDeRf3qvXVU_")
  }
  else if (cursos == "Java"){
    abrirVentana("https://www.youtube.com/watch?v=L1oMLsiMusQ&list=PLyvsggKtwbLX9LrDnl1-K6QtYo7m0yXWB")
  }
  else if (cursos == "Javascript"){
    abrirVentana("https://www.youtube.com/watch?v=ivdTnPl1ND0")
  }
}

const burger = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");
const closeMenu = document.getElementById("close-menu");

burger.addEventListener("click", () => {
    navbar.style.transform = "translateX(0%)"
    console.log("a")
})

closeMenu.addEventListener("click", () => {
    navbar.style.transform = "translateX(-100%)"
})
