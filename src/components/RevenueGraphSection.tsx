import { motion } from "framer-motion";
import KelloText from "./KelloText";

const graphData = [
  {
    guests: "10명 증가",
    revenue: "+80만원",
    height: "20%",
  },
  {
    guests: "30명 증가",
    revenue: "+240만원",
    height: "60%",
  },
  {
    guests: "50명 증가",
    revenue: "+400만원",
    height: "100%",
  },
];

const RevenueGraphSection = () => {
  return (
    <section className="py-24 bg-spring-yellow relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Revenue Growth</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight break-keep">
            외국인 고객 몇 명만 늘어도<br className="hidden sm:block" />매출이 이렇게 증가합니다
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-4 sm:p-8 md:p-12 relative z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/10"
          >
            <img 
              src="/revenue-graph.png" 
              alt="매출 증가 그래프" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevenueGraphSection;
