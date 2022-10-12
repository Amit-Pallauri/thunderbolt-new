function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = "https://razrcorp.com/";

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}

export default sendToAnalytics;
