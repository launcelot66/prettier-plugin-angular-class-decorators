import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  standalone: true,
  jit: true,
  preserveWhitespaces: false,
  selector: "",
  exportAs: "",
  templateUrl: "test.html",
  styles: [".a{}"],
  styleUrl: "test2.component",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  host: { test: "test" },
})
export class TestComponent {}
