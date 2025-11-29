import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">プライバシーポリシー</h1>
          
          <div className="space-y-8 text-gray-600">
            <section>
              <p>
                株式会社推しメシ（以下「当社」といいます）は、本サービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">1. 収集する情報</h2>
              <p className="mb-3">当社は、以下の情報を収集します。</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ユーザーが登録時に提供する情報（名前、生年月日）</li>
                <li>本サービスの利用に関する情報（閲覧履歴、検索履歴、お��に入り登録情報など）</li>
                <li>位置情報（ユーザーの同意を得た場合のみ、近くのお店を表示する機能で使用）</li>
                <li>デバイス情報（OS、アプリバージョンなど、サービス改善のため）</li>
              </ul>
              <div className="mt-4 bg-[#f4790d]/10 rounded-lg p-4 border-l-4 border-[#f4790d]">
                <p className="text-sm">
                  <strong>※ 当サービスでは外部サービスとの連携機能はありません。</strong><br />
                  メールアドレスや電話番号などの連絡先情報の登録も不要です。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">2. 情報の利用目的</h2>
              <p className="mb-3">当社は、収集した情報を以下の目的で利用します。</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>本サービスの提供・運営のため（アカウント管理、コンテンツ表示など）</li>
                <li>本サービスの品質向上・改善のため（ユーザー体験の分析、機能改善など）</li>
                <li>年齢確認のため（利用規約で定める年齢制限の確認）</li>
                <li>ユーザーサポートのため（お問い合わせ対応など）</li>
                <li>統計データの作成のため（個人を特定できない形式での利用動向分析）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">3. 情報の第三者提供</h2>
              <p>
                当社は、法令に基づく場合を除き、ユーザーの同意なく、個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">4. 情報の管理</h2>
              <p>
                当社は、個人情報の紛失、破壊、改ざんおよび漏洩などのリスクに対して、適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">5. お問い合わせ</h2>
              <p>
                本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。<br />
                <a href="mailto:privacy@oshimeshi.com" className="text-[#f4790d] underline">
                  privacy@oshimeshi.com
                </a>
              </p>
            </section>

            <section className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <p className="text-sm">
                最終更新日：2025年1月1日<br />
                本ポリシーの全文をご確認いただく場合は、お問い合わせください。
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}