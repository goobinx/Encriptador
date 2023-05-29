const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
  let textoEscrito = textArea.value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if (!validador || validador === null) {
    alert("Solo se permiten letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "block";
  }
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


const codigoEncriptacion = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let letra in codigoEncriptacion) {
    if (stringEncriptada.includes(letra)) {
      stringEncriptada = stringEncriptada.replaceAll(
        letra,
        codigoEncriptacion[letra]
      );
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let letra in codigoEncriptacion) {
    if (stringDesencriptada.includes(codigoEncriptacion[letra])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        codigoEncriptacion[letra],
        letra
      );
    }
  }

  return stringDesencriptada;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}
