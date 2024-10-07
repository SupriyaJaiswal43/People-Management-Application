import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: any[];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPeople().subscribe(data => {
      this.people = data;
    });
  }
}
