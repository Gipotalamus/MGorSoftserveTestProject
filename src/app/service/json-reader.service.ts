import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class JsonReaderService {

  constructor(private http: Http) {
  }

  readData(): Observable<any> {
    return this.http.get('/assets/data/data.json').map(response => response.json());
  }

}
