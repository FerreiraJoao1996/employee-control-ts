export interface NewCollaborator {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    cellphone: string;
    birthday: string;
    cep: string;
    adress: string;
    district: string;
    number: string;
    state: string;
    country: string;
    role: string;
    user: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    rg: string;
    ctps: string;
    voterTitle: string;
    proofEducation: File |string;
    birthCertificate?: File | string; // Solteiro
    weddingCertificate?: File |string;  // Casado
    certificadoAlistamentoMilitar?: File |string;  // Para homens entre 18 e 45 anos
    atestadoSaudeOcupacional?: File |string;
    certidaoNascimentoFilhos?: File[] |string[]; // Certidões de nascimento dos filhos até 21 anos
    cartaoVacinacaoFilhos?: File[] |string[]; // Cartões de vacinação dos filhos menores de 7 anos
    comprovanteFrequenciaEscolarFilhos?: File[] |string[]; // Comprovantes de frequência escolar dos filhos maiores de 7 anos
  }
  
  