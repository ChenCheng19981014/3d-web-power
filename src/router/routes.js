export default [
  {
    path: "/",
    name: "workspace",
    component: () => import("../views/workspace"),
    children: [
      {
        name: "project",
        path: "/",
        component: () => import("../views/workspace/project")
      },
      {
        name: "recovery",
        path: "/recovery",
        component: () => import("../views/workspace/recovery")
      },
      {
        name: "collection",
        path: "/collection",
        component: () => import("../views/workspace/collection")
      }

    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "/forgetPsw",
    name: "forgetPsw",
    component: () => import("../views/forgetPsw")
  },
  {
    path: "/person-mobile",
    name: "person-mobile",
    component: () => import("../views/person-mobile")
  },
  {
    path: "/person-pc",
    name: "person-pc",
    component: () => import("../views/person-pc")
  },
  {
    path: "/changePsw",
    name: "changePsw",
    component: () => import("../views/changePsw")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register")
  },
  {
    path: "/project-share",
    name: "project-share",
    component: () => import("../views/project-share")
  },
  {
    path: "/project-share-mobile",
    name: "project-share-mobile",
    component: () => import("../views/project-share-mobile")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register")
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/personalsetting")
  }
]
