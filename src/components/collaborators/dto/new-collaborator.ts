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
    birthCertificate?: File | string; // Single
    weddingCertificate?: File |string;  // Married
    militaryEnlistmentCertificate?: File | string;  // For men between 18 and 45 years old
    occupationalHealthCertificate?: File | string;
    childrenBirthCertificates?: File[] | string[];  // Birth certificates of children up to 21 years old
    childrenVaccinationCards?: File[] | string[];  // Vaccination cards of children under 7 years old
    childrenSchoolAttendanceProofs?: File[] | string[];  // School attendance proofs of children older than 7 years old
  }
  
  