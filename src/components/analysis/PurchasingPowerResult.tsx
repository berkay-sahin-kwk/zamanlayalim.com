import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, TrendingUp, Info, Clock, Coins } from "lucide-react";
import purchasingPowerIcon from "@/assets/purchasing-power-icon.jpg";

interface PurchasingPowerResultProps {
  year: string;
  amount: number;
  category: string;
}

export const PurchasingPowerResult = ({ year, amount, category }: PurchasingPowerResultProps) => {
  // Gerçekçi veriler - enflasyon bazlı hesaplama
  const getInflationMultiplier = (targetYear: string): number => {
    const inflationData: { [key: string]: number } = {
      "2000": 1.0,
      "2001": 1.68,
      "2002": 1.98,
      "2003": 2.23,
      "2004": 2.34,
      "2005": 2.52,
      "2006": 2.72,
      "2007": 2.95,
      "2008": 3.25,
      "2009": 3.41,
      "2010": 3.67,
      "2011": 4.21,
      "2012": 4.55,
      "2013": 4.89,
      "2014": 5.45,
      "2015": 6.12,
      "2016": 6.85,
      "2017": 7.89,
      "2018": 9.45,
      "2019": 11.2,
      "2020": 13.8,
      "2021": 18.4,
      "2022": 28.7,
      "2023": 45.2,
      "2024": 52.0,
    };
    return inflationData[targetYear] || 1.0;
  };

  const getUSDRate = (targetYear: string): number => {
    const usdRates: { [key: string]: number } = {
      "2000": 0.62,
      "2001": 1.23,
      "2002": 1.51,
      "2003": 1.40,
      "2004": 1.34,
      "2005": 1.35,
      "2006": 1.43,
      "2007": 1.30,
      "2008": 1.52,
      "2009": 1.55,
      "2010": 1.50,
      "2011": 1.89,
      "2012": 1.78,
      "2013": 2.13,
      "2014": 2.32,
      "2015": 2.72,
      "2016": 3.02,
      "2017": 3.65,
      "2018": 5.26,
      "2019": 5.95,
      "2020": 7.40,
      "2021": 13.25,
      "2022": 18.70,
      "2023": 29.35,
      "2024": 32.50,
    };
    return usdRates[targetYear] || 1.0;
  };

  const getCategoryItems = (category: string, targetYear: string) => {
    const multiplier = getInflationMultiplier(targetYear);
    
    const categoryData: { [key: string]: any[] } = {
      gida: [
        { name: "Ekmek (1 adet)", basePrice: 0.05, emoji: "🍞" },
        { name: "Süt (1 litre)", basePrice: 0.30, emoji: "🥛" },
        { name: "Yumurta (10 adet)", basePrice: 0.75, emoji: "🥚" },
        { name: "Pirinç (1 kg)", basePrice: 0.80, emoji: "🍚" },
        { name: "Tavuk Eti (1 kg)", basePrice: 2.50, emoji: "🍗" },
      ],
      ulasim: [
        { name: "Benzin (1 litre)", basePrice: 0.45, emoji: "⛽" },
        { name: "Otobüs bileti", basePrice: 0.15, emoji: "🚌" },
        { name: "Taksi (5 km)", basePrice: 2.00, emoji: "🚕" },
        { name: "Metro bileti", basePrice: 0.25, emoji: "🚇" },
        { name: "Minibüs", basePrice: 0.20, emoji: "🚐" },
      ],
      eglence: [
        { name: "Sinema bileti", basePrice: 1.50, emoji: "🎬" },
        { name: "Çay bardağı", basePrice: 0.10, emoji: "🫖" },
        { name: "Kahve", basePrice: 0.50, emoji: "☕" },
        { name: "Gazete", basePrice: 0.15, emoji: "📰" },
        { name: "Dergi", basePrice: 0.75, emoji: "📖" },
      ],
      giyim: [
        { name: "Tişört", basePrice: 8.00, emoji: "👕" },
        { name: "Pantolon", basePrice: 25.00, emoji: "👖" },
        { name: "Ayakkabı", basePrice: 30.00, emoji: "👟" },
        { name: "Çorap", basePrice: 2.00, emoji: "🧦" },
        { name: "Ceket", basePrice: 50.00, emoji: "🧥" },
      ],
      teknoloji: [
        { name: "CD", basePrice: 5.00, emoji: "💿" },
        { name: "Kaset", basePrice: 3.00, emoji: "📼" },
        { name: "Floppy disk", basePrice: 1.50, emoji: "💾" },
        { name: "Telefon kartı", basePrice: 2.00, emoji: "📞" },
        { name: "Bilgisayar oyunu", basePrice: 15.00, emoji: "🎮" },
      ],
      ev: [
        { name: "Deterjan", basePrice: 1.50, emoji: "🧴" },
        { name: "Sabun", basePrice: 0.50, emoji: "🧼" },
        { name: "Tuvalet kağıdı", basePrice: 1.00, emoji: "🧻" },
        { name: "Diş macunu", basePrice: 1.25, emoji: "🦷" },
        { name: "Şampuan", basePrice: 2.50, emoji: "🧴" },
      ],
    };

    return categoryData[category].map(item => ({
      ...item,
      price: item.basePrice * multiplier,
      quantity: Math.floor(amount / (item.basePrice * multiplier))
    }));
  };

  const inflationRate = ((getInflationMultiplier("2024") / getInflationMultiplier(year) - 1) * 100).toFixed(1);
  const usdRate = getUSDRate(year);
  const todayEquivalent = Math.round(amount * (getInflationMultiplier("2024") / getInflationMultiplier(year)));
  const items = getCategoryItems(category, year);

  const categoryNames: { [key: string]: string } = {
    gida: "Gıda & İçecek",
    ulasim: "Ulaşım", 
    eglence: "Eğlence",
    giyim: "Giyim",
    teknoloji: "Teknoloji",
    ev: "Ev & Yaşam"
  };

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
              <div className="text-3xl font-bold text-red-700">%{inflationRate}</div>
              <div className="text-sm text-red-600 font-medium">Toplam Enflasyon</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Coins className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-700">{usdRate.toFixed(2)} TL</div>
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
            {amount} TL ile {categoryNames[category]} Kategorisinde Neler Alabilirdiniz?
          </CardTitle>
          <CardDescription className="text-base">
            {year} yılında {categoryNames[category].toLowerCase()} kategorisindeki ürünlerin fiyatları ve miktarları
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4">
            {items.map((item, index) => (
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