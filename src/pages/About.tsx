import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, TrendingUp, Clock, BarChart3, Target, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Güvenilir Veri Kaynakları",
    description: "TCMB, TÜİK ve EPDK gibi resmi kurumlardan alınan güncel veriler"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Gerçek Zamanlı Takip",
    description: "Ekonomik göstergelerin anlık değişimlerini canlı olarak takip edin"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Detaylı Görselleştirme",
    description: "İnteraktif grafikler ve karşılaştırma araçları ile veri analizi"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Tarihsel Analiz",
    description: "Geçmiş verilerle karşılaştırma yaparak trendleri keşfedin"
  }
];

const dataSources = [
  {
    name: "TCMB",
    description: "Türkiye Cumhuriyet Merkez Bankası",
    dataTypes: ["Döviz kurları", "Faiz oranları", "Para politikası"]
  },
  {
    name: "TÜİK",
    description: "Türkiye İstatistik Kurumu",
    dataTypes: ["Enflasyon oranları", "Tüketici fiyat endeksi", "Gıda fiyatları"]
  },
  {
    name: "EPDK",
    description: "Enerji Piyasası Düzenleme Kurumu",
    dataTypes: ["Yakıt fiyatları", "Enerji tarifeleri", "Piyasa düzenlemeleri"]
  }
];

const About = () => {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Hakkımızda
            </Badge>
            <h1 className="text-display mb-6">
              Türkiye Ekonomisini{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Şeffaf
              </span>{" "}
              Bir Şekilde Anlayın
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              zamanlayalim.com, Türkiye'nin ekonomik verilerini herkesin anlayabileceği 
              şekilde görselleştiren, açık kaynak kodlu bir platformdur.
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Misyonumuz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Türkiye'deki ekonomik göstergelerin karmaşık yapısını basitleştirerek, 
                vatandaşların enflasyon, döviz kurları ve yaşam maliyetindeki değişiklikleri 
                kolayca takip edebilmelerini sağlamak. Veriye dayalı kararlar alabilmek 
                için herkese eşit erişim imkanı sunmak.
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-headline text-center mb-8">Özelliklerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="data-card">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Sources */}
          <div className="mb-16">
            <h2 className="text-headline text-center mb-8">Veri Kaynaklarımız</h2>
            <div className="space-y-6">
              {dataSources.map((source, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{source.name}</CardTitle>
                    <CardDescription>{source.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {source.dataTypes.map((type, typeIndex) => (
                        <Badge key={typeIndex} variant="outline">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Nasıl Çalışır?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Veri Toplama</h4>
                    <p>Resmi kurumların API'lerinden güncel veriler otomatik olarak çekilir.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Veri İşleme</h4>
                    <p>Veriler temizlenir, standartlaştırılır ve analiz için hazırlanır.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Görselleştirme</h4>
                    <p>İnteraktif grafikler ve karşılaştırma araçları ile kullanıcıya sunulur.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Topluluk ve Katkı
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                zamanlayalim.com açık kaynak kodlu bir projedir. Geliştirici topluluğumuz 
                sürekli olarak yeni özellikler eklemekte ve mevcut sistemleri iyileştirmektedir. 
                Siz de katkıda bulunmak istiyorsanız GitHub repomuzu ziyaret edebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub'da Görüntüle
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:iletisim@zamanlayalim.com">
                    İletişime Geç
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-headline mb-4">Hemen Keşfetmeye Başlayın</h2>
            <p className="text-muted-foreground mb-6">
              Türkiye ekonomisinin nabzını tutmak için zamanlayalim.com'u kullanmaya başlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/compare">
                  Karşılaştırma Yap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Ana Sayfaya Dön</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;