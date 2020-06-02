// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC6MsoyFF3Fu0Y-mH8rZD519E6gMAHiP6Q",
    authDomain: "depi-db.firebaseapp.com",
    databaseURL: "https://depi-db.firebaseio.com",
    projectId: "depi-db",
    storageBucket: "depi-db.appspot.com",
    messagingSenderId: "792436409354",
    appId: "1:792436409354:web:30fa2f4f2c0557596a4bf3",
    measurementId: "G-CFF2DM22S4"
  },
  apiRoot: 'localhost:3000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
