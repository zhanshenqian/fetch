/**
 * Created by daijiawei on 2016/10/30.
 */

export const session = {
  setItem: (key, value) => window.sessionStorage.setItem(key, value),
  getItem: (key) => window.sessionStorage.getItem(key),
  removeItem: (key) => window.sessionStorage.removeItem(key),
  clear: () => window.sessionStorage.clear()
}

export const local = {
  setItem: (key, value) => window.localStorage.setItem(key, value),
  getItem: (key) => window.localStorage.getItem(key),
  removeItem: (key) => window.localStorage.removeItem(key),
  clear: () => window.localStorage.clear()
}
