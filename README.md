# Weather-App
A simple weather application to get the weather of a given city.
  
To get the weather details, OpenWeather API has been used.  
  
**_The video for the deployed application is available here._**(https://youtu.be/3HSjQ2nIvJc)
  
### This repository contains two different solutions for the application.  
1. FrontEnd - ReactJS, BackEnd - NodeJS (in progress)
2. FrontEnd - Javascript, Backend - NodeJS

### Features:
1. The Frontend and backend code has been deployed on AWS instance.  
2. Can be used over cloud.  
3. Uses OpenWeather API which is free.  
4. Input accepts city names or city name, country code.  
5. Gives the exact error given by the weather API to the user.
6. Required Validation for input field.
7. Provides Various details - Temperature, Humidity, Pressure, Wind.
8. Provides overall description of weather.
9. Provides weather icon corresponsing to the weather condition.
10. Provides temperature conversion from Fahrenheit to Celsius and vice versa.  
  
### Steps to deploy the code:  
1. Create an EC2 instance on AWS with Linux AMI.
2. SSH into the instance and install node, npm, apache web server.  
3. Copy the client code in /var/www/html/Weather-App/.
4. Copy the server code in the instance.
5. Navigate to the server folder, run npm install and then npm start.
6. Open the index.html on browser to test.
  
 ### Testing :
 1. Tested for only city name.
 2. Tested for blank search.
 3. Tested for common city name (Gives most popular place).
 4. Tested for common city name with country code(Eg Delhi and Delhi, US gives different results).
 5. Tested Invalid city name.
 6. Tested Celsius to Fahrenheit conversion
