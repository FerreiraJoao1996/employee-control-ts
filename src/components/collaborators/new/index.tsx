import { Box, Drawer } from "@mui/material";
import { useCollaboratorStore } from "../store";
import Logic from "./view/logic";

const Form = () => {
	const { drawerOpen, closeDrawer } = useCollaboratorStore();
    console.log(drawerOpen)
	return (
		<Drawer anchor={"right"} open={drawerOpen} onClose={closeDrawer}>
			<Box
				sx={{
					p: 4,
					width: 300
				}}
			>
				<Logic />
			</Box>
		</Drawer>
	);
};

export default Form;