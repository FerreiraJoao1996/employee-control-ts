import { create } from "zustand";

// export type Tab = "personal" | "documents";

interface CollaboratorState {
	// tab: Tab;
	// setTab: (tab: Tab) => void;
	
	collaboratorId?: number;
	drawerOpen: boolean;
	setDrawerOpen: (open: boolean) => void;
	openDrawer: () => void;
	closeDrawer: () => void;
	setCollaboratorId: (collaboratorId: number) => void;
	openCollaborator: boolean;
	openModalCollaborator: () => void;
	closeModalCollaborator: () => void;

	
}

export const useCollaboratorStore = create<CollaboratorState>((set) => ({
	// tab: "dashboards",
	// setTab: (tab) => set({ tab }),

	collaboratorId: undefined,
	drawerOpen: false,
	setDrawerOpen: (open) =>
		set({
			drawerOpen: open
		}),
	openDrawer: () =>
		set({
			drawerOpen: true
		}),
	closeDrawer: () =>
		set({
			drawerOpen: false,
			collaboratorId: undefined
		}),
	setCollaboratorId: (collaboratorId) =>
		set({
			collaboratorId
		}),
	openCollaborator: false,
	openModalCollaborator: () =>
		set({
			openCollaborator: true
		}),
	closeModalCollaborator: () =>
		set({
			openCollaborator: false,
			collaboratorId: undefined
		}),
}));
