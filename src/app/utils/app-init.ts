import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: {
      url: 'https://login.symptomtracker.de/auth',
      realm: 'symptomtracker',
      clientId: 'web_app'
    },
    initOptions: {
      checkLoginIframe: false
    },
    enableBearerInterceptor: true
  });
}
