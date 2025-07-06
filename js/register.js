document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const nuevoUsuario = {};
  formData.forEach((valor, clave) => {
    nuevoUsuario[clave] = valor.trim();
  });

  // Validaciones
  const correoValido = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(nuevoUsuario.correo);
  const telefonoValido = /^9\d{8}$/.test(nuevoUsuario.telefono);
  const dniValido = /^\d{8}$/.test(nuevoUsuario.dni);

  if (!correoValido) {
    alert("El correo debe terminar en @gmail.com");
    return;
  }

  if (!telefonoValido) {
    alert("El teléfono debe comenzar con 9 y tener 9 dígitos.");
    return;
  }

  if (!dniValido) {
    alert("El DNI debe contener exactamente 8 dígitos numéricos.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const existe = usuarios.some((u) => u.correo === nuevoUsuario.correo);
  if (existe) {
    alert('Este correo ya está registrado.');
    return;
  }

  nuevoUsuario.id = Date.now(); // ID único
  usuarios.push(nuevoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Registro exitoso.');
  window.location.href = 'index.html';
});