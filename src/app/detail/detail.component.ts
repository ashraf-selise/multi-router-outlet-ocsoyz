import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  count$ = this.service.count$;
  id$ = this.route.paramMap.pipe(map(params => params.get('id')));
  outlet = this.route.outlet;

  constructor(private service: CommunicationService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  up() {
    this.service.up();
  }

  down() {
    this.service.down();
  }

}