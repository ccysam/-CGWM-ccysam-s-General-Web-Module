# ccysam's HTML,CSS and JS library

What you see here is a Self-Make ~~powerful~~, extensible, and ~~feature-packed~~ frontend toolkit.So far so good, this library has made things include

| Major Things              | Sub Things                                            | Is on working | Status            |
| ------------------------- | ----------------------------------------------------- | ------------- | ----------------- |
| **Base UI Widgets** | Basic interactive<br />Widgets(Btn, Dlg, Box, etc.)  | ✔            | 100% Completed    |
|                           | Basic input Widgets<br />(input, textArea, etc.)      | ✔            | 100% Completed    |
|                           | Page tool Widgets<br />(Accordion, pagination .etc)   | ✔            | 100% Completed    |
|                           | User assistant Widgets<br />(Tips, Tag, Loader, etc.) | ✔            | 100% Complete     |
| **Layouts**         | ~~Basic Solid Layouts<br />(Grid, table, etc.)~~     | ~~✔~~       | ~~Almost Start~~ |
|                           | Response Layouts                                      | ✔            | Only this!!!      |

## Features

### Customizing via CSS variables

* Override global, component, or utility class variables or just override some original CSS varibales to custiomize as your wish.

  ```css
  body #Button1 {
      --size: 32px;
  }

  body #Button2 {
      --size: 48px;
  }

  body #inputArea1 {
      width: 480px;
      height: 160px;
      --fSize: 16px;
  }
  ```

### Not very powerful JavaScript plugins but still without jQuery

* Easily add toggleable hidden elements, modals and offcanvas menus, popovers and tooltips, and so much more—all without jQuery. JavaScript here is HTML-first, which means adding plugins is as easy as adding attributes.

  ```html
  <span onclick="OpenDialog('Dialog1');">Dialog Test Span</span>

  <div id="pgn1" class="Pagination" data-currentPage="1" data-maxPage="3">
      <style onload="Pagination('pgn1');"></style>
      <div class="LastPage RichButton"></div>
      <div class="Page RichButton"><span>1</span></div>
      <div class="Page RichButton"><span>2</span></div>
      <div class="Page RichButton"><span>3</span></div>
      <div class="NextPage RichButton"></div>
  </div>
  ```

Author's Weekly Todolist will show at the end of this document after Chinese introduction.

---

一个受到bootstrap启发自己开发的轻量级前端框架，基本能用状态，下面展示了目前的完成进度。

| 主要分类          | Sub Things                                | Is on working | Status        |
| ----------------- | ----------------------------------------- | ------------- | ------------- |
| **UI 组件** | 基础交互组件（按钮等）                    | ✔            | 全部完成      |
|                   | 基础输入组件<br />（形同html的各种input） | ✔            | 全部完成      |
|                   | 页面工具组件<br />（折叠面板，翻页器等）  | ✔            | 全部完成      |
|                   | 用户指导组件<br />（提示，标签等）        | ✔            | 全部完成      |
| **布局**    | ~~基本静态布局<br />（网格式，表式）~~   | ~~✔~~       | ~~刚刚开始~~ |
|                   | 响应式布局                                | ✔            | 开淦！        |

## 一些特色（大概？

### 通过css变量快速自定义

* 通过重写样式类及组件自带的css变量和定义css原生变量快速自定义样式，

  ```css
  body #Button1 {
      --size: 32px;
  }

  body #Button2 {
      --size: 48px;
  }

  body #inputArea1 {
      width: 480px;
      height: 160px;
      --fSize: 16px;
  }
  ```

### 纯原生js实现的一系列函数库

* 通过自带的js库可以轻松的为组件添加相应的功能

  ```html
  <span onclick="OpenDialog('Dialog1');">Dialog Test Span</span>

  <div id="pgn1" class="Pagination" data-currentPage="1" data-maxPage="3">
      <style onload="Pagination('pgn1');"></style>
      <div class="LastPage RichButton"></div>
      <div class="Page RichButton"><span>1</span></div>
      <div class="Page RichButton"><span>2</span></div>
      <div class="Page RichButton"><span>3</span></div>
      <div class="NextPage RichButton"></div>
  </div>
  ```

# Weekly Todo List

* [X] Git the first version of this library|第一个版本的提交
* [X] Finish the works of Base Widgets(Nav Bar)|完成基本组件中最后一个导航栏的制作
* ~~ Finish Solid Layouts|完成静态布局的设计及制作~~
* [ ] Start & Try to do some works on Response Layouts|开始进行响应式布局的设计制作
