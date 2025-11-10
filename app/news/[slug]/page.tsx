import { client } from "@/lib/sanityClient"
import { notFound } from "next/navigation"
import { Calendar } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  console.log('DEBUG: params.slug', resolvedParams.slug);
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    excerpt,
    category,
    mainImage,
    body
  }`
  const post = await client.fetch(query, { slug: resolvedParams.slug })

  if (!post) return notFound()

  return (
    <div className="min-h-screen max-w-3xl mx-auto py-20 px-4">
      <AspectRatio ratio={16/9} className="mb-8 rounded-lg overflow-hidden">
        {post.mainImage && (
          <img src={post.mainImage?.asset?._ref ? urlFor(post.mainImage).url() : post.mainImage} alt={post.title} className="object-cover w-full h-full" />
        )}
      </AspectRatio>
      <div className="mb-4 flex items-center gap-2 text-muted-foreground">
        <Calendar size={18} />
        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        <span className="ml-4 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">{post.category}</span>
      </div>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-lg mb-8">{post.excerpt}</p>
      {/* Optionally render Portable Text for post.body here if you use it */}
      {post.body && (
        <PortableText value={post.body} />
      )}
    </div>
  )
}
