import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { YearSelector } from "@/components/analysis/YearSelector";
import { PurchasingPowerResult } from "@/components/analysis/PurchasingPowerResult";

const Compare = () => {
  const [analysisData, setAnalysisData] = useState<{ year: string; amount: number } | null>(null);

  const handleAnalyze = (year: string, amount: number) => {
    setAnalysisData({ year, amount });
  };

  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-display mb-4">Paranın Değeri Analizi</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Geçmişte paranızın ne kadar değerli olduğunu öğrenin. 
              Herhangi bir yıl ve miktar seçerek o dönemdeki satın alma gücünüzü keşfedin.
            </p>
          </div>

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
            <div className="text-center py-12">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Yukarıdan bir yıl ve miktar seçerek analizinizi başlatın. 
                Türkiye'deki enflasyon verilerini kullanarak, paranızın geçmişteki 
                satın alma gücünü hesaplayacağız.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Compare;