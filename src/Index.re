  /* 
    Enhance your application with the `ReasonApollo.Provider` 
    passing it your client instance 
  */
  ReactDOMRe.renderToElementWithId(
    <ReasonApollo.Provider client=Client.instance>
        <App />
    </ReasonApollo.Provider>
  , "index");