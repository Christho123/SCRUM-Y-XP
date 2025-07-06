document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const correo = this.correo.value;
  const clave = this.clave.value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find((u) => u.correo === correo && u.clave === clave);

  if (usuario) {
    localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
    alert('Inicio de sesión exitoso');
    window.location.href = 'dashboard.html';
  } else {
    alert('Correo o contraseña incorrectos');
  }
});
