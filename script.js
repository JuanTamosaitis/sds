var nuevaImagen = "https://ibb.co/TqPgw8K";

var form = new FormData();
form.append("profile_pic", nuevaImagen);

fetch("/profile", {
  method: "POST",
  body: form,
  credentials: "include"
}).then(response => {
  if (response.ok) {
    alert("¡Foto de perfil de Pepe cambiada con éxito!");
  } else {
    alert("Error al cambiar la foto de perfil.");
  }
});
