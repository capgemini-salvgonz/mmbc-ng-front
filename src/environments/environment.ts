// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // mmbcBackendUrl: "http://localhost:8080/api",
  //mmbcBackendUrl: "http://ec2-18-144-165-120.us-west-1.compute.amazonaws.com:8080/api",  
  mmbcBackendUrl: "https://y54vemhme3.execute-api.us-west-1.amazonaws.com/development_fase/api",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
