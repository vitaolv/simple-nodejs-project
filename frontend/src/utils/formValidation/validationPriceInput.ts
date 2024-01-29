export function formatPrice(value: string) {
    let formattedValue = value.replace(/\D/g, "");
    formattedValue = formattedValue.replace(/(\d)(\d{2})$/, "$1,$2"); 
    formattedValue = formattedValue.replace(/(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${formattedValue}`;
}