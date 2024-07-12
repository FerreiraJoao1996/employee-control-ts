import { FormProvider, useForm } from "react-hook-form";
import View from ".";
import { NewCollaborator } from "../../dto/new-collaborator";

interface Props {
	defaultValues: NewCollaborator;
}

const Logic = (props: Props) => {
	const { defaultValues } = props;

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