import { describe, it, expect } from 'vitest';
import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
    it('formatta un prezzo con decimali in euro con virgola', () => {
        expect(formatPrice(109.95)).toBe('109,95\u00A0€');
    });

    it('aggiunge i decimali a un prezzo intero', () => {
        expect(formatPrice(168)).toBe('168,00\u00A0€');
    });

    it('gestisce lo zero', () => {
        expect(formatPrice(0)).toBe('0,00\u00A0€');
    });
});