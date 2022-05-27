<!--  -->
<template>
  <div class="about">
    <el-container class="el_from" style="border: 1px solid #eee">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item @click.native="exit_clk">登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>导航一
              </template>
              <el-menu-item index="1-1-1">选项1-1</el-menu-item>
              <el-menu-item index="1-1-2">选项1-2</el-menu-item>
              <el-menu-item index="1-1-3">选项1-3</el-menu-item>
              <el-menu-item index="1-1-4">选项1-4</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>导航二
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <div class="input_list">
            <!-- <el-input v-model="date" placeholder="请输入内容"></el-input> -->
            <el-date-picker
              v-model="date"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
            <el-input v-model="name" placeholder="请输入内容"></el-input>
            <el-input v-model="address" placeholder="请输入内容"></el-input>
          </div>

          <el-button size="mini" type="success" @click="add"
            >添加数据</el-button
          >

          <el-table :data="tableData">
            <el-table-column
              prop="date"
              label="日期"
              width="140"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            ></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>

            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >修改</el-button
                >
                <el-button type="text" size="small" @click="del_list(scope)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>

          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form>
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-date-picker
                  v-model="date"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="name" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="address" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="queding">确 定</el-button>
            </div>
          </el-dialog>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      tableData: [
        {
          date: "2022-05-27",
          name: "2",
          address: "3",
        },
      ],
      date: "",
      name: "",
      address: "",
      index: "",

      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    exit_clk() {
      this.$router.push({
        path: "/",
      });
      localStorage.clear();
      sessionStorage.clear();
      this.$message({
        showClose: true,
        message: "退出成功",
        type: "success",
      });
    },
    add() {
      let list = {
        date: this.date,
        name: this.name,
        address: this.address,
      };
      if (list.date != "" && list.name != "" && list.address != "") {
        this.tableData.push(list);
        this.date = "";
        this.name = "";
        this.address = "";
      }
    },
    handleClick(row) {
      console.log(row);
      this.dialogFormVisible = true;
      this.date = row.date;
      this.name = row.name;
      this.address = row.address;
    },
    del_list(val) {
      console.log(val);
      this.tableData.splice(val.$index, 1);
    },
    queding() {
      this.dialogFormVisible = false;
      let list = {
        date: this.date,
        name: this.name,
        address: this.address,
      };
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el_from {
  height: 100vh;
}

.input_list {
  display: flex;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>