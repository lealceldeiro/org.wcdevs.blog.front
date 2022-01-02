export type Post = {
    id: string;
    title: string;
    summary: string;
    content: string;
    image: {
        src: string;
        alt: string;
    }
}