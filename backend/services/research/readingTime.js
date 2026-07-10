export const readingTime = {
    calculate: (text) => {
        const words = text.split(/\\s+/).length;
        return Math.ceil(words / 200);
    }
};
