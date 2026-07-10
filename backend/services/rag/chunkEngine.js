export const chunkDocument = (text, size=1500, overlap=100) => {
    const words = text.split(/\s+/);
    if(words.length <= size) return [text];
    const chunks = [];
    for(let i=0; i<words.length; i+=(size-overlap)) {
        chunks.push(words.slice(i, i+size).join(' '));
    }
    return chunks;
};