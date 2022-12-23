//* environment variables file
//! these variables should not be exposed to the client machine
//*  NEXT_PUBLIC_AUTH_VALUESTORY_API_BASE_URL is the base URL for the API
export const AUTH_VALUESTORY_API_BASEURL =
  process.env.#NEXT_PUBLIC_AUTH_VALUESTORY_API_BASE_URL#
//* NEXT_PUBLIC_AUTH_VALUESTORY is the domain name for the auth server
export const AUTH_VALUESTORY = process.env.#NEXT_PUBLIC_AUTH_VALUESTORY#
//* LOCATION_API is the URL for the location API. This is used to get current location of hte client so as to set contact prefix.
export const LOCATION_API = 'https://iplist.cc/api/'
