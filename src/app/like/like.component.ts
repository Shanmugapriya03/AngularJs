import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
export interface HeartChangedEventArgs{
    newLike:boolean,
    newCount:number,
}
@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
    @Input() isLiked:boolean;
    @Input() likesCount:number;
    @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
      this.isLiked = !this.isLiked;
      if(this.likesCount){
          this.likesCount=0;
      }else{
          this.likesCount=1;
      }
      this.change.emit({newLike:this.isLiked,newCount:this.likesCount});
  }

}
