import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://api.asgardeo.io/t/massil2016/oauth2/token',
    // clientId: 'scUl4btnf6Wujm3pdiJgGWwV8IEa',
    clientId: 'Efa4ijXGqcD9GbuA4Ol8AuDWpY4a',
    responseType: 'code',
    redirectUri: 'https://b9eb8320-92a5-4ca3-aab7-1e86706546a4.e1-us-east-azure.choreoapps.dev/dashboard',
//    redirectUri:'http://localhost:4200/dashboard',
    tokenEndpoint: 'https://api.asgardeo.io/t/massil2016/oauth2/token',
    skipIssuerCheck: true,
    logoutUrl: 'https://api.asgardeo.io/t/massil2016/oidc/logout',
    postLogoutRedirectUri: 'https://b9eb8320-92a5-4ca3-aab7-1e86706546a4.e1-us-east-azure.choreoapps.dev/dashboard',
    // postLogoutRedirectUri: 'http://localhost:4200/dashboard',
    scope: 'openid profile internal_user_mgt_view', 
    useSilentRefresh: false,
    silentRefreshTimeout: 50000000,
    timeoutFactor: 0.25, 
    sessionChecksEnabled: true,
    showDebugInformation: true,
    clearHashAfterLogin: true,
    nonceStateSeparator : 'semicolon',
    strictDiscoveryDocumentValidation:false,
  
   };
   