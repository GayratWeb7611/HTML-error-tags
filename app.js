////////////////////////////////

// let tagOpen ="<div>";
// let tagClose ="</div>";
// let openTag = errorText.split(tagOpen).length
// let closeTag = errorText.split(tagClose).length
// if ( openTag!=closeTag ){
//     let errorsN = openTag-closeTag
//     if(errorsN > 0){
//         xatolar.push(`${tagClose.slice(1,3)}-${user}:${Math.abs(errorsN)}`);
//     }else{
//         xatolar.push(`${tagOpen.slice(1, 2)}-${user}:${errorsN}`);

//     }
// }

// ///////////////////////////////

// let tagOpen = "<div>";
// let tagClose = "</div>";
// let openTag = errorText.split(tagOpen).length;
// let closeTag = errorText.split(tagClose).length;
// if (openTag != closeTag) {
//   let errorsN = openTag - closeTag;
//   if (errorsN > 0) {
//     xatolar.push(`${tagClose.slice(1, 3)}-${user}:${Math.abs(errorsN)}`);
//   } else {
//     xatolar.push(`${tagOpen.slice(1, 2)}-${user}:${errorsN}`);
//   }
// }

let errorText = prompt("Textni Kiriting");
let user = prompt("ismingizni kiriting").slice(0, 1);
let xatolar = [];

// class Errors{
//     constructor(tagOpen , tagClose) {
//         this.tagOpen = tagOpen,
//         this.tagClose = tagClose
//     }

//     errorMethod(){
//         let openTag = errorText.split(this.tagOpen).length;
//         let closeTag = errorText.split(this.tagClose).length;
//         console.log(openTag);
//         console.log(closeTag);
//         if (openTag != closeTag) {
//           let errorsN = openTag - closeTag;
//           console.log(errorsN);
//           if (errorsN > 0) {
//             xatolar.push(
//               `${this.tagClose.slice(1, 3)}-${user}:${Math.abs(
//                 errorsN
//               )}`
//             );
//           } else {
//             xatolar.push(
//               `${this.tagOpen.slice(1, 2)}-${user}:${errorsN}`
//             );
//           }
//         }

//     }
// }

class Errors {
  constructor(tag) {
    this.tag = tag;
  }

  errorMethod() {
    ////////////////

    // start tag
    let tagOpenArr = this.tag.split("");
    // tagOpenArr.push(">");
    tagOpenArr.unshift("<");
    let tagOpen = tagOpenArr.join("");
    ////////////////
    ////////////////
    // end tag
    let tagCloseArr = this.tag.split("");
    tagCloseArr.push(">");
    tagCloseArr.unshift("/");
    tagCloseArr.unshift("<");
    let tagClose = tagCloseArr.join("");
    ////////////////
    let openTag = errorText.split(tagOpen).length;
    let closeTag = errorText.split(tagClose).length;

    if (openTag != closeTag) {
      let errorsN = openTag - closeTag;
      if (errorsN > 0) {
        xatolar.push(`${tagClose.slice(1, 3)}-${user}:${Math.abs(errorsN)}`);
      } else {
        xatolar.push(`${tagOpen.slice(1, 2)}-${user}:${errorsN}`);
      }
    }
  }
  errMethodJuft() {
    // let arrayToq = errorText.split(this.tag);
    // // console.log(arrayToq);
    // let errorToqArray = [];
    // arrayToq.forEach((item) => {
    //   //////////////////////////////////////  tag close error
    //   // index ni aniqlab olyapman
    //   let condition =
    //     item.indexOf("<") == -1 ? item.indexOf(">") + 1 : item.indexOf("<");
    //   let condition2 =
    //     item.indexOf(">") == -1 ? condition + 1 : item.indexOf(">");
    //   // shu belgi bilan nechta xato borligi
    //   if (condition2 > condition) {
    //     if (!(item.indexOf("<") == 0)) {
    //       errorToqArray.push(item);
    //     }
    //   }
    //   ///////////////////////////////////////   tag opening error
    //   if (item.slice(-1) != "<") {
    //     let errorNToq = errorToqArray.length;
    //     if (item.slice(-1) != ">") {
    //       xatolar.push(`${this.tag.slice(0, 1)}-${user}:${errorNToq} => (<)`);
    //     }
    //   }
    // });
    // let errorNToq = errorToqArray.length;
    // // asosiy ish
    // if (errorNToq > 0) {
    //   xatolar.push(`${this.tag.slice(0, 1)}-${user}:${errorNToq} => (>)`);
    // }
  }
}
class ErrorsToq {
  constructor(tagToq) {
    this.tagToq = tagToq;
  }
  errorMethodToq() {
    let arrayToq = errorText.split(this.tagToq);
    // console.log(arrayToq);
    let errorToqArray = [];
    arrayToq.forEach((item) => {
      //////////////////////////////////////  tag close error
      // index ni aniqlab olyapman
      let condition =
        item.indexOf("<") == -1 ? item.indexOf(">") + 1 : item.indexOf("<");
      let condition2 =
        item.indexOf(">") == -1 ? condition + 1 : item.indexOf(">");
      // shu belgi bilan nechta xato borligi
      if (condition2 > condition) {
        if (!(item.indexOf("<") == 0)) {
          errorToqArray.push(item);
        }
      }
      ///////////////////////////////////////   tag opening error
    });
    let errorNToq = errorToqArray.length;
    // asosiy ish
    if (errorNToq > 0) {
      console.log(this.tagToq);
      xatolar.push(`${this.tagToq.slice(0, 1)}-${user}:${errorNToq} => (>)`);
    }
  }
}

function init() {
  let div = new Errors("div");
  div.errorMethod();
  div.errMethodJuft();
  ///////////////////
  let h1 = new Errors("h1");
  h1.errorMethod();
  h1.errMethodJuft();
  ////////////
  let a = new Errors("a");
  a.errorMethod();
  a.errMethodJuft();
  ///////////////
  let p = new Errors("p");
  p.errorMethod();
  p.errMethodJuft();
  ///////////////
  let footer = new Errors("footer");
  footer.errorMethod();
  footer.errMethodJuft();
  ///////////////
  let header = new Errors("header");
  header.errorMethod();
  header.errMethodJuft();
  ///////////////
  let ul = new Errors("ul");
  ul.errorMethod();
  ul.errMethodJuft();
  ///////////////
  let li = new Errors("li");
  li.errorMethod();
  li.errMethodJuft();
  ///////////////
  let nav = new Errors("nav");
  nav.errorMethod();
  nav.errMethodJuft();
  ///////////////
  let del = new Errors("del");
  del.errorMethod();
  del.errMethodJuft();
  ///////////////
  let option = new Errors("option");
  option.errorMethod();
  option.errMethodJuft();
  ///////////////
  let label = new Errors("label");
  label.errorMethod();
  label.errMethodJuft();
  ///////////////
  let button = new Errors("button");
  button.errorMethod();
  button.errMethodJuft();
  ///////////////
  let EM = new Errors("EM");
  EM.errorMethod();
  EM.errMethodJuft();
  ///////////////
  let form = new Errors("form");
  form.errorMethod();
  form.errMethodJuft();
  ///////////////
  let body = new Errors("body");
  body.errorMethod();
  body.errMethodJuft();
  ///////////////
  let table = new Errors("table");
  table.errorMethod();
  table.errMethodJuft();
  ///////////////
  let th = new Errors("th");
  th.errorMethod();
  th.errMethodJuft();
  ///////////////
  let tr = new Errors("tr");
  tr.errorMethod();
  tr.errMethodJuft();
  ///////////////
  let tbody = new Errors("tbody");
  tbody.errorMethod();
  tbody.errMethodJuft();
  ///////////////
  let span = new Errors("span");
  span.errorMethod();
  span.errMethodJuft();
  ///////////////
  let address = new Errors("address");
  address.errorMethod();
  address.errMethodJuft();
  ///////////////////////////////////////////////////////
  let img = new ErrorsToq("img");
  img.errorMethodToq();
  ////////////////////
  let br = new ErrorsToq("br");
  br.errorMethodToq();
  ////////////////////
  let dt = new ErrorsToq("dt");
  dt.errorMethodToq();
  ////////////////////
  let dd = new ErrorsToq("dd");
  dd.errorMethodToq();
  ////////////////////
  let hr = new ErrorsToq("hr");
  hr.errorMethodToq();
  ////////////////////
  let frame = new ErrorsToq("frame");
  frame.errorMethodToq();
  ////////////////////
}
init();
const documentH1 = document.querySelector("h1");

documentH1.textContent = xatolar.join("");
