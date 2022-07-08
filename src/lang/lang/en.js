//导入组件UI库国际化相应包
import enLocale from "element-ui/lib/locale/lang/en";

const en = {
  login: {
    title: "Login Form",
    usernameTip: "please enter username",
    passwordTip: "Please enter password",
    login: "Login",
    reset: "Reset",
    forget: "forget password",
    admin: "Username : admin",
    editor: "Username : editor",
    passwordAny: "Password : any",
    third: "Or connect with",
    thirdTip: "This feature has not been developed yet!",
    success: "login successful!",
    fail: "Login failed!",
  },
  menu: {
    Dashboard: "Dashboard",
    User: "User",
    Share: "Share",
    Documentation: "Documentation",
    Guide: "Guide",
    Permission: "Permission",
    ErrorPage: "ErrorPage",
    Page: "Page Permission",
    Directive: "Directive Permission",
    Role: "Role Permission",
    Xls: "Excel",
    export: "Export Excel",
    selected: "Export Selected",
    multiLevel: "Merage Header",
    excelUpload: "Upload Excel",
    401: "401",
    404: "404",
    500: "500",
    FundData: "FundData",
    FundPosition: "FundPosition",
    TypePosition: "TypePosition",
    IncomePayPosition: "IncomePayPosition",
    RichText: "RichText",
    Markdown: "Markdown",
    Table: "Table",
    ExpandRow: "ExpandRow Table",
    DragTable: "Drag Table",
    EditableTable: "EditableTable",
    TreeTable: "TreeTable",
  },
  ...enLocale, //  合并element-ui内置翻译
};

export default en;
