export const meta = {
    title:'Koch Empreendimentos',
    description:'Venha fazer um bom negócio com a koch'
  }

  export const formInputsLeft = [
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

  export const formInputsRight = [
    {
        placeholder: 'Tipo de proposta',
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
        placeholder: 'Proposta de venda em reais',
        name: 'currency',
        type:'currency'
    },
    {
        placeholder: 'Digita observações sobre sua proposta',
        name: 'observation',
        type:'textarea'
    },
  ];

  export const aboutInfo = {
    sectionTitle:'permuta',
    title:`Negocie\ncom a koch`,
    content:`<p>Preencha seus dados pessoais e descreva no campo mensagem o máximo de informações sobre a proposta que você deseja. Depois, é só aguardar o contato do nosso time!</p>`,
    link:'#'
  };