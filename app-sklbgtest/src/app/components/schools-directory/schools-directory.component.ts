import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school/school.service';
import { HttpResponse, School } from 'src/app/types';

@Component({
  selector: 'schools-directory',
  templateUrl: './schools-directory.component.html',
  styleUrls: ['./schools-directory.component.css']
})
export class SchoolsDirectoryComponent implements OnInit {

  schools: School[];
  isfetchingSchools: boolean;
  hadErrorFetchingSchools: boolean;

  constructor(private schoolService: SchoolService) {
    this.schools = []; 
    this.isfetchingSchools = false;
    this.hadErrorFetchingSchools = false;
  }

  ngOnInit(): void {
    this.populateSchoolDirectory();
  }

  onVoted() {
    this.populateSchoolDirectory();
  }

  populateSchoolDirectory() {
    this.isfetchingSchools = true;

    this.schoolService.getSchools()
      .subscribe(
        (response: HttpResponse) => {
        this.isfetchingSchools = false;
        this.schools = response.data;
      }, (err) => {
        this.isfetchingSchools = false;
        this.hadErrorFetchingSchools = true;
      });
  }


}
