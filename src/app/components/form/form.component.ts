import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';



const OPENING_HOURS = {
  morning   : { first: '06', last: '12' },
  afternoon : { first: '12', last: '18' },
  night     : { first: '18', last: '23' }
};

type HOUR_INDEXES = 'morning' | 'afternoon' | 'night';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) { };


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    });

    this.unitService.getAllUnits().subscribe(data => {
        this.results = data.locations;
        this.filteredResults = data.locations;
    });
  };


  onSubmit(): void {
    const OPEN_HOUR = OPENING_HOURS[
      this.formGroup.value.hour as HOUR_INDEXES
    ].first;

    if (!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(
        location => location.opened === true
      );
    } else {
      this.filteredResults = this.results;
    }
  };


  onClean(): void {
    this.formGroup.reset();
  };
}