const banners = [
  {
    name: 'Administração I e II - (AAG001 e AAG002)',
    bannerCode: 'banner_administracao.jpg'
  },
  {
    name: 'Alfabetização e Letramento I e II - (SAL001 e SAL002)',
    bannerCode: 'banner_Alfabetizacao_Letramento.png'
  },
  {
    name: 'Álgebra Linear - MAL001',
    bannerCode: 'banner_algebra_linear.jpg'
  },
  {
    name: 'Análise Instrumental - QAI001',
    bannerCode: 'banner_Analise_Instrumental.jpg'
  },
  {
    name: 'Arte e Música na Educação: Fundamentos e Práticas - SAM001',
    bannerCode: 'banner_Arte_Musica_Educ.png'
  },
  {
    name: 'Automação Industrial - EPA001',
    bannerCode: 'banner_Automacao_Industrial.jpg'
  },
  {
    name: 'Avaliação Educacional e da Aprendizagem - SAA001',
    bannerCode: 'banner_Aval_Educ_Aprendizagem.png'
  },
  {
    name: 'Bancos de Dados - EID002',
    bannerCode: 'banner_Banco_de_Dados.jpg'
  },
  {
    name: 'Bioquímica - BBQ501',
    bannerCode: 'banner_bioquimica.jpg'
  },
  {
    name: 'Cálculo (Versão antiga de 2017)',
    bannerCode: 'banner_CalculoIII_2017.jpg'
  },
  {
    name: 'Cálculo I, II, III e IV - (MCA001, MCA002 ,MCA003, MCA501, MCA502 e MCA503)',
    bannerCode: 'banner_Calculo_I.jpg'
  },
  {
    name: 'Ciência do Ambiente - BEA001',
    bannerCode: 'banner_Ciencia_Ambiente.jpg'
  },
  {
    name: 'Ciência dos Materiais - EMA001',
    bannerCode: 'banner_CienciaMateriais.jpg'
  },
  {
    name: 'Circuitos Elétricos - EEC001',
    bannerCode: 'banner_Circuitos_Eletricos.jpg'
  },
  {
    name: 'Circuitos Lógicos - EEC101',
    bannerCode: 'banner_Circuitos_Logicos.jpg'
  },
  {
    name: 'Computação Gráfica - EES101',
    bannerCode: 'banner_comp_grafica.jpg'
  },
  {
    name: 'Comunicação, Expressão e Redação Oficial - COM016',
    bannerCode: 'banner_Comunicacao_Expressao.jpg'
  },
  {
    name: 'Confiabilidade - EPQ501',
    bannerCode: 'banner_Confiabilidade.jpg'
  },
  {
    name: 'Controle e Automação - EEA001',
    bannerCode: 'banner_Controle_Automacao.png'
  },
  {
    name: 'Controle Estatístico de Processo - EPP201',
    bannerCode: 'banner_controle_estatistico.jpg'
  },
  {
    name: 'Design Educacional - SDE001',
    bannerCode: 'banner_DesignEducacional1.png'
  },
  {
    name: 'Didática - SDD001',
    bannerCode: 'banner_Didatica.jpg'
  },
  {
    name: 'Direito - (DGE001 e DGE501)',
    bannerCode: 'banner_Direito.jpg'
  },
  {
    name: 'Direito Constitucional e Administrativo - DCA002',
    bannerCode: 'banner_DireitoConstitucionalAdministrativo.png'
  },
  {
    name: 'Economia e Setor Público - ECN202',
    bannerCode: 'banner_Economia_Setor_Publico.png'
  },
  {
    name: 'Economia I e II - (CEG001 e CEG002)',
    bannerCode: 'banner_Economia.jpg'
  },
  {
    name: 'Educação Matemática - SMT001',
    bannerCode: 'banner_educacao_matematica2.png'
  },
  {
    name: 'Educação Mediada por Tecnologias - (SEM001 e SEM011)',
    bannerCode: 'banner_Educacao_Mediada_Tecnologia.jpg'
  },
  {
    name: 'Elementos de Álgebra - MAG001',
    bannerCode: 'banner_Elementos_Algebra.jpg'
  },
  {
    name: 'Elementos de Mineralogia - GMG001',
    bannerCode: 'banner_Elementos_de_Mineralogia.jpg'
  },
  {
    name: 'Eletromagnetismo Avançado - FEM002',
    bannerCode: 'banner_Eletromagnetismo_Avan%C3%A7ado.jpg'
  },
  {
    name: 'Eletrônica Aplicada - EET001',
    bannerCode: 'banner_Eletronica_Aplicada.jpg'
  },
  {
    name: 'Eletrônica Digital - EED001',
    bannerCode: 'banner_Eletronica_Digital.jpg'
  },
  {
    name: 'Eletrônica Embarcada - EET101',
    bannerCode: 'banner_eletron_embarcada.jpg'
  },
  {
    name: 'Empreendedorismo - CEE001',
    bannerCode: 'banner_Empreendedorismo.jpg'
  },
  {
    name: 'Empreendedorismo e Gestão de Empresas - CEE002',
    bannerCode: 'banner_Empreendedorismo_Gestao_Empresas.jpg'
  },
  {
    name: 'Engenharia da Sustentabilidade - EPS001',
    bannerCode: 'banner_Engenharia_Sustentabilidade.jpg'
  },
  {
    name: 'Engenharia de Informação- EEI002',
    bannerCode: 'banner_Engenharia_Informacao.png'
  },
  {
    name: 'Engenharia de Métodos - EPM001',
    bannerCode: 'banner_Engenharia_Metodos.jpg'
  },
  {
    name: 'Engenharia de Software - EES001',
    bannerCode: 'banner_Eng_Software.jpg'
  },
  {
    name: 'Engenharia Econômica - EPE001',
    bannerCode: 'banner_Engenharia_Economica.jpg'
  },
  {
    name: 'Engenharia Econômica e Financeira - EPE501',
    bannerCode: 'banner_Eng_Econ_Financeira.jpg'
  },
  {
    name: 'Ergonomia - BMS001',
    bannerCode: 'banner_Ergonomia.jpg'
  },
  {
    name: 'Espanhol I - ESP021',
    bannerCode: 'banner_Espanhol.jpg'
  },
  {
    name: 'Estágio Supervisionado em alfabetização - SEO002',
    bannerCode: 'banner_EstagioSupervisionadoAlfabetizacao1.png'
  },
  {
    name: 'Estágio Supervisionado em Educação Infantil - SEO001',
    bannerCode: 'banner_Estagio_Superv_Educ_Infantil.png'
  },
  {
    name: 'Estágio Supervisionado em Geografia e História no EF I - SEO004',
    bannerCode: ''
  },
  {
    name: 'Estágio Supervisionado em Matemática e Ciências no Ensino Fundamental I - SEO003',
    bannerCode: 'banner_Est_Sup_Mat_Cie_EF-I.jpg'
  },
  {
    name: 'Estágio Supervisionado I - Engenharias (EST001 e EST501)',
    bannerCode: 'banner_EStagio_Superv_I.png'
  },
  {
    name: 'Estágio Supervisionado para Licenciatura em Matemática I e II - (SEO501 e SEO502)',
    bannerCode: 'banner_Estagio_Superv_mat.png'
  },
  {
    name: 'Estatística - (MEE001 e MEG001)',
    bannerCode: 'banner_Estatistica.jpg'
  },
  {
    name: 'Estatística - MET021',
    bannerCode: 'banner_estatistica2.png'
  },
  {
    name: 'Estratégia e Planejamento de Empresas - EPG001',
    bannerCode: 'banner_Estrategia_Planejamento_Empresas.jpg'
  },
  {
    name: 'Estratégia Organizacional e Marketing - PMO001',
    bannerCode: 'banner_Estrategia_Organizacional_Marketing.png'
  },
  {
    name: 'Estrutura da Matéria - FQM001',
    bannerCode: 'banner_Estrutura_Materia.jpg'
  },
  {
    name: 'Estruturas de Dados - EID001',
    bannerCode: 'banner_Estruturas_dados.png'
  },
  {
    name: 'Ética e Legalidade em Serviços Públicos',
    bannerCode: 'banner_Etica_Legalidade_Servicos_publicos.jpg'
  },
  {
    name: 'Expressão Gráfica - DDC001',
    bannerCode: 'banner_Expressao_Grafica.jpg'
  },
  {
    name: 'Fenômenos de Transporte - FFT001',
    bannerCode: 'banner_fen_transp.jpg'
  },
  {
    name: 'Filosofia da Educação - HFE001',
    bannerCode: 'banner_Filosofia_Educacao.jpg'
  },
  {
    name: 'Física I, II e III (FFG001, FCO001 e FEG001)',
    bannerCode: 'banner_Fisica_II.jpg'
  },
  {
    name: 'Fisiologia Vegetal - BBT201',
    bannerCode: 'banner_Fisiologia_Vegetal.jpg'
  },
  {
    name: 'Formação para Orientadores de Polo',
    bannerCode: 'banner_FormacaoOrientadoresPolo.jpg'
  },
  {
    name: 'Fundamentos da Educação Infantil I - SFI001',
    bannerCode: 'banner_Fund_Educ_Infantil.png'
  },
  {
    name: 'Fundamentos da Educação Infantil II - SFI002',
    bannerCode: 'banner_Educacao_Infantil_2.jpg'
  },

  {
    name: 'Fundamentos e Práticas no Ensino de Ciências da Natureza - SCN001',
    bannerCode: 'banner_Fund_Prat_Ens_Ciencias_Nat.jpg'
  },
  {
    name: 'Fundamentos e práticas no ensino de Geografia - SFG001',
    bannerCode: ''
  },
  {
    name: 'Fundamentos e práticas no ensino de História - SHT001',
    bannerCode: ''
  },
  {
    name: 'Fundamentos Históricos, Filosóficos e Sociológicos da Educação - SFH001',
    bannerCode: 'banner_Fundamentos_Educacao.jpg'
  },
  {
    name: 'Fundamentos Matemáticos da Computação - EEM001',
    bannerCode: 'banner_Fund_Matem_Comp.jpg'
  },
  {
    name: 'Geometria Analítica - MGA101',
    bannerCode: 'banner_GeometriaAnalitica.jpg'
  },
  {
    name: 'Geometria Espacial - MGE001',
    bannerCode: 'banner_Geometria_Espacial.jpg'
  },
  {
    name: 'Geometria Plana e Desenho Geométrico - MGD001',
    bannerCode: 'banner_geometria_plana.jpg'
  },
  {
    name: 'Gerência e Qualidade de Software - EES201',
    bannerCode: 'banner_Ger%C3%AAncia_Qualidade_Software.jpg'
  },
  {
    name: 'Gerenciamento de Projetos - AGO001',
    bannerCode: 'banner_gerenc_projetos.jpg'
  },
  {
    name: 'Gestão Ambiental - AGA001',
    bannerCode: 'banner_gestao_ambiental.jpg'
  },
  {
    name: 'Gestão da Cadeia de Suprimento - AGS001',
    bannerCode: 'banner_Gestao_da_cadeia_de_suprimento.jpg'
  },
  {
    name: 'Gestão da Informação - AGI001',
    bannerCode: 'banner_Gestao_Informacao.jpg'
  },
  {
    name: 'Gestão da Qualidade - AGQ001',
    bannerCode: 'banner_Gestao_Qualidade.jpg'
  },
  {
    name: 'Gestão da Tecnologia e da Inovação - AGT001',
    bannerCode: 'banner_Gestao_da_Tecnologia_da_Inovacao.jpg'
  },
  {
    name: 'Gestão de Contratos - AGD001',
    bannerCode: 'banner_Gestao_Contratos.jpg'
  },
  {
    name: 'Gestão de Custos - AGE001',
    bannerCode: 'banner_gestao_custo.jpg'
  },
  {
    name: 'Gestão de Pessoas no Setor Público - GSP001',
    bannerCode: 'banner_Gest_Pessoas_Setor_Publico.png'
  },
  {
    name: 'Gestão de Projetos - AGO501',
    bannerCode: 'banner_gestao_projetos3.jpg'
  },
  {
    name: 'Gestão de Projetos no Setor Público - GPP001',
    bannerCode: 'banner_Gestao_Projetos_Setor_Publico.jpg'
  },

  {
    name: 'Gestão de Recursos Humanos - AGR001',
    bannerCode: 'banner_Gestao_Recursos_Humanos.png'
  },
  {
    name: 'Gestão do Conhecimento - AGC001',
    bannerCode: 'banner_Gestao_Conhecimento.jpg'
  },
  {
    name: 'Gestão Financeira e de Riscos - AGE101',
    bannerCode: 'banner_Gestao_Financeira_Riscos.png'
  },
  {
    name: 'Higiene e Segurança do Trabalho ( 1 e 2, BMT001 e BMT002)',
    bannerCode: 'banner_Higiene_Seguranca_Trabalho.jpg'
  },
  {
    name: 'História da Educação - SHE001',
    bannerCode: 'banner_HistoriaEducacao.jpg'
  },
  {
    name: 'História da Matemática - MHM001',
    bannerCode: 'banner_Historia_Matematica.jpg'
  },
  {
    name: 'Imagem default',
    bannerCode: 'header.jpg'
  },
  {
    name: 'Informática - INF002',
    bannerCode: 'banner_Informatica.jpg'
  },
  {
    name: 'Inglês (Todos)',
    bannerCode: 'banner_Ingles.jpg'
  },
  {
    name: 'Instalações Elétricas - FEG002',
    bannerCode: 'banner_Instalacoes_Eletricas.jpg'
  },
  {
    name: 'Instalações Elétricas - FEG002',
    bannerCode: 'banner_Instalacoes_Eletricas2b.jpg'
  },
  {
    name: 'Instalações Industriais - EPP302',
    bannerCode: 'banner_Instalacoes_Industriais.jpg'
  },
  {
    name: 'Inteligência Artificial - EEI101',
    bannerCode: 'banner_Inteligencia_Artificial.jpg'
  },
  {
    name: 'Interfaces Humano-Computador - EES301',
    bannerCode: 'banner_Interfaces_Humano-computador.jpg'
  },
  {
    name: 'Introdução à Engenharia - (Todas)',
    bannerCode: 'banner_Introducao_engenharia.jpg'
  },
  {
    name: 'Introdução à Química Quântica - QQT001',
    bannerCode: 'banner_Quimica_Quantica.jpg'
  },
  {
    name: 'Introdução aos Sistemas de Comunicação - EEL001',
    bannerCode: 'banner_Intr_Sist_Comunic.jpg'
  },
  {
    name: 'Jogos de Empresa - CEJ001',
    bannerCode: 'banner_Jogos_Empresa.jpg'
  },
  {
    name: 'Linguagens e Compiladores - EEL101',
    bannerCode: 'banner_Linguagem_Compiladores.jpg'
  },
  {
    name: 'Lógica e Matemática Discreta - MDL001',
    bannerCode: 'banner_Logica_Mat_discreta.jpg'
  },
  {
    name: 'Logística - AGL001',
    bannerCode: 'banner_logistica.jpg'
  },
  {
    name: 'Matemática - MMB001',
    bannerCode: 'banner_matematica.jpg'
  },
  {
    name: 'Matemática Elementar - MAT009',
    bannerCode: 'banner_matematica.jpg'
  },
  {
    name: 'Matemática Financeira - MMF002',
    bannerCode: 'banner_Matematica_Financeira.jpg'
  },
  {
    name: 'Mecânica - FMG101',
    bannerCode: 'banner_Mecanica.png'
  },
  {
    name: 'Mecânica Geral - FMG002',
    bannerCode: 'banner_Mecanica_Geral.jpg'
  },
  {
    name: 'Meio Ambiente e Sustentabilidade - BES001',
    bannerCode: 'banner_meio_ambiente_sustentabilidade.jpg'
  },
  {
    name: 'Metodologia Científica - TTG001',
    bannerCode: 'banner_Metodologia_Cientifica.jpg'
  },
  {
    name: 'Metodologia da Pesquisa Científico-Tecnológica - MPC003',
    bannerCode: 'banner_Metodologia_Pesquisa_Cientifico-Tecnologica.png'
  },
  {
    name: 'Metodologias ativas de aprendizagem: projetos interdisciplinares - SMA001',
    bannerCode: 'banner_Metodologias_Ativas_Aprendizagem.jpg'
  },
  {
    name: 'Métodos Numéricos - MMN001',
    bannerCode: 'banner_Metodos_numericos.jpg'
  },
  {
    name: 'Microbiologia e Imunologia - BMC001',
    bannerCode: 'banner_Microbiologia_imunologia.jpg'
  },
  {
    name: 'Microeletrônica - EEE001',
    bannerCode: 'banner_Microeletronica.jpg'
  },
  {
    name: 'Modelagem e Simulação - EEM501',
    bannerCode: 'banner_Modelagem_Simulacao.jpg'
  },
  {
    name: 'Modelos Probabilísticos para Computação - EEM101',
    bannerCode: 'banner_Modelos_probabi.jpg'
  },
  {
    name: 'Multimídia e Hipermídia - EEI001',
    bannerCode: 'banner_multimidia_hipermidia.jpg'
  },
  {
    name: 'Negócios On-Line',
    bannerCode: 'banner_Negocios_online.jpg'
  },
  {
    name: 'Organização de Computadores - EIC001',
    bannerCode: 'banner_Organizacao_Computadores.jpg'
  },
  {
    name: 'Organização do Trabalho - EPO102',
    bannerCode: 'banner_Organ_Trabalho.jpg'
  },
  {
    name: 'Organização Industrial - EPO101',
    bannerCode: 'banner_Organizacao_Industrial.jpg'
  },
  {
    name: 'Parasitologia - BBP001',
    bannerCode: 'banner_Parasitologia.jpg'
  },
  {
    name: 'Pesquisa Operacional I e II - (EPO001 e EPO002)',
    bannerCode: 'banner_Pesquisa_Operacional_I.jpg'
  },
  {
    name: 'Pesquisa para o Ensino de Química - QPE001',
    bannerCode: 'banner_Pesquisa%20para%20o%20ensino%20de%20Qu%C3%ADmica2.jpg'
  },
  {
    name: 'Planejamento de Instalações - EPP301',
    bannerCode: 'banner_planejamento_de_instalacoes.jpg'
  },
  {
    name: 'Planejamento e Controle de Produção I e II - (EPP101 e EPP102)',
    bannerCode: 'banner_Planej_Contr_Prod.jpg'
  },
  {
    name: 'Planejamento para o Ensino de Matemática - SPE401',
    bannerCode: 'banner_Planej_Ensino_Matematica.jpg'
  },
  {
    name: 'Políticas Educacionais e Estrutura e Organização da Educação Básica - SPO001',
    bannerCode: 'banner_Politicas_Educacionais_e_Estrutura_e_Organizacao_da_Educacao_Basica.jpg'
  },
  {
    name: 'Políticas Públicas - POP002',
    bannerCode: 'banner_Politicas_Publicas.jpg'
  },
  {
    name: 'Políticas públicas para a educação - SPP001',
    bannerCode: 'banner_politicas_pub_educacao.jpg'
  },
  {
    name: 'Práticas para o ensino de Biologia - (Todas)',
    bannerCode: 'banner_Praticas_para_Ensino_Biologia.jpg'
  },
  {
    name: 'Práticas para o Ensino de Física - (Todas)',
    bannerCode: 'banner_PraticasEnsinoFisica_III.jpg'
  },
  {
    name: 'Práticas para o Ensino de Matemática - (Todas)',
    bannerCode: 'banner_Praticas_Matematica.jpg'
  },
  {
    name: 'Práticas para o Ensino de Química - (Todas)',
    bannerCode: 'banner_PraticasQuimica.jpg'
  },
  {
    name: 'Processos Industriais e Fabricação - EPP001',
    bannerCode: 'banner_ProcessosIndustriaiseFabricacao.jpg'
  },
  {
    name: 'Produção de Texto e Comunicação - (Todos)',
    bannerCode: 'banner_prducao_textos.jpg'
  },
  {
    name: 'Produção de Textos - (Todos)',
    bannerCode: 'banner_prducao_textos.jpg'
  },
  {
    name: 'Programação de Computadores - ILP001',
    bannerCode: 'banner_Programacao_Computadores.jpg'
  },
  {
    name: 'Programação Orientada a Objetos',
    bannerCode: 'banner_Prog_Orient_Obj.jpg'
  },
  {
    name: 'Projeto de Integrador - (Todos)',
    bannerCode: 'banner_Projeto_Integrador.jpg'
  },
  {
    name: 'Projeto de Sistemas Computacionais - EIR101',
    bannerCode: 'banner_prj_sist_computacionais.jpg'
  },
  {
    name: 'Projeto Digital - EEP001',
    bannerCode: 'banner_Projeto_Digital.jpg'
  },
  {
    name: 'Projeto e Análise de Algoritmos - EEM002',
    bannerCode: 'banner_Proj_Anal_Algoritmos.jpg'
  },
  {
    name: 'Projeto e Desenvolvimento do Produto - EPP401',
    bannerCode: 'banner_Projeto_Desenvolvimento_Produto.jpg'
  },
  {
    name: 'Projeto e Programação de Jogos - EES102',
    bannerCode: 'banner_Projeto_Programacao_Jogos.png'
  },
  {
    name: 'Propriedade Intelectual - DAI001',
    bannerCode: 'banner_Propriedade_Intelectual.png'
  },
  {
    name: 'Psicologia da aprendizagem - RPA001',
    bannerCode: 'Psicologia_da_aprendizagem_banner.jpg'
  },
  {
    name: 'Psicologia da Educação - SPS001',
    bannerCode: 'banner_Psicologia_Educacao.jpg'
  },
  {
    name: 'Psicologia do Desenvolvimento - RPD001',
    bannerCode: 'Psicologia_do_desenvolvimento_banner.jpg'
  },
  {
    name: 'Psicologia e Sociologia do Trabalho - RST001',
    bannerCode: 'banner_Psicologia_Sociologia_Trabalho.jpg'
  },
  {
    name: 'Química - QQG002',
    bannerCode: 'banner_Quimica.jpg'
  },
  {
    name: 'Química, Sociedade e Cotidiano - QHS001',
    bannerCode: 'banner_Qu%C3%ADmica_Sociedade_Cotidiano.jpg'
  },
  {
    name: 'Redes de Computadores - EIR001',
    bannerCode: 'banner_redes_computadores.jpg'
  },
  {
    name: 'Resistência dos Materiais - EMA002',
    bannerCode: 'banner_Resistencia_Materiais.jpg'
  },
  {
    name: 'Saneamento e Recuperação Ambientais - BEA101',
    bannerCode: 'banner_Saneamento_Recuperacao_Ambientais.jpg'
  },
  {
    name: 'Segurança da Informação - EEI201',
    bannerCode: 'banner_Seguranca_Informacao.jpg'
  },
  {
    name: 'Sistemas de Informação - ISI001',
    bannerCode: 'banner_sistemas_informacao.jpg'
  },
  {
    name: 'Sistemas de Manutenção - EPP501',
    bannerCode: 'banner_Sistemas_Manutencao.png'
  },
  {
    name: 'Sistemas de produção - EPP002',
    bannerCode: 'banner_Sistemas_Producao.jpg'
  },
  {
    name: 'Sistemas Distribuídos',
    bannerCode: 'banner_sistemas_distribuidos.jpg'
  },
  {
    name: 'Sistemas Operacionais - EEO001',
    bannerCode: 'banner_Sistemas_Operacionais.jpg'
  },
  {
    name: 'Sociedade e Cultura - HSC001',
    bannerCode: 'banner_sociedadeCultura.jpg'
  },
  {
    name: 'Sociedade, Estado e Governo - HLC002',
    bannerCode: 'banner_Soc_Est_Gov.jpg'
  },
  {
    name: 'Sociologia da Educação - HSE001',
    bannerCode: 'banner_Sociologia_Educacao.jpg'
  },
  {
    name: 'Tecnologia da Informação na Gestão Pública - TIP004',
    bannerCode: 'banner_Tec_Inf_na_Gest_Publica.png'
  },
  {
    name: 'Tecnologias de Comunicação de Dados - EID003',
    bannerCode: 'banner_Tecnlogias_Comunicacao_Dados.jpg'
  },
  {
    name: 'Teoria da Relatividade - FRT001',
    bannerCode: 'banner_Teoria_Relatividade.jpg'
  },
  {
    name: 'Teoria dos Números - MTN001',
    bannerCode: 'banner_Teoria_dos_numeros.jpg'
  },
  {
    name: 'Teorias da Aprendizagem - STA001',
    bannerCode: 'banner_Teorias_Aprendizagem.jpg'
  },
  {
    name: 'Teorias do Currículo - SCR001',
    bannerCode: 'banner_Teorias_Curriculo.jpg'
  },
  {
    name: 'Termodinâmica e Mecânica Estatística - FTM001',
    bannerCode: 'banner_teorias_do_curriculo.jpg'
  },
  {
    name: 'Tópicos Avançados em Biologia - BTA001',
    bannerCode: 'banner_Topicos_Avancados_Biologia.jpg'
  },
  {
    name: 'Tópicos Avançados em Eng. de Computação I e II - (TAE301 e TAE302)',
    bannerCode: 'banner_Topicos_Avan_Eng_Comp.png'
  },
  {
    name: 'Tópicos Avançados em Eng. de Produção I e II - (TAE501 e TAE502)',
    bannerCode: 'banner_Topicos_Avan_Eng_Producao.png'
  },
  {
    name: 'Tópicos Avançados em Física - FTA001',
    bannerCode: 'banner_Topicos_Avancados_Fisica.jpg'
  },
  {
    name: 'Trabalho de Conclusão de Curso I e II - (Engenharia)',
    bannerCode: 'banner_TCC_I.png'
  },
  {
    name: 'Zoologia dos Invertebrados - BBZ001',
    bannerCode: 'Zoologia_dos_invertebrados.jpg'
  },
  {
    name: 'Zoologia dos Vertebrados - BBZ101',
    bannerCode: 'banner_Zoologia_dos_Vertebrados.jpg'
  }
]

export default banners
