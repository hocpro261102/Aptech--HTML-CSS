function giaithua() {
    let p = 1;
    let n = document.getElementById('n').value;
    for (i = 1; i <= n; i++) {
        p *= i;
    }
    document.getElementById('ketqua1').value = p;
}

function chanle() {
    let n = document.getElementById('n').value;
    if (n % 2 == 0) {
        document.getElementById('ketqua2').value = `${n} là số chẵn`;
    } else {
        document.getElementById('ketqua2').value = `${n} là số lẻ`;
    }


}

function tong() {
    let n = document.getElementById('n').value;
    let s = 0;
    for (i = 1; i <= n; i++) {
        s += i;
    }
    document.getElementById('ketqua3').value = s;

}

function chinhphuong() {
    let n = document.getElementById('n').value;
    let h = Math.sqrt(n);
    if (Number.isInteger(h))
        document.getElementById('ketqua4').value = `Đây là số chính phương`;
    else
        document.getElementById('ketqua4').value = `Đây không phải số chính phương`
}