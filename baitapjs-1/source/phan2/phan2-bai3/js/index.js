function tong() {
    let n = Number(document.getElementById('n').value);
    let s = 0;
    for (i = 1; i <= n; i++)
        s += i;
    document.getElementById('result1').value = `Tổng là: ${s}`;
}

function chuso() {
    let n = Number(document.getElementById('n').value);
    if (n > 9 && n < 100)
        document.getElementById('result2').value = `n là số có 2 chữ số`;
    else
        document.getElementById('result2').value = `n không phải  là số có 2 chữ số`;
}

function nguyento() {
    let n = Number(document.getElementById('n').value);
    let t = 1;
    if (n === 1)
        document.getElementById('result3').value = `n không phải là số nguyên tố `;
    if (n === 2)
        document.getElementById('result3').value = `n  là số nguyên tố `;
    for (i = 2; i < n; i++) {
        if (n % i == 0)
            t = 0;
    }

    if (t == 0)
        document.getElementById('result3').value = `n không phải là số nguyên tố `;
    else
        document.getElementById('result3').value = `n  là số nguyên tố `;


}

function tongcacso() {
    let n = Number(document.getElementById('n').value);
    let s2 = 0;
    let du = 0;
    while (n >= 1) {
        du = n % 10;
        n -= du;
        n /= 10;
        s2 += du;
    }
    document.getElementById('result4').value = `Tổng các chữ số trong số là ${s2}`;
}