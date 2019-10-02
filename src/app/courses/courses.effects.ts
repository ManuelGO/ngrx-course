import { Injectable } from "@angular/core";
import { ofType, createEffect, Actions } from "@ngrx/effects";
import { CourseActions } from "./action-types";
import { CoursesHttpService } from "./services/courses-http.service";
import { allCoursesLoaded } from "./course.action";
import { map, concatMap } from "rxjs/operators";


@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(
    () => this.action$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap(action => this.coursesHttpService.findAllCourses()),
      map(courses => allCoursesLoaded({courses}))
    )
  );
  constructor(private action$: Actions, private coursesHttpService: CoursesHttpService) {}
}
