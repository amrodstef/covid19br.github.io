const page_id = "municipios";
const default_uf = "SP";
const default_mun = "Sao_Paulo";
const default_verb = "São Paulo";
const locale =
    [ 
        { prep: "em", uf: "SP", mun:"Sao_Paulo",             verbose: "São Paulo",             has_modelogro: true,  has_td: true  },
        { prep: "em", uf: "SP", mun:"Jundiai",               verbose: "Jundiaí",               has_modelogro: false, has_td: false },
        { prep: "em", uf: "MG", mun:"Belo_Horizonte",        verbose: "Belo Horizonte",        has_modelogro: false, has_td: true  },
        { prep: "no", uf: "RJ", mun:"Rio_de_Janeiro",        verbose: "Rio de Janeiro",        has_modelogro: false, has_td: true  },
        { prep: "em", uf: "SC", mun:"Florianopolis",         verbose: "Florianópolis",         has_modelogro: false, has_td: true  },
        { prep: "em", uf: "PB", mun:"Joao_Pessoa",           verbose: "João Pessoa",           has_modelogro: false, has_td: true  },
        { prep: "em", uf: "GO", mun:"Goiania",               verbose: "Goiânia",               has_modelogro: false, has_td: false },
        { prep: "em", uf: "AM", mun:"Manaus",                verbose: "Manaus",                has_modelogro: false, has_td: false },
        { prep: "em", uf: "AM", mun:"Tabatinga",             verbose: "Tabatinga",             has_modelogro: false, has_td: false },
        { prep: "em", uf: "PR", mun:"Curitiba",              verbose: "Curitiba",              has_modelogro: false, has_td: true  },
        { prep: "em", uf: "SP", mun:"Santos",                verbose: "Santos",                has_modelogro: false, has_td: true  },
        { prep: "em", uf: "RS", mun:"Porto_Alegre",          verbose: "Porto Alegre",          has_modelogro: false, has_td: false },
        { prep: "em", uf: "SP", mun:"Sao_Bernardo_do_Campo", verbose: "São Bernardo do Campo", has_modelogro: false, has_td: true  },
        { prep: "em", uf: "SP", mun:"Guarulhos",             verbose: "Guarulhos",             has_modelogro: false, has_td: false },
        { prep: "em", uf: "SP", mun:"Osasco",                verbose: "Osasco",                has_modelogro: false, has_td: true  },
        { prep: "em", uf: "PA", mun:"Belem",                 verbose: "Belém",                 has_modelogro: false, has_td: true  },
        { prep: "em", uf: "PE", mun:"Recife",                verbose: "Recife",                has_modelogro: false, has_td: true  },
        { prep: "em", uf: "CE", mun:"Fortaleza",             verbose: "Fortaleza",             has_modelogro: false, has_td: false },
        { prep: "em", uf: "RJ", mun:"Duque_de_Caxias",       verbose: "Duque de Caxias",       has_modelogro: false, has_td: false },
        { prep: "em", uf: "BA", mun:"Salvador",              verbose: "Salvador",              has_modelogro: false, has_td: true  },
        { prep: "em", uf: "PA", mun:"Ananindeua",            verbose: "Ananindeua",            has_modelogro: false, has_td: true  },
        { prep: "em", uf: "SP", mun:"Santo_Andre",           verbose: "Santo André",           has_modelogro: false, has_td: true  },
        { prep: "em", uf: "MA", mun:"Sao_Luis",              verbose: "São Luís",              has_modelogro: false, has_td: true  },
        { prep: "em", uf: "ES", mun:"Vitoria",               verbose: "Vitória",               has_modelogro: false, has_td: false },
        { prep: "em", uf: "ES", mun:"Alegre",                verbose: "Alegre",                has_modelogro: false, has_td: true  },
        { prep: "em", uf: "AP", mun:"Macapa",                verbose: "Macapá",                has_modelogro: false, has_td: true  },
        { prep: "em", uf: "AM", mun:"Manacapuru",            verbose: "Manacapuru",            has_modelogro: false, has_td: true  },
        { prep: "em", uf: "RJ", mun:"Niteroi",               verbose: "Niterói",               has_modelogro: false, has_td: false },
        { prep: "em", uf: "SP", mun:"Ribeirao_Preto",        verbose: "Ribeirão Preto",        has_modelogro: false, has_td: true  },
        { prep: "em", uf: "PR", mun:"Maringa",               verbose: "Maringá",               has_modelogro: false, has_td: true  }
    ];
