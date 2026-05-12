
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/lib/toast";
import { useAuth } from "@/lib/useAuth";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useSEO } from "@/lib/seo";

const Contact = () => {
  useSEO("تواصل معنا | أم كلثوم", "شاركنا ذكرياتك أو اطلب المزيد من المعلومات.");
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      message: formData.get("message"),
      user_id: user?.id || null
    };

    try {
      const { error } = await supabase.from('guestbook').insert([data]);
      if (error) throw error;
      toast.success("تم إرسال رسالتك بنجاح. شكراً لتواصلك!");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error("حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-serif text-yellow-500 mb-6">سجل الزوار</h1>
            <p className="text-gray-400 text-lg">
              اترك لنا رسالة، ذكرى، أو اقتباساً تحبه لكوكب الشرق.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-[#111] border border-yellow-900/30 p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-yellow-600 mb-2 font-bold tracking-wider">الاسم بالكامل</label>
                <Input 
                  name="name" 
                  required 
                  placeholder="كيف نحب أن نناديك؟"
                  className="bg-black/50 border-yellow-900/50 focus:border-yellow-500 h-12 rounded-none"
                />
              </div>
              <div>
                <label className="block text-yellow-600 mb-2 font-bold tracking-wider">رسالتك للست</label>
                <Textarea 
                  name="message" 
                  required 
                  placeholder="اكتب ما يجول بخاطرك..."
                  className="bg-black/50 border-yellow-900/50 focus:border-yellow-500 min-h-[150px] rounded-none"
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold h-12 transition-all rounded-none"
              >
                {loading ? "جاري الإرسال..." : "إرسال إلى ديوان الخلود"}
              </Button>
            </form>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-yellow-900/20 bg-[#0c0c0c]">
              <h3 className="text-yellow-500 font-serif text-xl mb-3">المتحف</h3>
              <p className="text-gray-500">الروضة، المنيل، القاهرة</p>
            </div>
            <div className="p-8 border border-yellow-900/20 bg-[#0c0c0c]">
              <h3 className="text-yellow-500 font-serif text-xl mb-3">ساعات العمل</h3>
              <p className="text-gray-500">يومياً من 9 صباحاً - 4 مساءً</p>
            </div>
            <div className="p-8 border border-yellow-900/20 bg-[#0c0c0c]">
              <h3 className="text-yellow-500 font-serif text-xl mb-3">البريد الإلكتروني</h3>
              <p className="text-gray-500">info@um-kulthum.org</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
