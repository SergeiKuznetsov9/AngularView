import { Component, ComponentFactoryResolver, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-view-cont-ref',
  templateUrl: './view-cont-ref.component.html',
  styleUrls: ['./view-cont-ref.component.css']
})
export class ViewContRefComponent {

  @ViewChild('views', { read: ViewContainerRef })
  views!: ViewContainerRef
  @ViewChild('tpl') tpl!: TemplateRef<any>

  constructor(
    private componentFactory: ComponentFactoryResolver,
    private injector: Injector
  ) {

  }



  embeddedView() {
    const view = this.tpl.createEmbeddedView(null)
    this.views.insert(view)
  }

/*   hostView() {
    const factory = this.componentFactory.resolveComponentFactory(
      ContactItemComponent
    )
    const componentRef = factory.create(this.injector)

    this.views.insert(componentRef.hostView, 0)

  } */


}
