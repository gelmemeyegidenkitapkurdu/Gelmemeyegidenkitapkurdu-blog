# Gelmemeyegiden Kitap Kurdu - Blog Projesi

## Proje Açıklaması
Bu bir kitap blogu projesidir. Pembe, beyaz ve mor renk temasında tasarlanmış, admin yönetimli bir blog sistemidir.

## Admin Bilgileri
- **Admin Email**: gelmemeyegidenkitapkurdu@gmail.com  
- **Admin Şifre**: Elif.6628.Akin
- **Önemli**: Admin bilgileri gizlidir ve demo değildir, sadece admin tarafından bilinmelidir.

## Özellikler
### Kullanıcı Yönetimi
- Üye kayıt sistemi (email + şifre)
- Kullanıcı girişi
- Admin girişi (özel yetkilerle)
- Profil resmi seçme özelliği

### İçerik Yönetimi
- **Yazılar**: Admin tarafından yayınlanır, herkes okuyabilir
- **Anketler**: Admin oluşturur, herkes katılabilir
- **Kitaplar**: Admin PDF kitap ekler, kullanıcılar okur ama indiremez
- **Röportaj Köşesi**: Yazarlarla röportajlar
- **Hakkımda**: Admin profil ve iletişim bilgileri

### Admin Yetkileri
- Tüm içerik türlerinde CRUD işlemleri
- Ana sayfa düzenleme
- Etkileşim analitikleri görme
- Medya yükleme (resim, video, PDF)

## Teknik Gereksinimler
### Backend (Supabase)
- Kullanıcı authentication
- Admin yetkilendirme
- Veritabanı yönetimi
- Dosya depolama
- Etkileşim takibi

### Frontend
- Responsive tasarım
- Animasyonlu "GELMEMEYEGİDENKİTAPKURDU" başlığı
- Modal sistemleri
- Kategori kartları
- Navigasyon menüsü

## Renk Paleti
- Ana renkler: Pembe (#ec4899), Mor (#9333ea), Beyaz (#ffffff)
- Gradient arka planlar
- Şeffaf overlay'ler

## Güvenlik
- Admin bilgileri şifrelenmiş olarak saklanmalı
- Dosya yükleme kısıtlamaları
- XSS koruması
- SQL injection koruması

## Kritik Kod Notları
- JavaScript olay işleyicilerinde (onclick) ID'leri ve indeksleri tırnak içinde aktarın (örn: `onclick="function('${id}', '${index}')"`)
- Modal içeriklerinde metin sarmalama özelliklerine dikkat edin (`white-space: pre-wrap; word-wrap: break-word;`)
- LocalStorage tabanlı veri depolama önemlidir (özellikle oy verme durumlarında)
- Admin/normal kullanıcı ayrımı `localStorage.getItem('isAdminLoggedIn')` kontrolü ile yapılmaktadır
- Anket oylamalarında onay dialog'u kullanılmaktadır
- Anket sonuçları sadece yüzdelik olarak gösterilir, oy sayıları sadece admin için görünürdür

## Dosya Yapısı ve Sayfa Açıklamaları

### Ana Sayfalar
- **index.html**: Ana giriş sayfası, tüm kategorilere erişim
- **yazilar.html**: Blog yazıları listesi ve detay görünümü
- **anketler.html**: Katılımcı anketler ve oylama sistemi
- **kitaplar.html**: PDF kitap listesi ve okuyucu
- **roportaj.html**: Yazar röportajları listesi
- **hakkimda.html**: Admin profili ve iletişim bilgileri

### Yardımcı Dosyalar
- **supabase-client.js**: Supabase API entegrasyonu, tüm veri işlemleri burada
- **data-persistence.js**: LocalStorage işlemleri (yedek veri saklama mekanizması)

## Supabase Tabloları ve Yapısı

### Veritabanı Tabloları
- **blog_posts**: Blog yazıları (title, content, author, image_url, created_at, status)
- **polls**: Anketler (question, options, votes, created_at, end_date, status)
- **books**: Kitaplar (title, author, description, cover_image_url, file_url, created_at)
- **interviews**: Röportajlar (author_name, author_title, content, image_url, created_at)
- **whatsapp_interviews**: WhatsApp röportajları (title, author, image_url, created_at, status)
- **whatsapp_messages**: WhatsApp mesajları (interview_id, sender, message, message_order)
- **profile**: Admin profili (name, title, bio, image, email, social links)

### Supabase Storage Buckets
- **images**: Genel resimler için
- **books**: PDF kitap dosyaları için
- **post-images**: Blog yazı resimleri için
- **poll-images**: Anket resimleri için

## Anketler Modülü Özellikleri
- Onay dialogu ile oy verme işlemi
- Yüzdelik bazlı sonuç gösterimi
- Admin için sayısal oy gösterimi
- Taslak veya yayınlanan anket durumları
- Resimli anket desteği
- Bitiş tarihi ayarlama

## Yazılar Modülü Özellikleri
- Zengin metin formatında içerik
- Resim destekli yazılar
- Modal ile detay görünümü
- Taslak veya yayınlanan yazı durumları
- Yazar bilgisi ve tarih gösterimi

## Geliştirme Notları
- JavaScript kodlarında string olarak geçirilen ID'lerin daima tek tırnak içine alınması gerekir
- Modal içinde uzun metinlerin düzgün görünmesi için CSS özellikleri uygulanmalıdır
- Admin/normal kullanıcı kontrolü `localStorage.getItem('isAdminLoggedIn')` ile yapılır
- Tüm dosya yükleme işlemleri için Supabase Storage kullanılır
- Anket oylamalarının takibi localStorage ile yapılır (oyunu kullanmış kişileri tespit etmek için)