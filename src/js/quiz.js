document.addEventListener('DOMContentLoaded', () => {
  const hamburguer = document.getElementById('hamburguer');
  const navMenu = document.getElementById('nav-menu');

  hamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
    hamburguer.classList.toggle('ativo');
  });

  // Detecta qual link está ativo com base no caminho
  const links = document.querySelectorAll('.header-menu a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const perguntas = [
    {
      pergunta: "1. O que é considerado 'agronegócio'?",
      opcoes: [
        "Apenas a agricultura familiar",
        "Todo o setor que envolve produção, processamento e distribuição de produtos agrícolas",
        "Somente grandes fazendas",
        "Apenas pecuária"
      ],
      resposta: 1
    },
    {
      pergunta: "2. Qual região brasileira tem maior destaque na produção de soja?",
      opcoes: ["Sul", "Norte", "Nordeste", "Centro-Oeste"],
      resposta: 3
    },
    {
      pergunta: "3. Como as enchentes afetam diretamente o agronegócio?",
      opcoes: [
        "Diminuem o preço dos alimentos",
        "Aumentam a exportação",
        "Causam perdas de lavouras, erosão do solo e atrasos logísticos",
        "Melhoram a irrigação"
      ],
      resposta: 2
    },
    {
      pergunta: "4. Qual dessas culturas é mais vulnerável a enchentes em estágio inicial de plantio?",
      opcoes: ["Cana-de-açúcar", "Milho", "Café", "Soja"],
      resposta: 3
    },
    {
      pergunta: "5. As enchentes no Rio Grande do Sul em 2024/2025 afetaram principalmente qual setor do agronegócio?",
      opcoes: [
        "Bovinocultura de corte",
        "Agricultura de grãos e hortifrúti",
        "Pesca",
        "Cultivo de algodão"
      ],
      resposta: 1
    },
    {
      pergunta: "6. Qual infraestrutura é mais impactada por enchentes, prejudicando o escoamento da produção?",
      opcoes: ["Portos", "Ferrovias", "Estradas rurais", "Silos"],
      resposta: 2
    },
    {
      pergunta: "7. O que pode ser feito para mitigar o impacto de enchentes no campo?",
      opcoes: [
        "Usar mais fertilizantes",
        "Irrigação por gotejamento",
        "Plantio direto e construção de terraços",
        "Desmatamento para escoamento da água"
      ],
      resposta: 2
    },
    {
      pergunta: "8. Qual desses é um impacto indireto das enchentes no agronegócio?",
      opcoes: [
        "Alagamento de plantações",
        "Queda no valor da soja",
        "Interrupção de cadeias logísticas e aumento de custos",
        "Melhora na produtividade"
      ],
      resposta: 2
    },
    {
      pergunta: "9. Enchentes frequentes podem levar a:",
      opcoes: [
        "Aumento na exportação",
        "Migração rural-urbana",
        "Crescimento do setor",
        "Mais empregos no campo"
      ],
      resposta: 1
    },
    {
      pergunta: "10. Qual é uma medida de longo prazo para o agronegócio se adaptar às mudanças climáticas?",
      opcoes: [
        "Aumento da monocultura",
        "Substituição por culturas exóticas",
        "Investimento em tecnologias climáticas e seguros agrícolas",
        "Redução do uso de máquinas"
      ],
      resposta: 2
    }
  ];

  const quizContainer = document.getElementById('quiz');
  const resultadoFinal = document.getElementById('resultadoFinal');
  const btnResultado = document.getElementById('verResultado');

  perguntas.forEach((item, index) => {
    const perguntaDiv = document.createElement('div');
    perguntaDiv.classList.add('pergunta');
    perguntaDiv.setAttribute('data-index', index);

    const titulo = document.createElement('h3');
    titulo.textContent = item.pergunta;
    perguntaDiv.appendChild(titulo);

    item.opcoes.forEach((opcao, i) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `pergunta${index}`;
      input.value = i;
      label.appendChild(input);
      label.append(` ${opcao}`);
      label.classList.add('opcao');
      perguntaDiv.appendChild(label);
    });

    quizContainer.appendChild(perguntaDiv);
  });

  btnResultado.addEventListener('click', () => {
    let acertos = 0;
    let todasRespondidas = true;

    perguntas.forEach((item, index) => {
      const respostaSelecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
      const perguntaDiv = document.querySelector(`.pergunta[data-index="${index}"]`);
      const opcoesLabels = perguntaDiv.querySelectorAll('label');

      if (!respostaSelecionada) {
        todasRespondidas = false;
        return;
      }

      const respostaCerta = item.resposta;

      opcoesLabels.forEach((label, i) => {
        label.classList.remove('correta', 'errada');

        if (parseInt(label.querySelector('input').value) === respostaCerta) {
          label.classList.add('correta');
        }

        if (label.querySelector('input').checked && parseInt(label.querySelector('input').value) !== respostaCerta) {
          label.classList.add('errada');
        }
      });

      if (parseInt(respostaSelecionada.value) === respostaCerta) {
        acertos++;
      }
    });

    if (!todasRespondidas) {
      resultadoFinal.textContent = 'Responda todas as perguntas antes de ver o resultado.';
      resultadoFinal.style.color = '#d32f2f';
      return;
    }

    resultadoFinal.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
    resultadoFinal.style.color = '#2e7d32';
  });
});
