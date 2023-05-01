const FORMAT_MONEY = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
});
export function formatCards(num: number) {
    return FORMAT_MONEY.format(num);
}
