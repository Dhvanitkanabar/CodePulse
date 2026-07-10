export const timelineGenerator = {
    generate: (events) => {
        return events.sort((a, b) => a.date - b.date);
    }
};
