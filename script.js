// =========================================================
// SCRIPT KALKULATOR SIMULASI VIRALYUK! — KELOMPOK 1 WEBDEV A
// Peran: Software Engineer (SE 1 & SE 2)
// =========================================================

// 1. Mengambil elemen HTML berdasarkan kontrak ID
const pilihPaket = document.getElementById("pilih-paket");
const inputBulan = document.getElementById("jumlah-bulan");
const inputPromo = document.getElementById("kode-promo");
const tombolHitung = document.getElementById("tombol-hitung");
const areaHasil = document.getElementById("hasil-perhitungan");

// 2. Fungsi utama untuk menghitung simulasi biaya langganan
function hitungBiayaLangganan() {
    // Membaca nilai input dari formulir
    const hargaPaket = Number(pilihPaket.value);
    const jumlahBulan = Number(inputBulan.value);
    const kodePromo = inputPromo.value.trim().toUpperCase();

    // Validasi jumlah bulan minimal 1
    if (!inputBulan.value || jumlahBulan < 1 || isNaN(jumlahBulan)) {
        areaHasil.innerHTML = `
            <p style="color: #E8506B; font-weight: 600;">
                Mohon masukkan jumlah bulan berlangganan minimal 1 bulan agar simulasi dapat dihitung.
            </p>
        `;
        return;
    }

    // Menghitung harga awal (SE 1)
    const hargaAwal = hargaPaket * jumlahBulan;

    // Mengecek syarat diskon 10%: kode promo VIRALYUK atau jumlah bulan >= 3 (SE 2)
    let diskon = 0;
    let keteranganPromo = "Tidak ada diskon yang diterapkan.";

    if (kodePromo === "VIRALYUK" || jumlahBulan >= 3) {
        diskon = hargaAwal * 0.10;
        keteranganPromo = "Selamat! Anda mendapatkan diskon 10% (Promo VIRALYUK / Langganan ≥ 3 bulan).";
    }

    // Menghitung total akhir
    const totalBayar = hargaAwal - diskon;

    // Menampilkan rincian ke layar dalam format Rupiah (id-ID)
    areaHasil.innerHTML = `
        <p><strong>Rincian Simulasi Biaya Anda:</strong></p>
        <p>Harga Awal: <strong>Rp${hargaAwal.toLocaleString("id-ID")}</strong></p>
        <p>Potongan Diskon: <strong>Rp${diskon.toLocaleString("id-ID")}</strong></p>
        <p>Total Bayar: <strong style="color: #E8506B; font-size: 1.15rem;">Rp${totalBayar.toLocaleString("id-ID")}</strong></p>
        <p style="margin-top: 8px; font-size: 0.88rem; color: #3F5B2E;">${keteranganPromo}</p>
    `;
}

// 3. Menjalankan fungsi saat tombol hitung diklik
tombolHitung.addEventListener("click", hitungBiayaLangganan);
