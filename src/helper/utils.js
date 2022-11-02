// import reduce from 'lodash/reduce';
// import _get from 'lodash/get';
// import includes from 'lodash/includes';
import Cookies from 'js-cookie'
// import UUID from 'uuid';

const options = {
  prefix: 'cr-',
}

export const getCookie = (name) => {
  return Cookies.get(options.prefix + name)
}

export const setCookie = (name, value, time) => {
  Cookies.set(options.prefix + name, value, { expires: time, path: '' })
}
export const getAllCookies = () => {
  return Cookies.get()
}
export const eraseCookie = (name) => {
  Cookies.remove(name)
}
