
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import BlogPosts from "@/components/BlogPosts";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <BlogPosts />
    </main>
  );
};

export default Index;
