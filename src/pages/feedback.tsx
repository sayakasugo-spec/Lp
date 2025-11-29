import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Heart, MessageSquare, Lightbulb } from "lucide-react";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">フィードバック</h1>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-600">
              推しメシをより良いサービスにするために、皆さまのご意見をお聞かせください。
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#f4790d] to-[#fe8e17] rounded-xl p-6 text-white text-center">
                <Heart className="w-12 h-12 mx-auto mb-3" />
                <h2 className="text-lg mb-2">良かった点</h2>
                <p className="text-sm text-white/90">ポジティブなフィードバック</p>
              </div>

              <div className="bg-gradient-to-br from-[#3c9a9e] to-[#c0dedf] rounded-xl p-6 text-white text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-3" />
                <h2 className="text-lg mb-2">改善要望</h2>
                <p className="text-sm text-white/90">より良くするためのご意見</p>
              </div>

              <div className="bg-gradient-to-br from-[#fe8e17] to-[#f4be6b] rounded-xl p-6 text-white text-center">
                <Lightbulb className="w-12 h-12 mx-auto mb-3" />
                <h2 className="text-lg mb-2">新機能の提案</h2>
                <p className="text-sm text-white/90">こんな機能があったら</p>
              </div>
            </div>

            <section className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6">フィードバックの送信</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    以下の方法でフィードバックをお送りいただけます：
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 space-y-4">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">アプリ内から送信</h3>
                      <p className="text-sm text-gray-600">
                        アプリの設定画面 → フィードバックから直接送信できます
                      </p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-lg text-gray-900 mb-2">メールで送信</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        以下のアドレスまでお送りください
                      </p>
                      <a href="mailto:feedback@oshimeshi.com" className="text-[#f4790d] underline">
                        feedback@oshimeshi.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f4790d]/10 rounded-lg p-6 border-2 border-[#f4790d]/20">
                  <h3 className="text-lg text-gray-900 mb-2">いただいたフィードバックについて</h3>
                  <p className="text-sm text-gray-600">
                    すべてのフィードバックを大切に読ませていただき、サービス改善の参考にさせていただきます。個別の返信は行っておりませんが、重要なご意見については今後のアップデートで反映してまいります。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#3c9a9e] to-[#c0dedf] rounded-xl p-6 sm:p-8 text-white text-center">
              <h2 className="text-2xl mb-4">ご協力ありがとうございます</h2>
              <p className="text-white/90">
                皆さまのフィードバックが、推しメシをより良いサービスにします。<br />
                今後ともよろしくお願いいたします。
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
