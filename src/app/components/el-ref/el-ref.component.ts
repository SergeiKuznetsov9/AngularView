import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-el-ref',
  templateUrl: './el-ref.component.html',
  styleUrls: ['./el-ref.component.css'],
})
export class ElRefComponent {
  @ViewChild('elRef') elRef!: ElementRef;
  @ViewChildren('elemWithChildren') elemWithChildren!: any;

  constructor(private host: ElementRef) {}

  showElRef() {
    console.log(this.elRef);
  }

  showHost() {
    console.log(this.host);
  }

  showViewChildren() {
    console.log(this.elemWithChildren)
  }
}
