import { Pipe } from "@angular/core";

@Pipe({
  standalone: false,
  pure: false,
  name: "test",
})
export class TestPipe {}
