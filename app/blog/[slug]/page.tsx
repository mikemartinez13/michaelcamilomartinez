import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate, getPost, getPosts } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} · Michael C. Martinez` : "Not found" };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-5xl">
      <Link href="/blog" className="text-sm text-muted transition-colors hover:text-accent">
        ← blog
      </Link>
      <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-3 flex gap-4 text-sm">
        {post.category && (
          <span className="font-serif font-light italic text-category">{post.category}</span>
        )}
        <time dateTime={post.date} className="tabular-nums text-muted">
          {formatDate(post.date)}
        </time>
      </p>
      <div className="md mt-10">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
