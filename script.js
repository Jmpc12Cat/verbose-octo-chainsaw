document.addEventListener("DOMContentLoaded", function () {
  // Botón de inicio de explicación
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", function () {
      let godot = document.getElementById("godotSprite");
      godot.style.transform = "scale(1.1)"; // Animación de bienvenida

      setTimeout(() => {
        window.location.href = "explicacion.html"; // Ir a la sección de teoría
      }, 1200);
    });
  }

  // Botón para ir a ejercicios
  const ejerciciosBtn = document.getElementById("ejerciciosBtn");
  if (ejerciciosBtn) {
    ejerciciosBtn.addEventListener("click", function () {
      window.location.href = "Ejercicios.html"; // Redirigir a la página de ejercicios
    });
  }

  // Botón para regresar a la pantalla principal
  const volverBtn = document.getElementById("volverBtn");
  if (volverBtn) {
    volverBtn.addEventListener("click", function () {
      window.location.href = "index.html"; // Volver a la pantalla principal
    });
  }

  // Configuración del canvas
  const canvas = document.getElementById("vectorCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 300;

    function dibujarVectores() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vector A (lanzamiento) - Azul
      ctx.beginPath();
      ctx.moveTo(50, 250);
      ctx.lineTo(150, 150);
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.closePath();

      // Vector B (viento) - Rojo
      ctx.beginPath();
      ctx.moveTo(50, 250);
      ctx.lineTo(250, 250);
      ctx.strokeStyle = "red";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.closePath();

      // Vector proyectado (componente afectada) - Verde
      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.lineTo(150, 250);
      ctx.strokeStyle = "green";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.closePath();
    }

    dibujarVectores(); // Dibujar gráficos al iniciar
  }
});

// Contador de respuestas correctas
let correctAnswersCount = 0;

// Función para verificar respuestas y actualizar el contador
function checkAnswer(button, answer) {
  const correctAnswers = {
    "(3,0)": "feedback1",
    16: "feedback2",
    "(4.8,6.4)": "feedback3",
  };

  const feedbackId = correctAnswers[answer];
  const feedback = document.getElementById(feedbackId);
  const godotSprite = document.getElementById("godotSprite");

  if (feedback) {
    if (answer in correctAnswers) {
      feedback.innerHTML = "✅ ¡Correcto! Godot está feliz. 🎉";
      correctAnswersCount++; // Incrementar respuestas correctas
    } else {
      feedback.innerHTML =
        "❌ Incorrecto... Godot está confundido. 🤔 Intenta de nuevo.";
    }

    updateGodotImage(); // Actualizar imagen de Godot
  }
}

// Función para cambiar la imagen de Godot según el número de respuestas correctas
function updateGodotImage() {
  const godotSprite = document.getElementById("godotSprite");

  if (correctAnswersCount === 3) {
    godotSprite.src = "Archivos/GodotMuyFeliz.png"; // Imagen de Godot muy feliz
  } else if (correctAnswersCount === 2) {
    godotSprite.src = "Archivos/GodotFeliz.png"; // Imagen de Godot feliz
  } else if (correctAnswersCount === 1) {
    godotSprite.src = "Archivos/GodotNeutral.png"; // Imagen de Godot neutral
  } else {
    godotSprite.src = "Archivos/GodotTriste.png"; // Imagen de Godot triste
  }

  // Animación para hacer la transición más fluida
  godotSprite.style.transform = "scale(1.1)";
  setTimeout(() => {
    godotSprite.style.transform = "scale(1)";
  }, 500);
}
