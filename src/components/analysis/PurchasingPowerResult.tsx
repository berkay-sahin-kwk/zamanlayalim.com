import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, TrendingUp, Info, Clock, Coins } from "lucide-react";
import purchasingPowerIcon from "@/assets/purchasing-power-icon.jpg";

interface PurchasingPowerResultProps {
  year: string;
  amount: number;
}

export const PurchasingPowerResult = ({ year, amount }: PurchasingPowerResultProps) => {
  // Sabit örnek veriler - gerçek projede API'den gelecek
  const sampleData = {
    "2005": {
      inflationRate: 7.7,
      usdRate: 1.35,
      items: [
        { name: "Ekmek (1 adet)", price: 0.25, quantity: Math.floor(amount / 0.25), emoji: "🍞" },
        { name: "Süt (1 litre)", price: 1.50, quantity: Math.floor(amount / 1.50), emoji: "🥛" },
        { name: "Benzin (1 litre)", price: 2.20, quantity: Math.floor(amount / 2.20), emoji: "⛽" },
        { name: "Sinema bileti", price: 5.00, quantity: Math.floor(amount / 5.00), emoji: "🎬" },
        { name: "Çay bardağı", price: 0.50, quantity: Math.floor(amount / 0.50), emoji: "🫖" },
      ]
    },
    "2010": {
      inflationRate: 8.6,
      usdRate: 1.50,
      items: [
        { name: "Ekmek (1 adet)", price: 0.50, quantity: Math.floor(amount / 0.50), emoji: "🍞" },
        { name: "Süt (1 litre)", price: 2.50, quantity: Math.floor(amount / 2.50), emoji: "🥛" },
        { name: "Benzin (1 litre)", price: 4.50, quantity: Math.floor(amount / 4.50), emoji: "⛽" },
        { name: "Sinema bileti", price: 8.00, quantity: Math.floor(amount / 8.00), emoji: "🎬" },
        { name: "Çay bardağı", price: 1.00, quantity: Math.floor(amount / 1.00), emoji: "🫖" },
      ]
    },
    "2020": {
      inflationRate: 12.3,
      usdRate: 7.40,
      items: [
        { name: "Ekmek (1 adet)", price: 1.25, quantity: Math.floor(amount / 1.25), emoji: "🍞" },
        { name: "Süt (1 litre)", price: 4.50, quantity: Math.floor(amount / 4.50), emoji: "🥛" },
        { name: "Benzin (1 litre)", price: 6.80, quantity: Math.floor(amount / 6.80), emoji: "⛽" },
        { name: "Sinema bileti", price: 25.00, quantity: Math.floor(amount / 25.00), emoji: "🎬" },
        { name: "Çay bardağı", price: 2.50, quantity: Math.floor(amount / 2.50), emoji: "🫖" },
      ]
    }
  };

  const yearData = sampleData[year as keyof typeof sampleData] || sampleData["2020"];
  const todayEquivalent = Math.round(amount * 3.2); // Basit hesaplama örneği

  return (
    <div className="space-y-8 animate-slide-in-up">
      {/* Hero Image */}
      <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
        <img 
          src={purchasingPowerIcon} 
          alt="Satın alma gücü analizi" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-2">{year} Yılı Analizi</h2>
            <p className="text-lg opacity-90">{amount} TL'nin Satın Alma Gücü</p>
          </div>
        </div>
      </div>

      {/* Özet Bilgiler */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Info className="h-6 w-6 text-primary" />
            </div>
            {year} Yılı Ekonomik Göstergeler
          </CardTitle>
          <CardDescription className="text-base">
            Temel ekonomik veriler ve bugünkü değer karşılaştırması
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-red-700">{yearData.inflationRate}%</div>
              <div className="text-sm text-red-600 font-medium">Yıllık Enflasyon</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Coins className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-700">{yearData.usdRate} TL</div>
              <div className="text-sm text-blue-600 font-medium">USD Kuru</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-700">{todayEquivalent} TL</div>
              <div className="text-sm text-green-600 font-medium">Bugünkü Değeri</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Satın Alma Gücü */}
      <Card className="border-0 shadow-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </div>
            {amount} TL ile Neler Alabilirdiniz?
          </CardTitle>
          <CardDescription className="text-base">
            {year} yılında temel ürünlerin fiyatları ve miktarları
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4">
            {yearData.items.map((item, index) => (
              <div key={index} className="group hover:bg-gray-50 rounded-xl p-4 transition-all duration-200 border border-gray-100 hover:border-primary/20 hover:shadow-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-3xl">{item.emoji}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.price.toFixed(2)} TL/adet
                      </p>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="text-lg px-4 py-2 bg-primary/10 text-primary border-0 group-hover:bg-primary group-hover:text-white transition-all duration-200"
                  >
                    {item.quantity} adet
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Karşılaştırma */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            Zaman İçindeki Değişim
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              <strong className="text-primary">{year}</strong> yılında <strong className="text-primary">{amount} TL</strong> ile alabildiğiniz ürünler, 
              bugünkü fiyatlarla yaklaşık <strong className="text-green-600 text-xl">{todayEquivalent} TL</strong> değerindedir.
            </p>
            <p className="text-gray-600">
              Bu, paranın satın alma gücünün yıllar içinde nasıl değiştiğini gösterir. 
              Enflasyon ve ekonomik koşullar, paranızın reel değerini önemli ölçüde etkiler.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};