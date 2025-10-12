import { Pipe } from "@angular/core";

@Pipe({
  name: "test",
  pure: false,
  standalone: false,
})
export class TestPipe {}
