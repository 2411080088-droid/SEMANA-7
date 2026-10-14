emailjs.init({
  publicKey: "6eCEtCj7E6Gd4t7jE"
});

const form = document.querySelector("#email-form");
const status = document.querySelector("#status");
const button = document.querySelector("#send-button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const formData = new FormData(form);

  const templateParams = {
    name: formData.get("name").trim(),
    email: formData.get("email").trim(),
    title: formData.get("title").trim(),
    message: formData.get("message").trim(),
    time: new Date().toLocaleString("es-PE")
  };

  button.disabled = true;
  status.textContent = "Enviando mensaje...";

  try {
    await emailjs.send(
      "service_bz7pjug",
      "template_6o5bjkg",
      templateParams
    );

    status.textContent = "El mensaje se envió correctamente.";
    form.reset();
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    status.textContent = "No se pudo enviar el mensaje. Inténtalo nuevamente.";
  } finally {
    button.disabled = false;
  }
});