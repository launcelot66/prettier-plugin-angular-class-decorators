import { Directive } from "@angular/core";
import { TestService } from "../service/formatted";

@Directive({
  selector: "[app]",
  providers: [TestService],
  jit: true,
  host: { test: "test" },
  queries: [],
  outputs: [],
  hostDirectives: [],
  inputs: [],
  standalone: false,
  exportAs: "test",
})
export class TestDirective {}
