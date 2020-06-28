import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Filters } from "src/app/types";

@Injectable({
  providedIn: 'root'
})
export class IntractionsService {

  private _filterSource = new Subject<Filters>();
  filters$ = this._filterSource.asObservable();

  constructor() { }

  applyFilters(filters: Filters) {
    this._filterSource.next(filters);
  }
}