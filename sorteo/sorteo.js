const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
let curso = "";

//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: "Java" },
  { minDegree: 31, maxDegree: 90, value: "Javascript" },
  { minDegree: 91, maxDegree: 150, value: "Kotlin" },
  { minDegree: 151, maxDegree: 210, value: "C++" },
  { minDegree: 211, maxDegree: 270, value: "C#" },
  { minDegree: 271, maxDegree: 330, value: "Python" },
  { minDegree: 331, maxDegree: 360, value: "Java" },
];
//Size of each piece
const data = [16, 16, 16, 16, 16, 16];
//background color for each piece
let pieColors = [
  "#FF0000",
  "#FF6A6A",
  "#FF0000",
  "#FF6A6A",
  "#FF0000",
  "#FF6A6A",
];


//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: ["Javascript", "Java", "Python", "C#", "C++", "Kotlin"],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 16 },
      },
    },
  },
});
//display value based on the randomAngle
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
//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Buena suerte!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
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
