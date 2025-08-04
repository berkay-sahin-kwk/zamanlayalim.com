import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { YearSelector } from "@/components/analysis/YearSelector";
import { PurchasingPowerResult } from "@/components/analysis/PurchasingPowerResult";
import financialAnalysisHero from "@/assets/financial-analysis-hero.jpg";

const Compare = () => {
  const [analysisData, setAnalysisData] = useState<{ year: string; amount: number } | null>(null);

  const handleAnalyze = (year: string, amount: number) => {
    setAnalysisData({ year, amount });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={financialAnalysisHero} 
          alt="Finansal analiz" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in">Paranın Değeri Analizi</h1>
              <p className="text-xl opacity-90 animate-slide-in-up">
                Geçmişte paranızın ne kadar değerli olduğunu öğrenin. 
                Herhangi bir yıl ve miktar seçerek o dönemdeki satın alma gücünüzü keşfedin.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="container max-w-4xl">
          {/* Year and Amount Selector */}
          <div className="mb-12">
            <YearSelector onAnalyze={handleAnalyze} />
          </div>

          {/* Analysis Results */}
          {analysisData && (
            <PurchasingPowerResult 
              year={analysisData.year} 
              amount={analysisData.amount}
            />
          )}

          {/* Info Section */}
          {!analysisData && (
            <div className="text-center py-16">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Analizi Başlatın</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Yukarıdan bir yıl ve miktar seçerek analizinizi başlatın. 
                  Türkiye'deki enflasyon verilerini kullanarak, paranızın geçmişteki 
                  satın alma gücünü hesaplayacağız.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-sm text-gray-500">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <p>Gerçek Veriler</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <p>Hızlı Analiz</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <p>Doğru Sonuçlar</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Compare;