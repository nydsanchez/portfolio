<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $mensaje = trim($_POST["message"]);

  $to = "info@sc-consulting.online"; // Reemplaza con tu correo real
  $subject = "Nuevo mensaje desde tu portafolio";
  $body = "Nombre: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje";

  $headers = "From: $nombre <$email>";

  if (mail($to, $subject, $body, $headers)) {
    echo "Mensaje enviado correctamente.";
  } else {
    echo "Error al enviar el mensaje.";
  }
}
?>