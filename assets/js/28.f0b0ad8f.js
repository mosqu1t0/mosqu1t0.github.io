(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{295:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约束"}},[t._v("#")]),t._v(" 约束")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("非空约束: not null")]),t._v(" "),s("ul",[s("li",[t._v("约束某字段不能为空")])])]),t._v(" "),s("li",[s("p",[t._v("唯一约束: unique")]),t._v(" "),s("ul",[s("li",[t._v("约束字段值是唯一的")])])]),t._v(" "),s("li",[s("p",[t._v("主键约束: primary key (自增: auto_increment)")]),t._v(" "),s("ul",[s("li",[t._v("主键是一张表的唯一表示，是非空唯一的，若需要自增，加上auto_increment")])])]),t._v(" "),s("li",[s("p",[t._v("默认约束: default")]),t._v(" "),s("ul",[s("li",[t._v("若某字段的值没有添加，则会默认指定的值")])])]),t._v(" "),s("li",[s("p",[t._v("检查约束: check")]),t._v(" "),s("ul",[s("li",[t._v("字段储存时必须要达到的条件")])])]),t._v(" "),s("li",[s("p",[t._v("外键约束: foreign key")]),t._v(" "),s("ul",[s("li",[t._v("用来让两张表的数据之间建立连接，从而保证数据的完整性和一致性的")])])])]),t._v(" "),s("p",[s("strong",[t._v("例:")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("字段含义")]),t._v(" "),s("th",[t._v("字段类型")]),t._v(" "),s("th",[t._v("约束条件")]),t._v(" "),s("th",[t._v("约束关键字")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("id唯一标示")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("主键并且自动增长")]),t._v(" "),s("td",[t._v("primary key, auto_increment")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("姓名")]),t._v(" "),s("td",[t._v("varchar(10)")]),t._v(" "),s("td",[t._v("不为空,并且唯一")]),t._v(" "),s("td",[t._v("not null, unique")])]),t._v(" "),s("tr",[s("td",[t._v("age")]),t._v(" "),s("td",[t._v("年龄")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("大于0,并且小于120")]),t._v(" "),s("td",[t._v("check")])]),t._v(" "),s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("状态")]),t._v(" "),s("td",[t._v("char(1)")]),t._v(" "),s("td",[t._v("如果没有指定该值，默认为１")]),t._v(" "),s("td",[t._v("default")])]),t._v(" "),s("tr",[s("td",[t._v("gender")]),t._v(" "),s("td",[t._v("性别")]),t._v(" "),s("td",[t._v("char(1)")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td")])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto_increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unique")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gender "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"外键约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外键约束"}},[t._v("#")]),t._v(" 外键约束")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" 表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    字段名 数据类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("外键名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键字段名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" 主表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("主表列名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n添加外键\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" 外键名称 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键字段名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" 主表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("主表列名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n删除外键\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" 外键名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ul",[s("li",[s("strong",[t._v("删除和更新行为")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("行为")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("no action")]),t._v(" "),s("td",[t._v("当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新。(与restrict一致)")])]),t._v(" "),s("tr",[s("td",[t._v("restrict")]),t._v(" "),s("td",[t._v("当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新。(与no action一致)")])]),t._v(" "),s("tr",[s("td",[t._v("cascade")]),t._v(" "),s("td",[t._v("当在父表中删除/更新对应记录时，首先检查该记录是否对应外键，如果有，则也删除/更新外键在子表中的记录。")])]),t._v(" "),s("tr",[s("td",[t._v("set null")]),t._v(" "),s("td",[t._v("当在父表中删除对应记录时，首先检查该记录是否对应外键，如果有则设置子表中该外键值为null(这就要求该外键允许取null)")])]),t._v(" "),s("tr",[s("td",[t._v("set default")]),t._v(" "),s("td",[t._v("父表有变更时，子表将外键列设置成一个默认的值(innodb不支持)")])])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("创建外键关联时的例子\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" 外键名称 foreigen "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("外键字段"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("references")]),t._v(" 主表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("主表字段名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cascade")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);