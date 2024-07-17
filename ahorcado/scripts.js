window.onload = function () {
  var alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var categorias; 
  var categoriaElegida;

  var palabra; 
  var advinanza;
  var advinanzas = [];
  var intentos;
  var contador;
  var espacios; // núero de espacios en la palabra palabra '-'

  // Get elements
  var mostrarVidas = document.getElementById("misvidas");

  var mostrarPista = document.getElementById("pedirPista");

  var pista = document.getElementById("pista");

  // create alfabeto ul
  var buttons = function () {
    misBottones = document.getElementById("buttons");
    letras = document.createElement("ul");

    for (var i = 0; i < alfabeto.length; i++) {
      letras.id = "alfabeto";
      lista = document.createElement("li");
      lista.id = "letter";
      lista.innerHTML = alfabeto[i];
      check();
      misBottones.appendChild(letras);
      letras.appendChild(lista);
    }
  };

  // Select Catagory
  var seleccionarCateria = function () {
    if (categoriaElegida === categorias[0]) {
      nombreCategoria.innerHTML = "La categoría es: equipos de fútbol mexicanos";
    } else if (categoriaElegida === categorias[1]) {
      nombreCategoria.innerHTML = "La categoría es: películas";
    } else if (categoriaElegida === categorias[2]) {
      nombreCategoria.innerHTML = "La categoría es: estados de la República Mexicana";
    }
  };

  // Create advinanzas ul
  result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < palabra.length; i++) {
      correct.setAttribute("id", "mi-palabra");
      advinanza = document.createElement("li");
      advinanza.setAttribute("class", "advinanza");
      if (palabra[i] === "-") {
        advinanza.innerHTML = "-";
        espacios = 1;
      } else {
        advinanza.innerHTML = "_";
      }

      advinanzas.push(advinanza);
      wordHolder.appendChild(correct);
      correct.appendChild(advinanza);
    }
  };

  // Show intentos
  comentarios = function () {
    mostrarVidas.innerHTML = "Te quedan " + intentos + " intentos";
    if (intentos < 1) {
      mostrarVidas.innerHTML = "Perdiste! 🫤";
    }
    for (var i = 0; i < advinanzas.length; i++) {
      if (contador + espacios === advinanzas.length) {
        mostrarVidas.innerHTML = "Ganaste 🎉!";
      }
    }
  };

  // Animate man
  var animar = function () {
    var drawMe = intentos;
    drawArray[drawMe]();
  };

  // Hangman
  canvas = function () {
    myStickman = document.getElementById("monito");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    myStickman = document.getElementById("monito");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];

  // OnClick Function
  check = function () {
    lista.onclick = function () {
      var geuss = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] === geuss) {
          advinanzas[i].innerHTML = geuss;
          contador += 1;
        }
      }
      var j = palabra.indexOf(geuss);
      if (j === -1) {
        intentos -= 1;
        comentarios();
        animar();
      } else {
        comentarios();
      }
    };
  };

  // Play
  play = function () {
    categorias = [
      [
        "america",
        "cruz-azul",
        "chivas",
        "xolos",
        "tigres",
      ],
      ["alien", "harry-potter", "gladiator", "star-wars", "oppenheimer"],
      ["oaxaca", "yucatan", "guadalajara", "nuevo-leon", "puebla"],
    ];

    categoriaElegida =
      categorias[Math.floor(Math.random() * categorias.length)];
    palabra =
      categoriaElegida[Math.floor(Math.random() * categoriaElegida.length)];
    palabra = palabra.replace(/\s/g, "-");
    buttons();

    advinanzas = [];
    intentos = 10;
    contador = 0;
    espacios = 0;
    result();
    comentarios();
    seleccionarCateria();
    canvas();
    pista.innerHTML = "Pista:" 
  };

  play();

  // Hint

  mostrarPista.onclick = function () {
    hints = [
      [
        "🦅",
        "🔵",
        "🐐",
        "🐕",
        "🐯",
      ],
      [
        "película de ciencia ficción y terror sobre un extraterrestre",
        "Saga de libros y películas de magia",
        "Película de acción y drama con muchas peleas a muerte",
        "Saga de películas de ciencia ficción",
        "Película sobre la creación de la bomba atómica",
      ],
      [
        "Lugar de México famoso por su gastronomía",
        "Cochinita pibil",
        "Capital del estado más tequilero",
        "Vecinos de Estados Unidos",
        "Famosa por el mole rojo",
      ],
    ];

    var indiceCategoria = categorias.indexOf(categoriaElegida);
    var indicePista = categoriaElegida.indexOf(palabra);
    pista.innerHTML = "Pista: - " + hints[indiceCategoria][indicePista];
  };

  // Reset
  document.getElementById("reset").onclick = function () {
    correct.parentNode.removeChild(correct);
    letras.parentNode.removeChild(letras);
    mostrarPista.innerHTML = "Pista:";
    context.clearRect(0, 0, 400, 400);
    play();
  };
};
