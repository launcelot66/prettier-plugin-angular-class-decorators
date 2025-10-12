import { Injectable } from "@angular/core";
import { TestPipe } from "../../sort/pipe/sorted";

@Injectable({
  useFactory: () => {},
  useValue: "test",
  useExisting: "test",
  useClass: TestPipe,
  deps: [],
  providedIn: "root",
})
export class TestService {}
