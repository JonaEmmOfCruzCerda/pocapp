const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta simple de salud
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend funcionando" });
});

// Ruta de login (simulada por ahora)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};

  console.log("Intento de login:", username);

  // Lógica simulada: acepta cualquier usuario con password no vacío
  if (!username || !password) {
    return res.status(400).json({ error: "Usuario y contraseña requeridos" });
  }

  // Aquí luego validaremos contra la BD
  return res.json({
    success: true,
    username,
    token: "fake-token-123", // luego lo cambiaremos
  });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});