import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number, currency: string): string {
  let locale = 'en-US';
  let currencyCode = 'USD';
  if (currency === 'KZT') {
    locale = 'kk-KZ';
    currencyCode = 'KZT';
  } else if (currency === 'RUB') {
    locale = 'ru-RU';
    currencyCode = 'RUB';
  }
  return amount.toLocaleString(locale, { style: 'currency', currency: currencyCode, maximumFractionDigits: 0 });
}
