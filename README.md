Includes scenarios to test weather forecast web application for a given location.

### Scenarios -  Acceptance testing for weather forecast application

Which tests the following requirements

* Enter city name, get 5 day weather forecast
* Select day, get 3 hourly forecast
* Select day again, hide 3 hourly forecast
* Daily forecast should summarise the 3 hour data:
  * Most dominant (or current) condition
  * Most dominant (or current) wind speed and direction
  * Aggregate rainfall
  * Minimum and maximum temperatures
* All values should be rounded down


You'll need node and npm installed - first off, install the required dependencies:

    $ npm install

To run test scenarios:

    $ npm run test

### Both application and test scenario runs with one same cammand
