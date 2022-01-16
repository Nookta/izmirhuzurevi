import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> izmir huzurevi - izmir huzurevleri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
         Yaşam standardı ve kalitesi bakımından Türkiye’nin en yüksek standartta yaşam vadeden şehirlerinin başında gelen İzmir,<br>
    hemen her alanda bölgede ikamet edenlere özel fırsatlar sunar. <a href="https://bilgebakimevi.com/" title="izmir huzurevi">izmir huzurevi</a> arayışında olanlar için de bu kapsamda değerlendirilebilecek <br>
    alternatifler yoğun bir biçimde bulunur. Tercih yelpazesinin geniş olmasına karşın yaşlı ve bakıma muhtaç sevdiklerinizin en yüksek standartta <br>
    hizmet alabilmesi ve yaşamlarını yüksek kaliteli standartlarda sürdürebilmesi adına <br>
    huzurevi seçerken bazı püf noktalara yeteri kadar özen göstermesi gerekmektedir. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
