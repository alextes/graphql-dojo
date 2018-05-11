// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Graphql_error = Caml_exceptions.create("RepositoryList-ReactTemplate.GetRepositoryList.Graphql_error");

var query = "query getRepositoryList  {\nviewer  {\nname  \nemail  \nrepositories(first: 10)  {\nedges  {\nnode  {\nid  \nname  \n}\n}\n}\n}\n}";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["viewer"];
    var match$1 = Js_json.decodeObject(value$1);
    var tmp;
    if (match$1) {
      var value$2 = match$1[0];
      var value$3 = value$2["name"];
      var match$2 = Js_json.decodeNull(value$3);
      var tmp$1;
      if (match$2) {
        tmp$1 = /* None */0;
      } else {
        var match$3 = Js_json.decodeString(value$3);
        var tmp$2;
        if (match$3) {
          tmp$2 = match$3[0];
        } else {
          throw Graphql_error;
        }
        tmp$1 = /* Some */[tmp$2];
      }
      var value$4 = value$2["email"];
      var match$4 = Js_json.decodeString(value$4);
      var tmp$3;
      if (match$4) {
        tmp$3 = match$4[0];
      } else {
        throw Graphql_error;
      }
      var value$5 = value$2["repositories"];
      var match$5 = Js_json.decodeObject(value$5);
      var tmp$4;
      if (match$5) {
        var value$6 = match$5[0]["edges"];
        var match$6 = Js_json.decodeNull(value$6);
        var tmp$5;
        if (match$6) {
          tmp$5 = /* None */0;
        } else {
          var match$7 = Js_json.decodeArray(value$6);
          var tmp$6;
          if (match$7) {
            tmp$6 = match$7[0].map((function (value) {
                    var match = Js_json.decodeNull(value);
                    if (match) {
                      return /* None */0;
                    } else {
                      var match$1 = Js_json.decodeObject(value);
                      var tmp;
                      if (match$1) {
                        var value$1 = match$1[0]["node"];
                        var match$2 = Js_json.decodeNull(value$1);
                        var tmp$1;
                        if (match$2) {
                          tmp$1 = /* None */0;
                        } else {
                          var match$3 = Js_json.decodeObject(value$1);
                          var tmp$2;
                          if (match$3) {
                            var value$2 = match$3[0];
                            var value$3 = value$2["id"];
                            var match$4 = Js_json.decodeString(value$3);
                            var tmp$3;
                            if (match$4) {
                              tmp$3 = match$4[0];
                            } else {
                              throw Graphql_error;
                            }
                            var value$4 = value$2["name"];
                            var match$5 = Js_json.decodeString(value$4);
                            var tmp$4;
                            if (match$5) {
                              tmp$4 = match$5[0];
                            } else {
                              throw Graphql_error;
                            }
                            tmp$2 = {
                              id: tmp$3,
                              name: tmp$4
                            };
                          } else {
                            throw Graphql_error;
                          }
                          tmp$1 = /* Some */[tmp$2];
                        }
                        tmp = {
                          node: tmp$1
                        };
                      } else {
                        throw Graphql_error;
                      }
                      return /* Some */[tmp];
                    }
                  }));
          } else {
            throw Graphql_error;
          }
          tmp$5 = /* Some */[tmp$6];
        }
        tmp$4 = {
          edges: tmp$5
        };
      } else {
        throw Graphql_error;
      }
      tmp = {
        name: tmp$1,
        email: tmp$3,
        repositories: tmp$4
      };
    } else {
      throw Graphql_error;
    }
    return {
            viewer: tmp
          };
  } else {
    throw Graphql_error;
  }
}

function make() {
  return {
          query: query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables() {
  return {
          query: query,
          variables: null,
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetRepositoryList = /* module */[
  /* Graphql_error */Graphql_error,
  /* query */query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var GetRepositoryListQuery = ReasonApollo.CreateQuery([
      query,
      parse
    ]);

var component = ReasonReact.statelessComponent("RepositoryList");

function $pipe$unknown$great(fn, opt) {
  if (opt) {
    return Curry._1(fn, opt[0]);
  } else {
    return /* None */0;
  }
}

function $pipe$unknown$great$great(fn, opt) {
  if (opt) {
    return /* Some */[Curry._1(fn, opt[0])];
  } else {
    return /* None */0;
  }
}

function $pipe$unknown(opt, $$default) {
  if (opt) {
    return opt[0];
  } else {
    return $$default;
  }
}

function renderViewerDetails(viewer) {
  return React.createElement("div", undefined, React.createElement("h2", undefined, $pipe$unknown(viewer.name, "No name")), React.createElement("h3", undefined, viewer.email));
}

function make$1() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(/* None */0, /* None */0, Curry.app(GetRepositoryListQuery[/* make */3], [
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              /* None */0,
                              (function (param) {
                                  var result = param[/* result */0];
                                  if (typeof result === "number") {
                                    if (result === 0) {
                                      return React.createElement("div", undefined, "Loading");
                                    } else {
                                      return React.createElement("div", undefined, "No Data");
                                    }
                                  } else if (result.tag) {
                                    return renderViewerDetails(result[0].viewer);
                                  } else {
                                    console.log(result[0]);
                                    return React.createElement("div", undefined, "error");
                                  }
                                })
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.GetRepositoryList = GetRepositoryList;
exports.GetRepositoryListQuery = GetRepositoryListQuery;
exports.component = component;
exports.$pipe$unknown$great = $pipe$unknown$great;
exports.$pipe$unknown$great$great = $pipe$unknown$great$great;
exports.$pipe$unknown = $pipe$unknown;
exports.renderViewerDetails = renderViewerDetails;
exports.make = make$1;
/* GetRepositoryListQuery Not a pure module */
