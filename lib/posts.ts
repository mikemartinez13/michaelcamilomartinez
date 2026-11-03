import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string; // YYYY-MM-DD
  content: string;
};

function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "").slice(0, 10);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}.${m}.${d}`;
}

function readPost(file: string): Post {
  const slug = file.replace(/\.mdx?$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  return {
    slug,
    title: String(data.title ?? slug),
    category: String(data.category ?? ""),
    date: toISODate(data.date),
    content,
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date)); // newest first
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}
