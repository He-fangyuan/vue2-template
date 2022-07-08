import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "login",
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      role: ["admin", "user"],
    },
    component: function () {
      return import("@/layout/Login/Login");
    },
  },
  {
    path: "/home",
    name: "view",
    meta: {
      title: "首页",
      role: ["admin", "user"],
    },
    redirect: "/welcome",
    component: function () {
      return import("@/layout/HomeView/Home.vue");
    },
    children: [
      {
        path: "/welcome",
        name: "Welcome",
        meta: {
          title: "首页",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/HomePage/index.vue"),
      },
      {
        path: "/share",
        name: "Share",
        meta: {
          title: "数据分享",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Share/index.vue"),
      },
      {
        path: "/user",
        name: "User",
        meta: {
          title: "数据统计",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/UserList/index.vue"),
      },
      {
        path: "/401",
        name: "401",
        meta: {
          title: "401",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/errorPage/401/index.vue"),
      },
      {
        path: "/404",
        name: "404",
        meta: {
          title: "404",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/errorPage/404/index.vue"),
      },
      {
        path: "/500",
        name: "500",
        meta: {
          title: "500",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/errorPage/500/index.vue"),
      },
      {
        path: "/excelExport",
        name: "表格导出",
        meta: {
          title: "表格导出",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Excel/exportExcel"),
      },
      {
        path: "/excelSelected",
        name: "表格导出选择项",
        meta: {
          title: "表格导出选择项",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Excel/excelSelected"),
      },
      {
        path: "/excelMultiLevel",
        name: "表格导出多级表头",
        meta: {
          title: "表格导出多级表头",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Excel/excelMultiLevel"),
      },
      {
        path: "/excelUpload",
        name: "表格上传",
        meta: {
          title: "表格上传",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Excel/excelUpload"),
      },
      {
        path: "/fundPosition",
        name: "投资分布",
        meta: {
          title: "投资分布",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/FundData/FundPosition"),
      },
      {
        path: "/typePosition",
        name: "项目分布",
        meta: {
          title: "项目分布",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/FundData/TypePosition"),
      },
      {
        path: "/incomePayPosition",
        name: "收支分布",
        meta: {
          title: "收支分布",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/FundData/IncomePayPosition"),
      },
      {
        path: "/markdown",
        name: "Markdown",
        meta: {
          title: "Markdown",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/RichText/Markdown"),
      },
      {
        path: "/expandRow",
        name: "展开行",
        meta: {
          title: "ExpandRow",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Table/ExpandRow"),
      },
      {
        path: "/dragTable",
        name: "可拖拽表格",
        meta: {
          title: "DragTable",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Table/DragTable"),
      },
      {
        path: "/editableTable",
        name: "可编辑表格",
        meta: {
          title: "EditableTable",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Table/EditableTable"),
      },
      {
        path: "/treeTable",
        name: "树型表格",
        meta: {
          title: "TreeTable",
          role: ["admin", "user"],
        },
        component: () => import("@/pages/Table/TreeTable"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") return next();
//   // 获取token
//   const tokenStr = store.getters.token;
//   if (!tokenStr) return next("/login");
//   next();
// });

//使用afterEach钩子函数，保证路由已经跳转成功之后修改title
router.afterEach((route) => {
  let documentTitle = "管理后台";

  route.matched.forEach((path) => {
    if (path.meta.title) {
      documentTitle += `- ${path.meta.title}`;
    }
  });

  document.title = documentTitle;
});

export default router;
