import {
	Box,
	Button,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { NewCollaborator } from "../../dto/new-collaborator";

interface Props {
	onSubmit: (data: NewCollaborator) => Promise<void>;
	defaultValues: NewCollaborator;
}

const View = ({ onSubmit, defaultValues }: Props) => {
	const { handleSubmit } = useFormContext<NewCollaborator>();

	return (
		<Box
			sx={{
				display: "flex",
				gap: 4,
				flexDirection: {
					xs: "column",
					md: "row"
				},
				mt: (theme) => theme.spacing(4),
				"& > *": {
					flex: 1
				}
			}}
		>
			<Box
				component={"form"}
				id={"add-collaborator-form"}
				onSubmit={handleSubmit(onSubmit)}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 5
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						gap: 4
					}}
				>
					<Button variant={"contained"} type={"submit"}>Salvar</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default View;
