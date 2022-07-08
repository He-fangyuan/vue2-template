//导入组件UI库国际化相应包
import zhLocale from "element-ui/lib/locale/lang/zh-CN";

const cn = {
  login: {
    title: "系统登录",
    usernameTip: "请输入用户名",
    passwordTip: "请输入密码",
    login: "登录",
    reset: "重置",
    forget: "忘记密码",
    admin: "用户名 : admin",
    editor: "用户名 : editor",
    passwordAny: "密码 : 随便填",
    third: "第三方登录",
    thirdTip: "此功能尚未开发！",
    success: "登录成功！",
    fail: "登录失败！",
  },
  menu: {
    Dashboard: "首页",
    User: "用户信息",
    Share: "数据分享",
    Documentation: "文档",
    Guide: "引导页",
    Permission: "权限测试页",
    ErrorPage: "错误页面",
    Page: "页面权限",
    Directive: "指令权限",
    Role: "角色权限",
    Xls: "表格工具",
    export: "导出 表格",
    selected: "导出 已选择项",
    multiLevel: "导出 多级表头",
    excelUpload: "上传 Excel",
    401: "401",
    404: "404",
    500: "500",
    FundData: "资金数据",
    FundPosition: "投资分布",
    TypePosition: "项目分布",
    IncomePayPosition: "收支分布",
    RichText: "富文本编辑",
    Markdown: "Markdown",
    Table: "表格",
    ExpandRow: "展开行表格",
    DragTable: "可拖拽表格",
    EditableTable: "可编辑表格",
    TreeTable: "树型表格",
  },
  ...zhLocale, //  合并element-ui内置翻译
};

export default cn;
