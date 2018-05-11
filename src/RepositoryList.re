module GetRepositoryList = [%graphql
  {|
  query getRepositoryList {
    viewer {
      name
      email
      repositories(first: 10) {
        edges {
          node {
            id
            name
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

let renderViewerDetails = (viewer) =>
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
             | Data(response) => renderViewerDetails(response##viewer)
             }
         )
    </GetRepositoryListQuery>,
};