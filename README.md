# Paris-Ciné Info

Final designs available [here](https://www.figma.com/file/l8pmDTYzH7hf1EvOoCsHYl/Paris-Cin%C3%A9-Info?type=design&node-id=1302%3A4623&mode=design&t=LJ9lkecIQhNYlOCT-1).

## Installation and Running the Application

```sh
pnpm i
```

```sh
pnpm run dev
```

Accessible at: http://localhost:3001

## The Application and Its Features

The application uses React, TanStack Router, TypeScript, React Table, and Tailwind CSS. It is connected to a REST API.

It provides access to a list of movies currently playing in Paris. Users can filter and sort movies based on various criteria (by title, release date, genre, cinema, district, etc.).

## Technologies

- **TanStack Router**: A type-safe and flexible routing library for React, offering fine-grained control over navigation, state management, and data loading.
- **TanStack Table**: Simplifies data management in complex tables by including features for sorting, filtering, and pagination. No predefined styles are imposed, making the tables fully customizable.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development with a highly customizable design system, improving maintainability and consistency.
- **TypeScript**: Enhances code maintainability and reliability while also improving error detection.

## Project Structure

The project follows the principles of Atomic Design.  
Components are organized into **atoms, molecules, and organisms** folders.
