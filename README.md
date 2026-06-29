# CERN EP Summer Students Map

A clean, working React + Tailwind CSS + Leaflet project.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL shown in the terminal.

## Build for hosting

```bash
npm run build
```

Upload the `dist` folder to a static hosting space.

## Project structure

- `src/components/layout` - header, hero, footer
- `src/components/sidebar` - search, filter, student list
- `src/components/map` - Leaflet map, markers, popups
- `src/components/data` - CSV/data information cards
- `src/data` - starter JSON data
- `public/students.csv` - example Microsoft Forms export format

## CSV fields

```csv
firstName,lastName,city,country,university,lat,lng,photo,text,quote,linkedin,instagram,github,website,consent
```

Use the location of the university or affiliated institute, not nationality.
