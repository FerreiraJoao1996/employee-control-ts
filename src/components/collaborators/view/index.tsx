import { Box, Button, Container, Skeleton, Typography } from "@mui/material";
import { useCollaboratorStore } from "../store";

const View = () => {
	const { closeModalCollaborator } = useCollaboratorStore();

	const collaborator = null;

	// if (isLoading) {
	// 	return <Skeleton variant={"rectangular"} width={600} height={400} />;
	// }

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						gap: 4
					}}
				>
					<Button
						variant={"outlined"}
						color={"secondary"}
						onClick={closeModalCollaborator}
						sx={{
							marginTop: "10px"
						}}
					>
						Fechar
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default View;
