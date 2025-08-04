import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Haziran 2024 Enflasyon Raporu: Beklenenden Düşük Çıktı",
    excerpt: "TÜİK'in açıkladığı Haziran ayı enflasyon verilerine göre, aylık enflasyon %1.64 olarak gerçekleşti. Bu rakam piyasa beklentilerinin altında kaldı.",
    date: "2024-07-03",
    readTime: "5 dk",
    category: "Enflasyon",
    featured: true
  },
  {
    id: 2,
    title: "TCMB Faiz Kararı ve USD/TRY Üzerindeki Etkileri",
    excerpt: "Merkez Bankası'nın aldığı faiz artırım kararının döviz kurları üzerindeki kısa ve uzun vadeli etkilerini analiz ediyoruz.",
    date: "2024-06-28",
    readTime: "7 dk",
    category: "Döviz",
    featured: false
  },
  {
    id: 3,
    title: "Yakıt Fiyatları: Küresel Petrol Fiyatları vs. Yerel Faktörler",
    excerpt: "Türkiye'deki yakıt fiyat değişimlerinin ne kadarının küresel, ne kadarının yerel faktörlerden kaynaklandığını inceliyoruz.",
    date: "2024-06-25",
    readTime: "6 dk",
    category: "Enerji",
    featured: false
  },
  {
    id: 4,
    title: "Gıda Fiyatları Endeksi: Mevsimsel Etkiler ve Trend Analizi",
    excerpt: "Temel gıda ürünlerindeki fiyat değişimlerinin mevsimsel döngüleri ve uzun vadeli trendleri hakkında detaylı analiz.",
    date: "2024-06-20",
    readTime: "8 dk",
    category: "Gıda",
    featured: false
  },
  {
    id: 5,
    title: "zamanlayalim.com v2.0 Yenilikleri",
    excerpt: "Platformumuzda yer alan yeni karşılaştırma araçları, gelişmiş filtreleme seçenekleri ve mobil optimizasyonları tanıtıyoruz.",
    date: "2024-06-15",
    readTime: "4 dk",
    category: "Platform",
    featured: false
  }
];

const categories = ["Tümü", "Enflasyon", "Döviz", "Enerji", "Gıda", "Platform"];

const Blog = () => {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Güncellemeler & Analizler
            </Badge>
            <h1 className="text-display mb-6">
              Ekonomik Veriler ve{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Analiz Yazıları
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Türkiye ekonomisindeki gelişmeleri takip edin, detaylı analizlerimizi okuyun 
              ve platform güncellemelerinden haberdar olun.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tümü" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="mb-12 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center justify-between">
                  <Badge className="mb-2">Öne Çıkan</Badge>
                  <Badge variant="outline">{post.category}</Badge>
                </div>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} okuma
                    </div>
                  </div>
                  <Button asChild>
                    <Link to={`/blog/${post.id}`}>
                      Devamını Oku
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="data-card hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Oku
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Güncellemelerden Haberdar Olun
              </CardTitle>
              <CardDescription>
                Yeni analiz yazıları ve platform güncellemeleri için e-posta listemize katılın
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-background"
                />
                <Button>Abone Ol</Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                E-posta adresinizi sadece güncellemeler için kullanıyoruz. Spam göndermiyoruz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;