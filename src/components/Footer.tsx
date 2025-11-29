import { Instagram, Twitter, Mail } from "lucide-react";
import logoImg from "figma:asset/f863ab353ec2f13431edd9b264abd46f41cb7b4a.png";

export function Footer() {
  const footerLinks = {
    company: [
      { name: "運営会社", href: "/company" },
      { name: "お問い合わせ", href: "/contact" },
      { name: "採用情報", href: "/careers" }
    ],
    legal: [
      { name: "利用規約", href: "/terms" },
      { name: "プライバシーポリシー", href: "/privacy" },
      { name: "特定商取引法に基づく表記", href: "/commercial-law" }
    ],
    support: [
      { name: "ヘルプセンター", href: "/help" },
      { name: "よくある質問", href: "/faq" },
      { name: "フィードバック", href: "/feedback" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <img 
              src={logoImg} 
              alt="推しメシ" 
              className="h-10 sm:h-12 w-auto mb-3 sm:mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              人で探す、おいしい地図。
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-[#f4790d] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-[#3c9a9e] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-[#fe8e17] rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-white text-sm sm:text-base">会社情報</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#f4790d] transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-white text-sm sm:text-base">法的情報</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#f4790d] transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-white text-sm sm:text-base">サポート</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#f4790d] transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 推しメシ. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Made with ❤️ for food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}