
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { aiImage } from "@/lib/deapi";
import { img } from "@/lib/img";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SafeImage } from "@/components/SafeImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/lib/seo";

const Home = () => {
  useSEO("أم كلثوم | كوكب الشرق", "تطبيق تخليدي لسيرة وصوت السيدة أم كلثوم - كوكب الشرق.");
  const [heroImg, setHeroImg] = useState(img("singer-classic", 1600, 900));

  useEffect(() => {
    aiImage("Portrait of Umm Kulthum, legendary Egyptian singer, golden dress, cinematic lighting, 8k, award winning", {w:1600, h:900})
      .then(setHeroImg);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <SafeImage src={heroImg} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>
        
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-yellow-500 mb-6 drop-shadow-2xl">
              أم كلثوم
            </h1>
            <p className="text-xl md:text-3xl font-light text-gray-300 max-w-2xl mx-auto italic mb-10 leading-relaxed">
              "أنا في انتظارك.. في دنيتي وفي يومي.."
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold h-14 px-10 rounded-none shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)]">
                <Link to="/classics">استمع للروائع</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-yellow-600 text-yellow-500 hover:bg-yellow-600/10 h-14 px-10 rounded-none">
                <Link to="/biography">رحلة الخلود</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Quote Section */}
      <Section className="bg-[#111] py-24">
        <Container>
          <div className="flex flex-col items-center text-center">
            <span className="text-yellow-600 text-6xl mb-8">“</span>
            <blockquote className="text-3xl md:text-5xl font-serif text-gray-200 leading-tight mb-8">
              الفن يمنح المرء قدرة على التحليق فوق آلامه، <br />
              وصوتي لم يكن ملكي قط، بل كان ملك الجماهير.
            </blockquote>
            <p className="text-yellow-600 font-bold tracking-[0.2em]">- كوكب الشرق</p>
          </div>
        </Container>
      </Section>

      {/* Highlights Grid */}
      <Section className="py-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "النشأة", desc: "من قرية طماي الزهايرة بمركز السنبلاوين، بدأت رحلتها بزيّ بدوي بسيط وصوت أبهر القلوب.", img: img("village-classic", 600, 800) },
              { title: "الاعتلاء", desc: "تربعت على عرش الأغنية العربية لأكثر من نصف قرن بحضور مسرحي لم يُرى مثله.", img: img("theater", 600, 800) },
              { title: "الوطنية", desc: "لم تكن مجرد مغنية، بل كانت رمزاً للوقار والوطنية، حشدت القلوب من المحيط إلى الخليج.", img: img("egypt-vintage", 600, 800) },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 border border-yellow-900/30">
                  <SafeImage 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-yellow-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-yellow-500 mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
