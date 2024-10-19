window.location.href = "/profile";

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fileInput = document.getElementById('profile_pic');
    const submitButton = form.querySelector('button[type="submit"]');

    // Hide the file input as we're not using it
    fileInput.style.display = 'none';

    // Modify the label to inform the user about the preset image
    const label = form.querySelector('label[for="profile_pic"]');
    label.textContent = 'Se usará una imagen predefinida como foto de perfil';

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();

        // The URL of the image you want to use
        const imageUrl = 'https://ibb.co/TqPgw8K';

        // Fetch the image as a blob
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const formData = new FormData(form);
                
                // Remove any existing file in the formData
                formData.delete('profile_pic');
                
                // Append the blob to the FormData
                formData.append('profile_pic', blob, 'profile_picture.jpg');

                // Send the FormData to your server
                return fetch('/profile', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include'
                });
            })
            .then(response => {
                if (response.ok) {
                    alert('¡Foto de perfil cambiada con éxito!');
                    // Optionally, you can reload the page or update the profile picture display
                    // window.location.reload();
                } else {
                    alert('Error al cambiar la foto de perfil.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al procesar o subir la imagen.');
            });
    });
});
