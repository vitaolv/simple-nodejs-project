export function formatPrice(value: string) {
    let formattedValue = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    formattedValue = formattedValue.replace(/(\d)(\d{2})$/, "$1,$2"); // Adiciona a vírgula antes dos últimos dois dígitos
    formattedValue = formattedValue.replace(/(?=(\d{3})+(?!\d))/g, "."); // Adiciona um ponto a cada três dígitos
    return `R$ ${formattedValue}`;
}