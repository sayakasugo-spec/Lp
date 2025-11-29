import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">利用規約</h1>
          
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">第1条（適用）</h2>
              <p>
                本規約は、株式会社推しメシ（以下「当社」といいます）が提供する「推しメシ」（以下「本サービス」といいます）の利用に関する条件を定めるものです。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">第2条（利用登録）</h2>
              <p>
                本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">第3条（禁止事項）</h2>
              <p className="mb-3">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社、本サービスの他のユーザー、または第三者の知的財産権を侵害する行為</li>
                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">第4条（本サービスの提供の停止等）</h2>
              <p>
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">第5条（免責事項）</h2>
              <p>
                当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
              </p>
            </section>

            <section className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <p className="text-sm">
                最終更新日：2025年1月1日<br />
                本規約の全文をご確認いただく場合は、お問い合わせください。
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
