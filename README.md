<div align="center">

# Rulokat Arşiv

**Kişisel not defteri, bağlantı yöneticisi ve şifre kasası — tek dosya, sıfır sunucu.**

![HTML](https://img.shields.io/badge/HTML-tek%20dosya-e63a0f?style=flat-square)
![Lisans](https://img.shields.io/badge/lisans-MIT-555?style=flat-square)
![Şifreleme](https://img.shields.io/badge/şifreleme-AES--256-4ade80?style=flat-square)

</div>

---

## Nedir?

Rulokat Arşiv; notlarını, web bağlantılarını ve şifrelerini tek bir HTML dosyasında, tarayıcının kendi deposunda şifreli olarak saklayan kişisel bir arşiv uygulamasıdır. Sunucu yok, veritabanı yok, abonelik yok.

---

## Özellikler

### 📝 Not Defteri
- Markdown desteği — kalın, italik, başlık, liste, kod bloğu, alıntı
- Düzenle / İkili / Önizle görünüm modları
- Etiket sistemi ve anlık arama
- Notları sabitleme (📌)
- 6 hazır şablon — Günlük, Toplantı, Fikir, Okuma Notu, Hedef, Bug Raporu
- Otomatik kayıt — yazdıkça kaydedilir

### 🔖 Bağlantı Yöneticisi
- Favicon otomatik çekme
- Başlık, açıklama ve etiket desteği
- Ping sistemi — sitelerin erişilebilir olup olmadığını kontrol eder
- Düzenleme ve filtreleme

### 🔑 Şifre Kasası
- Site, kullanıcı adı ve şifre kaydı
- Tek tıkla panoya kopyalama
- Şifre güç göstergesi
- Yerleşik şifre oluşturucu — uzunluk, büyük/küçük harf, rakam ve sembol seçenekleri
- Kriptografik rastgele üretim (`crypto.getRandomValues`)

### 🔐 Güvenlik
- **AES-256 şifreleme** — tüm veriler (notlar, bağlantılar, şifreler) tarayıcıda şifreli saklanır
- **SHA-256 parola doğrulama** — ana şifre hiçbir zaman düz metin olarak tutulmaz
- **5 hatalı deneme kilidi** — 30 saniye bekleme süresi
- **Otomatik kilit** — 5 dakika hareketsizlik sonrası ekran kilitlenir
- **Şifre değiştirince yeniden şifreleme** — tüm veriler yeni anahtarla otomatik güncellenir

### 🎨 Arayüz
- 7 farklı tema — Alev, Amber, Okyanus, Orman, Gül, Açık, Nordic
- Manufacturing Consent fontu
- Mobil uyumlu — alt navigasyon çubuğu
- JSON yedekleme ve geri yükleme
- Sıfır dış bağımlılık (ikonlar inline SVG)

---

## Kurulum

### GitHub Pages (ücretsiz)

1. Bu repoyu fork'la veya `index.html` dosyasını yeni bir repoya yükle
2. **Settings → Pages → Branch: main → Save**
3. Birkaç dakika içinde yayında:

```
https://KULLANICI-ADIN.github.io/REPO-ADIN
```

### Yerel kullanım

Dosyayı indirip tarayıcıda aç — başka hiçbir şey gerekmez.

```bash
open index.html
```

---

## İlk Giriş

Varsayılan şifre: **1234**

> Girdikten sonra hemen değiştirmen önerilir.  
> Sol sidebar → 🔒 Şifre sekmesi → en alt → *Ana şifreyi değiştir*

---

## Yedekleme

Verilerini kaybetmemek için düzenli yedek al:

**Topbar → 💾 simgesi → Dışa Aktar (JSON)**

Oluşan dosyayı güvenli bir yere kaydet. Geri yüklemek için aynı ekrandan *İçe Aktar* seçeneğini kullan.

---

## Teknik Notlar

| Konu | Detay |
|------|-------|
| Depolama | `localStorage` — veriler tarayıcıda kalır |
| Şifreleme | `CryptoJS` AES-256-CBC |
| Parola hash | `SHA-256` + uygulama tuzu |
| Markdown | `marked.js` |
| İkonlar | Inline SVG — Tabler Icons kaynaklı |
| Font | Manufacturing Consent (Google Fonts) |

---

## Ping Sistemi Hakkında

Bağlantı kontrolü tarayıcı ortamında `fetch` + `no-cors` yöntemiyle çalışır. Çoğu büyük site için doğru sonuç verir; ancak CORS politikası katı olan bazı siteler açık olsalar dahi erişilemez görünebilir. %100 doğruluk için sunucu tarafı bir çözüm gerekir.

---

<div align="center">
<sub>Tek dosya. Sıfır sunucu. Tamamen senin.</sub>
</div>
