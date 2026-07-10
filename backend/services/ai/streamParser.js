export async function* parseStream(stream, providerName) {
    for await (const chunk of stream) {
        yield { text: chunk.text || chunk.content || chunk };
    }
}