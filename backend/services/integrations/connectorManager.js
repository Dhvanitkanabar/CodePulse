export const connectorManager = {
    connectors: {},
    register: (name, connector) => {
        connectorManager.connectors[name] = connector;
    }
};
