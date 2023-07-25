/* eslint-disable eqeqeq */
export const formatRupiah = (angka, useK = false, useIDR = true) => {
  if (angka == null) {
    return "IDR -";
  }
  angka = angka.toString();
  var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (useK) {
    return "IDR " + ribuan[0] + "K";
  }

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    let separator = sisa ? "," : "";
    rupiah += separator + ribuan.join(",");
  }

  rupiah = split[1] != undefined ? rupiah + "." + split[1] : rupiah;

  return useIDR ? `IDR ${rupiah}` : rupiah;
};
