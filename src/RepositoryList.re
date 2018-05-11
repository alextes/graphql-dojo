module GetRepositoryList = [%graphql
  {|
  query getRepositoryList {
    viewer {
      name
      email
      repositories(first: 10, orderBy: { field: STARGAZERS, direction: DESC }) {
        edges {
          node {
            id
            name
            viewerHasStarred
          }
        }
      }
    }
  }
|}
];

module GetRepositoryListQuery = ReasonApollo.CreateQuery(GetRepositoryList);

let component = ReasonReact.statelessComponent("RepositoryList");

let (|?>) = (fn, opt) =>
  switch (opt) {
  | None => None
  | Some(value) => fn(value)
  };

let (|?>>) = (fn, opt) =>
  switch (opt) {
  | None => None
  | Some(value) => Some(fn(value))
  };

let (|?) = (opt, default) =>
  switch (opt) {
  | None => default
  | Some(value) => value
  };

let renderEdgeNode = node =>
  node##viewerHasStarred ?
    ReasonReact.string(node##name ++ {js|🌟|js}) :
    ReasonReact.string(node##name ++ {js|😭|js});

let renderRepositoryList = repositories =>
  switch (repositories##edges) {
  | None => <div> (ReasonReact.string("No repository edges")) </div>
  | Some(edges) =>
    <ul>
      (
        ReasonReact.createDomElement(
          "div",
          ~props={"className": "whatever"},
          Js.Array.map(
            edge =>
              switch (edge) {
              | None => <li> (ReasonReact.string("No edge")) </li>
              | Some(edge) =>
                <li>
                  (
                    switch (edge##node) {
                    | None => ReasonReact.string("No node")
                    | Some(node) => renderEdgeNode(node)
                    /* ReasonReact.string(node##name) */
                    }
                  )
                </li>
              },
            edges,
          ),
        )
      )
    </ul>
  };

let renderViewerDetails = viewer =>
  <div>
    <h2> (viewer##name |? "No name" |> ReasonReact.string) </h2>
    <h3> (viewer##email |> ReasonReact.string) </h3>
  </div>;

let make = _children => {
  ...component,
  render: _self =>
    <GetRepositoryListQuery>
      ...(
           ({result}) =>
             switch (result) {
             | NoData => <div> (ReasonReact.string("No Data")) </div>
             | Loading => <div> (ReasonReact.string("Loading")) </div>
             | Error(error) =>
               Js.log(error);
               <div> (ReasonReact.string("error")) </div>;
             | Data(response) =>
               <div>
                 (renderViewerDetails(response##viewer))
                 (renderRepositoryList(response##viewer##repositories))
               </div>
             }
         )
    </GetRepositoryListQuery>,
};