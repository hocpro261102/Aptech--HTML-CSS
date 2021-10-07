function GPT() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let x;
    if (a != 0) {
        x = (-b) / a;
        document.getElementById('result').value = `Phương trình ${a}x + ${b} = 0 có nghiệm là x=${x}`;
    } else {
        if (b == 0)
            document.getElementById('result').value = `Phương trình có vô số nghiệm`;
        else
            document.getElementById('result').value = `Phương trình vô nghiệm`;

    }
}