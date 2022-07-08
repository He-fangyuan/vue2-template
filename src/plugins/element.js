import Vue from "vue";
import {
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Dialog,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Table,
  TableColumn,
  Tag,
  Row,
  Col,
  Progress,
  Backtop,
  Pagination,
  Popover,
  Tooltip,
  Radio,
  RadioGroup,
  Select,
  Option,
  Switch,
  MessageBox,
} from "element-ui";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Container);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);
Vue.use(Row);
Vue.use(Col);
Vue.use(Progress);
Vue.use(Backtop);
Vue.use(Pagination);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(Switch);

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
