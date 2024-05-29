document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'drum'
    const botoes = document.querySelectorAll('.drum');

    // Adiciona um evento de clique a cada botão
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Ao clicar em um botão, chama a função fazerSom e botaoAnimacao
            fazerSom(botao.classList[0]);
            botaoAnimacao(botao.classList[0]);
        });
    });

    // Adiciona um evento de teclado ao documento
    document.addEventListener('keydown', event => {
        const tecla = event.key;
        const teclaMinuscula = event.key.toLowerCase();
        const capsLockAtivado = event.getModifierState('CapsLock');
        
        // Verifica se o Caps Lock está ativado
        if (capsLockAtivado) {
            // Se estiver ativado, chama fazerSom e botaoAnimacao com a tecla convertida para minúscula
            fazerSom(teclaMinuscula);
            botaoAnimacao(teclaMinuscula);
        } else {
            // Se não estiver ativado, chama fazerSom e botaoAnimacao com a tecla original
            fazerSom(tecla);
            botaoAnimacao(tecla);
        }
    });

    // Função para tocar o som correspondente à tecla pressionada
    function fazerSom(key) {
        switch (key) {
            case 'a':
                var crash = new Audio('./assets/sounds/leftcrash.mp3');
                crash.play();
                break;
            case 's':
                var tom1 = new Audio('./assets/sounds/tom1.mp3');
                tom1.play();
                break;
            case 'd':
                var snare = new Audio('./assets/sounds/snare.mp3');
                snare.play();
                break;
            case 'j':
                var tom3 = new Audio('./assets/sounds/tom3.mp3');
                tom3.play();
                break;
            case 'k':
                var tom2 = new Audio('./assets/sounds/tom2.mp3');
                tom2.play();
                break;
            case 'l':
                var kickbass = new Audio('./assets/sounds/kickbass.mp3');
                kickbass.play();
                break;
            default:
                console.log('Tecla não encontrada');
        }
    }

    // Função para adicionar a animação de clique ao botão pressionado
    function botaoAnimacao(key) {
        const botaoAtivado = document.querySelector('.' + key);
        if (botaoAtivado) {
            botaoAtivado.classList.add('pressed');
            setTimeout(() => {
                botaoAtivado.classList.remove('pressed');
            }, 150);
        }
    }
});
