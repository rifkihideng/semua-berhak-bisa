const BIDANG_VALID = ["pemrograman", "design", "jaringan", "office"];

export function validatePendaftaran(body) {
  const { nama, whatsapp, bidang, asal } = body || {};
  if (!nama || !whatsapp || !bidang) {
    return { error: "Field nama, whatsapp, dan bidang wajib diisi." };
  }
  if (!BIDANG_VALID.includes(bidang)) {
    return { error: "Bidang tidak valid." };
  }
  return {
    data: {
      nama: String(nama).trim(),
      whatsapp: String(whatsapp).trim(),
      bidang,
      asal: asal ? String(asal).trim() : null,
    },
  };
}
