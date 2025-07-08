function toggleMenu() {
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("active");
}

// Função para destacar o card clicado
document.addEventListener('DOMContentLoaded', () => {
  const projetos = document.querySelectorAll('.projetos-grid article');

  projetos.forEach(projeto => {
    projeto.addEventListener('click', () => {

      projetos.forEach(p => p.classList.remove('destaque'));


      projeto.classList.add('destaque');
    });
  });
});
