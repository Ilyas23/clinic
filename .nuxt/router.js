import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1311455a = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _3c6146a0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _4a661f69 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _c76053c2 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _002ec7e9 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages_registration" */))
const _4b819ec7 = () => interopDefault(import('..\\pages\\schedule.vue' /* webpackChunkName: "pages_schedule" */))
const _845c8fa6 = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages_service_index" */))
const _5f4d3c0e = () => interopDefault(import('..\\pages\\admin\\add-news.vue' /* webpackChunkName: "pages_admin_add-news" */))
const _7c433eef = () => interopDefault(import('..\\pages\\admin\\add-row.vue' /* webpackChunkName: "pages_admin_add-row" */))
const _b161406c = () => interopDefault(import('..\\pages\\admin\\add-service.vue' /* webpackChunkName: "pages_admin_add-service" */))
const _1f7c29cc = () => interopDefault(import('..\\pages\\admin\\client.vue' /* webpackChunkName: "pages_admin_client" */))
const _de5bd54e = () => interopDefault(import('..\\pages\\admin\\logout.vue' /* webpackChunkName: "pages_admin_logout" */))
const _5f9e403c = () => interopDefault(import('..\\pages\\admin\\news.vue' /* webpackChunkName: "pages_admin_news" */))
const _7ddcdbb4 = () => interopDefault(import('..\\pages\\admin\\schedule.vue' /* webpackChunkName: "pages_admin_schedule" */))
const _9bf58914 = () => interopDefault(import('..\\pages\\admin\\service.vue' /* webpackChunkName: "pages_admin_service" */))
const _6d2b04da = () => interopDefault(import('..\\pages\\admin\\user.vue' /* webpackChunkName: "pages_admin_user" */))
const _419b001b = () => interopDefault(import('..\\pages\\admin\\edit-client\\_id.vue' /* webpackChunkName: "pages_admin_edit-client__id" */))
const _239d2f13 = () => interopDefault(import('..\\pages\\admin\\edit-news\\_id.vue' /* webpackChunkName: "pages_admin_edit-news__id" */))
const _0675ac62 = () => interopDefault(import('..\\pages\\admin\\edit-schedule\\_id.vue' /* webpackChunkName: "pages_admin_edit-schedule__id" */))
const _a5e3f8ee = () => interopDefault(import('..\\pages\\admin\\edit-service\\_id.vue' /* webpackChunkName: "pages_admin_edit-service__id" */))
const _33cad447 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages_news__id" */))
const _5cd9e1d5 = () => interopDefault(import('..\\pages\\service\\_id.vue' /* webpackChunkName: "pages_service__id" */))
const _fe83075c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _1311455a,
      name: "admin"
    }, {
      path: "/contact",
      component: _3c6146a0,
      name: "contact"
    }, {
      path: "/login",
      component: _4a661f69,
      name: "login"
    }, {
      path: "/news",
      component: _c76053c2,
      name: "news"
    }, {
      path: "/registration",
      component: _002ec7e9,
      name: "registration"
    }, {
      path: "/schedule",
      component: _4b819ec7,
      name: "schedule"
    }, {
      path: "/service",
      component: _845c8fa6,
      name: "service"
    }, {
      path: "/admin/add-news",
      component: _5f4d3c0e,
      name: "admin-add-news"
    }, {
      path: "/admin/add-row",
      component: _7c433eef,
      name: "admin-add-row"
    }, {
      path: "/admin/add-service",
      component: _b161406c,
      name: "admin-add-service"
    }, {
      path: "/admin/client",
      component: _1f7c29cc,
      name: "admin-client"
    }, {
      path: "/admin/logout",
      component: _de5bd54e,
      name: "admin-logout"
    }, {
      path: "/admin/news",
      component: _5f9e403c,
      name: "admin-news"
    }, {
      path: "/admin/schedule",
      component: _7ddcdbb4,
      name: "admin-schedule"
    }, {
      path: "/admin/service",
      component: _9bf58914,
      name: "admin-service"
    }, {
      path: "/admin/user",
      component: _6d2b04da,
      name: "admin-user"
    }, {
      path: "/admin/edit-client/:id?",
      component: _419b001b,
      name: "admin-edit-client-id"
    }, {
      path: "/admin/edit-news/:id?",
      component: _239d2f13,
      name: "admin-edit-news-id"
    }, {
      path: "/admin/edit-schedule/:id?",
      component: _0675ac62,
      name: "admin-edit-schedule-id"
    }, {
      path: "/admin/edit-service/:id?",
      component: _a5e3f8ee,
      name: "admin-edit-service-id"
    }, {
      path: "/news/:id",
      component: _33cad447,
      name: "news-id"
    }, {
      path: "/service/:id",
      component: _5cd9e1d5,
      name: "service-id"
    }, {
      path: "/",
      component: _fe83075c,
      name: "index"
    }],

    fallback: false
  })
}
