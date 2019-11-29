import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchService {

  constructor(private http: HttpClient) { }

  public searchImage(search: string): Observable<string> {
    return this.http.get<string>(config.googleSearch.apiUrl, {
      params: {
        key: config.googleSearch.apiKeyP1 + config.googleSearch.apiKeyP2,
        cx: config.googleSearch.searchEngineId,
        q: search,
        searchType: 'image',
        num: '1',
      }
    }).pipe(
      map((data: any): string => data.items[0].image.thumbnailLink || '')
    )
  }
}
