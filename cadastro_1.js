// Médicos
const clinicoGeral = {
    nome: "Dr. Theo",
    especialidade: "Clínico Geral",
    atribuicoes: ["Atendimento clínico", "Prescrição de medicamentos"],
  };
  
  const cardiologista = {
    nome: "Dra. Sabrina",
    especialidade: "Cardiologista",
    atribuicoes: ["Realização de exames cardiológicos", "Prescrição de medicamentos"],
  };
  
  const fonoaudiologo = {
    nome: "Dr. Lucas",
    especialidade: "Fonoaudiólogo",
    atribuicoes: ["Avaliação e tratamento de distúrbios da fala e linguagem"],
  };

  const psicologo = {
    nome: "Dr. Luciano",
    especialidade: "Psicólogo",
    atribuicoes: ["Avaliação e tratamento de distúrbios mentais"],
  };
  
  const psiquiatra = {
    nome: "Dra. Letícia",
    especialidade: "Psiquiatra",
    atribuicoes: ["Avaliação e escrição de medicamentos mentais"],
  };

  const cirurgiao = {
    nome: "Dra. Regina",
    especialidade: "Cirurgiã",
    atribuicoes: ["Realização de procedimentos cirúrgicos"],
  };

  const dentista = {
    nome: "Dra. Regina",
    especialidade: "Odontologia",
    atribuicoes: ["Realização de procedimentos cirúrgicos"],
  };

  // Equipe de Enfermagem
  const tecnicoEnfermagem = {
    nome: "Leonardo",
    cargo: "Técnico de Enfermagem",
    atribuicoes: ["Administração de medicamentos", "Assistência ao paciente"],
  };
  
  const auxiliarEnfermagem = {
    nome: "Vanessa",
    cargo: "Auxiliar de Enfermagem",
    atribuicoes: ["Higienização do paciente", "Apoio ao técnico de enfermagem"],
  };
  
  const enfermeiro = {
    nome: "Carol",
    cargo: "Enfermeiro",
    atribuicoes: ["Assistência ao paciente", "Supervisão da equipe de enfermagem"],
  };
  
  // Outros funcionários
  const recepcionista = {
    nome: "Laís",
    cargo: "Recepcionista",
    atribuicoes: ["Atendimento ao público", "Agendamento de consultas"],
  };
  
  const auxiliarAdministrativo = {
    nome: "João",
    cargo: "Auxiliar Administrativo",
    atribuicoes: ["Rotinas administrativas", "Arquivamento de documentos"],
  };
  
  const auxiliarLimpeza = {
    nome: "Pedro",
    cargo: "Auxiliar de Limpeza",
    atribuicoes: ["Limpeza e conservação do ambiente hospitalar"],
  };
  
  const copeiro = {
    nome: "Davi",
    cargo: "Copeiro",
    atribuicoes: ["Preparação e distribuição de alimentos e bebidas"],
  };
  
  // Array para armazenar os funcionários cadastrados
  const funcionarios = [
    clinicoGeral,
    cardiologista,
    fonoaudiologo,
    tecnicoEnfermagem,
    auxiliarEnfermagem,
    enfermeiro,
    recepcionista,
    auxiliarAdministrativo,
    auxiliarLimpeza,
    copeiro,
  ];
  
  // Função para adicionar um novo cliente
  function cadastrarCliente(nome, especialidade) {
    const cliente = {
      nome: nome,
      especialidade: especialidade,
    };
  
    // Adiciona o cliente ao array correspondente à sua especialidade
    switch (especialidade) {
      case "Clínico Geral":
        clinicoGeral.clientes.push(cliente);
        break;
      case "Cardiologista":
        cardiologista.clientes.push(cliente);
        break;
      case "Fonoaudiólogo":
        fonoaudiologo.clientes.push(cliente);
        break;
      case "Psicólogos":
        psicologo.clientes.push(cliente);
        break;
      case "Psiquiatras":
        psiquiatra.clientes.push(cliente);
        break;
      case "Cirurgiões":
        cirurgiao.clientes.push(cliente);
        break;
      case "Dentista":
        dentista.clientes.push(cliente);
        break;

console.log();