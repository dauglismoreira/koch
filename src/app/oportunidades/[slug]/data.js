export function findPostBySlug(slug) {
    const enterprise = enterprise.find(enterprise => enterprise.slug === slug) || null;
    return enterprise;
  }

export const meta = {
    title:'Conheça a história da Koch construtora & incorporadora.',
    description:'Venha fazer um bom negócio com a koch'
}

export const enterprise = [
    {
        slug:'teste',
        title:'Residencial Constantino',
        title_high: 'Lançamento',
        district:'Morretes',
        city:'Itapema',
        high_image:'./../tmp/banner(1583x910).webp',
        enterprise_logo:'./../tmp/logo(140x140).webp',
        price:750000,
        high_skills : [
            '1 ou 2 suítes',
            '1 vaga',
            'até 69,69 m²',
        ],
        about_skills:[
            'Amplo Deck',
            'Prainha',
            'Salão de Festas 1',
            'Espaço Gourmet',
            'Sala de jogos',
            'Espaço Vigneto',
            'Praça do fogo',
            'Piscina Adulto',
            'Academia',
            'Salão de Festas 2',
            'Quadra Poliesportiva',
            'Brinquedoteca',
            'Sauna',
            'Amplo Deck',
            'Prainha',
            'Salão de Festas 1',
            'Espaço Gourmet',
            'Sala de jogos',
            'Espaço Vigneto',
            'Praça do fogo',
            'Piscina Adulto',
            'Academia',
        ],
        about_characteristics : [
            'Apartamentos de 2 suítes ou 1 suíte e 1 dormitório',
            '2 elevadores de alto padrão e velocidade',
            'Mais de 500 m² de área de lazer',
            '4 plantas tipos de planta disponíveis',
            '1 vaga de garagem por apartamento'
        ],
        about_image : './../tmp/image(670x944).webp',
        enterprise_gallery : [
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
            {
                url:'/tmp/banner(1583x910).webp',
                thumb:'/tmp/thumb(260x200).webp',
                alt:'teste'
            },
        ],
        plans: [
            {
                name:'Tipo 1',
                image:'./../tmp/image(800x570).webp',
                skill:[
                    'Amplo Deck',
                    'Prainha',
                    'Salão de Festas 1',
                    'Espaço Gourmet',
                    'Sala de jogos',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Brinquedoteca',
                    'Sauna',
                    'Amplo Deck',
                    'Prainha',
                    'Salão de Festas 1',
                    'Espaço Gourmet',
                    'Sala de jogos',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                ]
            },
            {
                name:'Tipo 2',
                image:'./../tmp/image(800x570).webp',
                skill:[
                    'Amplo Deck',
                    'Prainha',
                    'Salão de Festas 1',
                    'Espaço Gourmet',
                    'Sala de jogos',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Salão de Festas 1',
                    'Espaço Gourmet',
                    'Sala de jogos',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Brinquedoteca',
                    'Sauna',
                ]
            },
            {
                name:'Tipo 3',
                image:'./../tmp/image(800x570).webp',
                skill:[
                    'Amplo Deck',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Brinquedoteca',
                    'Sauna',
                    'Amplo Deck',
                    'Prainha',
                    'Salão de Festas 1',
                    'Espaço Gourmet',
                    'Sala de jogos',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Brinquedoteca',
                    'Sauna',
                ]
            },
            {
                name:'Tipo 4',
                image:'./../tmp/image(800x570).webp',
                skill:[
                    'Amplo Deck',
                    'Prainha',
                    'Salão de Festas 1',
                    'Espaço Gourmet',
                    'Sala de jogos',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Brinquedoteca',
                    'Sauna',
                    'Amplo Deck',
                    'Prainha',
                    'Salão de Festas 1',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Brinquedoteca',
                    'Sauna',
                ]
            },
            {
                name:'Área de lazer',
                image:'./../tmp/image(800x570).webp',
                skill:[
                    'Amplo Deck',
                    'Prainha',
                    'Salão de Festas 1',
                    'Espaço Gourmet',
                    'Sala de jogos',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Brinquedoteca',
                    'Sauna',
                    'Amplo Deck',
                    'Prainha',
                    'Salão de Festas 1',
                    'Espaço Gourmet',
                    'Sala de jogos',
                    'Espaço Vigneto',
                    'Praça do fogo',
                    'Piscina Adulto',
                    'Academia',
                    'Salão de Festas 2',
                    'Quadra Poliesportiva',
                    'Brinquedoteca',
                    'Sauna',
                ]
            },
        ],
        localization : {
            local_description:'<p>Localizado na rua 414, esquina com rua 430A, a cinco minutos de distância do mar, no bairro Morretes, o bairro que mais valoriza na cidade.</p>',
            latitude:0,
            longitude:0,
            nearby : [
                'Balneário Camboriú ━ 17,4 km',
                'Florianópolis ━ 70,1 km',
                'Blumenau ━ 84,8 km',
                'Curitiba ━ 238,5 km',
                'Aeroporto de Navegantes ━ 49,9 km',
            ]
        },
        progress : {
            video:'',
            start:'2023',
            forecast:'2026',
            foundation:100,
            structure:70,
            masonry:30,
            plaster:20,
        }
    }
]
