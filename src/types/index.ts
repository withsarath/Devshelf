export interface Snippet{
    id: string;
    title: string;
    description: string;
    code: string;
    language: "typescript" | "python" | "sql" | "bash";
    tags: string[];
    isFavorite: boolean;
}