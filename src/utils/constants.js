const DEFAULT_COMMON_MENU = {
  headers: [
    {
      id: 1,
      label: 'Listings',
      href: '/listings',
    },
    {
      id: 2,
      label: 'Mentors',
      href: '/mentors',
    },
    {
      id: 3,
      label: 'Home',
      href: '/',
    },
    {
      id: 4,
      label: 'Get Involved',
      href: '/volunteer',
    },
    {
      id: 5,
      label: 'Log In',
      href: '/login',
    },
    {
      id: 6,
      label: 'Sign Up',
      href: '/register',
    },
    {
      id: 7,
      label: 'Donate',
      href: '/donate',
    },
  ],
};

const API_PATH = {
  COMMON_MENU: '/api/commonMenu',
  LOGIN: '/api/login',
  REGISTER: '/api/register',
  TIMEDOUT_ENDPOINT: '/login?timedOut=true',
  LOGIN_PAGE: '/login',
};

const METHOD_TYPE = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete',
};

const ANALYTICS_TYPE = {
  PAGE_VIEW: 'pageView',
  EVENT: 'event',
};

const ROUTES_LABEL = {
  HOME: 'homePage',
  MENTORS: 'mentors',
  LOGIN: 'login',
  REGISTER: 'register',
  LISTINGS: 'listings',
  VOLUNTEER: 'volunteer',
  ABOUT: 'whatWeDo',
  RESOURCES: 'resources',
  THREADS: 'threads',
};

const ROUTES = [
  {
    id: 1,
    isProtected: false,
    label: ROUTES_LABEL.HOME,
    path: '/',
  },
  {
    id: 2,
    isProtected: true,
    label: ROUTES_LABEL.MENTORS,
    path: '/mentors',
  },
  {
    id: 3,
    isProtected: false,
    label: ROUTES_LABEL.LOGIN,
    path: '/login',
  },
  {
    id: 4,
    isProtected: false,
    label: ROUTES_LABEL.REGISTER,
    path: '/register',
  },
  {
    id: 5,
    isProtected: false,
    label: ROUTES_LABEL.LISTINGS,
    path: '/listings',
  },
  {
    id: 6,
    isProtected: false,
    label: ROUTES_LABEL.VOLUNTEER,
    path: '/volunteer',
  },
  {
    id: 7,
    isProtected: false,
    label: ROUTES_LABEL.ABOUT,
    path: '/about',
  },
  {
    id: 8,
    isProtected: false,
    label: ROUTES_LABEL.RESOURCES,
    path: '/resources',
  },
  {
    id: 9,
    isProtected: true,
    label: ROUTES_LABEL.THREADS,
    path: '/threads',
  },
];

const ACTION_TYPE = {
  UPDATE_UI_VIEW: 'UPDATE_UI_VIEW',
};

export {
  ANALYTICS_TYPE,
  API_PATH,
  DEFAULT_COMMON_MENU,
  ROUTES,
  ROUTES_LABEL,
  ACTION_TYPE,
  METHOD_TYPE,
};
