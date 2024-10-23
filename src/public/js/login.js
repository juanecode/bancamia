document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('btn_regresar').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = '/';
  });
});