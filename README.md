# 🛰️ EVE Online Market Radar v3.5

  

**Market Radar**, EVE Online tüccarları için geliştirilmiş gelişmiş bir bölge analiz aracıdır. Sadece bulunduğunuz sistemi değil, belirlediğiniz atlayış menzili içerisindeki tüm pazar fırsatlarını çapraz sorgulayarak en kârlı rotaları raporlar.

-----

## 🚀 Öne Çıkan Özellikler

  * **V-Radar Algoritması:** Mevcut konumunuzdan alım noktasına ve oradan satış noktasına kadar olan tüm rotayı (Total Jumps) hesaplar.
  * **Dinamik Kâr Hesaplama:** Pilot yeteneklerinize (Accounting & Broker Relations) göre vergileri otomatik düşer.
  * **100+ Stratejik Ürün:** Salvage, Minerals, PI, Ice, Gas ve Gemi kategorilerinde pazarın en likit ürünlerini tarar.
  * **Akıllı Skorlama:** ROI, kâr hacmi ve mesafe verilerini harmanlayarak her fırsata 0-100 arası bir puan verir.
  * **Tek Pencere Konsol:** `baslat.bat` ile backend ve frontend sistemlerini tek bir terminal üzerinden yönetir.

-----

## 🛠️ Teknik Mimari

Proje, yüksek performans ve düşük gecikme süresi için ayrık bir mimari ile inşa edilmiştir:

| Bileşen | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **Backend** | Python / FastAPI | ESI API entegrasyonu ve matematiksel analiz motoru. |
| **Frontend** | React / Vite | Bento-grid tasarımlı, responsive kullanıcı arayüzü. |
| **Styling** | Tailwind CSS | Modern, karanlık tema (EVE UI standartları). |
| **Networking** | HTTPX (Async) | ESI sunucularına asenkron ve hızlı istek yönetimi. |

-----

## 📦 Kurulum ve Hazırlık

### 1\. Gereksinimler

  * Python 3.10+
  * Node.js v18+
  * npm veya yarn

### 2\. Backend Kurulumu

```bash
# Gerekli kütüphaneleri yükleyin
pip install fastapi uvicorn httpx
```

### 3\. Frontend Kurulumu

```bash
cd frontend
npm install
```

-----

## 🚦 Kullanım Rehberi

Sistemi başlatmak için ana dizindeki `baslat.bat` dosyasına çift tıklamanız yeterlidir. Bu işlem şunları yapar:

1.  **Backend'i (Port 8000)** sessiz modda başlatır.
2.  **Frontend'i (Port 5173)** ayağa kaldırır.
3.  Tarayıcınızda otomatik olarak Radar ekranını açar.

### Radar Ayarları

  * **Capacity (m³):** Geminizin boş kargo alanını girin. Hesaplamalar buna göre yapılır.
  * **Skills:** Oyun içindeki vergi yeteneklerinizi seçin.
  * **Range:** Kaç sistem uzağa kadar tarama yapılacağını belirleyin.

> **İpucu:** En yüksek kârlar genellikle **Salvage** kategorisindeki küçük hacimli ama yüksek değerli ürünlerden (örn: Logic Circuits) gelir.

-----

## 📊 Örnek Hesaplama Mantığı

Sistem, kârlılığı şu formülle doğrular:

$$Net\_Profit = (Sell\_Price - Buy\_Price) - (Sell\_Price \times Total\_Tax)$$

Burada `Total_Tax`, sizin yetenek seviyelerinize göre hesaplanan **Sales Tax** ve **Broker Fee** toplamıdır.

-----

## 📁 Dosya Yapısı

```text
EVE_trader/
├── main.py            # API ve Analiz motoru
├── map_data.json      # EVE evren haritası verisi
├── baslat.bat         # Görev kontrol dosyası
├── .gitignore         # Gereksiz dosyaların (node_modules vb.) listesi
└── frontend/          # React/Vite proje klasörü
```

-----

## ⚠️ Yasal Uyarı

Bu araç bir "bot" değildir. Oyun istemcisine (client) müdahale etmez, bellek okumaz. Sadece herkese açık olan resmi **EVE Swagger Interface (ESI)** verilerini kullanarak analiz yapar. Kullanımı güvenlidir.

-----

## 🤝 Katkıda Bulunma

Yeni ürün fikirleriniz veya UI iyileştirme önerileriniz varsa lütfen bir **Issue** açın veya **Pull Request** gönderin.
