import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "推しメシは無料で使えますか？",
      answer: "はい、基本的な機能は無料でご利用いただけます。一部のプレミアム機能については有料となります。"
    },
    {
      question: "どのようにインフルエンサーを登録できますか？",
      answer: "アプリ内の検索機能からインフルエンサーを探し、プロフィールページの「推しに登録」ボタンをタップするだけで簡単に登録できます。"
    },
    {
      question: "位置情報は必須ですか？",
      answer: "位置情報は必須ではありませんが、近くのお店を探す機能を利用する場合は位置情報の許可が必要です。"
    },
    {
      question: "お店の情報はどこから取得していますか？",
      answer: "InstagramなどのSNSから公開されている情報を取得し、リアルタイムに反映しています。"
    },
    {
      question: "自分もインフルエンサーとして登録できますか？",
      answer: "はい、一定の条件を満たした方はインフルエンサーとして登録することができます。詳細はお問い合わせください。"
    },
    {
      question: "アカウントを削除したい場合は？",
      answer: "アプリの設定画面から「アカウント削除」を選択するか、サポート窓口までご連絡ください。"
    },
    {
      question: "お店の情報が間違っている場合は？",
      answer: "お手数ですが、アプリ内のフィードバック機能またはお問い合わせフォームからご報告ください。"
    },
    {
      question: "オフラインでも使えますか？",
      answer: "一部の機能はオフラインでもご利用いただけますが、最新の情報を取得するにはインターネット接続が必要です。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">よくある質問</h1>
          
          <p className="text-lg text-gray-600 mb-8 sm:mb-12">
            推しメシに関するよくある質問をまとめました。
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#f4790d]/30 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-[#f4790d] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <section className="mt-12 bg-gray-50 rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">他にご質問がありますか？</h2>
            <p className="text-gray-600 mb-6">
              上記で解決しない場合は、お気軽にお問い合わせください。
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center bg-[#f4790d] hover:bg-[#fe8e17] text-white rounded-lg px-6 py-3 transition-colors"
            >
              お問い合わせ
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
