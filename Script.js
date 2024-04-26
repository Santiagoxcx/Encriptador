//Funcion pra Encriptar
function encriptar() {
    const textoOriginal = document.getElementById("textEnc").value;
    const textoEncriptado = btoa(textoOriginal); // Codifica el texto en base64
    document.getElementById("textDe").value = textoEncriptado;
}

  // Función para desencriptar el texto
  function desencriptar() {
    const textoEncriptado = document.getElementById("textDe").value;
    const textoOriginal = atob(textoEncriptado); // Decodifica el texto desde base64
    document.getElementById("textDe").value = textoOriginal;
}
//Funcion para  Copiar el Texto
function copiarTexto() {
const texto = document.getElementById("textDe").value;
navigator.clipboard.writeText(texto)
    .then(() => {
        alert("¡Texto copiado al portapapeles!");
    })
    .catch((error) => {
        console.error("Error al copiar el texto:", error);
    });
}