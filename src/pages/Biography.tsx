
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SafeImage } from "@/components/SafeImage";
import { img } from "@/lib/img";
import { motion } from "framer-motion";
import { useSEO } from "@/lib/seo";

const Biography = () => {
  useSEO("سيرة الخلود | أم كلثوم", "التسلسل الزمني لأهم محطات كوكب الشرق.");

  const timeline = [
    { year: "1898", title: "طماي الزهايرة", text: "ولدت فاطمة إبراهيم البلتاجي في أسرة ريفية بسيطة، وبدأت الإنشاد مع والدها في الموالد وهي طفلة في زي فتى." },
    { year: "1923", title: "الانتقال للقاهرة", text: "نقطة التحول الكبرى بلقائها بالشيخ أبو العلا محمد والموسيقي محمد القصبجي، لتبدأ مسيرتها الفنية الحقيقية." },
    { year: "1940", title: "العصر الذهبي", text: "بدأت تعاونها العملاق مع "بليغ حمدي" و "رياض السنباطي"، وأنتجت روائع مثل الأطلال وانت عمري." },
    { year: "1967", title: "المجهود الحربي", text: "جالت العالم لجمع التبرعات لإعادة إعمار مصر بعد النكسة، مؤكدة دور الفنان في خدمة قضايا وطنه." },
    { year: "1975", title: "الوداع الأخير", text: "رحلت عن عالمنا في جنازة وصفت بأنها من أكبر الجنازات في التاريخ البشري، لكن صوتها لم يرحل." },
  ];

  return (
    <div className="py-12">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif text-yellow-500 mb-12 text-center">رحلة من الطين إلى النجوم</h1>
            
            <div className="relative border-r border-yellow-900/50 pr-8 mr-4 space-y-16">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute top-0 -right-[41px] w-5 h-5 bg-yellow-600 rounded-full shadow-[0_0_15px_rgba(202,138,4,0.5)]" />
                  <span className="text-5xl font-bold text-yellow-900/20 absolute -top-4 -right-24 -z-10">{item.year}</span>
                  <div className="bg-[#151515] p-8 border-l border-yellow-600/30 hover:border-yellow-600 transition-colors">
                    <h3 className="text-2xl font-serif text-yellow-500 mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-loose text-lg">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-yellow-600 text-black py-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-serif font-bold mb-6">منديلها ونظارتها.. رموز العظمة</h2>
              <p className="text-xl leading-relaxed mb-6">
                لم تكن الإكسسوارات مجرد زينة، بل كانت جزءاً من طقوس الست. المنديل الذي كانت تعتصر فيه مشاعرها، والنظارة السوداء التي كانت تخفي وراءها رهبة المسرح، كلها أصبحت مقتنيات تروي قصصاً من المجد.
              </p>
            </div>
            <div className="flex-1">
              <SafeImage src={img("glasses", 800, 600)} className="shadow-2xl grayscale" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Biography;
