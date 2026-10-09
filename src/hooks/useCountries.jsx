import { useEffect, useState } from "react";

const DATA_URL = `${import.meta.env.BASE_URL}countries.json`;

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCountries() {
      try {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError(error);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadCountries();
  }, []);

  return { countries, loading, error };
}
