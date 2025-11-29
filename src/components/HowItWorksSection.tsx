import { UserPlus, MapPin, MousePointer, Bookmark } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function HowItWorksSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "推しのインフルエンサーをフォロー",
      description: "自分の好みに合う人や、信頼できるグルメインフルエンサーをフォローします。",
      color: "#f4790d"
    },
    {
      number: "2",
      icon: MapPin,
      title: "近くの「推しメシ」をマップでチェック",
      description: "フォローした人の投稿が、地図上にピンで表示されます。今いる場所の近くで探せます。",
      color: "#3c9a9e"
    },
    {
      number: "3",
      icon: MousePointer,
      title: "投稿をタップして写真・コメントを見る",
      description: "気になるピンをタップすると、実際の写真やコメントが見られます。",
      color: "#fe8e17"
    },
    {
      number: "4",
      icon: Bookmark,
      title: "気になる店を保存 or ナビ開始",
      description: "お気に入りに保存したり、そのまま��ビを起動して、お店に向かえます。",
      color: "#f4be6b"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block px-4 sm:px-6 py-2 bg-[#f4790d]/10 rounded-full mb-4 sm:mb-6">
            <span className="text-[#f4790d] text-sm sm:text-base">シンプル4ステップ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-gray-900">
            使い方はとってもカンタン
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
            誰でも直感的に使える、シンプルな設計です
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <BottomMessage />
      </div>
    </section>
  );
}

function StepCard({ step, index, isLast }: any) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = step.icon;
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 h-full border-3 sm:border-4" style={{ borderColor: step.color }}>
        {/* Step number */}
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-2xl sm:text-3xl shadow-lg"
          style={{ backgroundColor: step.color }}
        >
          {step.number}
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: step.color }} />
        </div>

        {/* Content */}
        <h3 className="text-center mb-3 sm:mb-4 text-gray-900 text-base sm:text-lg">
          {step.title}
        </h3>
        <p className="text-center text-gray-600 text-sm sm:text-base">
          {step.description}
        </p>
      </div>

      {/* Arrow for desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-4xl text-[#f4790d] z-10">
          →
        </div>
      )}
    </motion.div>
  );
}

function BottomMessage() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-12 sm:mt-16 lg:mt-20 text-center"
    >
      <div className="inline-block bg-gradient-to-r from-[#f4790d] to-[#fe8e17] rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-6 sm:py-8 shadow-xl mx-4">
        <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed">
          たったこれだけで、<br className="sm:hidden" /><span className="bg-white/20 px-3 py-1 rounded-lg inline-block mt-2 sm:mt-0">信頼できる人の推しメシ</span><br className="hidden sm:inline" />が見つかります！
        </p>
      </div>
    </motion.div>
  );
}