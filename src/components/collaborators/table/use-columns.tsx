import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

import { useCollaboratorStore } from "../store";
import { toast } from "react-toastify";

export const useColumns = (): GridColDef[] => {
	const { openDrawer, setCollaboratorId, openModalCollaborator } = useCollaboratorStore();

	const openEditDrawer = (id: number) => {
		setCollaboratorId(id);
		openDrawer();
	};

	const handleViewModal = (id: number) => {
		setCollaboratorId(id);
		openModalCollaborator();
	};

	const handleDelete = (id: any, name: any) => {
		if (!id || !name) {
			toast.error("genericError");

			return;
		}
	};

	return [
		{
			field: "name",
			flex: 1,
			headerName: "Nome"
		},
		{
			field: "description",
			align: "left",
			headerAlign: "left",
			flex: 2,
			headerName: "description",
			renderCell: (data) => {
				const description = data.row?.description ?? "";

				return description;
			}
		},
		// {
		// 	field: "actions",
		// 	flex: 0.5,
		// 	align: "center",
		// 	headerAlign: "center",
		// 	headerName: "actions",
		// 	renderCell: (data) => {
		// 		const id = data.row?.id;
		// 		const name = data.row?.name;

		// 		if (!id || !name) {
		// 			return null;
		// 		}

		// 		return (
		// 			<OptionsMenu
		// 				menuProps={{}}
		// 				options={[
		// 					{
		// 						text: (
		// 							<Box
		// 								sx={{
		// 									display: "flex",
		// 									alignItems: "center",
		// 									gap: 3
		// 								}}
		// 							>
		// 								<RemoveRedEyeIcon fontSize={"small"} />
		// 								<span>Visualizar</span>
		// 							</Box>
		// 						),
		// 						menuItemProps: {
		// 							onClick: () => handleViewModal(id)
		// 						}
		// 					},
		// 					{
		// 						text: (
		// 							<Box
		// 								sx={{
		// 									display: "flex",
		// 									alignItems: "center",
		// 									gap: 3
		// 								}}
		// 							>
		// 								<EditIcon fontSize={"small"} />
		// 								<span>Edit</span>
		// 							</Box>
		// 						),
		// 						menuItemProps: {
		// 							onClick: () => openEditDrawer(id)
		// 						}
		// 					},
		// 					{
		// 						text: (
		// 							<Box
		// 								sx={{
		// 									display: "flex",
		// 									alignItems: "center",
		// 									gap: 3
		// 								}}
		// 							>
		// 								<DeleteIcon fontSize={"small"} />
		// 								<span>Excluir</span>
		// 							</Box>
		// 						),
		// 						menuItemProps: {
		// 							onClick: () => handleDelete(id, name)
		// 						}
		// 					}
		// 				]}
		// 			/>
		// 		);
		// 	}
		// }
	];
};