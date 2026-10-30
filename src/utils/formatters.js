/**
 * Formata um valor numérico para o formato de moeda brasileiro (BRL).
 * @param {number} value
 * @returns {string} Ex: "R$ 45,00"
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata uma string de telefone para exibição (XX) XXXXX-XXXX.
 * @param {string} phone
 * @returns {string}
 */
export function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return phone;
}

