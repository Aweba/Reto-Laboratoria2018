// Declaramos variables de las respuestas
var r1 = '';
var r2 = '';
var r3 = '';
var r4 = '';
var r = 0;

// innerHTML se usa para reemplazar completamente el contenido de un elemento
// value nos devuelve el valor del elemento

function enter()
  {
    welcome.style.fontSize = "25pt";
    welcome.style.color = "#66CC99";
    document.getElementById("name").innerHTML = document.getElementById("firstname").value;
    document.getElementById("ask").innerHTML = "¿Deseas jugar?";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
  }
function play()
  {
    var answer = document.getElementsByName("answer0")[0].checked;
    if (answer === false) {
        document.getElementById("section2").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        ask.style.fontSize = "30pt";
        document.getElementById("ask").innerHTML = "Ohhh que pena :(";
      }
    if (answer === true) {
        document.getElementById("section2").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        document.getElementById("ask").innerHTML = "Primera pregunta:";
        document.getElementById("section3").style.display = "block";
      }
  }
function pregunta1()
  {
    var answer = document.getElementsByName("answer1")[0].checked;
    document.getElementById("ask").innerHTML = "Segunda pregunta:";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "block";
    if (answer === false) {
        r1 = "Beber gaseosa";
        r = r + 2;
        t1_2.style.backgroundColor = "#00FA9A";
      }
    if (answer === true) {
        r1 = "Beber agua";
        r = r + 1;
        t1_1.style.backgroundColor = "#00FA9A";
      }
    return r1;
  }

function pregunta2()
  {
    var answer = document.getElementsByName("answer2")[0].checked;
    document.getElementById("ask").innerHTML = "Tercera pregunta:";
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "block";
    if (answer === false) {
        r2 = "Ensalada-Pollo a la plancha";
        r = r + 2;
        t2_2.style.backgroundColor = "#00FA9A";
      }
    if (answer === true) {
         r2 = "Papas fritas-Pizza";
         r = r + 1;
         t2_1.style.backgroundColor = "#00FA9A";
      }
  }

function pregunta3()
{
  var answer = document.getElementsByName("answer3")[0].checked;
  document.getElementById("ask").innerHTML ="Cuarta pregunta:";
  document.getElementById("section5").style.display = "none";
  document.getElementById("section6").style.display = "block";

  if (answer === false) {
      r3 = "Ver televisión";
      r = r + 2;
      t3_2.style.backgroundColor = "#00FA9A";

    }
  if (answer === true) {
     r3 = "Hacer ejercicios";
     r = r + 1;
     t3_1.style.backgroundColor = "#00FA9A";

    }
}

function pregunta4()
{
  var answer=document.getElementsByName("answer4")[0].checked;
  document.getElementById("section6").style.display = "none";
  document.getElementById("section7").style.display = "block";

  if (answer === false) {
      r4 = "3-5 horas";
      r = r + 2;
      t4_2.style.backgroundColor = "#00FA9A";

    }
  if (answer === true) {
      r4 = "6-8 horas";
      r=r+1;
      t4_1.style.backgroundColor = "#00FA9A";

    }


  if (r > 0 && r < 6) {
      document.getElementById("ask").innerHTML ="Felicitaciones!!!! Eres una persona muy saludable.";
    } else {
      document.getElementById("ask").innerHTML ="Cuidado! Tu salud puede estar en riesgo, trata de llevar una vida saludable.";
    }

  ask.style.color = "#BC8F8F";
  ask.style.fontSize = "15pt";
}
