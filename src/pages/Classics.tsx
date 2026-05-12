
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import { Play, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

const songs = [
  { title: "إنت عمري", length: "58:00", year: "1964", composer: "محمد عبد الوهاب" },
  { title: "الأطلال", length: "54:30", year: "1966", composer: "رياض السنباطي" },
  { title: "ألف ليلة وليلة", length: "52:15", year: "1969", composer: "بليغ حمدي" },
  { title: "حب إيه", length: "45:00", year: "1960", composer: "بليغ حمدي" },
  { title: "سيرة الحب", length: "55:40", year: "1964", composer: "بليغ حمدي" },
  { title: "فكروني", length: "62:20", year: "1966", composer: "محمد عبد الوهاب" },
];

const Classics = () => {
  useSEO("روائع الأغاني | أم كلثوم", "فهرس لأشهر أعمال كوكب الشرق الفنية.");

  return (
    <div className="py-20">
      <Section>
        <Container>
          <div className="mb-16">
            <h1 className="text-5xl font-serif text-yellow-500 mb-4">مكتبة الروائع</h1>
            <p className="text-gray-400 text-xl">انغمس في عالم من السلطنة والطرب الأصيل.</p>
          </div>

          <div className="grid gap-4">
            {songs.map((song, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-wrap md:flex-nowrap items-center justify-between p-6 bg-[#111] hover:bg-yellow-950/20 border border-yellow-900/10 hover:border-yellow-600 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-600 text-black group-hover:scale-110 transition-transform">
                    <Play className="fill-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-white">{song.title}</h3>
                    <p className="text-gray-500 text-sm">ألحان: {song.composer} • {song.year}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 mt-4 md:mt-0">
                  <span className="text-gray-400 font-mono italic">{song.length}</span>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500">
                      <Heart />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-yellow-500">
                      <Share2 />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="mt-20">
        <Container>
          <div className="bg-gradient-to-r from-yellow-950/30 to-black p-12 border border-yellow-600/50">
            <h2 className="text-3xl font-serif text-yellow-500 mb-6">لماذا لقبها النقاد بـ "كوكب الشرق"؟</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
              <p>
                لم تكن براعة أم كلثوم تقتصر على جمال صوتها فحسب، بل في قدرتها الفائقة على تكرار المقطع الواحد بعشرات الطرق المختلفة (التنويع المقامى)، مما يجعل المستمع يعيش تجربة جديدة مع كل مرة ترتدي فيها القصيدة حلة لحنية مغايرة.
              </p>
              <p>
                ثقافتها الواسعة واختياراتها الرصينة للكلمات (من أحمد شوقي إلى بيرم التونسي) جعلتها محط أنظار المثقفين والبسطاء على حد سواء، ليجتمع الشرق كله تحت لواء صوتها الفريد.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Classics;
