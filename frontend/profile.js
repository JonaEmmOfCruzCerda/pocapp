const API_BASE = "http://localhost:3000/api";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("profileForm");
  const message = document.getElementById("profileMessage");

  // TODO: recuperar token/username real; por ahora fijo
  const username = "demo-user";

  // Cargar datos actuales del perfil
  try {
    const res = await fetch(`${API_BASE}/profile?username=${encodeURIComponent(username)}`);
    if (res.ok) {
      const data = await res.json();
      form.fullName.value = data.fullName || "";
      form.bio.value = data.bio || "";
      form.website.value = data.website || "";
      form.phone.value = data.phone || "";
    }
  } catch (err) {
    console.error("Error cargando perfil:", err);
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.textContent = "";

    const payload = {
      username,
      fullName: form.fullName.value,
      bio: form.bio.value,
      website: form.website.value,
      phone: form.phone.value,
    };

    try {
      const res = await fetch(`${API_BASE}/profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        message.textContent = data.error || "Error al guardar el perfil";
        message.style.color = "red";
        return;
      }

      message.textContent = "Perfil guardado correctamente";
      message.style.color = "green";
    } catch (err) {
      console.error("Error guardando perfil:", err);
      message.textContent = "No se pudo conectar con el servidor";
      message.style.color = "red";
    }
  });
});