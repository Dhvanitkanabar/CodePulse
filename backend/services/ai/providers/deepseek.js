export class DummyProvider {
    constructor(config) { this.config = config; }
    async *chatStream(messages) {
        const text = 'Streaming from ' + this.constructor.name;
        for (let i = 0; i < text.length; i++) {
            yield { text: text[i] };
            await new Promise(r => setTimeout(r, 20));
        }
    }
}