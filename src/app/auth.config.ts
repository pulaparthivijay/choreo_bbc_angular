import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://api.asgardeo.io/t/yudhistertech/oauth2/token',
    // clientId: 'scUl4btnf6Wujm3pdiJgGWwV8IEa',
    clientId: 'oLLfjGUQ2ILJa1PtXsCYF8VS1q0a',
    responseType: 'code',
    redirectUri: 'https://a2d65013-37a8-4497-80bd-d31adfe7b476.e1-us-east-azure.choreoapps.dev/dashboard',
//    redirectUri:'http://localhost:4200/dashboard',
    tokenEndpoint: 'https://api.asgardeo.io/t/yudhistertech/oauth2/token',
    skipIssuerCheck: true,
    logoutUrl: 'https://api.asgardeo.io/t/yudhistertech/oidc/logout',
    postLogoutRedirectUri: 'https://a2d65013-37a8-4497-80bd-d31adfe7b476.e1-us-east-azure.choreoapps.dev/dashboard',
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
   