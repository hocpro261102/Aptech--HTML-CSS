function lietke() {
    let n = Number(document.getElementById('n').value);
    let displayString = "";
    for (i = 1; i < n; i++)
        if (i % 3 == 0) {
            displayString += `${i}, `
        }

    displayString = displayString.substring(0, displayString.length - 2)
    document.getElementById('result').value = displayString;
}