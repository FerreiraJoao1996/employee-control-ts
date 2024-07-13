import { Dialog, DialogContent } from "@mui/material";
import View from ".";
import { useCollaboratorStore } from "../store";

const ViewModalCollaborator = () => {
	const { openCollaborator, closeModalCollaborator } = useCollaboratorStore();

	return (
		<Dialog
			fullWidth={false}
			maxWidth={"lg"}
			open={openCollaborator}
			onClose={closeModalCollaborator}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogContent>
				<View />
			</DialogContent>
		</Dialog>
	);
};

export default ViewModalCollaborator;