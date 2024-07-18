document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai input dari form
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;

    // Validasi input
    if (weight <= 0 || height <= 0) {
        alert('Berat dan Tinggi badan harus lebih dari 0');
        return;
    }

    // Menghitung BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Menentukan kategori BMI
    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Kelebihan berat badan';
    } else {
        bmiCategory = 'Kegemukan (obesitas)';
    }

    // Menampilkan hasil
    const result = `
        <p>BMI Anda adalah: ${bmi.toFixed(2)}</p>
        <p>Kategori: ${bmiCategory}</p>
    `;
    document.getElementById('result').innerHTML = result;
});
