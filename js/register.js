document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const nuevoUsuario = {};
  formData.forEach((valor, clave) => {
    nuevoUsuario[clave] = valor;
  });

  nuevoUsuario.id = Date.now(); // ID único

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const existe = usuarios.some((u) => u.correo === nuevoUsuario.correo);
  if (existe) {
    alert('Este correo ya está registrado.');
    return;
  }

  usuarios.push(nuevoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Registro exitoso.');
  window.location.href = 'index.html';
});
