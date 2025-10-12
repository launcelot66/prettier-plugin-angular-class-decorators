import { Directive } from "@angular/core";
import { TestService } from "../service/formatted";

@Directive({
  standalone: false,
  jit: true,
  selector: "[app]",
  exportAs: "test",
  providers: [TestService],
  host: { test: "test" },
})
export class TestDirective {}
