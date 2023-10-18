
  export const enterpriseInfo = {
    title:`Moldando\no horizonte`,
    subTitle:`Os nossos\nempreendimentos`,
    cta:'Mais empreendimentos',
    link:'empreendimentos'
  };


  export const aboutInfo = {
    sectionTitle:'Conheça a Koch',
    title:`Nossa\nhistória`,
    content:'<p>Surgimos a partir de <b>sonho compartilhado</b> por três socios apaixonados por empreendimentos que resgatam a <b>grandiosidade</b> e a história da <b>Roma Antiga</b>, buscando serem lembrados e reconhecidos pelas gerações futuras.</p>',
    link:'sobre'
  };

  export const oppotunitiesButtons = [
    {
      label: 'Email',
      link: 'mailto:' + process.env.NEXT_PUBLIC_EMAIL,
      extern: 1
    },
    {
      label: 'Whatsapp',
      link: 'https://api.whatsapp.com/send?phone=55' + process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
      extern: 1
    }
  ];

  export const oportunitiesInfo = {
    sectionTitle:'Fale com um\ncorretor',
    title:`Conheça nossas\noportunidades`,
    content:'<p>Escolha a melhor forma de ser atendido por um de nossos consultores de vendas.</p>',
  };

  export const investorButtons = [
    {
      label: 'Quero saber mais',
      link: 'investidor'
    },
  ];

  export const investorInfo = {
    sectionTitle:'Seja um\ninvestidor',
    title:`Venha fazer um bom\nnegócio com a koch`,
    content:'<p>Vamos fazer um negócio fora do comum.</p>',
  };

  export const blogInfo = {
    sectionTitle:'Blog',
    title:`Fique por dentro do\nque acontece na koch`,
    cta:'Mais notícias',
    link:'blog'
  };