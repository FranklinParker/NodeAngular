import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StudentHomeComponent} from './school/student/student-home/student-home.component';
import {CoursesComponent} from "./school/components/courses/courses.component";


const appRoutes = [
  {
    path: 'students',
    component: StudentHomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
