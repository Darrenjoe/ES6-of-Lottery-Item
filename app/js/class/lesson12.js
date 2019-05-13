{
  // 基本定意思和生成实例
  class Parent {
    constructor(name = 'Darren') {
      this.name = name;
    }
  }

  let v_parent = new Parent('v');
  console.log(v_parent);
}
{
  // 子类继承
  class Parent {
    constructor(name = 'Darren') {
      this.name = name;
    }
  }

  class Child extends Parent {
  }
  console.log('子类继承', new Child());
}

{
  // 子类继承传递参数
  class Parent {
    constructor(name = 'Darren') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      super(name);
      this.type = 'child';
    }
  }
  console.log('继承传参', new Child());
}

{
  // getter, setter
  class Parent {
    constructor(name = 'Darren') {
      this.name = name;
    }
    get longName() {
      return 'mk' + this.name;
    }
    set longName(value) {
      this.name = value;
    }
  }

  let v = new Parent();
  console.log('getter', v.longName);
  v.longName = 'Nice';
  console.log('setter', v.longName);
}

{
  // 静态方法
  class Parent {
    constructor(name = 'Darren') {
      this.name = name;
    }
    static tell() {
      console.log('tell');
    }
  }
  Parent.tell();
}
{
  // 静态属性
  class Parent {
    constructor(name = 'Darren') {
      this.name = name;
    }
    static tell() {
      console.log('tell');
    }
  }

  Parent.type = 'test';
  console.log('静态属性', Parent.type);

}
