import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";



describe(<string>"AppComponent", () => {
  beforeEach(() => TestBed.configureTestingModule({

    declarations: [
      AppComponent
    ]
  }));

  it(<string>"should create the app", () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(<string>"should have as title 'mazee-1089'", () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toEqual(<string>"mazee-1089");
  });

  it(<string>"should render title", () => {

    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector(<string>".content span")?.textContent
    ).toContain(<string>"mazee-1089 app is running!");
  });
});









// import { TestBed } from "@angular/core/testing";
// import { AppComponent } from "./app.component";



// describe(<string>"AppComponent", () => {
//   beforeEach(() => TestBed.configureTestingModule({

//     declarations: [
//       AppComponent
//     ]
//   }));

//   it(<string>"should create the app", () => {

//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;

//     expect(app).toBeTruthy();
//   });

//   it(<string>"should have as title 'mazee-1089'", () => {

//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;

//     expect(app.title).toEqual(<string>"mazee-1089");
//   });

//   it(<string>"should render title", () => {

//     const fixture = TestBed.createComponent(AppComponent);

//     fixture.detectChanges();

//     const compiled = fixture.nativeElement as HTMLElement;

//     expect(
//       compiled.querySelector(<string>".content span")?.textContent
//     ).toContain(<string>"mazee-1089 app is running!");
//   });
// });