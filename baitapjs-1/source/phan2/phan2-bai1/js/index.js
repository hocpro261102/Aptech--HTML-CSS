function timmax() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    let max = a;

    if (max < b)
        max = b;
    if (max < c)
        max = c;


    document.getElementById('result').value = `Max là ${max}`;
}