import { CheckCircle, Lightbulb, Flame } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function FeaturesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  const features = [
    {
      icon: CheckCircle,
      title: "誰の情報かわかる",
      description: "「この人のおすすめ」だから信頼できる",
      detail: "PRではなく、本当のおすすめを探そう。知らない人の評価ではなく、信頼できる人の声が届きます。",
      color: "#f4790d",
      bgColor: "from-[#f4790d] to-[#fe8e17]",
      tags: ["#グルメインフルエンサー", "#地元の食通"]
    },
    {
      icon: Lightbulb,
      title: "人軸で探せる",
      description: "自分と感性が合う人のマップをチェック",
      detail: "「#カフェ女子」「#ラーメン男子」など、好みが合う人をフォローするだけ。その人の推しメシマップを丸ごとチェックできます。",
      color: "#3c9a9e",
      bgColor: "from-[#3c9a9e] to-[#c0dedf]",
      tags: ["#カフェ女子", "#ラーメン男子", "#スイーツ好き"]
    },
    {
      icon: Flame,
      title: "今の情報を反映",
      description: "SNSから最新の話題をキャッチ",
      detail: "Instagramの投稿をリアルタイムで取り込み。オープンしたてのお店、今週話題のメニューまで、鮮度の高い情報が手に入ります。",
      color: "#fe8e17",
      bgColor: "from-[#fe8e17] to-[#f4be6b]",
      tags: ["#新着", "#話題のお店", "#期間限定"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block px-4 sm:px-6 py-2 bg-[#f4790d]/10 rounded-full mb-4 sm:mb-6">
            <span className="text-[#f4790d] text-sm sm:text-base">3つのコアバリュー</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900">
            推しメシの特徴
          </h2>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature, index }: any) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = feature.icon;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div className={`space-y-4 sm:space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className={`inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r ${feature.bgColor} text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg`}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-lg sm:text-xl">✓</span>
        </div>
        
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 text-gray-900">{feature.title}</h3>
          <p className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4" style={{ color: feature.color }}>
            {feature.description}
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            {feature.detail}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {feature.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-3 sm:px-5 py-1.5 sm:py-2 bg-white rounded-full shadow-md text-sm sm:text-base"
              style={{ color: feature.color }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div className={`relative bg-gradient-to-br ${feature.bgColor} rounded-2xl sm:rounded-3xl p-1 shadow-xl`}>
          <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white">
            <ImageWithFallback
              src={
                index === 0
                  ? "https://images.unsplash.com/photo-1619264437738-0c22e4d22f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwaW5mbHVlbmNlciUyMGFzaWFuJTIwd29tYW58ZW58MXx8fHwxNzYzNzIzNzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  : index === 1
                  ? "https://images.unsplash.com/photo-1613274554329-70f997f5789f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYyNTUwMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  : "https://images.unsplash.com/photo-1701694492928-fd5919cfcb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBqYXBhbmVzZSUyMGZvb2R8ZW58MXx8fHwxNzYyNTgwNjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              }
              alt={feature.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}