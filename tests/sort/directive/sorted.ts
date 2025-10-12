import { Directive } from "@angular/core";

@Directive({
  standalone: false,
  jit: true,
  selector: "[app]",
  exportAs: "test",
  providers: [],
  host: { test: "test" },
  inputs: [],
  outputs: [],
  queries: [],
  hostDirectives: [],
})
export class TestDirective {}
