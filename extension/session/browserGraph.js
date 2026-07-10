export class BrowserGraph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }
    
    addNode(tab) {
        this.nodes.push({ id: tab.id, url: tab.url });
    }
}

export const browserGraph = new BrowserGraph();
