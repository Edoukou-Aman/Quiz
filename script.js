function sum() {
    number = 6;
    nam = new Array();
    long = new Array();
    score = 0;
    for (n = 0; n <= (number - 1); n++) {
        nam[n] = document.getElementsByName("qst" + n);
        long[n] = nam[n].length;
        for (q = 0; q <= (long[n] - 1); q++) {
            if (nam[n][q].checked == true) { score = score + eval(nam[n][q].value); } else { score = score; }
        }
    }
    document.formulaire.result.value = score;
}