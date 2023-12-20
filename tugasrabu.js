let harga1 = 10000
let harga2 = 30000
let harga3 = 50000
let hasil = harga1 + harga2 + harga3 
if(hasil> 10000){
    totallHarga = hasil * (10 / 100);
    bayar = hasil - totallHarga

}else {
   bayar = hasil + totallHarga
}
console.log(`${bayar} ribu`)





let lembur = 5
if(lembur < 6){
    gaji = "Rp.100.000"
}else if(lembur == 6){
    gaji = "Rp 200.000"
          
}else if(lembur > 6) {
    gaji = "Rp 300.000"
}
console.log(gaji)




let pintuAir = 650
if(pintuAir <= 500){
    aman = 'Status aman'
}else if(pintuAir <= 600){
    aman = 'waspada'
}else if(pintuAir <= 650){
    aman = 'siaga2'
}else if(pintuAir > 650){
    aman = "siaga 1"
}
console.log(aman)







