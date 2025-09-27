import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VoicesMailDataService {
  getVoiceMails() {
    return fetch(environment.voicesMailJsonUrl).then((res: Response) => {
      res.json().then((data: any) => {
        console.log(data);
      });
    });
  }
}
