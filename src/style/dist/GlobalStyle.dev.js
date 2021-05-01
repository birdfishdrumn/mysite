"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledImage = exports.Youtube = exports.Figure = exports.Gallery = exports.News = exports.Featured = exports.Allow = exports.FlexNavLi = exports.FlexNav = exports.GridList = exports.ItemC = exports.ItemB = exports.ItemA = exports.GridContainer = exports.ScrollItem = exports.Scroll = exports.ListColumn = exports.MaxTwoColumn = exports.ProductColumn = exports.TwoColumn = exports.DescriptionFlex = exports.TextFlex = exports.ProductTitle = exports.MinTitle = exports.ImageText = exports.Description = exports.MinDescription = exports.SubTitle = exports.Nav = exports.Title = exports.Content = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n width:500px;\n height:400px;\n object-fit:cover;\n @media(max-width:768px){\n   width:100%;\n }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  width: 560px;\n  height: 310px;\n  @media (max-width: 767px) {\n    width: 98%;\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 5% 0;\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  background: #eee;\n  text-align: center;\n  margin: 0 auto;\n\n  padding-bottom: 30px;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  position: relative;\n  height: 16px;\n  width: 16px;\n  background-color: #697b91;\n  :before {\n    position: absolute;\n    content: \"\";\n    border: solid 16px transparent;\n    border-left: solid 16px #697b91;\n    top: 16px;\n    left: -8px;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: inline-block;\n  font-weight: bold;\n  margin: ", ";\n  list-style: none;\n  display: flex;\n  color: ", ";\n  flex-wrap: wrap;\n  justify-content: center;\n  > li {\n    margin: 20px;\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  grid-gap: ", ";\n  @media (max-width: 1024px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  @media (max-width: 767px) {\n    grid-template-columns: ", ";\n    margin: 0;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px;\n  font-size: 30px;\n  text-align: center;\n  grid-row: 2/3;\n  grid-column: 2/3;\n  /* background: #88f; */\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px;\n  font-size: 30px;\n  text-align: center;\n  grid-row: 1/3;\n  grid-column: 2/3;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px;\n  font-size: 30px;\n  text-align: center;\n  grid-row: 1/3;\n  grid-column: 1/2;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  padding: 10px;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 2fr 1fr;\n  width: 700px;\n\n  margin: 0 auto;\n  @media (max-width: 768px) {\n    width: auto;\n    text-align: center;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  overflow-x: auto;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  max-width: 880px;\n\n  margin: 0 auto;\n  > div:first-child {\n    flex-basis: 25%;\n    margin: 0 auto;\n  }\n  > div:last-child {\n    margin: 0 auto;\n    flex-basis: 60%;\n  }\n  @media (max-width: 767px) {\n    flex-direction: column-reverse;\n    > div:first-child {\n      width: 80%;\n      margin: 30px auto 30px;\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 50px;\n  margin: 0 auto;\n  grid-template-columns: 1fr 1fr;\n  max-width: ", ";\n\n  > div {\n    margin: 0px;\n  }\n  > div:last-child {\n    text-align: center;\n    /* height:100%; */\n    margin: ", ";\n  }\n\n  @media (max-width: 1024px) {\n    margin: 10px auto;\n    grid-gap: 10px;\n    grid-template-columns: 1fr;\n\n    > div {\n      margin: 0px;\n    }\n  }\n  > div:first-child {\n    margin: ", ";\n    @media (max-width: 1024px) {\n      order: ", ";\n    }\n  }\n  > div:last-child {\n    text-align: center;\n    @media (max-width: 1024px) {\n      margin: 0px;\n      order: ", ";\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  /* grid-gap:0px; */\n  margin: 0 auto;\n  grid-template-columns: 1fr 1fr;\n  /* max-width:807px; */\n  max-width: ", ";\n  > div {\n    ", ";\n  }\n  > div:first-child {\n    @media (min-width: 768px) {\n      width: 90%;\n      margin: auto;\n      order: ", ";\n    }\n    margin-bottom: 20px;\n    order: ", ";\n  }\n  > div:last-child {\n    margin: auto;\n    text-align: center;\n    @media (min-width: 768px) {\n      order: ", ";\n    }\n    order: ", ";\n    margin-bottom: ", ";\n  }\n  @media (max-width: 767px) {\n    /* grid-gap:0px; */\n    grid-template-columns: 1fr;\n    width: 100%;\n    > div:first-child {\n      @media (max-width: 767px) {\n        /* justify-content:center; */\n      }\n    }\n  }\n  @media (max-width: 380px) {\n    /* grid-gap:0px; */\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 50px;\n  margin: 0 auto;\n  grid-template-columns: 1fr 1fr;\n  max-width: 1000px;\n  > div {\n    margin: 40px;\n    @media (max-width: 767px) {\n      margin: 5px;\n    }\n  }\n  > div:first-child {\n    @media (max-width: 1024px) {\n    }\n    @media (max-width: 767px) {\n      order: ", ";\n    }\n  }\n  > div:last-child {\n    text-align: center;\n    margin: auto 0;\n    @media (max-width: 767px) {\n      margin: 5px;\n      order: ", ";\n    }\n  }\n\n  @media (max-width: 767px) {\n    margin: 10px;\n    grid-gap: 10px;\n    grid-template-columns: 1fr;\n    > div {\n      margin: 5x;\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  /* width:80%; */\n  flex-direction: ", ";\n  ", "\n  @media(max-width:767px) {\n    /* width:87%; */\n  }\n  > div:first-child {\n    @media (min-width: 768px) {\n      flex-basis: 75%;\n      line-height: 2.2rem;\n      height: 500px;\n      margin: auto 40px;\n      text-align: left;\n      width: 100%;\n    }\n    margin: 0 auto;\n    width: 70%;\n  }\n  > div:last-child {\n    -ms-writing-mode: tb-rl;\n    writing-mode: vertical-rl;\n    font-size: 2.9rem;\n    height: 400px;\n    text-align: left;\n    margin: ", " !important;\n    ", "\n    @media(max-width:768px) {\n      /* text-align:left; */\n      font-size: 2.6rem;\n\n      /* padding:13px 5px 13px; */\n      /* width:50px; */\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 80%;\n  height: 270px;\n  /* -ms-writing-mode: tb-rl;\n   writing-mode: vertical-rl; */\n  @media (max-width: 767px) {\n    width: 87%;\n  }\n  > div:first-child {\n    @media (min-width: 768px) {\n      flex-basis: 75%;\n      line-height: 2.2rem;\n      height: 300px;\n      margin: 0 40px;\n      -ms-writing-mode: tb-rl;\n      writing-mode: vertical-rl;\n      text-align: left;\n      width: 100%;\n    }\n    margin: 0 auto;\n    width: 70%;\n    height: 250px;\n  }\n  > div:last-child {\n    -ms-writing-mode: tb-rl;\n    writing-mode: vertical-rl;\n    /* flex-basis: 10%; */\n    /* width:50px; */\n    /* margin:auto 0; */\n    height: 250px;\n    @media (max-width: 768px) {\n      /* text-align:left; */\n      font-size: 2rem;\n      height: 60%;\n      padding: 13px 5px 13px;\n      margin-left: 20px;\n      width: 50px;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n  text-align: left;\n  height: 75%;\n  line-height: 2rem;\n  font-size: ", ";\n  border: ", ";\n  padding: 10px;\n  -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n  -webkit-writing-mode: vertical-rl;\n  margin-left: 10px;\n  @media (max-width: 768px) {\n    font-size: 1.7rem;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  font-weight: bold;\n  ", "\n  ", "\n color:", ";\n\n  text-align: ", ";\n  font-size: ", ";\n  margin: 10px auto;\n  ", "\n  @media(max-width:767px) {\n    font-size: ", ";\n  }\n  position: relative;\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  font-weight: bold;\n  -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n\n  height: 390px;\n  font-size: ", ";\n  position: absolute;\n  top: -15rem;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 500px auto 10%;\n  display: flex;\n\n  flex-direction: column;\n  justify-content: space-around;\n  text-align: ", ";\n  color: #fff;\n  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n  @media (max-width: 767px) {\n    font-size: 1.1rem;\n    top: -27rem;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  text-align: ", ";\n  font-weight: ", ";\n  line-height: 1.7em;\n  text-shadow: ", ";\n  padding: ", ";\n\n  ", ";\n  @media (max-width: 767px) {\n    ", ";\n  }\n  font-size: ", ";\n  margin: ", ";\n  ", ";\n  /* margin:", "; */\n  @media (max-width: 767px) {\n    width: 90%;\n    font-size: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  padding: 5px 0 5px;\n  color: gray;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n\n  color: ", ";\n  text-align: ", ";\n  font-size: ", ";\n  border: ", ";\n\n  text-shadow: ", ";\n  padding: ", ";\n  @media (max-width: 768px) {\n    font-size: 1.7rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  font-weight: normal;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 1.8rem;\n  padding: 30px;\n  max-width: ", ";\n  /* @media(max-width:767px){\n  w\n } */\n  > li {\n    margin: ", ";\n    font-weight: bold;\n\n    text-align: ", ";\n    list-style: ", ";\n    color: ", ";\n    font-size: ", ";\n    @media (max-width: 767px) {\n      /* font-size:1.7rem; */\n      width: 100%;\n    }\n  }\n  > p {\n    font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n    display: inline-block;\n    font-size: 1.1rem;\n    text-align: ", ";\n    color: grey;\n    margin-bottom: 10px;\n    padding: 0;\n    width: 80%;\n    line-height: 1.8em;\n    /* margin:10px; */\n    @media (max-width: 767px) {\n      width: 100%;\n      font-size: 1rem;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  font-weight: bold;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto auto 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n  @media (max-width: 767px) {\n    font-size: 1.7rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"\u6E38\u660E\u671D\", \"Yu Mincho\", \"Hiragino Mincho Pro\", sans-serif;\n  font-weight: bold;\n  margin: 100px;\n  text-align: center;\n  font-size: 3.5rem;\n\n  @media (max-width: 768px) {\n    margin: 50px;\n    font-size: 2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// ==========テキストデザイン===========
var Content = _styledComponents["default"].h1(_templateObject());

exports.Content = Content;

var Title = _styledComponents["default"].h1(_templateObject2());

exports.Title = Title;

var Nav = _styledComponents["default"].ul(_templateObject3(), function (props) {
  return props.min ? "550px" : "824px";
}, function (props) {
  return props.noSpace ? "0" : "15px 0 15px";
}, function (props) {
  return props.left ? "left" : "center";
}, function (props) {
  return props.square && "square";
}, function (props) {
  return props.grey && "dimgrey";
}, function (props) {
  return props.small ? "1.2rem" : "1.7rem";
}, function (props) {
  return props.left ? "left" : "center";
});

exports.Nav = Nav;

var SubTitle = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.white ? "white" : "black";
}, function (props) {
  return props.left ? "left" : "center";
}, function (props) {
  return props.small ? "1.8rem" : "2.35rem";
}, function (props) {
  return props.border && "1px solid black";
}, function (props) {
  return props.shadow && "1px 1px 2px black";
}, function (props) {
  return props.noSpace ? "10px 0 10px" : "30px";
});

exports.SubTitle = SubTitle;

var MinDescription = _styledComponents["default"].p(_templateObject5());

exports.MinDescription = MinDescription;

var Description = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.left ? "left" : "center";
}, function (props) {
  return props.bold ? "bold" : "normal";
}, function (props) {
  return props.shadow && "1px 1px 2px black";
}, function (props) {
  return props.padding ? "30px 0 30px" : "10px 0 10px";
}, function (props) {
  switch (props.width) {
    case "half":
      return "width:50% !important;";

    case "more":
      return "width:70% !important;";
  }

  return "width:100%;";
}, function (props) {
  switch (props.width) {
    case "half":
      return "width:80% !important;";

    case "more":
      return "width:70% !important;";
  }

  return "width:100%;";
}, function (props) {
  return props.large ? "1.1rem" : "1rem";
}, function (props) {
  return props.noneMargin ? "auto 0" : "0 auto";
}, function (props) {
  switch (props.color) {
    case "white":
      return "color: white;";

    case "black":
      return "color:black;";
  }

  return "color:gray;";
}, function (props) {
  return props.both && "0 10px 0 10px";
}, function (props) {
  return props.small && "0.8rem";
});

exports.Description = Description;

var ImageText = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.large ? "1.4rem" : "1.5rem";
}, function (props) {
  return props.left ? "left" : "center";
});

exports.ImageText = ImageText;

var MinTitle = _styledComponents["default"].div(_templateObject8(), function (props) {
  return props.border && "\n  border-bottom:3px solid #ccc;\n display:inline-block;\n padding-bottom:10px;\n ";
}, function (props) {
  return props.borderLeft && "\n   border-left:6px solid black;\n    padding-left:10px;\n ";
}, function (props) {
  return props.black && "black";
}, function (props) {
  return props.left ? "left" : "center";
}, function (props) {
  return props.large ? "1.8rem" : "1.5rem";
}, function (props) {
  return props.first && "::first-letter{\n   font-size:2.8rem;\n }";
}, function (props) {
  return props.small && "1.1rem";
}, function (props) {
  return props.custom && "\n    display:inline-block;\n  color: black;/*\u6587\u5B57\u8272*/\n  padding: 0.5em 0;/*\u4E0A\u4E0B\u306E\u4F59\u767D*/\n  border-top: solid 3px #ccc;/*\u4E0A\u7DDA*/\n  border-bottom: solid 3px #ccc;/*\u4E0B\u7DDA*/\n  // background: #ccc;\n  padding-left:10px;\n  padding-right:10px;\n ";
}); // ==========テキストデザイン===========
// ------------- レイアウト--------------------


exports.MinTitle = MinTitle;

var ProductTitle = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.small ? "1.8rem" : "2.2rem";
}, function (props) {
  return props.border && "1px solid black";
});

exports.ProductTitle = ProductTitle;

var TextFlex = _styledComponents["default"].div(_templateObject10());

exports.TextFlex = TextFlex;

var DescriptionFlex = _styledComponents["default"].div(_templateObject11(), function (props) {
  return props.reverse && "row-reverse";
}, function (props) {
  return props.hikawa && "\n    flex-direction:row-reverse;\n ";
}, function (props) {
  return props.reverse ? "0 0 0 auto" : "0 auto 0 0";
}, function (props) {
  return props.hikawa && "\n   margin: 0 0 0 20px !important;\n   height:600px;\n ";
});

exports.DescriptionFlex = DescriptionFlex;

var TwoColumn = _styledComponents["default"].div(_templateObject12(), function (props) {
  return props.reverse && 2;
}, function (props) {
  return props.reverse && 1;
});

exports.TwoColumn = TwoColumn;

var ProductColumn = _styledComponents["default"].div(_templateObject13(), function (props) {
  return props.more ? "1024px" : "857px";
}, function (props) {
  switch (props.margin) {
    case "left":
      return "margin:0 20px 20px 0 !important;";

    case "right":
      return "margin:0 0 20px 20px !important;";
  }
}, function (props) {
  return props.reverse ? 2 : 1;
}, function (props) {
  return props.responsive && 2;
}, function (props) {
  return props.reverse ? 1 : 2;
}, function (props) {
  return props.responsive && 1;
}, function (props) {
  return props.responsive && "20px";
});

exports.ProductColumn = ProductColumn;

var MaxTwoColumn = _styledComponents["default"].div(_templateObject14(), function (props) {
  return props.little ? "1224px" : "100%";
}, function (props) {
  return props.auto && "auto 0";
}, function (props) {
  return props.auto && "auto 0";
}, function (props) {
  return props.reverse && 2;
}, function (props) {
  return props.reverse && 1;
});

exports.MaxTwoColumn = MaxTwoColumn;

var ListColumn = _styledComponents["default"].div(_templateObject15());

exports.ListColumn = ListColumn;

var Scroll = _styledComponents["default"].figure(_templateObject16());

exports.Scroll = Scroll;

var ScrollItem = _styledComponents["default"].li(_templateObject17()); //---------- grid---------------


exports.ScrollItem = ScrollItem;

var GridContainer = _styledComponents["default"].div(_templateObject18());

exports.GridContainer = GridContainer;

var ItemA = _styledComponents["default"].div(_templateObject19());

exports.ItemA = ItemA;

var ItemB = _styledComponents["default"].div(_templateObject20());

exports.ItemB = ItemB;

var ItemC = _styledComponents["default"].div(_templateObject21());

exports.ItemC = ItemC;

var GridList = _styledComponents["default"].figure(_templateObject22(), function (_ref) {
  var change = _ref.change;
  return change ? "\n\n   @media(max-width:767px){\n    overflow-x: auto;\n      white-space: nowrap;\n      -webkit-overflow-scrolling: touch;\n   }\n  " : "\n\n display:grid;\n grid-template-columns:1fr 1fr 1fr;\n grid-gap:0px;\n max-width:1024px;\n text-align:center;\n margin:0 auto;\n  ";
}, function (props) {
  return props.gap && "20px";
}, function (props) {
  return props.single ? "1fr" : "1fr 1fr";
}); // ---------grid-------------


exports.GridList = GridList;

var FlexNav = _styledComponents["default"].nav(_templateObject23(), function (props) {
  return props.small ? "5px auto" : "30px auto";
}, function (props) {
  return props.white ? "white" : "grey";
});

exports.FlexNav = FlexNav;

var FlexNavLi = _styledComponents["default"].li(_templateObject24(), function (props) {
  return props.active === "true" && "red";
}); // ------------- レイアウト--------------------


exports.FlexNavLi = FlexNavLi;

var Allow = _styledComponents["default"].div(_templateObject25());

exports.Allow = Allow;

var Featured = _styledComponents["default"].section(_templateObject26());

exports.Featured = Featured;

var News = _styledComponents["default"].section(_templateObject27());

exports.News = News;

var Gallery = _styledComponents["default"].div(_templateObject28());

exports.Gallery = Gallery;

var Figure = _styledComponents["default"].figure(_templateObject29());

exports.Figure = Figure;

var Youtube = _styledComponents["default"].iframe(_templateObject30());

exports.Youtube = Youtube;
var StyledImage = (0, _styledComponents["default"])(_gatsbyImage["default"])(_templateObject31());
/* ===============================================
#  set css variables
=============================================== */
// function setColor() {
//     let styles = ""
//     for (const key in colors) {
//         styles += `--${key}: ${colors[key]};`
//     }
//     return css `
//     :root {
//       ${styles}
//       --width: ${size.width};
//       --topHeight: ${size.topHeight};
//     }
//   `
// }

/* ===============================================
#  font setting
=============================================== */
// const font = css `
//   font-family: -apple-system, system-ui, "Helvetica Neue", "Segoe UI",
//     "Hiragino Kaku Gothic ProN", "Hiragino Sans", "ヒラギノ角ゴ ProN W3", Arial,
//     メイリオ, Meiryo, sans-serif;
//   word-wrap: break-word;
//   word-break: break-all;
//   -moz-font-feature-settings: "palt";
//   -webkit-font-feature-settings: "palt";
//   font-feature-settings: "palt";
//   font-variant-ligatures: no-common-ligatures;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-rendering: auto;
//   -webkit-text-stroke: 1px transparent;
//   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//   letter-spacing: 0.05rem;
//   font-weight: 400;
//   color: var(--text);
// `

/* ===============================================
#  global style
=============================================== */
// const GlobalStyle = createGlobalStyle `

/* ${setColor}
  html {
    font-size: 16px;
  }
  body {
    ${font}
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    position: relative;
    background: var(--background);
    a {
      color: var(--text);
    }
  }
  * {
    box-sizing: boreder-box;
    margin: 0;
    padding: 0;

  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  input, button, textarea, button, select {
    ${font}
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    line-height: 1.5;
    font-size: 16px;
    -webkit-appearance: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
  ::selection {
    background: rgba(255, 250, 118, 0.35);
  } */

/* ===============================================
  # smart phone
//   =============================================== */
//   @media screen and (max-width: 780px) {
//     html, body {
//       font-size: 15px;
//     }
//     .pc {
//       display: none !important;
//     }
//   }
//   /* ===============================================
//   # pc
//   =============================================== */
//   @media screen and (min-width: 781px) {
//     .sp {
//       display: none !important;
//     }
//   }
// `
// export default GlobalStyle

exports.StyledImage = StyledImage;