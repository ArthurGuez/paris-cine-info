# Paris-Ciné Info

Designs finaux disponibles [ici](https://www.figma.com/file/l8pmDTYzH7hf1EvOoCsHYl/Paris-Cin%C3%A9-Info?type=design&node-id=1302%3A4623&mode=design&t=LJ9lkecIQhNYlOCT-1).

## L'application et ses fonctionnalités

L'application utilise React, Next 14 (App Router), Typescript, React Table et Panca CSS. Elle est branchée à une API Rest.

Elle permet d'accéder à une liste de films en salle à Paris. L'utilisateur peut filtrer et trier les films selon un certain nombre de critères (par titre, par date de sortie, par genre, par salle de cinéma, par arrondissement...).

## Technologies

- Next.js : framework React incluant un router, des fonctionnalités SEO, le SSR, et permettant d'utiliser les Server Components (render des composants par le serveur, réduisant ainsi la charge côté client et améliorant les performances de chargement des pages).
- React Table : facilite la gestion des données dans des tableaux complexes en incluant les fonctionnalités pour trier, filtrer, et paginer. Aucun style n'est imposé, les tableaux sont donc totalement personnalisables.
- Panda CSS : librairie de CSS-in-JS zero runtime (CSS généré au build) compatible avec les Server Components.
- Typescript : pour une meilleure maintenanibilité et fiabilitié du code, mais aussi pour améliorier la détection des erreurs.

## Structure du projet

Le projet est structuré en respectant les principes de l'atomic design.
Les composants sont rangés dans des dossiers atoms, molecules et organisms.
