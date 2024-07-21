let input = document.getElementById("input");
let output = document.getElementById("output");
let output_container = document.getElementById("output-container");
let no_output_container = document.getElementById("no-output-container");

function criptografar() {
  let value = input.value

  let textoCriptografado = value
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  trocarTela(textoCriptografado)
}

function descriptografar() {
  let value = input.value

  let textoCriptografado = value
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  trocarTela(textoCriptografado)
}

function trocarTela(texto) {
  no_output_container.classList.add("hidden");
  no_output_container.classList.remove("visible");

  output_container.classList.remove("hidden");
  output_container.classList.add("visible");

  output.value = texto
  input.value = "";
}

function copiarTexto() {
  output.select();
  output.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(output.value);
}