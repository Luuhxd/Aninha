    const container = document.querySelector('.wrapper');

    function criarGota() {
        const gota = document.createElement('div');
        gota.classList.add('gota');
        const tamanho = Math.random() * 6 + 6;
        gota.style.width = `${tamanho}px`;
        gota.style.height = `${tamanho}px`;
        gota.style.left = `${Math.random() * 100}%`;
        gota.style.animationDuration = `${Math.random() * 2 + 2}s`;
        container.appendChild(gota);

        setTimeout(() => gota.remove(), 3000);
    }

    setInterval(criarGota, 1000);