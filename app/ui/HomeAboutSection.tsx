export default function HomeAboutSection(){
  return (
    <section className="section" aria-labelledby="hakkimizda-ozet">
      <div className="container home-about-square">
        <div className="home-about-square-media">
          <figure className="about-media home-about-square-figure" style={{margin:0}}>
            <img src="/baro.jpg" alt="Büro temsili görsel" />
            <figcaption>Büro temsili</figcaption>
          </figure>
        </div>
        <div className="home-about-square-text">
          <h2 id="hakkimizda-ozet">Hakkımızda</h2>
          <div className="home-about-square-content">
            <p>Şeffaf süreç yönetimi, önleyici hukuk yaklaşımı ve disiplinli dokümantasyon kültürü ile işletmelerin hukuki risklerini yönetilebilir, ölçülebilir ve stratejik avantaj üreten yapılara dönüştürüyoruz.</p>
            <p>Risk haritalama, sözleşme yaşam döngüsü yönetimi ve veri koruma uyumunu entegre ederek sürdürülebilir bir hukuki altyapı oluşturuyoruz.</p>
            <p style={{marginTop:'1rem'}}><a href="/hakkimizda" className="cta" style={{fontSize:'.8rem'}}>Detaylı İncele</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
