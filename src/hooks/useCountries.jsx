import { useState } from "react";
import { useEffect } from "react";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUrl() {
      const url =
        "https://restcountries.com/v3.1/all?fields=name,capital,population,continents,flags";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Errore HTTP: " + response.status);
        }

        const data = await response.json();
        // finta promise per rallentare
        await new Promise((r) => setTimeout(r, 2000));

        setCountries(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }

    fetchUrl();
  }, []);
  return { countries, loading, error };
}
