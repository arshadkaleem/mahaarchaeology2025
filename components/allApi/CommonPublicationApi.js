//Home Page Data  slider...Quantity
export async function commonPublicationAPI(myData) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "post", // GraphQL always uses POST requests!
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
        "Content-Type": "application/json",
      },
      // send the query we wrote in GraphiQL as a string
      body: JSON.stringify({
        // query as payload...all requests start with "query: ", so we'll stringify that for convenience
        query: `
            query {
             publicationGuidebookCollection(where: { slug:"${myData}" }){
  items{
    name
    nameInEnglish: name(locale: "en")
    author
    authorInEnglish: author(locale: "en")
    language
    languageInEnglish: language(locale: "en")
    year
  }
}  
            }            
        `,
      }),
    }
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
}
