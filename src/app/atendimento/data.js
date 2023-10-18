  export  const opportunitiesButtons = [
    {
      label: 'Email',
      link: 'mailto:' + process.env.NEXT_PUBLIC_EMAIL,
      extern: 1
    },
    {
      label: 'Whatsapp',
      link: 'https://api.whatsapp.com/send?phone=55' + process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
      extern: 1
    },
    {
      label: 'Corretor online',
      link: 'https://api.whatsapp.com/send?phone=55' + process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
      extern: 1
    },
  ];

  export  const oportunitiesInfo = {
    sectionTitle:'atendimento',
    title:`Fale com\num corretor`,
    content:'<p>Escolha a melhor forma de ser atendido por um de nossos consultores de vendas.</p>',
  };

  export  const contactInfo = {
    sectionTitle:`nossa central\nde vendas`,
    title:`venha até\na koch`,
    content:'<p>Se preferir venha nos fazer uma visita e tomar um cafézinho.</p>',
  };

  export  const formInfo = {
    sectionTitle:`formulário`,
    title:`nos mande\numa mensagem`,
    content:'<p>Preencha os campos abaixo para falar com um de nossos consultores de vendas.</p>',
  };

  export  const formInputsLeft = [
    {
        placeholder: 'Nome',
        name: 'name',
        type:'text'
    },
    {
        placeholder: 'Email',
        name: 'email',
        type:'email'
    },
    {
        placeholder: 'Telefone',
        name: 'phone',
        type:'phone'
    }
  ];

  export  const formInputsRight = [
    {
        placeholder: 'Mensagem',
        name: 'message',
        type:'textarea'
    }
  ];