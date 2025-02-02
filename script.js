function menu() {
    var navMobile = document.getElementById("navMobile");
    navMobile.classList.toggle("navMobileActive");

    if (navMobile.classList.contains("navMobileActive")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
}