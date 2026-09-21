import type { Snippet } from "../types/index";

export const initialSnippets: Snippet[] = [
  {
    id: "1",
    title: "Custom Hook: useLocalStorage",
    description:
      "Sync component state directly with localStorage and listen for cross-tab updates.",
    language: "typescript",
    tags: ["react", "hooks", "typescript"],
    isFavorite: true,
    code: `function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
    const json = localStorage.getItem(key);
    return json ? JSON.parse(json) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`,
  },
  {
    id: "2",
    title: "FastAPI CORS Middleware",
    description:
      "Standard boilerplate to allow cross-origin requests from a frontend client.",
    language: "python",
    tags: ["python", "fastapi", "backend"],
    isFavorite: false,
    code: `from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)`,
  },
  {
    id: "3",
    title: "PostgreSQL Index & Join Optimization",
    description:
      "Find active users and their latest order timestamp using an index-friendly join.",
    language: "sql",
    tags: ["sql", "postgres", "database"],
    isFavorite: false,
    code: `SELECT u.id, u.email, MAX(o.created_at) AS last_order_date
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.status = 'ACTIVE'
GROUP BY u.id, u.email
ORDER BY last_order_date DESC NULLS LAST;`,
  },
];
