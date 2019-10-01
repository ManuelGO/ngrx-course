import { createAction } from "@ngrx/store";


export const loadAllCourses = createAction(
  '[Courses Resolver] Load all Courses'
);

export const allCoursesLoaded = createAction(
  '[Load Courses Effect] All Courses Loaded'
);

