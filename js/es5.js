// Mostrar triángulo o rectangúlo

var boxTriangulo = document.getElementById("boxTriangulo");
var boxRectangulo = document.getElementById("boxRectangulo");

function showTriangulo() {
     boxTriangulo.style.display = "block";
     boxRectangulo.style.display = "none";
}

function showRectangulo() {
     boxRectangulo.style.display = "block";
     boxTriangulo.style.display = "none";
}

// Clase Triángulo

function Triangulo(lado, base, altura) {
     this._lado = function () {
          return lado;
     };
     this._base = function () {
          return base;
     };
     this._altura = function () {
          return altura;
     };
}

// Getters

Triangulo.prototype.getLado = function () {
     return this._lado();
};

Triangulo.prototype.getBase = function () {
     return this._base();
};

Triangulo.prototype.getAltura = function () {
     return this._altura();
};

//  Setters

Triangulo.prototype.setLado = function (nuve_lado) {
     this._lado = function () {
          return nuve_lado;
     };
};
Triangulo.prototype.setBase = function (nuve_base) {
     this._base = function () {
          return nuve_base;
     };
};
Triangulo.prototype.setAltura = function (nuve_altura) {
     this._altura = function () {
          return nuve_altura;
     };
};

// calcular perimetro

Triangulo.prototype.calcualarPerimetro = function () {
     return this.getLado() * 3;
};

// calcular área
Triangulo.prototype.calcularArea = function () {
     return (this.getBase() * this.getAltura()) / 2;
};

//
var calcularTriangulo = document.getElementById("calcularTriangulo");

calcularTriangulo.addEventListener("click", function (e) {
     e.preventDefault();

     var valLado = document.getElementById("valLado").value;
     var valAltura = document.getElementById("valAltura").value;
     var valBase = document.getElementById("valBase").value;
     var resultado = document.getElementById("resultado");

     var createTriangulo = new Triangulo(
          parseInt(valLado),
          parseInt(valBase),
          parseInt(valAltura)
     );

     resultado.innerHTML = `Perímetro: ${createTriangulo.calcualarPerimetro()} <br>Área: ${createTriangulo.calcularArea()}`;
});

//<!------------------------------- RECTANGULO --------------------------->
// RECTANGULO
function Rectangulo(ladoA, ladoB) {
     this._ladoA = function () {
          return ladoA;
     };
     this._ladoB = function () {
          return ladoB;
     };
}

// GETTERS

Rectangulo.prototype.getLadoA = function () {
     return this._ladoA();
};

Rectangulo.prototype.getLadoB = function () {
     return this._ladoB();
};

// SETTERS

Rectangulo.prototype.setLadoA = function (nuevo_ladoA) {
     this._ladoA = function () {
          return nuevo_ladoA;
     };
};

Rectangulo.prototype.setLadoB = function (nuevo_ladoB) {
     this._ladoB = function () {
          return nuevo_ladoB;
     };
};

// Perimetro

Rectangulo.prototype.calcualarPerimetro = function () {
     return 2 * this.getLadoA() + 2 * this.getLadoB();
};

// Area

Rectangulo.prototype.calcularArea = function () {
     return this.getLadoA() * this.getLadoB();
};

//

var calcularRectangulo = document.getElementById("calcularRectangulo");

calcularRectangulo.addEventListener("click", function (e) {
     e.preventDefault();

     var valA = document.getElementById("valA").value;
     var valB = document.getElementById("valB").value;
     var resultadoR = document.getElementById("resultadoR");

     var createRectangulo = new Rectangulo(parseInt(valA), parseInt(valB));

     resultadoR.innerHTML = `Perímetro: ${createRectangulo.calcualarPerimetro()}<br>Área: ${createRectangulo.calcularArea()}`;
});
