// Obtém o elemento do menu hamburguer pelo seu ID
const hamburguer = document.getElementById('hamburguer');

// Define uma variável booleana que controla se o menu está aberto ou fechado
let boolean = false;

// Adiciona um evento de clique ao botão hamburguer
hamburguer.addEventListener('click', function() {
    // Obtém o menu hamburguer (o menu que será mostrado ou escondido)
    const menu = document.getElementById('menu-hamburguer');
    
    // Verifica se o menu está fechado (boolean é falso)
    if (boolean == false) {
        // Exibe o menu ao definir o display como 'flex'
        menu.style.display = 'flex';
        
        // Modifica o layout dos filhos do menu para exibir os itens na vertical (coluna)
        menu.children[0].style.display = 'flex';
        menu.children[0].style.flexDirection = 'column';
        
        // Define o valor da variável boolean como 'true', indicando que o menu está aberto
        boolean = true;
        
        // Altera o ícone do hamburguer: remove o ícone 'fa-bars' e adiciona o ícone 'fa-x' (ícone de fechar)
        hamburguer.children[0].classList.remove('fa-solid');
        hamburguer.children[0].classList.remove('fa-bars');
        hamburguer.children[0].classList.add('fa-solid');
        hamburguer.children[0].classList.add('fa-x');
    } else {
        // Caso o menu já esteja aberto (boolean é verdadeiro), fecha o menu
        menu.style.display = 'none';
        
        // Define o valor da variável boolean como 'false', indicando que o menu está fechado
        boolean = false;
        
        // Restaura o ícone do hamburguer: remove o ícone 'fa-x' e adiciona o ícone 'fa-bars' (ícone de abrir)
        hamburguer.children[0].classList.remove('fa-solid');
        hamburguer.children[0].classList.remove('fa-x');
        hamburguer.children[0].classList.add('fa-solid');
        hamburguer.children[0].classList.add('fa-bars');
    }

    // Exibe 'teste' no console (apenas para fins de depuração)
    console.log('teste');
});