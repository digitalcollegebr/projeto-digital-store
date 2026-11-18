const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

/** 149.9 -> "R$ 149,90" */
export const formatPrice = (value) => currency.format(Number(value) || 0);

/** "1440" | 1440 | "1440px" -> "1440px" */
export const toPx = (value) => (typeof value === 'number' || /^\d+$/.test(value) ? `${value}px` : value);
