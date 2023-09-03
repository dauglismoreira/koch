export const meta = {
    title:'Koch Empreendimentos',
    description:'Venha fazer um bom negócio com a koch'
  }

export const formInputs = [
    {
        placeholder: 'Escolha a área desejada',
        name: 'area',
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
        placeholder: 'Currículo',
        name: 'curriculo',
        type:'file'
    }
  ];

  export const aboutInfo = {
    sectionTitle:'trabalhe\nconosco',
    title:`Faça parte\nda koch`,
    content:`<p>Preencha os campos abaixo e cadastre seu currículo.</p>`,
    link:'#'
  };