function carregarTextoSobre() {
    let div = document.getElementById("textoSobre");
    div.innerHTML = "<h5>Informações Sobre Mim</h5><p>Me Chamo Mayke Correia, e esta é uma breve descrição sobre quem sou.</p><p>Sempre buscando excelência em todas minhas atividades desenvolvidas na indústria,</p><p>me qualificando e trazendo resultados a todas as tarefas a mim designadas.</p><p>Atualmente atuando no Pós Venda e atendimento ao cliente.</p><p>Estudante do 3° Período de Engenharia de Software na universidade UNICESUMAR</p><p>e formado como técnico em Mecatrônica pela instituição SENAI-PR.</p><p>Habilidades em HTML, CSS, JavaScript e Linguagem C;</p><p>Vasta Experiência nas áreas de mecânica industrial, elétrica industrial, hidráulica e pneumática.</p>";
}

const ul = document.querySelector('ul');

function getApiGitHub() {
    fetch('https://api.github.com/users/MaykeCorreia/repos')
        .then(async res => {
            if(!res.ok) {
                throw new Error(res.status);
            }

            var data = await res.json();

            data.map(item => {
                let li = document.createElement('li');

                li.innerHTML = `
                    <strong>${item.name.toUpperCase()}</strong>
                    <button onclick="window.open('${item.html_url}', '_blank')">Acessar</button>
                `;
                ul.appendChild(li);
            });

        }).catch(e => console.log(e));
}

getApiGitHub();
