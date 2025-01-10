//Home Page Data  slider...Quantity
export async function excavationPageAPI() {
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
                  excavationAndExplorationCollection(order:order_ASC){
    items{
      site
       siteInEnglish: site(locale: "en")
      excavatedBy
      excavatedByInEnglish: excavatedBy(locale: "en")
      reference
       referenceInEnglish: reference(locale: "en")
      year
       yearInEnglish: year(locale: "en")
 			downloadsCollection{
        items{
          title
          url
        }
      }
      id
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
