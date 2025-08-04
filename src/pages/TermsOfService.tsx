import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-display mb-4">Kullanım Koşulları</h1>
            <p className="text-xl text-muted-foreground">
              Web sitemizi kullanırken geçerli olan kurallar ve koşullar.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Genel Kullanım Koşulları</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                zamanlayalim.com web sitesini kullanarak aşağıdaki şartları ve 
                koşulları kabul etmiş olursunuz.
              </p>
              
              <h3>Hizmet Kapsamı</h3>
              <ul>
                <li>Web sitesi bilgilendirme amaçlıdır</li>
                <li>Veriler çeşitli kaynaklardan toplanmıştır</li>
                <li>Yatırım tavsiyesi niteliği taşımaz</li>
              </ul>

              <h3>Sorumluluk Reddi</h3>
              <p>
                Web sitesinde yer alan bilgilerin doğruluğu için elimizden 
                geldiğince çaba göstermekteyiz ancak herhangi bir garanti 
                vermemekteyiz. Veriler yalnızca bilgilendirme amaçlıdır.
              </p>

              <h3>Fikri Mülkiyet</h3>
              <p>
                Web sitesinin tasarımı ve içeriği telif hakkı ile korunmaktadır. 
                İzinsiz kullanım yasaktır.
              </p>

              <h3>İletişim</h3>
              <p>
                Kullanım koşulları hakkında sorularınız için berkaysahin.com 
                üzerinden iletişime geçebilirsiniz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;