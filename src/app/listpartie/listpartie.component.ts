import { Component } from '@angular/core';
import { Partie } from '../partie';
import { ServicepartieService } from '../servicepartie.service';

@Component({
  selector: 'app-listpartie',
  templateUrl: './listpartie.component.html',
  styleUrls: ['./listpartie.component.css']
})
export class ListpartieComponent {
  listPartie: Partie[] = [];
  constructor(private servicepartie: ServicepartieService) {}

  ngOnInit(): void {
    this.servicepartie.getallPartie().subscribe((res) => {
      this.listPartie = res;
    });
  }



}
