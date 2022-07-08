const menuLists = [
  {
    title: "Dashboard",
    icon: "dashboard",
    id: "150",
    path: "home",
  },
  {
    title: "User",
    icon: "user",
    id: "151",
    path: "user",
  },
  {
    title: "Share",
    icon: "share",
    id: "152",
    path: "share",
  },
  {
    title: "Documentation",
    icon: "documentation",
    id: "153",
    path: "statistics",
  },
  {
    title: "Guide",
    icon: "guide",
    id: "154",
    path: "guide",
  },
  {
    title: "Permission",
    icon: "lock",
    id: "155",
    children: [
      {
        title: "Page",
        id: "1550",
        path: "page",
      },
      {
        title: "Directive",
        id: "1551",
        path: "directive",
      },
      {
        title: "Role",
        id: "1552",
        path: "role",
      },
    ],
  },
  {
    title: "ErrorPage",
    icon: "warning",
    id: "156",
    children: [
      {
        title: "401",
        id: "1560",
        path: "401",
      },
      {
        title: "404",
        id: "1561",
        path: "404",
      },
      {
        title: "500",
        id: "1562",
        path: "500",
      },
    ],
  },
  {
    title: "Xls",
    icon: "xls",
    id: "157",
    path: "excel",
    children: [
      {
        title: "export",
        id: "1570",
        path: "excelExport",
      },
      {
        title: "selected",
        id: "1571",
        path: "excelSelected",
      },
      {
        title: "multiLevel",
        id: "1572",
        path: "excelMultiLevel",
      },
      {
        title: "excelUpload",
        id: "1573",
        path: "excelUpload",
      },
    ],
  },
  {
    title: "FundData",
    icon: "fundData",
    id: "158",
    children: [
      {
        title: "FundPosition",
        id: "1580",
        path: "fundPosition",
      },
      {
        title: "TypePosition",
        id: "1581",
        path: "typePosition",
      },
      {
        title: "IncomePayPosition",
        id: "1582",
        path: "incomePayPosition",
      },
    ],
  },
  {
    title: "RichText",
    icon: "richtext",
    id: "159",
    children: [
      {
        title: "Markdown",
        id: "1590",
        path: "markdown",
      },
    ],
  },
  {
    title: "Table",
    icon: "table",
    id: "160",
    children: [
      {
        title: "ExpandRow",
        id: "1600",
        path: "expandRow",
      },
      {
        title: "DragTable",
        id: "1601",
        path: "dragTable",
      },
      {
        title: "EditableTable",
        id: "1602",
        path: "editableTable",
      },
      {
        title: "TreeTable",
        id: "1603",
        path: "treeTable",
      },
    ],
  },
];

export default menuLists;
