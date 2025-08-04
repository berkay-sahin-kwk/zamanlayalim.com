import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-display mb-4">Gizlilik Politikası</h1>
            <p className="text-xl text-muted-foreground">
              Kişisel verilerinizin korunması bizim için önemlidir.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Veri Toplama ve Kullanım</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                zamanlayalim.com olarak, kullanıcılarımızın gizliliğini korumayı taahhüt ediyoruz. 
                Bu sayfa, web sitemizi ziyaret ettiğinizde toplanan bilgiler ve bunların nasıl 
                kullanıldığı hakkında bilgi verir.
              </p>
              
              <h3>Toplanan Bilgiler</h3>
              <ul>
                <li>Web sitesi kullanım istatistikleri</li>
                <li>Çerezler aracılığıyla toplanan teknik bilgiler</li>
                <li>IP adresi ve tarayıcı bilgileri</li>
              </ul>

              <h3>Bilgilerin Kullanımı</h3>
              <p>
                Toplanan bilgiler yalnızca web sitesinin işlevselliğini artırmak ve 
                kullanıcı deneyimini geliştirmek için kullanılır. Kişisel bilgileriniz 
                üçüncü taraflarla paylaşılmaz.
              </p>

              <h3>İletişim</h3>
              <p>
                Gizlilik politikası hakkında sorularınız için berkaysahin.com 
                üzerinden iletişime geçebilirsiniz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;