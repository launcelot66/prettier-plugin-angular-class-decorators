import { Injectable } from "@angular/core";
import { TestPipe } from "../pipe/unsorted";

@Injectable({
  providedIn: "root",
  useClass: TestPipe,
  useExisting: "test",
  useValue: "test",
  useFactory: () => {},
  deps: [],
})
export class TestService {}
