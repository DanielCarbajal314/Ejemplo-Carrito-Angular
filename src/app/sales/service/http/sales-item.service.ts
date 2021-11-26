import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { SalesItem } from 'src/app/shared/sales/model/sales-item.model';
import { Photo } from '../model/photo.model';

@Injectable({
  providedIn: 'root'
})
export class SalesItemService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<SalesItem[]>{
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos').pipe(
      map(photoList => photoList.map(photo => ({
        id: photo.id,
        imageUrl: photo.url,
        name: photo.title.substr(1,5),
        subName: photo.title.substr(1,10),
        description: photo.title,
        price: Math.random()*1000
      }))),
      map(itemList => itemList.filter(item => item.id < 100) )
    );
  }
}
