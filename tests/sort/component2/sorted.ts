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
  styles: [],
  styleUrl: "test2.component",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [],
  providers: [],
  viewProviders: [],
  host: { test: "test" },
  schemas: [],
  animations: [],
  inputs: [],
  outputs: [],
  queries: [],
  hostDirectives: [],
})
export class Test2Component {}
