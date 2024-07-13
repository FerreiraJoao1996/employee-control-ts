import { FormProvider, useForm } from "react-hook-form";
import View from ".";
import { NewCollaborator } from "../../dto/new-collaborator";

const Logic = () => {
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

	const form = useForm<NewCollaborator>({
		defaultValues
	});

	const handleSubmit = async (data: NewCollaborator) => {
		data = {
			...data
		};

		console.log(data);

		// mutateCreate(data, {
		// 	onSuccess: () => {
		// 		form.reset();
		// 		refetch();
		// 		toast.success(`${t("createdSuccess")}`);
		// 	},
		// 	onError: () => {
		// 		toast.error(`${t("genericError")}`);
		// 	}
	};

	return (
		<FormProvider {...form}>
			<View onSubmit={handleSubmit} defaultValues={defaultValues} />
		</FormProvider>
	);
};

export default Logic;