import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private REST_API_HEALTHOFFICE_SERVER = 'https://rki-plz-tool.sleiss.me/authority?plz=';

  constructor(
    private httpClient: HttpClient,
  ) { }

  sendHealthOfficeRequest(plz: string){
    return this.httpClient.get(this.REST_API_HEALTHOFFICE_SERVER + plz);
  }
}
