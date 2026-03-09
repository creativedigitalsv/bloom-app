# Bloom AI – Legal Compliance & Governance Framework v1.0

# 🏛️ BLOOM AI – LEGAL COMPLIANCE & GOVERNANCE FRAMEWORK
### Versiyon 1.0 | Tüm Departmanlar İçin Bağlayıcı Rehber
### Hazırlayan: Legal Department | Yürürlük: Hemen

---

> ⚠️ **BAĞLAYICILIK NOTU:** Bu doküman tüm Bloom AI departmanları için — Engineering, Marketing, Analytics, CX Support, Finance, Content ve CEO dahil — bağlayıcıdır. Herhangi bir aktivite, kampanya, özellik geliştirme, içerik yayını veya iş birliği bu çerçeveyle çelişemez. Legal Department, ihlal tespit ettiğinde ilgili departmanı ve CEO'yu derhal uyarır; süreç dondurulur.

---

## 📌 BÖLÜM 1: TEMEL HUKUKİ ÇERÇEVE

### 1.1 Bloom Hangi Hukuki Çerçevede Faaliyet Gösteriyor?

Bloom AI, İsveç pazarına yönelik faaliyet gösteren bir mobil uygulama olarak aşağıdaki hukuki çerçevelerin **tamamına** tabidir:

| Mevzuat | Kapsam | Öncelik |
|---|---|---|
| **GDPR** (EU 2016/679) | Tüm kullanıcı verisi işleme aktiviteleri | 🔴 KRİTİK |
| **Swedish Patient Data Act** (PDL) | Sağlık verisi işleme ve saklama | 🔴 KRİTİK |
| **Swedish Healthcare Act** (Hälso- och sjukvårdslagen) | Tıbbi içerik sınırları | 🔴 KRİTİK |
| **IVO Regulations** | Sağlık hizmeti denetim gereksinimleri | 🔴 KRİTİK |
| **E-Commerce Directive** (2000/31/EC) | Dijital hizmet sorumlulukları | 🟠 YÜKSEK |
| **Consumer Rights Directive** | Abonelik, iade, sözleşme şartları | 🟠 YÜKSEK |
| **Digital Services Act** (DSA) | İçerik moderasyonu ve şeffaflık | 🟠 YÜKSEK |
| **Medical Device Regulation** (MDR 2017/745) | Tıbbi cihaz sınıflandırması riski | 🟠 YÜKSEK |
| **Swedish Marketing Act** (Marknadsföringslagen) | Reklam ve pazarlama kuralları | 🟡 ORTA |
| **Apple App Store / Google Play Policies** | Uygulama mağazası kuralları | 🟡 ORTA |

---

### 1.2 En Kritik Risk: Tıbbi Cihaz Sınıflandırması (MDR)

> 🚨 **BLOOM EKİBİNİN EN ÖNEMLİ RİSKİ**

Eğer Bloom'un herhangi bir özelliği "tıbbi amaçlı" olarak sunulursa, uygulama **CE işaretli Tıbbi Cihaz** kapsamına girebilir. Bu durum:
- Yıllar süren onay süreçleri
- Notified Body sertifikasyonu
- Yüksek maliyet ve operasyonel yük getirir.

**Legal Kırmızı Çizgi:** Bloom hiçbir zaman teşhis koymaz, tedavi önermez, tıbbi tavsiye vermez.

---

## 📌 BÖLÜM 2: VERİ YÖNETİMİ & GDPR UYUMU

### 2.1 Sağlık Verisi – En Hassas Kategori

Hamilelik bilgisi, gebelik haftası, anne sağlığı verileri GDPR Madde 9 kapsamında **"Özel Nitelikli Kişisel Veri"**dir.

**Bu veriler için zorunluluklar:**

```
✅ Açık ve ayrıştırılmış rıza (granular consent)
✅ Veri işleme amacı her kategori için ayrı belirtilmeli
✅ Veri minimizasyonu – sadece gerekli veri toplanmalı
✅ Saklama süresi sınırlı ve kullanıcıya açıklanmış olmalı
✅ Kullanıcı silme hakkı teknik olarak uygulanabilir olmalı
✅ Data Protection Impact Assessment (DPIA) yapılmalı
✅ Veri ihlali halinde 72 saat içinde IMY'ye (İsveç KVKK) bildirim
```

### 2.2 Veri Saklama Kuralları

| Veri Türü | Maksimum Saklama | İşlem |
|---|---|---|
| Hamilelik profili | Hesap aktif olduğu sürece + 12 ay | Kullanıcı silme talebiyle anında silinir |
| Kullanım logu | 90 gün | Otomatik temizlenir |
| Ödeme bilgisi | Yasal zorunluluk: 7 yıl (muhasebe) | Stripe tarafından saklanır, Bloom'da kart datası olmaz |
| Chat/destek yazışmaları | 24 ay | Anonim hale getirilir |
| Analytics verisi | Anonim ve aggregate – süresiz | Kişisel bağlantı koparılmalı |

### 2.3 Üçüncü Taraf Entegrasyonları – Onay Zorunluluğu

> **Her yeni SDK, API veya servis entegrasyonu Legal onayından geçmelidir.**

**Engineering Departmanı:** Aşağıdaki kriterleri sağlamayan hiçbir third-party entegrasyon production'a alınamaz:

```
□ GDPR uyumlu Data Processing Agreement (DPA) imzalandı mı?
□ Veri AB/İsveç sınırları içinde mi kalıyor? (veya yeterli koruma garantisi var mı?)
□ Servis sağlayıcının kendi güvenlik sertifikasyonu var mı? (ISO 27001 vb.)
□ Kullanıcıya bilgi verildi mi? (Privacy Policy güncellendi mi?)
```

**Pre-approved servisler:** Supabase (EU region), Stripe, Firebase (EU), Mixpanel (GDPR modu açık)
**⚠️ Gri Alan Servisler:** OpenAI, Google Analytics → Legal incelemesi gerekir
**🚫 Yasaklı:** Veri satan veya ABD'de sağlık verisi işleyen servisler

### 2.4 DPIA – Zorunlu Değerlendirme

Bloom'un başlatılmadan önce tamamlaması gereken **Data Protection Impact Assessment** alanları:

1. AI öneri motoru (hangi veriyi kullanıyor, nasıl karar veriyor?)
2. Bebek gelişim takip modülü
3. Partner veri erişimi (eşlerin birbirinin verisini görmesi)
4. Push notification sistemi
5. In-app chat / destek modülü

---

## 📌 BÖLÜM 3: İÇERİK POLİTİKASI – CONTENT & CX DEPARTMANLARI İÇİN

### 3.1 Kesinlikle Söylenemeyecekler (Red Lines)

> Bu sınırların ihlali MDR kapsamına girme veya haksız ticari uygulama riski taşır.

🚫 **YASAK İFADELER & YAKLAŞIMLAR:**

```
❌ "Bu belirti X hastalığına işaret eder"
❌ "Doktorunuza gerek yok, Bloom size söyler"
❌ "Bu takviyeyi kullanın / bu ilacı kullanmayın"
❌ "%X ihtimalle bebeğiniz..."
❌ "Klinik olarak kanıtlanmış" (sertifika olmadan)
❌ "Tıbbi tavsiye" içerdiği izlenimi veren her türlü içerik
❌ Belirli bir doktor, klinik veya ürün tavsiyesi
❌ Korku yaratıcı, kaygı tetikleyici içerik (hassas kullanıcı kitlesi)
❌ Kesin bebek cinsiyeti tahmini
❌ Komplikasyon ihtimali içeren istatistiksel tahminler
```

### 3.2 Söylenebilecekler – Güvenli Alan

✅ **ONAYLANMIŞ YAKLAŞIMLAR:**

```
✅ "Bu haftada pek çok anne şunu hisseder..." (genel bilgi)
✅ "WHO / Socialstyrelsen'e göre..." (kaynaklı bilgi)
✅ "Doktorunuza danışmanızı öneririz" (her tıbbi konuda)
✅ "Bu bir tıbbi tavsiye değildir" (disclaimer her içerikte)
✅ Duygusal destek ve normalleştirme içerikleri
✅ Haftalık bebek gelişim bilgisi (kaynaklı)
✅ Pratik hazırlık rehberleri (çanta hazırlama, hastane seçimi vb.)
✅ Nefes egzersizleri, meditasyon yönlendirmesi
```

### 3.3 İçerik Onay Akışı

```
Content/CX İçerik Üretir
        ↓
Legal Checklist ile Self-Review (ekteki form)
        ↓
Tıbbi referans varsa → Kaynak eklenmeli
        ↓
"Tıbbi tavsiye değildir" disclaimer eklenmeli
        ↓
Yayına alınır
        ↓
Legal, aylık random audit yapar
```

---

## 📌 BÖLÜM 4: PAZARLAMA KURALLARI – MARKETING DEPARTMANI İÇİN

### 4.1 İsveç Pazarlama Kanunu Gereksinimleri

İsveç Marknadsföringslagen kapsamında:

```
✅ Tüm reklamlar açıkça reklam olarak işaretlenmeli ("Annons" etiketi)
✅ Influencer iş birlikleri "#reklam" veya "#annons" etiketiyle paylaşılmalı
✅ İndirim oranları gerçek fiyat üzerinden hesaplanmalı
✅ "Ücretsiz" denen özellik gerçekten ücretsiz olmalı
✅ Abonelik şartları reklam metninde açıkça belirtilmeli
✅ "En iyi", "tek", "mükemmel" gibi superlative ifadeler kanıtlanabilir olmalı
```

### 4.2 Sağlık İddiası Yasağı

Marketing, içerikte **hiçbir sağlık iddiasında bulunamaz:**

```
❌ "Bloom ile daha sağlıklı bir hamilelik geçirin"
❌ "Komplikasyon riskini azaltır"
❌ "Doktor kontrolü yerine geçer"
✅ "Hamilelik yolculuğunuzda yanınızdayız"
✅ "Bilgi, destek ve bağlantı – hepsi bir arada"
✅ "Partnerinizle bu yolculuğu paylaşın"
```

### 4.3 Influencer & Partnership Protokolü

Her influencer / kurumsal iş birliği öncesinde:

1. **Brief Legal'e gönderilir** – içerik sınırları briefing'e eklenir
2. **Sözleşmeye şu maddeler eklenir:**
   - Tıbbi iddia yasağı
   - Onay mekanizması (yayın öncesi Bloom onayı)
   - GDPR uyumlu tracking linkleri
   - İsveç reklam hukuku uyumu taahhüdü
3. **Legal onaylamadan iş birliği başlamaz**

### 4.4 App Store Metinleri

App Store & Google Play açıklamaları Legal tarafından onaylanır. Sağlık uygulamaları için platform özel kurallar (Apple Health guidelines, Section 5.1.3) mevcuttur.

---

## 📌 BÖLÜM 5: TEKNİK & MÜHENDİSLİK KURALLARI – ENGINEERING İÇİN

### 5.1 Privacy by Design – Mimaride Zorunluluklar

```
✅ Uçtan uca şifreleme – sağlık verisi için zorunlu
✅ Veri anonimleştirme – analytics pipeline'ında
✅ Role-based access control – kim hangi veriye erişebilir?
✅ Audit log – kim hangi veriye ne zaman erişti?
✅ Soft delete değil, GDPR-compliant hard delete mekanizması
✅ Data export özelliği (kullanıcı verilerini indirebilmeli – GDPR Madde 20)
✅ Consent management – kullanıcı rızasını granular yönetebilmeli
```

### 5.2 AI Modeli Kısıtlamaları

Bloom'un AI özelliği için:

```
🔴 AI asla teşhis koyamaz
🔴 AI asla ilaç/takviye öneremez
🔴 AI yanıtlarında her zaman "Bu tıbbi tavsiye değildir" uyarısı olmalı
🔴 AI'ın hangi veriyle eğitildiği dokümante edilmeli
🟡 AI önerilerinde kaynak gösterilmeli (WHO, Socialstyrelsen vb.)
🟡 Belirsiz/riskli sorularda "Lütfen doktorunuza danışın" yönlendirmesi zorunlu
```

### 5.3 Güvenlik Gereksinimleri

| Alan | Gereksinim |
|---|---|
| Şifreleme (transit) | TLS 1.3 minimum |
| Şifreleme (rest) | AES-256 |
| Authentication | MFA desteği, JWT expiry maks. 24h |
| Password policy | Min. 12 karakter, bcrypt hashing |
| Pen test | Launch öncesi ve yılda 1 kez |
| Vulnerability disclosure | Responsible disclosure policy yayınlanmalı |
| Dependency audit | Her deploy öncesi npm/pub audit |

### 5.4 Veri Sızıntısı Protokolü

```
Sızıntı tespit edildi
        ↓
Engineering → Legal'e 1 saat içinde bildirim
        ↓
Legal, etki analizi yapar (hangi veri, kaç kullanıcı)
        ↓
72 saat içinde IMY'ye (Integritetsskyddsmyndigheten) bildirim
        ↓
Etkilenen kullanıcılara bildirim (makul sürede)
        ↓
Post-mortem raporu ve önlem planı
```

---

## 📌 BÖLÜM 6: FİNANS & ABONELİK MODELİ KURALLARI – FİNANS DEPARTMANı İÇİN

### 6.1 Abonelik ve Ödeme Hukuku

İsveç & AB tüketici hukuku kapsamında:

```
✅ Ücretsiz deneme süresi NET olarak belirtilmeli (süre, ne zaman ücretlendirileceği)
✅ Abonelik yenileme kullanıcıya önceden bildirilmeli (en az 14 gün öncesinde)
✅ İptal süreci en az 3 tıklamayla tamamlanabilmeli (karmaşık iptal = yasak)
✅ İptal anında pro-rata iade politikası belirli ve uygulanabilir olmalı
✅ Fiyat değişikliği öncesinde kullanıcıya bildirim (en az 30 gün)
✅ App Store üzerinden satışta Apple komisyon ve kuralları geçerli
```

### 6.2 Fatura & Muhasebe

```
✅ Her işlem için fatura/makbuz otomatik gönderilmeli
✅ Kişisel finansal veriler PCI-DSS uyumlu sistemde (Stripe)
✅ İsveç KDV (%25 dijital hizmet) doğru hesaplanmalı
✅ EU müşteriler için OSS (One Stop Shop) KDV bildirimi
```

### 6.3 Investor & Grant İletişimi

Bloom, yatırımcı veya hibe başvurularında:

```
🔴 Henüz klinik validasyon olmayan iddialarda bulunmamak
🔴 Kullanıcı sayısı, gelir gibi metrikleri doğrulamamış şekilde sunmamak
✅ "Pilot aşamasında", "geliştirme sürecinde" gibi gerçeği yansıtan ifadeler kullanmak
```

---

## 📌 BÖLÜM 7: MÜŞTERİ DENEYİMİ & DESTEK – CX DEPARTMANI İÇİN

### 7.1 Destek Ekibi İçin Kırmızı Çizgiler

CX ekibi kullanıcılarla direkt iletişimde olduğundan en yüksek risk noktasıdır.

```
🚫 CX asla tıbbi soru yanıtlamaz
🚫 CX asla "evet bu normal" veya "endişelenme" demez (tıbbi bağlamda)
🚫 CX kullanıcıyı doktor yerine yönlendirmez
✅ Her tıbbi soruda: "Bu konuda doktorunuza veya ebeniize danışmanızı öneririz"
✅ Acil durum işaretleri varsa: Direkt acil servise yönlendirme scripti kullanılır
✅ Kullanıcı şikayetleri GDPR kapsamında loglanır ve saklanır
```

### 7.2 Acil Durum Protokolü

Eğer kullanıcı tehlikede olduğunu belirten bir mesaj atarsa:

```
Acil durum mesajı tespit edildi
        ↓
CX → "Lütfen hemen 112'yi arayın veya en yakın acil servise gidin"
        ↓
Mesaj Legal & CEO'ya iletilir
        ↓
Süreç loglanır
        ↓
Kullanıcıya follow-up (uygunsa)
```

### 7.3 Veri Talebi Yanıt Protokolü

GDPR kapsamında kullanıcı hakları:

| Talep | Yanıt Süresi | Sorumlu |
|---|---|---|
| Veri erişim talebi | 30 gün | CX + Engineering |
| Veri silme talebi | 30 gün (teknik silme 72 saat) | Engineering |
| Veri taşıma talebi | 30 gün | Engineering |
| İtiraz hakkı | Derhal işleme durdurulur | Legal + Engineering |

---

## 📌 BÖLÜM 8: ZORUNLU DOKÜMANLAR – LAUNCH ÖNCESİ CHECKLİST

### 8.1 Yayına Girmeden Önce Tamamlanması Gerekenler

**Legal Dokümanlar:**
```
□ Privacy Policy (İsveç/İngilizce, GDPR uyumlu)
□ Terms of Service (kullanıcı sözleşmesi)
□ Cookie Policy
□ Data Processing Agreement (DPA) şablonu – B2B için
□ Disclaimer (tıbbi içerik uyarısı)
□ Çerez Banner / Consent Management Platform
```

**Teknik Gereksinimler:**
```
□ DPIA tamamlandı
□ Penetrasyon testi yapıldı
□ Veri silme mekanizması test edildi
□ Consent management entegre edildi
□ Veri breach notification sistemi kuruldu
□ IMY'ye DPO (Data Protection Officer) bildirim yapıldı veya muafiyet değerlendirildi
```

**Operasyonel:**
```
□ Tüm ekip bu dokümanı okudu ve imzaladı
□ İçerik review süreci dokümante edildi
□ CX acil durum scripti hazır
□ Veri ihlali iletişim şablonları hazır
```

---

## 📌 BÖLÜM 9: İHLAL YÖNETİMİ – LEGAL'İN YETKİ ÇERÇEVESI

### 9.1 Legal Departmanının Müdahale Hakları

Bu doküman çerçevesinde Legal Departmanı aşağıdaki yetkilerle donatılmıştır:

```
🛑 DURDURMA: Herhangi bir süreç, özellik, kampanya veya içeriği yayından kaldırma/
   durdurma yetkisi – CEO dahil
⚠️ UYARI: İlgili departmana ve CEO'ya yazılı uyarı gönderme
🔄 REVİZYON TALEBİ: Sürecin yeniden tasarlanmasını talep etme
📋 RAPORLAMA: Tekrarlayan ihlalleri kayıt altına alma
```

### 9.2 İhlal Seviyeleri

| Seviye | Tanım | Legal Aksiyonu |
|---|---|---|
| 🟡 **Level 1** | Minör uyumsuzluk (disclaimer eksikliği vb.) | Yazılı uyarı + 48h düzeltme süresi |
| 🟠 **Level 2** | Orta risk (onaysız 3rd party entegrasyon, tıbbi iddia içeren içerik) | Süreç durdurulur, CEO bilgilendirilir, 24h düzeltme |
| 🔴 **Level 3** | Yüksek risk (veri ihlali, MDR kapsamına giren özellik) | Derhal durdurulur, hukuki süreç başlatılır, regülatöre bildirim |

### 9.3 Kim İhlal Ederse?

> Bu framework CEO dahil hiç kimseyi muaf tutmaz.

Eğer bir departman veya CEO bu çerçeveyle çelişen bir karar alırsa:

1. Legal, kararı tespit eder
2. İlgili kişiye/departmana **yazılı uyarı** gönderir
3. Süreç **dondurulur**
4. Çözüm önerisi sunulur
5. Çözüme kavuşmadan süreç devam etmez

---

## 📌 BÖLÜM 10: GÜNCELLEME & SINIR TAKİBİ

### 10.1 Bu Dokümanın Güncellenmesi

| Durum | Aksiyon |
|---|---|
| AB/İsveç mevzuatında değişiklik | Legal 30 gün içinde dokümanı günceller |
| Yeni özellik/servis eklenmesi | Önce Legal impact assessment, sonra geliştirme |
| Platform politika değişikliği | Legal değerlendirir, ekibi bilgilendirir |
| Veri ihlali sonrası | Doküman gözden geçirilir ve güncellenir |

### 10.2 Düzenli Review Takvimi

```
📅 Aylık: Content & CX audit
📅 Çeyreklik: Tüm departman compliance check
📅 Yıllık: Kapsamlı hukuki framework revizyonu
📅 Anlık: Her ihlal tespitinde
```

---

## ✍️ ONAY & TAAHHÜT

Bu dokümanı okuduğunuzu ve bağlayıcılığını kabul ettiğinizi onaylayın:

| Departman | Yetkili | Tarih |
|---|---|---|
| CEO | | |
| Engineering | | |
| Legal | | |
| Marketing | | |
| Analytics | | |
| CX Support | | |
| Finance | | |
| Content | | |

---

*Bloom AI Legal Department | Framework v1.0*
*Bu doküman Bloom AI'ın tüm operasyonel aktiviteleri için bağlayıcıdır.*
*Sorular için: legal@bloom.ai*
