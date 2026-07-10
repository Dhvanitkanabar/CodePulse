export class WorkspaceManager {
    createWorkspace(name) { return { id: Date.now(), name }; }
    getWorkspace(id) { return null; }
}
export const workspaceManager = new WorkspaceManager();
