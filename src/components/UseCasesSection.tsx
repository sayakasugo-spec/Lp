import { MapPin, Users, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Group from "../imports/Group123229";

export function UseCasesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  const useCases = [
    {
      icon: MapPin,
      question: "この近くで美味しいごはん屋さんないかな？",
      solution: "推しメシを開いて、マップから近くの人気のお店を調べることができます。",
      features: [
        "人気のお店はマップピンが大きく表示。",
        "推しとして登録したインフルエンサーがおすすめしているお店は、ハイライトして表示。"
      ],
      color: "#f4790d",
      bgColor: "from-[#f4790d] to-[#fe8e17]",
      showImage: true,
    },
    {
      icon: Users,
      question: "お店選びを悩んでいる...",
      solution: "人から検索ができるので、フォローしているインフルエンサーの投稿を見て、「この人がおすすめしているお店なら間違いない」という使い方ができます。",
      features: [
        "お気に入りのインフルエンサーを登録可能。",
        "SNSから最新の情報を取得。"
      ],
      color: "#3c9a9e",
      bgColor: "from-[#3c9a9e] to-[#c0dedf]",
      showImage: true,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block px-4 sm:px-6 py-2 bg-[#f4790d]/10 rounded-full mb-4 sm:mb-6">
            <span className="text-[#f4790d] text-sm sm:text-base">こんな時ありませんか？</span>
          </div>
          <h2 className="text-3xl sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            日常のグルメ選びの<span className="text-[#f4790d]">「困った」</span>を、推しメシが解決します。
          </h2>
          
        </motion.div>

        {/* Use Cases with Images */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <UseCaseCard key={index} useCase={useCase} Icon={Icon} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ useCase, Icon, index }: any) {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
    >
      {/* Text Content */}
      <div className={`${isEven ? '' : 'lg:col-start-2'} space-y-4 sm:space-y-6`}>
        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 hover:border-[#f4790d]/30">
          {/* Icon Circle */}
          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${useCase.bgColor} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>

          {/* Question */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-gray-900 leading-tight">
              {useCase.question}
            </h3>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: useCase.color }} />
              <span style={{ color: useCase.color }} className="text-sm sm:text-base">推しメシなら</span>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {useCase.solution}
            </p>
          </div>

          {/* Features */}
          {useCase.features && (
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-500 mt-4">
              {useCase.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}

          {/* Decorative gradient overlay on hover */}
          <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${useCase.bgColor} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
        </div>
      </div>

      {/* App Image */}
      <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'} flex items-center justify-center`}>
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto">
          {/* Phone Frame */}
          <div className="relative bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-5 sm:h-6 lg:h-7 bg-gray-900 rounded-b-2xl sm:rounded-b-3xl z-20" />
            
            {/* Screen Content */}
            <div className="relative bg-white rounded-[1.75rem] sm:rounded-[2.25rem] lg:rounded-[2.75rem] overflow-hidden m-1.5 sm:m-2" style={{ aspectRatio: '375/812' }}>
              <div className="absolute inset-0 scale-[0.5] origin-top-left" style={{ width: '200%', height: '200%' }}>
                <Group />
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-1 sm:h-1.5 bg-white/20 rounded-full z-20" />
          </div>
          
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgColor} opacity-20 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] blur-3xl -z-10`} />
        </div>
      </div>
    </motion.div>
  );
}