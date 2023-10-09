# Engineer-Nest
  --> npm install (install all dependencies)
  --> npm run dev to start localhost (frontend)
# Backend
Navigate to folder "functions"
+ Install the Firebase CLI
  --> npm install -g firebase-tools
+ Login via the browser and authenticate the firebase tool
  --> firebase login
+ Start the Emulator Suite
  --> firebase emulators:start --only functions
# Environment configuration
+ Local
  --> npm install dotenv (In your functions directory)
  --> require('dotenv').config(); (load the .env file at the top of your primary Cloud Functions file)
  --> after loading the .env file, you can access the environment variables using the process.env object:
  (eg. const secret = process.env.SECRET;)
  Make sure not to commit your .env file to version control. Add .env to your .gitignore file to ensure it's excluded. This is important as .env files may contain sensitive information.
+ Deploy
  --> firebase functions:config:set database.url="https://updated-database.example.com" newconfig.key="newvalue" ... ( Updating or Adding New Configuration )
  --> const dbURL = functions.config().database.url; // ... and similarly for other variables (In your Cloud Functions code, you would then access by using these)
  --> const dbURL = process.env.DATABASE_URL || functions.config().database.url; // ...  (Uniformity between Local and Deployed)
  --> firebase functions:config:unset database.url (Removing Configuration)
  --> firebase functions:config:set newconfig.key="newvalue" && firebase functions:config:unset database.url (Combining Set and Unset)
  --> firebase functions:config:get (Viewing Current Environment Configurations)
# Hosting
+ npm run build
+ firebase deploy --only hosting
# Deploy
+ firebase deploy --only functions
