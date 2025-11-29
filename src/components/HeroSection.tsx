import { Apple } from "lucide-react";
import { motion } from "motion/react";
import appScreenImage from "figma:asset/3b65e57d7410467c78ff3ef03094b9ad12c54c27.png";
import appScreenImage2 from "figma:asset/66844f327535360533d787bdec9ae2fe1643b6bf.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f4790d] via-[#fe8e17] to-[#f4be6b] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fe8e17]/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/40">
                <span className="text-white text-sm sm:text-base">新しいグルメ発見体験</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-lg leading-tight">
                ”人”で探す、<br />おいしい地図。
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-xl mx-auto lg:mx-0">
                信頼できるあの人の「推しメシ」を、マップで見つけよう。
              </p>
              <p className="text-base sm:text-lg text-white/80">
                SNSの"リアルな今"をもとに、信頼できる人のおすすめだけをまとめたグルメマップアプリ。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="#"
                className="inline-flex items-center justify-center bg-black hover:bg-gray-900 text-white rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 w-auto max-w-fit mx-auto lg:mx-0"
              >
                <Apple className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 fill-current" />
                <div className="flex flex-col items-start">
                  <span className="text-[9px] sm:text-[10px] opacity-90">Download on the</span>
                  <span className="text-base sm:text-lg -mt-0.5">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Phone mockups */}
          <div className="relative flex justify-center lg:justify-end h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2">
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px]">
              {/* Back Phone - 推し画面 */}
              <motion.div 
                className="absolute top-6 sm:top-8 left-0 sm:left-4 w-[180px] sm:w-[240px] lg:w-[280px] h-[360px] sm:h-[480px] lg:h-[560px] z-10"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1] // Custom easing for smooth "float up" effect
                }}
              >
                {/* Phone border/frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[2rem] sm:rounded-[3rem] shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 sm:h-6 bg-gray-900 rounded-b-2xl sm:rounded-b-3xl z-20" />
                  
                  {/* Screen */}
                  <div className="absolute inset-1.5 sm:inset-2 bg-white rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden">
                    <img
                      src={appScreenImage2}
                      alt="推しメシアプリの推し画面"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 sm:h-1.5 bg-white/20 rounded-full z-20" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[2rem] sm:rounded-[3rem] blur-2xl -z-10" />
              </motion.div>

              {/* Front Phone - マップ画面（メイン） */}
              <motion.div 
                className="absolute top-0 right-0 sm:right-4 w-[200px] sm:w-[260px] lg:w-[300px] h-[400px] sm:h-[520px] lg:h-[600px] z-20"
                initial={{ opacity: 0, y: 80, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Phone border/frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[2rem] sm:rounded-[3rem] shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-7 bg-gray-900 rounded-b-2xl sm:rounded-b-3xl z-20" />
                  
                  {/* Screen */}
                  <div className="absolute inset-1.5 sm:inset-2 bg-white rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden">
                    <img
                      src={appScreenImage}
                      alt="推しメシアプリのマップ画面"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 sm:h-1.5 bg-white/20 rounded-full z-20" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-[2rem] sm:rounded-[3rem] blur-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}