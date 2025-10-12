import { NgModule } from "@angular/core";
import { TestComponent } from "../component/unsorted";
import { TestService } from "../service/unsorted";
import { TestDirective } from "../directive/unsorted";
import { TestPipe } from "../pipe/unsorted";

@NgModule({
  id: "id",
  jit: true,
  imports: [],
  providers: [TestService],
  declarations: [TestComponent, TestDirective, TestPipe],
  bootstrap: [TestComponent],
  exports: [TestComponent, TestDirective, TestPipe],
  schemas: [],
})
export class TestModule {}
