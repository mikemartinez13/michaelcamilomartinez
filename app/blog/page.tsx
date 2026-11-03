import Link from "next/link";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata = { title: "Blog · Michael C. Martinez" };

export default function Blog() {
  const posts = getPosts();
  return (
    <>
      <h1 className="font-serif text-4xl tracking-tight">Blog</h1>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <li key={post.slug} className="flex items-baseline justify-between gap-6 py-4">
            <div className="min-w-0">
              <Link
                href={`/blog/${post.slug}`}
                className="text-lg transition-colors hover:text-accent"
              >
                {post.title}
              </Link>
              {post.category && (
                <span className="ml-3 font-serif text-sm font-light italic text-category">
                  {post.category}
                </span>
              )}
            </div>
            <time dateTime={post.date} className="shrink-0 text-sm tabular-nums text-muted">
              {formatDate(post.date)}
            </time>
          </li>
        ))}
      </ul>
    </>
  );
}
