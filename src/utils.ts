import { CARDS, DEFAULT_CARD_VALUE } from './constants';
import type { Card } from './types';

function isCard(card: string | null): card is Card {
  return typeof card === 'string' && (CARDS as readonly string[]).includes(card);
}

export function getInitialCard(): Card {
  const storedCard = window.localStorage.getItem('card');

  return isCard(storedCard) ? storedCard : DEFAULT_CARD_VALUE;
}
