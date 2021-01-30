//
// verifica se o numero divido por 5 é igual a 0
// (service)
function multiplos_de_5(valor) {
    if ((valor % 5) == 0) {
        return true;
    } else {
        return false;
    }
};

// controller
function forma_d(valor) {
    if (multiplos_de_5(valor)) {
        return { resultado: "É multiplo de 5" };
    } else {
        return { resultado: "Não é multiplo de 5" };
    }
};

// controller
function forma_e(valor) {
    if (multiplos_de_5(valor)) {
        return { resultado: valor + " é multiplo de 5" };
    } else {
        return { resultado: valor + " não é multiplo de 5" };
    }
};

module.exports = { multiplos_de_5, forma_d, forma_e };
