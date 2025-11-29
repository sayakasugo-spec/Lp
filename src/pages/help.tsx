import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BookOpen, MessageCircle, Mail } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">ヘルプセンター</h1>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-600">
              推しメシの使い方やよくある質問について、こちらでご案内しています。
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#f4790d] to-[#fe8e17] rounded-xl p-6 text-white text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-3" />
                <h2 className="text-lg mb-2">使い方ガイド</h2>
                <p className="text-sm text-white/90">基本的な使い方を確認</p>
              </div>

              <div className="bg-gradient-to-br from-[#3c9a9e] to-[#c0dedf] rounded-xl p-6 text-white text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-3" />
                <h2 className="text-lg mb-2">よくある質問</h2>
                <p className="text-sm text-white/90">FAQ で解決</p>
              </div>

              <div className="bg-gradient-to-br from-[#fe8e17] to-[#f4be6b] rounded-xl p-6 text-white text-center">
                <Mail className="w-12 h-12 mx-auto mb-3" />
                <h2 className="text-lg mb-2">お問い合わせ</h2>
                <p className="text-sm text-white/90">個別にご相談</p>
              </div>
            </div>

            <section className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6">カテゴリから探す</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="text-lg text-gray-900 mb-2">アカウント登録・設定</h3>
                  <p className="text-sm text-gray-600">アカウントの作成方法や設定変更について</p>
                </div>
                <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="text-lg text-gray-900 mb-2">推しの登録</h3>
                  <p className="text-sm text-gray-600">インフルエンサーをフォローする方法</p>
                </div>
                <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="text-lg text-gray-900 mb-2">マップの使い方</h3>
                  <p className="text-sm text-gray-600">お店の検索やマップ表示について</p>
                </div>
                <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="text-lg text-gray-900 mb-2">トラブルシューティング</h3>
                  <p className="text-sm text-gray-600">問題が発生した場合の対処法</p>
                </div>
              </div>
            </section>

            <section className="bg-[#f4790d]/10 rounded-xl p-6 sm:p-8 border-2 border-[#f4790d]/20">
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">お困りですか？</h2>
              <p className="text-gray-600 mb-4">
                解決できない問題がある場合は、お気軽にお問い合わせください。
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center bg-[#f4790d] hover:bg-[#fe8e17] text-white rounded-lg px-6 py-3 transition-colors"
              >
                お問い合わせフォームへ
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
