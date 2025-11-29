import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">お問い合わせ</h1>
          
          <div className="space-y-6 sm:space-y-8">
            <p className="text-gray-600">
              推しメシに関するお問い合わせは、以下の方法でご連絡ください。
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#f4790d] to-[#fe8e17] rounded-xl p-6 sm:p-8 text-white">
                <Mail className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <h2 className="text-xl sm:text-2xl mb-2">メールでのお問い合わせ</h2>
                <p className="text-white/90 mb-4">一般的なお問い合わせはこちら</p>
                <a href="mailto:info@oshimeshi.com" className="text-white underline">
                  info@oshimeshi.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#3c9a9e] to-[#c0dedf] rounded-xl p-6 sm:p-8 text-white">
                <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <h2 className="text-xl sm:text-2xl mb-2">サポート</h2>
                <p className="text-white/90 mb-4">技術的なサポートはこちら</p>
                <a href="mailto:support@oshimeshi.com" className="text-white underline">
                  support@oshimeshi.com
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">営業時間</h2>
              <p className="text-gray-600">
                平日 10:00 - 18:00（土日祝日を除く）<br />
                ※お問い合わせの内容によっては、回答までにお時間をいただく場合がございます。
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
