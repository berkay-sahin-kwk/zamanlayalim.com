import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, TrendingUp, Info } from "lucide-react";

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
        { name: "Ekmek (1 adet)", price: 0.25, quantity: Math.floor(amount / 0.25) },
        { name: "Süt (1 litre)", price: 1.50, quantity: Math.floor(amount / 1.50) },
        { name: "Benzin (1 litre)", price: 2.20, quantity: Math.floor(amount / 2.20) },
        { name: "Sinema bileti", price: 5.00, quantity: Math.floor(amount / 5.00) },
        { name: "Çay bardağı", price: 0.50, quantity: Math.floor(amount / 0.50) },
      ]
    },
    "2010": {
      inflationRate: 8.6,
      usdRate: 1.50,
      items: [
        { name: "Ekmek (1 adet)", price: 0.50, quantity: Math.floor(amount / 0.50) },
        { name: "Süt (1 litre)", price: 2.50, quantity: Math.floor(amount / 2.50) },
        { name: "Benzin (1 litre)", price: 4.50, quantity: Math.floor(amount / 4.50) },
        { name: "Sinema bileti", price: 8.00, quantity: Math.floor(amount / 8.00) },
        { name: "Çay bardağı", price: 1.00, quantity: Math.floor(amount / 1.00) },
      ]
    },
    "2020": {
      inflationRate: 12.3,
      usdRate: 7.40,
      items: [
        { name: "Ekmek (1 adet)", price: 1.25, quantity: Math.floor(amount / 1.25) },
        { name: "Süt (1 litre)", price: 4.50, quantity: Math.floor(amount / 4.50) },
        { name: "Benzin (1 litre)", price: 6.80, quantity: Math.floor(amount / 6.80) },
        { name: "Sinema bileti", price: 25.00, quantity: Math.floor(amount / 25.00) },
        { name: "Çay bardağı", price: 2.50, quantity: Math.floor(amount / 2.50) },
      ]
    }
  };

  const yearData = sampleData[year as keyof typeof sampleData] || sampleData["2020"];
  const todayEquivalent = Math.round(amount * 3.2); // Basit hesaplama örneği

  return (
    <div className="space-y-6">
      {/* Özet Bilgiler */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            {year} Yılı Özet Bilgileri
          </CardTitle>
          <CardDescription>
            {amount} TL'nin {year} yılındaki değeri
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-surface rounded-lg border">
              <div className="text-2xl font-bold text-primary">{yearData.inflationRate}%</div>
              <div className="text-sm text-muted-foreground">Yıllık Enflasyon</div>
            </div>
            <div className="text-center p-4 bg-surface rounded-lg border">
              <div className="text-2xl font-bold text-primary">{yearData.usdRate} TL</div>
              <div className="text-sm text-muted-foreground">USD Kuru</div>
            </div>
            <div className="text-center p-4 bg-surface rounded-lg border">
              <div className="text-2xl font-bold text-primary">{todayEquivalent} TL</div>
              <div className="text-sm text-muted-foreground">Bugünkü Değeri</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Satın Alma Gücü */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            {amount} TL ile Neler Alabilirdiniz?
          </CardTitle>
          <CardDescription>
            {year} yılında temel ürünlerin fiyatları
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {yearData.items.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.price} TL/adet
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    {item.quantity} adet
                  </Badge>
                </div>
                {index < yearData.items.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Karşılaştırma */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Zaman İçindeki Değişim
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              {year} yılında {amount} TL ile alabildiğiniz ürünler, bugünkü fiyatlarla 
              yaklaşık <strong>{todayEquivalent} TL</strong> değerindedir.
            </p>
            <p className="mt-2">
              Bu, paranın satın alma gücünün yıllar içinde nasıl değiştiğini gösterir. 
              Enflasyon ve ekonomik koşullar, paranızın reel değerini etkiler.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};