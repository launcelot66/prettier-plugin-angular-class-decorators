import { Directive } from "@angular/core";

@Directive({
  selector: "[app]",
  providers: [],
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
