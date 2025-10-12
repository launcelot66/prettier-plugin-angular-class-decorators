import { NgModule } from "@angular/core";
import { TestComponent } from "../../sort/component/sorted";
import { TestService } from "../service/formatted";
import { TestDirective } from "../directive/formatted";
import { TestPipe } from "../../sort/pipe/sorted";

@NgModule({
  id: "id",
  jit: true,
  providers: [TestService],
  declarations: [TestComponent, TestDirective, TestPipe],
  bootstrap: [TestComponent],
  exports: [TestComponent, TestDirective, TestPipe],
})
export class TestModule {}
