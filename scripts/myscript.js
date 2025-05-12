// ==== MESAJLARI KAYDETME ====
function mesajEkle(yeniMesaj) {
    var mesajlar = JSON.parse(localStorage.getItem('mesajlar')) || [];
    mesajlar.push(yeniMesaj);
    localStorage.setItem('mesajlar', JSON.stringify(mesajlar));
}

// ==== İLETİŞİM FORMU ====
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        var yeniMesaj = {
            name: name,
            email: email,
            message: message,
            type: 'İletişim'
        };

        mesajEkle(yeniMesaj);
        alert('İletişim mesajı kaydedildi!');
        this.reset();
        window.location.href = "message.html";
    });
}

// ==== GERİ BİLDİRİM FORMU ====
if (document.getElementById('feedbackForm')) {
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('fb_name').value;
        var email = document.getElementById('fb_email').value;
        var message = document.getElementById('fb_message').value;

        var yeniMesaj = {
            name: name,
            email: email,
            message: message,
            type: 'Geri Bildirim'
        };

        mesajEkle(yeniMesaj);
        alert('Geri bildirim kaydedildi!');
        this.reset();
        window.location.href = "message.html";
    });
}

// ==== DESTEK FORMU ====
if (document.getElementById('supportForm')) {
    document.getElementById('supportForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('sup_name').value;
        var email = document.getElementById('sup_email').value;
        var message = document.getElementById('sup_message').value;

        var yeniMesaj = {
            name: name,
            email: email,
            message: message,
            type: 'Destek'
        };

        mesajEkle(yeniMesaj);
        alert('Destek mesajı kaydedildi!');
        this.reset();
        window.location.href = "message.html";
    });
}

// ==== REZERVASYON FORMU ====
if (document.getElementById('reservationForm')) {
    document.getElementById('reservationForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('resName').value;
        var email = document.getElementById('resEmail').value;
        var date = document.getElementById('resDate').value;
        var people = document.getElementById('resPeople').value;
        var hotel = document.getElementById('resHotel').value;

        var yeniMesaj = {
            name: name,
            email: email,
            message: `Tarih: ${date} / Kişi: ${people} / Otel: ${hotel}`,
            type: 'Rezervasyon'
        };

        mesajEkle(yeniMesaj);
        alert('Rezervasyon kaydedildi!');
        this.reset();
        window.location.href = "message.html";
    });
}
