import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
export interface FavoriteChangedEventArgs{
    newValue:boolean
}
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
@Input() isFavorite:boolean;
@Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
      this.isFavorite = !this.isFavorite;
      this.change.emit({newValue : this.isFavorite});
  }

}
