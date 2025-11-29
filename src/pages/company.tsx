import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 sm:mb-8">運営会社</h1>
          
          <div className="space-y-6 sm:space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4">会社概要</h2>
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="text-gray-500">会社名</div>
                  <div className="sm:col-span-2">株式会社推しメシ</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="text-gray-500">所在地</div>
                  <div className="sm:col-span-2">東京都渋谷区</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="text-gray-500">設立</div>
                  <div className="sm:col-span-2">2024年</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="text-gray-500">事業内容</div>
                  <div className="sm:col-span-2">グルメマップアプリケーションの企画・開発・運営</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
