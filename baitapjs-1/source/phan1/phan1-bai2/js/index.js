function timMax() {
    let max;
    let a = document.getElementById('a').value;
    console.log(a);
    let b = document.getElementById('b').value;
    if (a > b)
        max = a;
    else
        max = b;
    document.getElementById('result').value = max;

}