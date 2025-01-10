//Home Page Data  slider...Quantity
export async function conservationPreservation() {
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
                    conservationAndPreservationCollection(order:slug_ASC){
                        items{
                          title
                          titleInEnglish: title(locale: "en")
                          before{
                            title
                            titleInEnglish: title(locale: "en")
                            url
                            width
                            height
                          }
                          after{
                            title
                            titleInEnglish: title(locale: "en")
                            url
                            width
                            height
                          }
                          slug
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
  

  export async function protectionTable() {
    
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
                   conservationAndPreservationTableCollection(order:id_ASC){
    items{
      id
      name
      nameEnglish:name(locale:"en")
      dateOfSubmission
      dateOfAdministrative
      commencementWork
      completionWork
      divisionEnglish:division(locale:"en")
      division
      districtEnglish:district(locale:"en")
      district
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