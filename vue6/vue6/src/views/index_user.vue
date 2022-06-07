<!--  -->
<template>
  <div class="">
    <div class="input_list">
      <!-- <el-input v-model="date" placeholder="请输入内容"></el-input> -->
      <el-date-picker
        v-model="input_date"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
      >
      </el-date-picker>
      <el-input v-model="input_name" placeholder="请输入内容"></el-input>
      <el-input v-model="input_address" placeholder="请输入内容"></el-input>
    </div>

    <el-button size="mini" type="success" @click="add">添加数据</el-button>
    <!-- 组件 -->
    <!-- <button-pub :test="123"></button-pub>
          <input-pub input_type="text" input_p="123" v-model="val"></input-pub> -->

    <el-table :data="tableDatas">
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>

      <el-table-column prop="sex" label="性别" width="100"></el-table-column>
      <el-table-column
        prop="student_id"
        label="学号"
        width="180"
      ></el-table-column>
      <el-table-column prop="age" label="年龄" width="100"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>

      <el-table-column fixed="right" width="300">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button @click="handleClick(scope)" type="text" size="small"
            >修改</el-button
          >
          <el-button type="text" size="small" @click="del_list(scope)"
            >删除</el-button
          >

          <el-button type="text" size="small" @click="look_btn(scope)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="收货地址"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
    >
      <el-form>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="update_date"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="update_name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="update_sex" placeholder="请输入性别"></el-input>
        </el-form-item>
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input
            v-model="update_student_id"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="update_age" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input
            v-model="update_address"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible_cancel">取 消</el-button>
        <el-button type="primary" @click="queding">确 定</el-button>
      </div>
    </el-dialog>
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
          sex: "男",
          student_id: "201903080115",
          age: "18",
        },
      ],
      update_date: "",
      update_name: "",
      update_sex: "",
      update_student_id: "",
      update_age: "",
      update_address: "",
      input_date: "",
      input_name: "",
      input_address: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      index: "",
      search: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    tableDatas() {
      //准确查询
      // let arr = [];
      // if (this.search == "") {
      //   return this.tableData;
      // }
      // for (const item in this.tableData) {
      //   // console.log(this.tableData[item]);
      //   if (this.tableData[item].name == this.search) {
      //     arr.push(this.tableData[item]);
      //   }
      // }
      // return arr;

      //模糊查询
      // console.log(this.search);
      // 监听search变化;
      // return this.tableData.filter((item) => {
      //   console.log(item);
      //   console.log(item.name.includes(this.search));
      //   return item.name.includes(this.search);
      // });

      // return this.tableData.filter((test) => {
      //   // console.log(test);
      //   // console.log(test.name.includes);
      //   return test.name.includes(this.search);
      // });
      return this.tableData;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    add() {
      let list = {
        date: this.input_date,
        name: this.input_name,
        address: this.input_address,
      };
      if (list.date != "" && list.name != "" && list.address != "") {
        this.tableData.push(list);
        this.input_date = "";
        this.input_name = "";
        this.input_address = "";
        list = null;
      }
    },

    handleClick(scope) {
      //修改( 形参 )
      // console.log(scope.$index); // $index 是 elementui 获取下标的写法
      // console.log(scope);
      this.index = scope.$index;
      this.dialogFormVisible = true;
      this.update_date = scope.row.date;
      this.update_name = scope.row.name;
      this.update_sex = scope.row.sex;
      this.update_student_id = scope.row.student_id;
      this.update_age = scope.row.age;
      this.update_address = scope.row.address;
    },

    del_list(val) {
      // 删除
      // console.log(val);
      this.tableData.splice(val.$index, 1);
      localStorage.setItem("arr_list", JSON.stringify(this.tableData));
      console.log(JSON.parse(localStorage.getItem("arr_list")));
    },
    queding() {
      // 修改确定;
      this.tableData.map((t, index) => {
        // console.log(t, index);
        if (index == this.index) {
          return (
            // 重新赋值
            (t.date = this.update_date),
            (t.name = this.update_name),
            (t.sex = this.update_sex),
            (t.student_id = this.update_student_id),
            (t.age = this.update_age),
            (t.address = this.update_address)
          );
        }
      });
      //模拟数据
      {
        // let test = [
        //   {
        //     date: "1",
        //     name: "test",
        //     address: "test",
        //   },
        //   {
        //     date: "2",
        //     name: "test",
        //     address: "test",
        //   },
        //   {
        //     date: "3",
        //     name: "test",
        //     address: "test",
        //   },
        //   {
        //     date: "4",
        //     name: "test",
        //     address: "test",
        //   },
        //   {
        //     date: "5",
        //     name: "test",
        //     address: "test",
        //   },
        // ];
        // console.log(test);
        // test.map((date, index) => {
        //   // console.log(date, index);
        //   if (index == 2) {
        //     console.log(date);
        //   }
        // });
      }

      this.dialogFormVisible_cancel();
    },

    handleClose(done) {
      this.dialogFormVisible_cancel();
    },
    dialogFormVisible_cancel() {
      this.dialogFormVisible = false;
      this.index = "";
    },
    look_btn(val) {
      // console.log(val.row);
      sessionStorage.setItem("val", JSON.stringify(val.row));
      this.$router.push({
        path: "/jieshou",
      });
      // this.$router.push("jiesohu");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    for (var i = 0; i < 10; i++) {
      this.tableData.push({
        date: `2022-05-2${i + 1}`,
        name: `张三_${i}`, //`${}`
        address: `河南${i}`,
        sex: "男",
        student_id: `20190308011${i}`,
        age: `${i + 1}`,
      });
    }

    localStorage.setItem("arr_list", JSON.stringify(this.tableData));
    // console.log(JSON.parse(localStorage.getItem("arr_list")));
  },
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
<style lang='scss' scoped>
//@import url(); 引入公共css类
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