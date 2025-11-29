import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Briefcase, Users, Rocket } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">採用情報</h1>
          
          <div className="space-y-8 sm:space-y-12">
            <section>
              <p className="text-lg text-gray-600 mb-8">
                推しメシでは、一緒に新しいグルメ体験を創造する仲間を募集しています。
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-[#f4790d] to-[#fe8e17] rounded-xl p-6 text-white text-center">
                  <Rocket className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="text-lg mb-2">挑戦的な環境</h3>
                  <p className="text-sm text-white/90">新しい技術に挑戦できる</p>
                </div>
                <div className="bg-gradient-to-br from-[#3c9a9e] to-[#c0dedf] rounded-xl p-6 text-white text-center">
                  <Users className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="text-lg mb-2">フラットな組織</h3>
                  <p className="text-sm text-white/90">自由に意見を言える文化</p>
                </div>
                <div className="bg-gradient-to-br from-[#fe8e17] to-[#f4be6b] rounded-xl p-6 text-white text-center">
                  <Briefcase className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="text-lg mb-2">成長機会</h3>
                  <p className="text-sm text-white/90">スキルアップを支援</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6">募集職種</h2>
              <div className="space-y-4 text-gray-600">
                <p>現在、以下の職種で募集を行っています：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>iOSエンジニア</li>
                  <li>バックエンドエンジニア</li>
                  <li>UIデザイナー</li>
                  <li>マーケティング担当</li>
                </ul>
                <p className="mt-6">
                  詳細については、採用窓口までお問い合わせください。<br />
                  <a href="mailto:recruit@oshimeshi.com" className="text-[#f4790d] underline">
                    recruit@oshimeshi.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
