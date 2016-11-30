export const requiredFields = ({
        names,
        message
    }) => data =>
    names.reduce((errors, name) => {
        if (!data[name]) {
            errors[name] = message || 'Preenchimento obrigatório'
        }
        return errors
    }, {});

/**
 * Verifica se uma String está no formato MM/AAAA e se é um mês ano válido.
 * Exemplos de mês/ano válidos: 12/2016, 01/2000, 05/1990.
 * Exemplos de mês/ano inválidos: 13/2016 (mês inválido), aa/mmmm (contém alfa)
 * 12/0133 (ano inválido), 01/3022 (ano inválido, muito no futuro)
 *
 * @param {number} mesAno string contendo o mês/ano a ser validado
 * @return {boolean}
 */
export const validaMesAno = (mesAno) => {
    const regex = /^(0[1-9]|1[0-2])\/[1-2]\d{3}$/

    return regex.test(mesAno)
}
