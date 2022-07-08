const a = {
  data: [
    {
      id: 101,
      authName: "商品管理",
      path: null,
      pid: 0,
      children: [
        {
          id: 104,
          authName: "商品列表",
          path: null,
          pid: 101,
          children: [
            {
              id: 105,
              authName: "添加商品",
              path: null,
              pid: "104,101",
            },
          ],
        },
      ],
    },
  ],
  meta: {
    msg: "获取权限列表成功",
    status: 200,
  },
};

const b = JSON.stringify(a);
console.log(b);
