import { NgModule } from "@angular/core";
import { TestComponent } from "../component/unsorted";
import { TestService } from "../service/unsorted";
import { TestDirective } from "../directive/unsorted";
import { TestPipe } from "../pipe/unsorted";

@NgModule({
  schemas: [],
  jit: true,
  exports: [TestComponent, TestDirective, TestPipe],
  bootstrap: [TestComponent],
  declarations: [TestComponent, TestDirective, TestPipe],
  providers: [TestService],
  imports: [],
  id: "id",
})
export class TestModule {}
