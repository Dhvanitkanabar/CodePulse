export const knowledgeIndexer = {
    index: async (doc) => {
        return { status: 'indexed', docId: doc.id };
    }
};
