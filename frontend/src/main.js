document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Error al iniciar sesión");
        return;
      }

      const data = await response.json();
      console.log("Login OK:", data);

      // Aquí luego redirigiremos al formulario de perfil
      alert(`Login correcto, bienvenido ${data.username}`);
      // window.location.href = "/pages/profile.html";
    } catch (error) {
      console.error("Error en login:", error);
      alert("No se pudo conectar con el servidor");
    }
  });
});