import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { Router, ActivatedRoute } from '@angular/router';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent{
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
    this.router.navigate(['/user/users']);
  }

}
