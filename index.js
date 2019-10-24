/*
    Based on article: https://www.geradorcpf.com/javascript-validar-cpf.htm
*/
export const validateCPF = cpf => {
    var rev;
    cpf = cpf.replace(/[^\d]+/g, '');
    const knownCPFInvalid = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];
    const hasAnIncorrectLenght = cpf.length != 11;
    const thereIsInknownCPFInvalid = knownCPFInvalid.indexOf(cpf) > -1;
    const isEmpty = '';
    const getRevFromDigitPosition = (digitPosition) => {
        var add = 0;

        for (var i = 0; i < digitPosition; i++) {
            add += parseInt(cpf.charAt(i)) * ((digitPosition + 1) - i);
        }

        rev = 11 - (add % 11);

        if (rev == 10 || rev == 11) {
            rev = 0;
        }

        return rev;
    }
    const checkIfRevIsValidFromDigitPosition = (digitPosition) => {
        var rev = getRevFromDigitPosition(digitPosition);
        return rev == parseInt(cpf.charAt(digitPosition));
    }

    // check if cpf is valid
    if (isEmpty || thereIsInknownCPFInvalid || hasAnIncorrectLenght) {
        return false;
    }

    // validate first digit
    if (!checkIfRevIsValidFromDigitPosition(9)) {
        return false;
    }

    // validate second digit
    if (!checkIfRevIsValidFromDigitPosition(10)) {
        return false;
    }

    return true;
}