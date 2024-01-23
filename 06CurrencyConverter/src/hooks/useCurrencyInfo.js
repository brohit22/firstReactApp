import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch currency data');
        }

        const result = await response.json();
        setData(result[currency]);
        console.log(result[currency]); // Move the console.log here if needed
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
