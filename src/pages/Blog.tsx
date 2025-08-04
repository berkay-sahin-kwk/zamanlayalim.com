import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Türkiye'de Enflasyonun Tarihçesi ve Etkileri",
    excerpt: "1980'lerden günümüze Türkiye ekonomisinde yaşanan enflasyon süreçleri ve bunların toplum üzerindeki etkilerini inceliyoruz.",
    date: "2024-01-15",
    readTime: "8 dakika",
    category: "Ekonomi",
    featured: true
  },
  {
    id: 2,
    title: "Satın Alma Gücü Paritesi Nedir?",
    excerpt: "Ülkeler arası fiyat karşılaştırmalarında kullanılan bu önemli ekonomik göstergeyi detaylı olarak açıklıyoruz.",
    date: "2024-01-10",
    readTime: "6 dakika",
    category: "Finans"
  },
  {
    id: 3,
    title: "2000'li Yıllarda Türk Lirası'nın Serüveni",
    excerpt: "Yeni Türk Lirası'ndan günümüze kadar olan süreçte paranın değer kaybı ve ekonomik krizlerin analizi.",
    date: "2024-01-05",
    readTime: "10 dakika",
    category: "Tarih"
  },
  {
    id: 4,
    title: "Merkez Bankası Politikalarının Etkisi",
    excerpt: "Faiz oranları, para politikaları ve bunların günlük yaşama yansımalarını ekonomik verilerle inceliyoruz.",
    date: "2023-12-28",
    readTime: "7 dakika",
    category: "Politika"
  },
  {
    id: 5,
    title: "Asgari Ücret ve Yaşam Standardı",
    excerpt: "Yıllar içinde asgari ücretin reel değerindeki değişimler ve bunun toplumsal etkileri.",
    date: "2023-12-20",
    readTime: "9 dakika",
    category: "Sosyal"
  },
  {
    id: 6,
    title: "Döviz Kurları ve Günlük Yaşam",
    excerpt: "USD ve EUR kurlarındaki değişimlerin tüketici fiyatlarına ve satın alma gücüne etkileri.",
    date: "2023-12-15",
    readTime: "5 dakika",
    category: "Finans"
  }
];

const categories = ["Tümü", "Ekonomi", "Finans", "Tarih", "Politika", "Sosyal"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Ekonomi Blogu
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Türkiye ekonomisi, enflasyon, satın alma gücü ve finansal analizler hakkında güncel yazılar
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-slide-in-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tümü" ? "default" : "outline"}
                className="hover-scale"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Card className="mb-12 overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <Badge className="mb-2">Öne Çıkan</Badge>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('tr-TR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Button className="group">
                    Devamını Oku 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Other Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {otherPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover-scale cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('tr-TR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 h-auto font-semibold story-link group-hover:text-primary">
                    Devamını Oku
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Section */}
          <Card className="bg-gradient-to-r from-primary/5 via-background to-accent/5 border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl mb-2">Bültenimize Abone Olun</CardTitle>
              <CardDescription className="text-lg">
                Ekonomi ve finans dünyasından en güncel haberleri e-posta adresinize gönderelim
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="E-posta adresiniz" 
                  className="flex-1"
                />
                <Button className="group">
                  Abone Ol
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
