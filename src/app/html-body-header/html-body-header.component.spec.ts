import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HtmlBodyHeaderComponent } from "./html-body-header.component";



describe(<string>"HtmlBodyHeaderComponent", () => {

  let component: HtmlBodyHeaderComponent;
  let fixture: ComponentFixture<HtmlBodyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HtmlBodyHeaderComponent
      ]
    });
    fixture = TestBed.createComponent(HtmlBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});









// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { HtmlBodyHeaderComponent } from "./html-body-header.component";



// describe(<string>"HtmlBodyHeaderComponent", () => {

//   let component: HtmlBodyHeaderComponent;
//   let fixture: ComponentFixture<HtmlBodyHeaderComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         HtmlBodyHeaderComponent
//       ]
//     });
//     fixture = TestBed.createComponent(HtmlBodyHeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it(<string>"should create", () => {
//     expect(component).toBeTruthy();
//   });
// });