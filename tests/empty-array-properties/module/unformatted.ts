import { NgModule } from "@angular/core";
import { TestComponent } from "../../sort/component/sorted";
import { TestService } from "../service/formatted";
import { TestDirective } from "../directive/formatted";
import { TestPipe } from "../../sort/pipe/sorted";

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
