import { Box, Button, Card } from "@mui/material";
import { useCollaboratorStore } from "../store";

const Header = () => {

    const {openDrawer} = useCollaboratorStore()
	return (
		<Card
			sx={{
				px: 6,
				py: 5,
				gap: 10,
				display: "flex",
				justifyContent: "right",
				flex: 2,
				flexDirection: {
					xs: "column",
					md: "row"
				},
				width: "100%"
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					flex: 1,
					gap: 10,
					flexDirection: {
						xs: "column",
						sm: "row"
					}
				}}
			>
				{/* <RowsPerPageSelector />
				<SearchBarDataGrid /> */}
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "row",
					flex: 1
				}}
			>
				<Button variant={"contained"} onClick={openDrawer}>Adicionar</Button>
			</Box>
		</Card>
	);
};

export default Header;