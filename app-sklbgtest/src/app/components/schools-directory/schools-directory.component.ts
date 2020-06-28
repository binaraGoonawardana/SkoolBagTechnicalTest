import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school/school.service';
import { IntractionsService } from "src/app/services/intractions/intractions.service";
import { HttpResponse, School } from 'src/app/types';

@Component({
  selector: 'schools-directory',
  templateUrl: './schools-directory.component.html',
  styleUrls: ['./schools-directory.component.css']
})
export class SchoolsDirectoryComponent implements OnInit {

  schools: School[] = [];
  isfetchingSchools: boolean = false;
  hadErrorFetchingSchools: boolean = false;

  constructor(private _schoolService: SchoolService, private _interactionService: IntractionsService) {}

  ngOnInit(): void {
    this.populateSchoolDirectory();

    // subscribe to filterSource
    // when changes happen in filter panel it'll
    // notify here
    this._interactionService.filters$
    .subscribe(
      filters => {
        // apply filter to the directory
        this.filterSchoolDirectory(filters);
      }
    )
  }

  populateSchoolDirectory() {
    this.isfetchingSchools = true;

    this._schoolService.getSchools()
      .subscribe(
        (response: HttpResponse) => {
        this.isfetchingSchools = false;
        this.schools = response.data;
      }, (err) => {
        this.isfetchingSchools = false;
        this.hadErrorFetchingSchools = true;
      });
  }

  filterSchoolDirectory(context): void {
    this.isfetchingSchools = true;
    
    this._schoolService.searchSchools(context)
      .subscribe(
        (response: HttpResponse) => {
        this.isfetchingSchools = false;
        this.schools = response.data;
      }, (err) => {
        this.isfetchingSchools = false;
        this.hadErrorFetchingSchools = true;
      });
  }

  refresh(): void {
    this.populateSchoolDirectory();
  }

}
