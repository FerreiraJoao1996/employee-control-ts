import { NewCollaborator } from "../dto/new-collaborator";
import Logic from "./view/logic";

const Form = () => {
	const defaultValues: NewCollaborator = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        cellphone: "",
        birthday: "",
        cep: "",
        adress: "",
        district: "",
        number: "",
        state: "",
        country: "",
        role: "",
        user: "",
        password: "",
        confirmPassword: "",
        cpf: "",
        rg: "",
        ctps: "",
        voterTitle: "",
        proofEducation: ""
    };

	return <Logic defaultValues={defaultValues} />;
};

export default Form;