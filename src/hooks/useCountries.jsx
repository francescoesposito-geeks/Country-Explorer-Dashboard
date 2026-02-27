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
        if (!response) {
          throw new Error("Errore HTTP: " + response.status);
        }

        const data = await response.json();
        console.log(data);

        setCountries(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchUrl();
  }, []);
  return { countries, loading, error };
}
