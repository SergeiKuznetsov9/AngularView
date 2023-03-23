import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-teml-ref',
  templateUrl: './teml-ref.component.html',
  styleUrls: ['./teml-ref.component.css'],
})
export class TemlRefComponent {
  @ViewChild('tpl') tpl!: any;
  //read — используется для чтения другого токена из запрошенных элементов.
  //Если его не использовать, то присущих ViewContainerRef свойств у элемента не будет.
  @ViewChild('cnt', { read: ViewContainerRef }) cnt!: ViewContainerRef;

  showTemplRef() {
    console.log(this.tpl);
  }

  showCnt() {
    console.log(this.cnt);
  }
}
