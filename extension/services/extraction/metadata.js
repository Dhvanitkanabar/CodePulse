export const extractMetadata = (doc) => {
    const title = doc.title || doc.querySelector('title')?.innerText || '';
    const description = doc.querySelector('meta[name="description"]')?.content || '';
    const author = doc.querySelector('meta[name="author"]')?.content || '';
    const url = window.location.href;
    const ogImage = doc.querySelector('meta[property="og:image"]')?.content || '';
    const publishDate = doc.querySelector('meta[property="article:published_time"]')?.content || '';
    
    return { title, description, author, url, ogImage, publishDate };
};
