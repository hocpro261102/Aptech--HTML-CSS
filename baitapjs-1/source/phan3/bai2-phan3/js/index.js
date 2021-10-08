function tamgiac() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c)
            document.getElementById('ketqua').value = `Đây là tam giác đều`;
        else {
            if (a == b || a == c || b == c)
                document.getElementById('ketqua').value = `Đây là tam giác cân`;
            else {
                if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == b * b + a * a)
                    document.getElementById('ketqua').value = `Đây là tam giác vuông`;
                else
                    document.getElementById('ketqua').value = `Đây là tam giác thường`;
            }
        }

    } else
        document.getElementById('ketqua').value = `Đây không phải là tam giác`;
}