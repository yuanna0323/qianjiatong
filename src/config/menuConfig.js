 const menuList = [{
         title: '首页',
         key: '/admin/home'
     },
     {
         title: 'UI',
         key: '/admin/UI',
         children: [{
                 title: '按钮',
                 key: 'admin/ui/buttons'
             },
             {
                 title: '弹框',
                 key: 'admin/ui/modals'
             },
             {
                 title: 'Loading',
                 key: 'admin/ui/Loading'
             }
         ]
     }
 ]
 export default menuList;