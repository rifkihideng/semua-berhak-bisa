const BIDANG_VALID = ["pemrograman", "design", "jaringan", "office"];

export function validatePendaftaran(body) {
  const { nama, whatsapp, bidang, asal } = body || {};
  if (!nama || !whatsapp || !bidang) {
    return { error: "Field nama, whatsapp, dan bidang wajib diisi." };
  }
  if (!BIDANG_VALID.includes(bidang)) {
    return { error: "Bidang tidak valid." };
  }

  const namaBersih = String(nama).trim();
  const waBersih = String(whatsapp).trim();
  const asalBersih = asal ? String(asal).trim() : null;

  if (namaBersih.length > 100) {
    return { error: "Nama terlalu panjang." };
  }
  if (waBersih.length > 30 || !/^[0-9+\-\s()]+$/.test(waBersih)) {
    return { error: "Nomor WhatsApp tidak valid." };
  }
  if (asalBersih && asalBersih.length > 100) {
    return { error: "Asal kota terlalu panjang." };
  }

  return {
    data: {
      nama: namaBersih,
      whatsapp: waBersih,
      bidang,
      asal: asalBersih,
    },
  };
}
