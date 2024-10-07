import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  person: any = {};

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(+id).subscribe(data => {
      this.person = data;
    });
  }

  savePerson(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.updatePerson(+id, this.person).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}
