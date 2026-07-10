import { getProvider } from './providerRegistry.js';
export class ProviderFactory {
    static create(providerName, config) {
        const ProviderClass = getProvider(providerName);
        if (!ProviderClass) throw new Error('Provider not found');
        return new ProviderClass(config);
    }
}