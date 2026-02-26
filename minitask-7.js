const nilai = {
    matematika : 90,
    bahasa_inggris : 80,
    bahasa_indonesia : 85,
    ipa : 90
}

function hitungNilai(nilai){
    const {matematika, bahasa_inggris, bahasa_indonesia, ipa}= nilai
    let nilai_total = matematika+bahasa_inggris+bahasa_indonesia+ipa
    let rata_rata = nilai_total/Object.keys(nilai).length

    const hasil =[nilai_total, rata_rata]
    return hasil
}

const hasil = hitungNilai(nilai)

console.log("Nilai Total : "+hasil[0])
console.log("Rata - rata : "+hasil[1])
