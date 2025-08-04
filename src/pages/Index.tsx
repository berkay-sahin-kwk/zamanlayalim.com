import { Layout } from "@/components/layout/Layout";
import { MetricCard } from "@/components/data/MetricCard";
import { ChartCard } from "@/components/data/ChartCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, DollarSign, Fuel, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for demonstration
const sampleChartData = [
  { date: "Oca", value: 15.2 },
  { date: "Şub", value: 16.8 },
  { date: "Mar", value: 18.4 },
  { date: "Nis", value: 17.9 },
  { date: "May", value: 19.2 },
  { date: "Haz", value: 20.1 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Gerçek Zamanlı Veri Takibi
          </Badge>
          <h1 className="text-display mb-6">
            Türkiye'nin Ekonomik Verilerini{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Zamana Karşı
            </span>{" "}
            Takip Edin
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Enflasyon oranları, döviz kurları, yakıt fiyatları ve temel gıda maliyetlerini 
            görselleştirin. Geçmiş verilerle karşılaştırın, trendleri analiz edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/compare">
                Karşılaştırma Yap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Nasıl Çalışır?</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-16 px-4 bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">Güncel Veriler</h2>
            <p className="text-muted-foreground">
              En son verilerle Türkiye ekonomisinin anlık durumu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Yıllık Enflasyon"
              value="64.2%"
              change={2.3}
              changeLabel="geçen ay"
              trend="up"
              icon={<TrendingUp className="h-4 w-4" />}
            />
            <MetricCard
              title="USD/TRY"
              value="₺32.45"
              change={-1.2}
              changeLabel="bugün"
              trend="down"
              icon={<DollarSign className="h-4 w-4" />}
            />
            <MetricCard
              title="Benzin (Ortalama)"
              value="₺42.50"
              change={3.8}
              changeLabel="geçen hafta"
              trend="up"
              icon={<Fuel className="h-4 w-4" />}
            />
            <MetricCard
              title="Temel Gıda Endeksi"
              value="156.7"
              change={1.9}
              changeLabel="aylık"
              trend="up"
              icon={<ShoppingCart className="h-4 w-4" />}
            />
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">Trend Analizi</h2>
            <p className="text-muted-foreground">
              Son 6 ayın veri görselleştirmesi
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChartCard
              title="Enflasyon Trendi"
              description="Aylık enflasyon oranları (%)"
              data={sampleChartData}
              color="hsl(var(--chart-1))"
            />
            <ChartCard
              title="Döviz Kuru (USD/TRY)"
              description="Amerikan Doları / Türk Lirası"
              data={sampleChartData.map(d => ({ ...d, value: d.value + 15 }))}
              color="hsl(var(--chart-2))"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-surface">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-headline mb-6">
            Detaylı Karşılaştırma Yapmaya Hazır mısınız?
          </h2>
          <p className="text-muted-foreground mb-8">
            Özel tarih aralıkları seçin, farklı ekonomik göstergeleri bir arada inceleyin 
            ve kendi analizlerinizi yapın.
          </p>
          <Button size="lg" asChild>
            <Link to="/compare">
              Karşılaştırma Sayfasına Git
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
