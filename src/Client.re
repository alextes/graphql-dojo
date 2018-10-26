/* Create an InMemoryCache */
let inMemoryCache = ApolloInMemoryCache.createInMemoryCache();

/* Create an HTTP Link */
let httpLink =
  ApolloLinks.createHttpLink(
    ~uri="https://api.github.com/graphql",
    ~headers=
      Js.Json.object_(
        Js.Dict.fromList([
          (
            "Authorization",
            Js.Json.string("bearer d2579cb52241b7c07a3effb92c16037999eb4e1b"),
          ),
        ]),
      ),
    (),
  );

let instance =
  ReasonApollo.createApolloClient(~link=httpLink, ~cache=inMemoryCache, ());