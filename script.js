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
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let nohp = document.getElementById("nohp").value;
  let pesan = document.getElementById("pesan").value;

  let whatsappNumber = "628979111521"; // Ganti 0 dengan 62 untuk format internasional
  let text = `Halo, saya ${nama} (%0AEmail: ${email}, %0ANo HP: ${nohp}) ingin bertanya: %0A${pesan}`;

  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

  window.open(whatsappURL, "_blank");
}

function pesanLayanan(layanan) {
  let whatsappNumber = "628979111521"; // Ganti 0 dengan 62 untuk format internasional
  let text = `Halo, saya ingin memesan layanan *${layanan}* di Glory Laundry.`;

  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");
}