function uoc() {
    let ucln = 1;
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    if (a > b) {
        for (i = 2; i < b; i++)
            if (a % i == 0 && b % i == 0)
                ucln = i;
    } else
        for (i = 2; i < a; i++)
            if (a % i == 0 && b % i == 0)
                ucln = i;
    document.getElementById('result').value = `Ước chung lớn nhất là: ${ucln}`;
}