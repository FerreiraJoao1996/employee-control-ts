import { Box, Typography } from "@mui/material";
import CollaboratorsTable from "./table";

const Collaborators = () => {

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 5
			}}
		>
			<Box>
				<Typography fontSize={21}>Colaboradores</Typography>
			</Box>
			<CollaboratorsTable/>
		</Box>
	);
};

export default Collaborators;




