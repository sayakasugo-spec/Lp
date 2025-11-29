import { Apple, QrCode } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function DownloadSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3c9a9e] via-[#f4790d] to-[#fe8e17]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-white/20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 text-white leading-tight">
            今すぐダウンロードして、<br />
            新しいグルメ体験を始めよう
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12">
            信頼できる人の「推しメシ」が、あなたを待っています。
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <a 
              href="#"
              className="inline-flex items-center justify-center bg-black hover:bg-gray-900 text-white rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 w-auto max-w-fit mx-auto"
            >
              <Apple className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 fill-current" />
              <div className="flex flex-col items-start">
                <span className="text-[9px] sm:text-[10px] opacity-90">Download on the</span>
                <span className="text-base sm:text-lg -mt-0.5">App Store</span>
              </div>
            </a>
          </div>

          {/* QR Code Section */}
          <div className="inline-block bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#f4790d] to-[#3c9a9e] rounded-lg sm:rounded-xl flex items-center justify-center">
                <QrCode className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">QRコードで簡単アクセス</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  スマホのカメラで読み取るだけ
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}