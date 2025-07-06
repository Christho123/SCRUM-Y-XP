document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const usuario = {};

  formData.forEach((value, key) => {
    usuario[key] = value;
  });

  usuario.id = Date.now(); // ID único

  // Obtener usuarios existentes
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verificar correo duplicado
  const existe = usuarios.some(u => u.correo === usuario.correo);
  if (existe) {
    alert('Este correo ya está registrado');
    return;
  }

  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Registro exitoso');
  window.location.href = 'index.html';
});
