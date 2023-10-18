export const meta = {
    title:'Koch Empreendimentos',
    description:'Venha fazer um bom negócio com a koch'
  }

  export  const formInputs = [
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

  export  const contactInfo = {
    sectionTitle:'contato',
    title:`Fale com\na koch`,
    content:`<p>Preencha os campos abaixo para falar com a gente.</p>`,
    link:'#'
  };

  export  const itemSocialList = [
    {href:process.env.NEXT_PUBLIC_INSTAGRAM, text:'Instagram'},
    {href:process.env.NEXT_PUBLIC_LINKEDIN, text:'Linkedin'},
    {href:process.env.NEXT_PUBLIC_YOUTUBE, text:'Youtube'}
  ]
