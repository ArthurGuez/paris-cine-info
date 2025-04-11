import { getRouteApi, useNavigate } from '@tanstack/react-router';
import type { Card, NestedOptionGroup } from '../../../types';
import { useState } from 'react';
import Select from '../../atoms/inputs/Select';

const CARD_FILTER_TITLE = 'Carte';

const CARD_FILTER: NestedOptionGroup<Card> = {
  name: 'card',
  defaultOption: { label: 'Toutes', value: 'all' },
  nestedOptionGroup: [
    {
      name: 'illimites',
      label: 'Illimités',
      options: [
        { label: 'UGC Illimité', value: 'ugc' },
        { label: 'Pathé CinéPass', value: 'pass' },
        { label: 'Cinémathèque LibrePass', value: 'librepass' },
      ],
    },
    {
      name: 'multi_places',
      label: 'Multi-Places',
      options: [
        { label: 'Ciné Carte CIP', value: 'cip' },
        { label: 'Pathé CinéCarte', value: 'cinecarte' },
        { label: 'Le Club Multiciné', value: 'multicine' },
        { label: 'MK2 Carte 5', value: 'mk2' },
        { label: 'Maison Dulac Cinema', value: 'dulac' },
        { label: "UGC 'la carte'", value: 'lacarte' },
      ],
    },
    {
      name: 'illimites_sans_supplement',
      label: 'Illimités (sans supplément)',
      options: [
        { label: 'UGC Illimité', value: 'ugc!' },
        { label: 'Pathé CinéPass', value: 'pass!' },
        { label: 'Cinémathèque LibrePass', value: 'librepass!' },
      ],
    },
    {
      name: 'combos_illimites',
      label: 'Combos Illimités',
      options: [
        { label: 'LibrePass + UGC', value: 'librepass|ugc' },
        { label: 'LibrePass + Pathé', value: 'librepass|pass' },
        { label: 'Pathé + UGC', value: 'ugc|pass' },
        { label: 'Pathé ET UGC', value: 'ugc,pass' },
      ],
    },
    { name: 'autres', label: 'Autres', options: [{ label: 'Cinéchèques', value: 'cinecheques' }] },
  ],
};

const routeApi = getRouteApi('/');

export default function CardFilter() {
  const { card: cardSearchParam = 'all' } = routeApi.useSearch();
  const [card, setCard] = useState<Card>(cardSearchParam);
  const navigate = useNavigate({ from: '/' });

  function handleCardFilterChange(newCard: Card) {
    void navigate({
      to: '/',
      search: (prevSearch) => ({ ...prevSearch, card: newCard === 'all' ? undefined : newCard }),
    });
    setCard(newCard);
  }

  return (
    <div className="flex flex-col gap-y-2.5">
      <h3 className="text-body uppercase">{CARD_FILTER_TITLE}</h3>
      <Select
        onChange={handleCardFilterChange}
        title={CARD_FILTER_TITLE}
        optionGroup={CARD_FILTER}
        value={card}
      />
    </div>
  );
}
