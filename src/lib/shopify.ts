// Shopify API utility for NirvanaChai

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const SHOPIFY_API_VERSION = import.meta.env.VITE_SHOPIFY_API_VERSION;
const SHOPIFY_STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const SHOPIFY_API_URL = `https://${SHOPIFY_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

export async function shopifyFetch({ query, variables = {}, language = 'en' }: { query: string; variables?: any; language?: string }) {
  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      'Accept-Language': language,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getProducts({ first = 20, language = 'en' } = {}) {
  const query = `
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            productType
            tags
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  weight
                }
              }
            }
          }
        }
      }
    }
  `;
  const variables = { first };
  const data = await shopifyFetch({ query, variables, language });
  return data?.data?.products?.edges?.map((edge: any) => edge.node) || [];
}

// Shopify Checkout/Cart API
export async function createCheckout(variantId: string, quantity: number = 1) {
  const query = `
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                quantity
                variant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        userErrors { field message }
      }
    }
  `;
  const variables = {
    input: {
      lineItems: [
        { variantId, quantity }
      ]
    }
  };
  const data = await shopifyFetch({ query, variables });
  return data?.data?.checkoutCreate?.checkout;
}

export async function addLineItems(checkoutId: string, variantId: string, quantity: number = 1) {
  const query = `
    mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
      checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
        checkout {
          id
          webUrl
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                quantity
                variant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        userErrors { field message }
      }
    }
  `;
  const variables = {
    checkoutId,
    lineItems: [
      { variantId, quantity }
    ]
  };
  const data = await shopifyFetch({ query, variables });
  return data?.data?.checkoutLineItemsAdd?.checkout;
}

export async function removeLineItems(checkoutId: string, lineItemIds: string[]) {
  const query = `
    mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
      checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
        checkout {
          id
          webUrl
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                quantity
                variant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        userErrors { field message }
      }
    }
  `;
  const variables = {
    checkoutId,
    lineItemIds
  };
  const data = await shopifyFetch({ query, variables });
  return data?.data?.checkoutLineItemsRemove?.checkout;
}

export async function updateLineItems(checkoutId: string, lineItems: {id: string, quantity: number}[]) {
  const query = `
    mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
      checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
        checkout {
          id
          webUrl
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                quantity
                variant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        userErrors { field message }
      }
    }
  `;
  const variables = {
    checkoutId,
    lineItems
  };
  const data = await shopifyFetch({ query, variables });
  return data?.data?.checkoutLineItemsUpdate?.checkout;
} 