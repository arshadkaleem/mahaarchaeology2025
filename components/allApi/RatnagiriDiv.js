export async function palgharDist() {
  
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
                	  palgharDistrictCollection{
    items{
      title
      paragraph{
        json
      }
      imgCollection{
        items{
          url
          width
          height
        }
      }
      
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

export async function thaneDist() {
  
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
                	  thaneDistrictCollection{
    items{
      title
      paragraph{
        json
      }
      imgCollection{
        items{
          url
          width
          height
        }
      }
      
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

export async function mumbaiDist() {
  
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
                	  mumbaiDistrictCollection{
    items{
      title
      paragraph{
        json
      }
      imgCollection{
        items{
          url
          width
          height
        }
      }
      
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
