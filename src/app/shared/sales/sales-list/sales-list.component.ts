import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SalesItemService } from 'src/app/sales/service/http/sales-item.service';
import { SalesItem } from '../model/sales-item.model';

@Component({
  selector: 'sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  searchTerm = new FormControl('');
  visibleItems: SalesItem[] = [];
  allItems: SalesItem[] = [];

  constructor(private salesItemService: SalesItemService) { }

  ngOnInit(): void {
    this.salesItemService.getAllItems().subscribe(allItems => {
      this.allItems = allItems;
      this.visibleItems = this.allItems;
      this.searchTerm.valueChanges.subscribe( searchTemValue => {
        this.visibleItems = searchTemValue === '' ? 
          this.allItems : 
          this.allItems.filter( x => JSON.stringify(x).includes(searchTemValue))
      });
    });
  }

}
