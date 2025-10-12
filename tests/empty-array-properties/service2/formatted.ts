import { Injectable } from "@angular/core";
import { TestPipe } from "../../sort/pipe/sorted";

@Injectable({
  providedIn: "root",
  useClass: TestPipe,
  useExisting: "test",
  useValue: "test",
  useFactory: () => {},
  deps: ["test"],
})
export class TestService {}
