document.addEventListener('DOMContentLoaded', function() {
    const iconsContainer = document.getElementById('redes'); // Certifique-se de que o ID esteja correto

    const icons = [
        {href: "https://github.com/Saboyyya", class: 'fab fa-github', title: 'Github'},
        {href: "https://www.linkedin.com/in/júlio-césar-saboya-paes-3703a4267", class: 'fab fa-linkedin', title: 'LinkedIn'}
    ];

    icons.forEach(icon => {
        // Cria um link
        const link = document.createElement('a');
        link.href = icon.href;
        link.target = '_blank';
        link.title = icon.title;
        
        // Cria um elemento de ícone
        const iconElement = document.createElement('i');
        iconElement.className = icon.class;

        // Adiciona o ícone ao link
        link.appendChild(iconElement);

        // Adiciona o link ao container de ícones
        iconsContainer.appendChild(link);

        // Adiciona um evento de clique ao link
        link.addEventListener('click', function(event) {
            alert(`Você será redirecionado para o ${icon.title}`);
        });
    });
});
document.addEventListener('DOMContentLoaded',function(){
    const email = "saboyyajulio@gmail.com"
    const botao = document.getElementById('CopiarEmail')

    botao.addEventListener('click',function(){
        navigator.clipboard.writeText(email).then(function(){
            alert("Este E-mail foi copiado para sua área de tranferência !")
        }).catch(function(error){
            console.error("Não foi possivel copiar E-mail",error)
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
  const gitHubButton = document.getElementById('gitHub');

  // Adiciona um evento de clique ao botão
  gitHubButton.addEventListener('click', function() {
      const gitHubURL = "https://github.com/Saboyyya";
      alert("Você será redirecionado para o GitHub.");
      window.open(gitHubURL, '_blank'); // Abre o GitHub em uma nova aba
  });
});
