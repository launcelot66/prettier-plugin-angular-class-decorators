import { Injectable } from "@angular/core";
import { TestPipe } from "../pipe/unsorted";

@Injectable({
  useFactory: () => {},
  useValue: "test",
  useExisting: "test",
  useClass: TestPipe,
  deps: [],
  providedIn: "root",
})
export class TestService {}
