export const meta = {
    title:'Koch Empreendimentos',
    description:'Venha fazer um bom negócio com a koch'
  }

  export  const formInputs = [
    {
        placeholder: 'Qual o seu perfil de investidor',
        name: 'profile',
        type:'select',
        options: [
            {
                label:'Option 1',
                value: 'option1'
            },
            {
                label:'Option 2',
                value: 'option2'
            },
            {
                label:'Option 3',
                value: 'option3'
            },
        ]
    },
    {
        placeholder: 'Qual o investimento que você procura',
        name: 'target',
        type:'select',
        options: [
            {
                label:'option 1',
                value: 'option1'
            },
            {
                label:'option 2',
                value: 'option2'
            },
            {
                label:'option 3',
                value: 'option3'
            },
        ]
    },
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
    },
    {
        placeholder: 'Mensagem',
        name: 'message',
        type:'textarea'
    }
  ];

  export  const aboutInfo = {
    sectionTitle:'seja um\ninvestidor',
    title:`Venha fazer um bom\nnegócio com a koch`,
    content:`<p>Preencha os campos abaixo e vamos fazer um negócio fora do comum.</p>`,
    link:'#'
  };
