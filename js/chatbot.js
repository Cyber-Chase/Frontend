document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("chatbot-container");
  
    const steps = [
      {
        id: "Greet",
        message: "Seja muito bem-vindo à Cyber Chase! Sou o Cybot, seu assistente virtual!",
        trigger: "Done",
      },
      {
        id: "Done",
        message: "Por favor, insira seu nome:",
        trigger: "waiting1",
      },
      {
        id: "waiting1",
        user: true,
        trigger: "Name",
      },
      {
        id: "Name",
        message: "Olá, {previousValue}! Selecione sua dúvida:",
        trigger: "issues",
      },
      {
        id: "issues",
        options: [
          { value: "oqCyber", label: "O que é a Cyber Chase?", trigger: "oqCyber" },
          { value: "benefCyber", label: "Quais os benefícios da Cyber Chase?", trigger: "benefCyber" },
        ]
      },
      {
        id: "oqCyber",
        message: "A Cyber Chase é uma organização que oferece recursos para a educação cibernética sem fins lucrativos.",
        trigger: "newQuestion",
      },
      {
        id: "benefCyber",
        message: "Além de aumentarmos seu conhecimento, também podemos te ajudar a turbinar seu currículo com nossos certificados!",
        trigger: "newQuestion",
      },
      {
        id: "newQuestion",
        message: "Gostaria de fazer outra pergunta?",
        trigger: "resp"
      },
      {
        id: "resp",
        options: [
          { value: "sim", label: "Sim", trigger: "issues" },
          { value: "nao", label: "Não", trigger: "end-message" }
        ]
      },
      {
        id: 'end-message',
        component: (
          <div>
            <p>
              Agradecemos! Se você deseja conversar conosco, por favor, acesse a página de contatos. Estaremos lá para atendê-lo!
            </p>
          </div>
        ),
        asMessage: true,
        end: true,
      },
    ];
  
    const theme = {
      background: '#F6F4EB',
      fontFamily: 'Poppins',
      headerBgColor: '#55A630',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#283E30',
      botFontColor: '#fff',
      userBubbleColor: '#55A630',
      userFontColor: 'white',
      alignItems: "center",
      botAvatar: 'assets/icon/svg/friendly-bot.svg',
      userAvatar: undefined
    };
  
    const bot = new ChatBot.default({
      container: container,
      steps: steps,
      botAvatar: theme.botAvatar,
      userAvatar: theme.userAvatar
    });
  });
  