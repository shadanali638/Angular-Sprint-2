import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {
  tests: Test[];

  constructor(private testServiceService:TestServiceService) { }

  ngOnInit()  {
    this.testServiceService.findAll().subscribe(data=>{
      this.tests=data;
    });
  }

}
