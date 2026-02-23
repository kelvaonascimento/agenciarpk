import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { BlogList } from "@/components/features/blog/blog-list";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre percepção de valor, posicionamento estratégico, comportamento do comprador e estratégias para lançamentos imobiliários de sucesso.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-20">
        <BlogList posts={posts} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
