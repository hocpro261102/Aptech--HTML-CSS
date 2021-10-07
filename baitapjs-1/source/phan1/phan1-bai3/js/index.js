function GPT() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let x1, x2;
    let s = b * b - 4 * a * c;
    console.log(s);
    if (s < 0) {
        document.getElementById('result').value = `Vô Nghiệm`;
    }
    if (s == 0) {

        x1 = x2 = (-b) / (2 * a);

        document.getElementById('result').value = `Nghiệm kép là ${x1}`;
    }
    if (s > 0) {
        x1 = (-b + Math.sqrt(s)) / (2 * a);
        x2 = (-b - Math.sqrt(s)) / (2 * a);
        document.getElementById('result').value = `Có 2 nghiệm x1=${x1}   ;    x2=${x2}`;
    }


}