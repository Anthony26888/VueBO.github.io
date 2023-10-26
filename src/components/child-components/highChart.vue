<template>
  <div>
    <!-- Your Highcharts component will go here -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      candlestickData: [], // Store your candlestick data here
    };
  },
  created() {
    axios
      .get("https://api.binance.com/api/v1/klines", {
        params: {
          symbol: "BTCUSDT", // Example trading pair (Bitcoin to USDT)
          interval: "1d", // Example interval (1 day)
          limit: 100, // Number of data points you want to fetch
        },
      })
      .then((response) => {
        // Process the response data here and update candlestickData state
        this.candlestickData = response.data.map((item) => ({
          x: item[0], // Timestamp
          open: parseFloat(item[1]), // Open price
          high: parseFloat(item[2]), // High price
          low: parseFloat(item[3]), // Low price
          close: parseFloat(item[4]), // Close price
        }));
      })
      .catch((error) => {
        console.error("Error fetching data from Binance API:", error);
      });
  },
};
</script>
