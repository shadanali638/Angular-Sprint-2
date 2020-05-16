import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TestServiceService } from '../test-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent  {

  test:Test;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private testServiceService: TestServiceService) {
  this.test = new Test();
}
  
  onSubmit() {
  this.testServiceService.save(this.test).subscribe(result => this.gotoTestList());
}
  gotoTestList(): void {
    this.router.navigate(['./view-test']);
  }

}

