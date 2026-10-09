# Country Explorer

Dashboard React per esplorare 250 paesi e territori: ricerca per nome, filtro per continente e ordinamento per popolazione.

## Funzionalità

- Ricerca per nome mentre scrivi, anche con una parte del nome (per esempio "ital")
- Filtro per continente, con l'elenco dei continenti ricavato dai dati
- Ordinamento per nome o per popolazione, crescente e decrescente
- Pulsante per azzerare ricerca e filtri, attivo solo quando serve
- Card con bandiera, capitale, continente, lingue, valuta, prefisso telefonico, superficie, densità (calcolata da popolazione e superficie) e popolazione, con una barra che la confronta con quella del paese più popoloso
- Stati di caricamento, errore e "nessun risultato"
- Layout responsive e tema chiaro o scuro in base alle impostazioni del sistema

## Tecnologie

- **React 19** con hook (`useState`, `useEffect`, `useMemo`) e un custom hook per il caricamento dei dati
- **Vite** come bundler
- **CSS** senza librerie, con variabili per i colori del tema chiaro e scuro
- **ESLint**

## Come avviarlo

Requisiti: [Node.js](https://nodejs.org/) 20.19 o successivo.

```bash
git clone https://github.com/francescoesposito-geeks/Country-Explorer-Dashboard.git
cd Country-Explorer-Dashboard
npm install
npm run dev
```

Poi apri [http://localhost:5173](http://localhost:5173).

| Comando           | Cosa fa                                |
| ----------------- | -------------------------------------- |
| `npm run build`   | Build di produzione                    |
| `npm run preview` | Avvia la build di produzione in locale |
| `npm run lint`    | Controllo del codice con ESLint        |

## Struttura del progetto

```
public/
└── countries.json          # dati dei paesi
src/
├── components/
│   ├── SearchBar.jsx       # campo di ricerca
│   ├── FilterBar.jsx       # filtro per continente, ordinamento, azzera filtri
│   ├── CountryGrid.jsx     # griglia delle card
│   ├── CountryCard.jsx     # card del singolo paese
│   └── LoadingSpinner.jsx  # indicatore di caricamento
├── hooks/
│   └── useCountries.jsx    # caricamento dei dati con stato di loading ed errore
└── App.jsx                 # stato di ricerca e filtri, risultati filtrati con useMemo
```

## Dati

Il progetto usava l'API pubblica REST Countries v3.1, che è stata dismessa e ora richiede un account con chiave API. Per far funzionare l'app senza chiavi, i dati sono in `public/countries.json` e vengono caricati con `fetch`, come una normale API.

- Nomi, capitali, continenti, lingue, valute, prefissi e superficie: [mledoze/countries](https://github.com/mledoze/countries) (licenza ODbL)
- Popolazione (stime 2020): [apilayer/restcountries](https://github.com/apilayer/restcountries) (licenza MPL-2.0)
- Bandiere: [flagcdn.com](https://flagcdn.com)

## Contesto

Progetto realizzato come esercitazione durante lo stage da sviluppatore web presso Geekcreations S.r.l. (febbraio–marzo 2026).
