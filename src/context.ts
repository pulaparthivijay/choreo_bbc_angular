







// for ballarina

// const contextPaths = {
   
//     appraisal: "http://localhost:8080/appraisal",
//     configcodes: "http://localhost:8080/configcodes",
//     inventory: "http://localhost:8080/inventory",
//     searchfactory:"http://localhost:8080/searchFactory",
//     shipment: "http://localhost:8080/shipment",
//     userregistration: "http://localhost:8080/user",
//     dashboard:"http://localhost:8080/dash",
// }

//for choreo deployment
declare global {
    interface Window {
      configs: {
        apiUrlConfig: any;
        apiUrlInv: any;
        apiUrl: string;
        apiUrlShipment:any;
        apiUrlUser:any;
        apiUrlDashboard:any;
        apiUrlAppraisal:any;
        apiUrlSrchFtry:any;
        apiUrlPetStore:any;
      };
    }
  }
  
//   export const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "/choreo-apis/bigbillioncars/reading-list-service/books-rest-endpoint-d70/v1.0";

  const inv= window?.configs?.apiUrl ? window.configs.apiUrlInv :"/choreo-apis/beuc/ballerinafinal/inventory-a4c/v1.0";
  const config= window?.configs?.apiUrl ? window.configs.apiUrlConfig :"/choreo-apis/beuc/ballerinafinal/configcodes-631/v1.0";
  const shipment= window?.configs?.apiUrl ? window.configs.apiUrlShipment :"/choreo-apis/beuc/ballerinafinal/shipment-ec9/v1.0";
  const user= window?.configs?.apiUrl ? window.configs.apiUrlUser :"/choreo-apis/beuc/ballerinafinal/user-27c/v1.0";
  const appraisal= window?.configs?.apiUrl ? window.configs.apiUrlAppraisal :"/choreo-apis/beuc/ballerinafinal/appraisal-a0e/v1.0";
  const dashboard= window?.configs?.apiUrl ? window.configs.apiUrlDashboard :"/choreo-apis/beuc/ballerinafinal/dash-ecb/v1.0";
  const srchFtry= window?.configs?.apiUrl ? window.configs.apiUrlSrchFtry :"/choreo-apis/beuc/ballerinafinal/searchfactory-008/v1.0";                                                                        
  const petStore=window?.configs?.apiUrl ? window.configs.apiUrlPetStore :"/choreo-apis/beuc/api/v3/v1.0/pet/findByStatus?status=available";
  
const contextPaths = {
   
    appraisal: `${appraisal}`,
    configcodes:`${config}`,
    inventory: `${inv}`,
    searchfactory: `${srchFtry}`,
    shipment: `${shipment}`,
    userregistration: `${user}`,
    dashboard:`${dashboard}`,
    petStore:`${petStore}`
}


// const contextPaths="https://services-test.keyassure.live"
export default contextPaths;