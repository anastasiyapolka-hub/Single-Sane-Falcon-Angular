import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../components/components.module'
import { NewAnalysis } from './new-analysis.component'

const routes = [
  {
    path: '',
    component: NewAnalysis,
  },
]

@NgModule({
  declarations: [NewAnalysis],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [NewAnalysis],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewAnalysisModule {}
