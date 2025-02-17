function menu() {
    var navMobile = document.getElementById("navMobile");
    navMobile.classList.toggle("navMobileActive");

    if (navMobile.classList.contains("navMobileActive")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
}

function kirimPesan() {
  let nama = document.getElementById("nama").value.trim();
  let email = document.getElementById("email").value.trim();
  let nohp = document.getElementById("nohp").value.trim();
  let pesan = document.getElementById("pesan").value.trim();

  // Validasi jika ada input kosong
  if (!nama || !email || !nohp || !pesan) {
      alert("Harap isi semua kolom sebelum mengirim pesan.");
      return;
  }

  let whatsappNumber = "62879111521"; // Gunakan kode negara (62 untuk Indonesia)
  
  // Encode pesan untuk menghindari karakter aneh
  let text = `Halo, saya ${nama}%0AEmail: ${email}%0ANo HP: ${nohp}%0A${pesan}`;
  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  console.log("Membuka WhatsApp dengan URL:", whatsappURL); // Debugging untuk cek apakah URL sudah benar

  window.open(whatsappURL, "_blank");
}


function pesanLayanan(layanan) {
  let whatsappNumber = "6287891955577"; // Ganti 0 dengan 62 untuk format internasional
  let text = `Halo, saya ingin memesan layanan *${layanan}* di Glory Laundry.`;

  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");
}