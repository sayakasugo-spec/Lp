import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function CommercialLawPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">
            特定商取引法に基づく表記
          </h1>
          
          <div className="space-y-6 text-gray-600">
            <section className="bg-gray-50 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">販売業者</div>
                <div className="sm:col-span-2">株式会社推しメシ</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">運営責任者</div>
                <div className="sm:col-span-2">代表取締役</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">所在地</div>
                <div className="sm:col-span-2">東京都渋谷区</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">お問い合わせ</div>
                <div className="sm:col-span-2">
                  <a href="mailto:info@oshimeshi.com" className="text-[#f4790d] underline">
                    info@oshimeshi.com
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">販売価格</div>
                <div className="sm:col-span-2">各商品ページに記載</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">支払方法</div>
                <div className="sm:col-span-2">App内課金（Apple決済）</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">商品代金以外の必要料金</div>
                <div className="sm:col-span-2">インターネット接続料金、通信料金等</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">引き渡し時期</div>
                <div className="sm:col-span-2">購入後即時</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                <div className="text-gray-500">返品・交換について</div>
                <div className="sm:col-span-2">デジタルコンテンツの性質上、原則として返品・返金はお受けできません。</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
                <div className="text-gray-500">その他</div>
                <div className="sm:col-span-2">サービス内容は予告なく変更される場合があります。</div>
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <p className="text-sm">
                最終更新日：2025年1月1日
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
