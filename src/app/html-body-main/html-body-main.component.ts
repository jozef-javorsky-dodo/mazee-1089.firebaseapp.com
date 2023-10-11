import { Component } from "@angular/core";



@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html"
})



export class HtmlBodyMainComponent { };









try {

  <string>"use strict";

  let f_0 = () => {
    return setTimeout(() => {

      let table_ele: any = document.querySelector(<string>"#html-body-main-table");
      let tbody_ele: any = document.querySelector(<string>"#html-body-main-table-tbody");

      for (let repe_y: number = <number>0; repe_y <= <number>15; repe_y++) {

        let tr_ele: any = document.createElement(<string>"tr");

        for (let repe_x: number = <number>0; repe_x <= <number>25; repe_x++) {

          let td_ele: any = document.createElement(<string>"td");

          td_ele.style.padding = <string>"2mm 2mm 1mm 2mm";
          td_ele.style.border = <string>"1mm solid rgb(0, 0, 0)";
          td_ele.style.borderRadius = <string>'0';
          tr_ele.appendChild(td_ele);
        };
        tbody_ele.appendChild(tr_ele);
      };
      table_ele.style.margin = <string>"11mm 0 2mm 2cm";
      table_ele.style.borderSpacing = <string>'0';
      table_ele.style.border = <string>"3mm solid rgb(122, 0, 244)";
      table_ele.style.boxShadow = <string>"0 0 3mm 3mm rgb(122, 244, 0)";
      table_ele.style.borderRadius = <string>"3mm";
    },
      <number>420
    );
  };

  let f_1 = () => {
    return setTimeout(() => {

      let tds: any = document.querySelectorAll(<string>"td");
      let num_arr: number[] = [];
      let wh: number[] = [
        Number(0), Number(1), Number(26), Number(27), Number(415),
        Number(414), Number(388), Number(414), Number(389)
      ];
      let re: number[] = [Number(2), Number(28), Number(52), Number(53)];
      let bu: number[] = [Number(362), Number(363), Number(387), Number(413)];
      let ne: number[] = [
        Number(3), Number(29), Number(55), Number(4), Number(30), Number(56), Number(411),
        Number(81), Number(80), Number(79), Number(82), Number(78), Number(104), Number(412),
        Number(105), Number(106), Number(107), Number(108), Number(333), Number(334),
        Number(335), Number(336), Number(337), Number(308), Number(307), Number(309),
        Number(310), Number(311), Number(359), Number(360), Number(386), Number(385)
      ];

      while (<number>num_arr.length <= <number>207)
        num_arr.push(<number>Number(Math.floor(Math.random() * <number>416)));
      for (let item in num_arr) {
        tds[num_arr[item]].style.backgroundColor = <string>"rgb(122, 122, 122)";
        tds[num_arr[item]].style.backgroundColor = <string>"rgb(0, 0, 0)";
      };
      [...wh].forEach(i_val => tds[i_val].style.backgroundColor = <string>"rgb(244, 244, 244)");
      [...re].forEach(i_val => tds[i_val].style.backgroundColor = <string>"rgb(244, 61, 61)");
      [...bu].forEach(i_val => tds[i_val].style.backgroundColor = <string>"rgb(61, 61, 244)");
      [...ne].forEach(i_val => tds[i_val].style.backgroundColor = <string>"rgb(122, 122, 122)");
      for (let i_x_repe: number = <number>0; i_x_repe <= <number>25; i_x_repe++)
        tds[i_x_repe].style.backgroundColor = <string>"rgb(244, 244, 61)";
      for (let i_x_repe: number = <number>390; i_x_repe <= <number>415; i_x_repe++)
        tds[i_x_repe].style.backgroundColor = <string>"rgb(244, 244, 61)";
      for (let i_y_repe: number = <number>26; i_y_repe <= <number>364; i_y_repe += <number>26)
        tds[i_y_repe].style.backgroundColor = <string>"rgb(244, 244, 61)";
      for (let i_y_repe: number = <number>51; i_y_repe <= <number>390; i_y_repe += <number>26)
        tds[i_y_repe].style.backgroundColor = <string>"rgb(244, 244, 61)";
      for (let ix: number = <number>29; ix <= <number>50; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>55; ix <= <number>76; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>79; ix <= <number>102; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>105; ix <= <number>128; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>131; ix <= <number>154; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>157; ix <= <number>180; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>183; ix <= <number>206; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>209; ix <= <number>232; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>235; ix <= <number>258; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>261; ix <= <number>284; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>287; ix <= <number>310; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>313; ix <= <number>336; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>339; ix <= <number>360; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>339; ix <= <number>360; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>365; ix <= <number>386; ix += <number>2)
        tds[ix].style.backgroundColor = <string>"rgb(122, 122, 122)";
      for (let ix: number = <number>29; ix <= <number>50; ix += <number>1)
        tds[ix].style.backgroundColor = <string>"rgb(244, 122, 244)";
      for (let ix: number = <number>365; ix <= <number>386; ix += <number>1)
        tds[ix].style.backgroundColor = <string>"rgb(244, 122, 244)";
      for (let yindx: number = <number>79; yindx <= <number>348; yindx += <number>26)
        tds[yindx].style.backgroundColor = <string>"rgb(244, 122, 244)";
      for (let yindx: number = <number>76; yindx <= <number>336; yindx += <number>26)
        tds[yindx].style.backgroundColor = <string>"rgb(244, 122, 244)";
      tds[Number(54)].style.backgroundColor = <string>"rgb(61, 244, 61)";
      tds[Number(361)].style.backgroundColor = <string>"rgb(122, 122, 122)";
    },
      <number>840
    );
  };

  let f_2 = () => {
    return setTimeout(() => {

      let c_mix: readonly string[] = [
        String("rgb(120, 120, 120)"), <string>"rgb(244, 244, 244)",
        <string>"rgb(244, 60, 60)", <string>"rgb(60, 244, 60)", <string>"rgb(60, 60, 244)"
      ];
      let tds: any = document.querySelectorAll(<string>"td");
      let startie: number = <number>81;
      let pos_i: readonly number[] = [Number(-26), Number(-25), Number(-1), Number(1), Number(26), Number(27)];
      let f_3 = () => {

        setTimeout(() => {

          let prn_i: number = startie + <number>pos_i[Number(Math.floor(Math.random() * <number>6))];

          if (prn_i === <number>361) {
            [...tds].forEach(c => {
              if (
                (c.style.backgroundColor === <string>"rgb(122, 122, 122)") ||
                (c.style.backgroundColor === <string>"rgb(61, 244, 244)") ||
                (c.style.backgroundColor === <string>"rgb(30, 122, 30)")
              ) {
                c.style.backgroundColor = <string>"rgb(61, 244, 61)";
              } else if (c.style.backgroundColor === <string>"rgb(0, 0, 0)") {
                c.style.backgroundColor = <string>"rgb(244, 244, 244)";
              }
              else if (
                (c.style.backgroundColor === <string>"rgb(244, 244, 61)") ||
                (c.style.backgroundColor === <string>"rgb(244, 122, 244)")
              ) {
                c.style.backgroundColor = c_mix[Number(Math.floor(Math.random() * <number>5))];
              }
              else { };
            });
            setTimeout(() => {
              [...tds].forEach(c => c.style.borderColor = <string>"rgb(122, 122, 122)");
            },
              <number>1500
            );
            setTimeout(() => {
              window.location.reload();
            },
              <number>4500
            );
          }
          else if (
            (tds[prn_i].style.backgroundColor === <string>"rgb(122, 122, 122)") ||
            (tds[prn_i].style.backgroundColor === <string>"rgb(30, 122, 30)")
          ) {
            tds[prn_i].style.backgroundColor = <string>"rgb(61, 244, 61)";
            tds[startie].style.backgroundColor = <string>"rgb(30, 122, 30)";
            startie = prn_i;
          }
          else { };
        },
          <number>15
        );
        setTimeout(() => {
          f_3();
        },
          <number>30
        );
      };
      [...tds].forEach(c => {
        if (
          (c.style.backgroundColor !== <string>"rgb(244, 244, 61)") &&
          (c.style.backgroundColor !== <string>"rgb(244, 244, 244)") &&
          (c.style.backgroundColor !== <string>"rgb(244, 61, 61)") &&
          (c.style.backgroundColor !== <string>"rgb(244, 122, 244)") &&
          (c.style.backgroundColor !== <string>"rgb(61, 61, 244)") &&
          (c.style.backgroundColor !== <string>"rgb(0, 0, 0)")
        )
          c.style.backgroundColor = <string>"rgb(122, 122, 122)";
      });
      tds[Number(54)].style.backgroundColor = <string>"rgb(30, 122, 30)";
      tds[Number(81)].style.backgroundColor = <string>"rgb(61, 244, 61)";
      f_3();
    },
      <number>1240
    );
  };

  function funcs(): void {
    f_0();
    f_1();
    f_2();
  };

  window.onload = () => {
    funcs();
  };

} catch (err___) {

  if (err___) {
    console.clear();
    alert(<string>"bug");
    console.log(err___);
  };

};









// import { Component } from "@angular/core";



// @Component({
//   selector: "app-html-body-main",
//   templateUrl: "./html-body-main.component.html"
// })



// export class HtmlBodyMainComponent { };