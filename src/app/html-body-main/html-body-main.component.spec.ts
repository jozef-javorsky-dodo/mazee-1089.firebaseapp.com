import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HtmlBodyMainComponent } from "./html-body-main.component";



describe(<string>"HtmlBodyMainComponent", () => {

  let component: HtmlBodyMainComponent;
  let fixture: ComponentFixture<HtmlBodyMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HtmlBodyMainComponent
      ]
    });
    fixture = TestBed.createComponent(HtmlBodyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});









// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { HtmlBodyMainComponent } from "./html-body-main.component";



// describe(<string>"HtmlBodyMainComponent", () => {

//   let component: HtmlBodyMainComponent;
//   let fixture: ComponentFixture<HtmlBodyMainComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         HtmlBodyMainComponent
//       ]
//     });
//     fixture = TestBed.createComponent(HtmlBodyMainComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it(<string>"should create", () => {
//     expect(component).toBeTruthy();
//   });
// });