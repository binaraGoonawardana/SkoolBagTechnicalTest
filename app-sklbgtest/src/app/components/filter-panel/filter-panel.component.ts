import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IntractionsService } from "src/app/services/intractions/intractions.service";

@Component({
  selector: 'filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  filterForm: FormGroup;
  hasFiltersApplied: boolean = false;

  constructor(private fb: FormBuilder, private _intractionsService: IntractionsService) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      name: [''],
      "address.street": [''],
      "address.suburb": [''],
      "address.postcode": [''],
      "address.state": [''],
    });
  }

  applyFilters() {
    if (this.filterForm.invalid) {
      return;
    }

    this.hasFiltersApplied = true;
    this._intractionsService.applyFilters(this.filterForm.value);
  }

  clearFilters() {
    this.filterForm.reset();
    this.hasFiltersApplied = false;
    this._intractionsService.applyFilters(this.filterForm.value);
  }

}
