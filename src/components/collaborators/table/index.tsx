import { Card, Skeleton } from "@mui/material";
import { Suspense, lazy } from "react";

import { useColumns } from "./use-columns";
import Footer from "./footer";
import Header from "./header";
import Form from "../new";

const DataGrid = lazy(() =>
	import("@mui/x-data-grid").then((module) => ({
		default: module.DataGrid
	}))
);

const CollaboratorsTable = () => {
	const columns = useColumns();

	const collaborators: any[] = [];

	return (
		<Card
			sx={{
				height: 600
			}}
		>
			<Suspense fallback={<Skeleton variant="rectangular" height={300} />}>
				<DataGrid
					// loading={isLoading}
					rowSelection={false}
					columns={columns}
					rows={collaborators}
					localeText={{
						noRowsLabel: `NenhumaAplicacaoEncontrada`,
						noResultsOverlayLabel: `NenhumaAplicacaoEncontrada`
					}}
					slots={{
						pagination: Footer,
						toolbar: Header
					}}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10
							}
						}
					}}
				/>
			</Suspense>
            <Form/>
		</Card>
	);
};

export default CollaboratorsTable;