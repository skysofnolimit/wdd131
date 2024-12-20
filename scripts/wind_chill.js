 function calculateWindChill(tempF, windSpeedMph) {
    return (tempF <= 100 && windSpeedMph > 3) {
      const windChill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
      return Math.round(windChill);
    } else {
      return tempF;
    }
  }
  const temperature =77; // Fahrenheit
  const windSpeed =5; // Miles per hour
  
  const windChill = calculateWindChill(temperature, windSpeed);
  
  console.log(`Temperature: ${temperature}°F`);
  console.log(`Wind Speed: ${windSpeed} mph`);
  console.log(`Wind Chill: ${windChill}°F`);
 
document.getElementById("windChill").innerHTML = windChill;
