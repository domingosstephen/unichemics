import type { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { blogPostingSchema, blogFaqSchema, blogBreadcrumbSchema } from "@/lib/blog-schema";
import { BLOG_CATEGORIES } from "@/types/blog";
import CTABanner from "@/components/CTABanner";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.seoTitle, description: post.seoDescription, alternates: { canonical: `/blog/${post.slug}` } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return <div className="max-w-7xl mx-auto px-6 py-20 text-center"><h1 className="text-2xl font-bold">Post not found</h1></div>;
  const relatedPosts = getRelatedPosts(slug, 3);
  const cat = BLOG_CATEGORIES[post.category];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema(post)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema(post)) }} />
      {post.faqItems && post.faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqSchema(post.faqItems)) }} />}
      <article className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="mb-6 text-sm text-slate-500"><Link href="/" className="text-blue-600 hover:underline">Home</Link><span className="mx-2">/</span><Link href="/blog" className="text-blue-600 hover:underline">Blog</Link><span className="mx-2">/</span><span>{post.title}</span></nav>
          <header className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3 block">{cat?.label}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{post.title}</h1>
            <p className="mt-4 text-lg text-slate-500">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-500">
              <span className="font-medium text-slate-900">{post.author.name}</span><span>|</span>
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
              <span>|</span><span>{post.readingTime} min</span>
            </div>
          </header>
          {post.tldr && <div className="max-w-3xl mx-auto mb-10 p-5 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg"><p className="font-semibold text-sm uppercase mb-1">Key Takeaway</p><p className="text-slate-600">{post.tldr}</p></div>}
          <div className="prose prose-lg prose-slate max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
          {post.faqItems && post.faqItems.length > 0 && (
            <section className="max-w-3xl mx-auto mt-16"><h2 className="text-2xl font-extrabold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">{post.faqItems.map((f, i) => <div key={i} className="border rounded-lg p-5"><h3 className="font-semibold">{f.question}</h3><p className="mt-2 text-slate-600">{f.answer}</p></div>)}</div></section>
          )}
          {post.tags.length > 0 && <div className="max-w-3xl mx-auto mt-10 pt-6 border-t flex flex-wrap gap-2">{post.tags.map(t => <span key={t} className="text-xs bg-slate-100 px-3 py-1 rounded-full">{t}</span>)}</div>}
          <div className="max-w-3xl mx-auto mt-10 p-6 bg-slate-50 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">{post.author.name.split(" ").map(n => n[0]).join("")}</div>
            <div><p className="font-bold">{post.author.name}</p><p className="text-sm text-slate-500">{post.author.title}</p><p className="mt-2 text-sm text-slate-600">{post.author.bio}</p></div>
          </div>
          {relatedPosts.length > 0 && (
            <section className="max-w-4xl mx-auto mt-16"><h2 className="text-2xl font-extrabold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{relatedPosts.map(r => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="group block rounded-xl border hover:shadow-lg p-5">
                <span className="text-xs font-semibold text-blue-600 uppercase">{BLOG_CATEGORIES[r.category]?.label}</span>
                <h3 className="mt-2 font-bold group-hover:text-blue-600 line-clamp-2">{r.title}</h3>
              </Link>
            ))}</div></section>
          )}
        </div>
      </article>
      <CTABanner />
    </>
  );
}
