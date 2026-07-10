export const documentIngestion = {
    parse: async (doc) => {
        console.log('Parsing document', doc);
        return { text: 'Parsed document text' };
    }
};
