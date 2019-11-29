import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from 'src/app/config/config';
import { map, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchService {

  constructor(private http: HttpClient) { }

  async searchImage(search: string) {
    return await this.http.get(config.googleSearch.apiUrl, {
      params: {
        key: config.googleSearch.apiKey,
        cx: config.googleSearch.searchEngineId,
        q: search,
        searchType: 'image',
        num: '1',
      }
    })
      .toPromise()
      .then((data: any): string => data.items[0].image.thumbnailLink || '');
  }
}