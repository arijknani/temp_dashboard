#include <DHT.h>
#include <DHT_U.h>

#include <ESP8266WiFi.h>


#define DHTPIN D4// DHT11 data pin is connected to GPIO2 on ESP8266
#define DHTTYPE DHT11  // DHT11 sensor type

const char* ssid = "OPPO A54";
const char* password = "iheb0000";

WiFiClient wifiClient;
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);

  // Connect to Wi-Fi network
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
  }

  // Initialize DHT11 sensor
  dht.begin();
}

void loop() {
  // Read temperature and humidity from DHT11 sensor
  float temperature = dht.readTemperature();
  

  // Check if any errors occurred while reading from the DHT11 sensor
  if (isnan(temperature)) {
    Serial.println("Error reading from DHT11 sensor");
    return;
  }

  // Print the temperature and humidity values to the serial monitor
  Serial.println(temperature);

  delay(2000);
}