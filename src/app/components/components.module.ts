import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Footer } from './footer/footer.component'
import { Navigation } from './navigation/navigation.component'

@NgModule({
  declarations: [Footer, Navigation],
  imports: [CommonModule, RouterModule],
  exports: [Footer, Navigation],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
