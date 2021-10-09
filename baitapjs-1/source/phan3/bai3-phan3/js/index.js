function tong() {
    let n = Number(document.getElementById('n').value);
    let s = 0;
    if (n % 2 == 0) {
        for (i = 1; i <= n; i++)
            if (i % 2 == 0)
                s += i;
    } else {
        for (i = 1; i <= n; i++)
            if (i % 2 != 0)
                s += i;
    }
    document.getElementById('ketqua1').value = s;
}

function kiemtra() {
    let n = Number(document.getElementById('n').value);
    if (n % 2 == 0)
        document.getElementById('ketqua2').value = `${n} là số chẵn`;
    else
        document.getElementById('ketqua2').value = `${n} là số lẻ`;
}

function hoanhao() {
    let n = Number(document.getElementById('n').value);
    let x = 0;
    for (i = 1; i < n; i++) {
        if (n % i == 0) {
            x += i;
        }
    }
    if (x == n)
        document.getElementById('ketqua3').value = `${n} là số hoàn hào`;
    else
        document.getElementById('ketqua3').value = `${n} không phải là số hoàn hào`;
}