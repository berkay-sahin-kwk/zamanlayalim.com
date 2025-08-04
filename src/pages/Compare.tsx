import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ChartCard } from "@/components/data/ChartCard";
import { Calendar, BarChart3, TrendingUp, Filter } from "lucide-react";

const dataTypes = [
  { id: "inflation", label: "Yıllık Enflasyon (%)", color: "hsl(var(--chart-1))" },
  { id: "usd", label: "USD/TRY Kuru", color: "hsl(var(--chart-2))" },
  { id: "fuel", label: "Benzin Fiyatı (₺/L)", color: "hsl(var(--chart-3))" },
  { id: "food", label: "Temel Gıda Endeksi", color: "hsl(var(--chart-4))" },
];

const sampleData = {
  inflation: [
    { date: "Oca 2024", value: 64.9 },
    { date: "Şub 2024", value: 67.1 },
    { date: "Mar 2024", value: 68.5 },
    { date: "Nis 2024", value: 69.8 },
    { date: "May 2024", value: 75.4 },
    { date: "Haz 2024", value: 71.6 },
  ],
  usd: [
    { date: "Oca 2024", value: 29.8 },
    { date: "Şub 2024", value: 31.2 },
    { date: "Mar 2024", value: 32.1 },
    { date: "Nis 2024", value: 32.8 },
    { date: "May 2024", value: 33.2 },
    { date: "Haz 2024", value: 32.4 },
  ],
};

const Compare = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["inflation", "usd"]);
  const [timeRange, setTimeRange] = useState("6m");

  const handleTypeToggle = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-display mb-4">Veri Karşılaştırması</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Farklı ekonomik göstergeleri aynı grafik üzerinde karşılaştırın ve 
              aralarındaki korelasyonları keşfedin.
            </p>
          </div>

          {/* Controls */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Karşılaştırma Ayarları
              </CardTitle>
              <CardDescription>
                Karşılaştırmak istediğiniz veri türlerini ve zaman aralığını seçin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Data Type Selection */}
              <div>
                <h4 className="text-sm font-medium mb-3">Veri Türleri</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {dataTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={type.id}
                        checked={selectedTypes.includes(type.id)}
                        onCheckedChange={() => handleTypeToggle(type.id)}
                      />
                      <label
                        htmlFor={type.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      >
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: type.color }}
                        />
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Range Selection */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Zaman Aralığı</label>
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3m">Son 3 Ay</SelectItem>
                      <SelectItem value="6m">Son 6 Ay</SelectItem>
                      <SelectItem value="1y">Son 1 Yıl</SelectItem>
                      <SelectItem value="2y">Son 2 Yıl</SelectItem>
                      <SelectItem value="5y">Son 5 Yıl</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button onClick={() => {
                    // Trigger data analysis based on selected types and time range
                    console.log('Analyzing data for:', selectedTypes, 'in time range:', timeRange);
                  }}>
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Analiz Et
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selected Data Types */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Seçili Veri Türleri</h3>
            <div className="flex flex-wrap gap-2">
              {selectedTypes.map((typeId) => {
                const type = dataTypes.find(t => t.id === typeId);
                return type ? (
                  <Badge key={typeId} variant="secondary" className="flex items-center gap-1">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: type.color }}
                    />
                    {type.label}
                  </Badge>
                ) : null;
              })}
            </div>
          </div>

          {/* Charts */}
          <div className="space-y-8">
            {selectedTypes.includes("inflation") && (
              <ChartCard
                title="Yıllık Enflasyon Oranı"
                description="Türkiye İstatistik Kurumu (TÜİK) verileri"
                data={sampleData.inflation}
                color="hsl(var(--chart-1))"
                height={350}
              />
            )}
            
            {selectedTypes.includes("usd") && (
              <ChartCard
                title="USD/TRY Döviz Kuru"
                description="Türkiye Cumhuriyet Merkez Bankası (TCMB) verileri"
                data={sampleData.usd}
                color="hsl(var(--chart-2))"
                height={350}
              />
            )}

            {/* Placeholder for other charts */}
            {selectedTypes.includes("fuel") && (
              <Card className="chart-container">
                <CardHeader>
                  <CardTitle>Benzin Fiyatları</CardTitle>
                  <CardDescription>Enerji Piyasası Düzenleme Kurumu (EPDK) verileri</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Benzin fiyat verileri yakında eklenecek</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTypes.includes("food") && (
              <Card className="chart-container">
                <CardHeader>
                  <CardTitle>Temel Gıda Endeksi</CardTitle>
                  <CardDescription>TÜİK tüketici fiyat endeksi alt kategorisi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Gıda fiyat endeksi verileri yakında eklenecek</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Analysis Summary */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Analiz Özeti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Seçili veri türlerine göre son 6 ayda gözlenen ana trendler:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Enflasyon oranında volatil bir seyir gözlenmektedir</li>
                  <li>USD/TRY kurunda genel yukarı yönlü trend devam etmektedir</li>
                  <li>Makroekonomik göstergeler arasında güçlü korelasyon mevcuttur</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Compare;