import { motion } from "motion/react";

// ローカルのロゴ画像を読み込む（GitHub にアップしたもの）
import logoImg from "../assets/oshimeshi_logo_type_a.png";

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logoImg} 
              alt="推しメシ ロゴ" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>

        </div>
      </div>
    </motion.header>
  );
}
