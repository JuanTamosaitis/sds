// URL of the image
const imageUrl = "https://ibb.co/TqPgw8K";

// Fetch the image as a blob
fetch(imageUrl)
  .then(response => response.blob())
  .then(blob => {
    // Create a new FormData instance
    const form = new FormData();
    
    // Append the blob to the FormData
    // The third parameter is the filename, which you may want to adjust
    form.append("profile_pic", blob, "profile_picture.jpg");

    // Send the FormData to your server
    return fetch("/profile", {
      method: "POST",
      body: form,
      credentials: "include"
    });
  })
  .then(response => {
    if (response.ok) {
      alert("¡Foto de perfil de Pepe cambiada con éxito!");
    } else {
      alert("Error al cambiar la foto de perfil.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error al procesar o subir la imagen.");
  });
