function getLocation() {
  fetch("http://ip-api.com/json/")
    .then(response => response.json())
    .then(data => {
      console.log(data.city);
    })
    .catch(error => {
      console.error("Errore durante la richiesta di geolocalizzazione: ", error);
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;  // ottiene la latitudine
          const lng = position.coords.longitude;  // ottiene la longitudine
          const accuracy = position.coords.accuracy; // ottiene l'accuratezza della posizione in metri
          const altitude = position.coords.altitude; // ottiene l'altitudine in metri rispetto al livello del mare, se disponibile
          const altitudeAccuracy = position.coords.altitudeAccuracy; // ottiene l'accuratezza dell'altitudine in metri, se disponibile
          const heading = position.coords.heading; // ottiene l'orientamento in gradi rispetto al Nord, se disponibile
          const speed = position.coords.speed; // ottiene la velocità in metri al secondo, se disponibile
  
          console.log(`Latitudine: ${lat}`);
          console.log(`Longitudine: ${lng}`);
          console.log(`Accuratezza: ${accuracy} metri`);
          console.log(`Altitudine: ${altitude} metri`);
          console.log(`Accuratezza altitudine: ${altitudeAccuracy} metri`);
          console.log(`Orientamento: ${heading} gradi`);
          console.log(`Velocità: ${speed} metri al secondo`);
        },
        (error) => {
          console.error(`Errore di geolocalizzazione: ${error.message}`);
        },
        {
          enableHighAccuracy: true, // richiede l'accuratezza massima possibile
          timeout: 5000, // timeout dopo 5 secondi
          maximumAge: 0, // non utilizza la cache della posizione precedente
        }
      );
    } else {
      console.error("Geolocalizzazione non supportata dal tuo browser");
    }
  }