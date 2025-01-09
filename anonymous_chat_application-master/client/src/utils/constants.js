// export const AUTH_ROUTES = "http://localhost:3000/api/auth"

import exp from "constants";

export const HOST = import.meta.env.VITE_HOST;

export const AUTH_ROUTES = "/api/auth"

export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`;
export const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTES}/update-profile`;
export const ADD_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/add-profile-image`;
export const REMOVE_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/remove-profile-image`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;

export const CONTACT_ROUTES = '/api/contacts';
export const SEARCH_CONTACTS_ROUTES = `${CONTACT_ROUTES}/search`