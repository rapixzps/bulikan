// Fungsi untuk nambah ucapan ke list
function kirimUcapan() {
  const input = document.getElementById("wishInput");
  const list = document.getElementById("wishList");

  if (input.value.trim() !== "") {
    const p = document.createElement("p");
    p.textContent = "💬 " + input.value;
    list.appendChild(p);
    input.value = "";
  } else {
    alert("Tulis ucapan dulu bro 😎");
  }
}