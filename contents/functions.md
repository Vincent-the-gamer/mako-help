---
layout: doc
title: "功能"
lastUpdated: true
---

# 功能

## 简单问候
问候一下茉子酱吧(„• ᴗ •„)

```shell
# 输入(无需艾特)
茉子
```

茉子会随机回复~~

## 签到
每日签到，可以获得10～20随机的`柚子点数`。

[什么是柚子点数？](./instruction.md#柚子点数)

```shell
@茉子 签到
# 或者
@茉子 打卡
```

## 查询柚子点数
查询你当前的柚子点数

```shell
@茉子 柚子点数
```

## 恶臭论证
一个将任意数字分解成 114514 构成的公式的工具

```shell
# 输入
@茉子 恶臭论证 114515

# 机器人回复
114515 = 114514+(11/(45-1)*4)
```

## AI对话
和AI进行对话，支持上下文，目前对接的是`Google`的`Gemini Pro`

```shell
@茉子 ai 你的问题

# 或
@茉子 gemini 你的问题
```

举例：
```shell
@茉子 ai ROG败家之眼有卖轮椅的吗

# 回答
ROG（Republic of Gamers）主要销售游戏硬件产品，如笔记本电脑、台式机、主板、显卡、显示器和耳机。目前没有证据表明他们销售轮椅。
```
## 雷索纳斯市场商品信息查询

数据来源：[https://resonance.breadio.wiki/](https://resonance.breadio.wiki/)

格式：`@茉子 雷索纳斯市场 <商品名>` 或 `@茉子 倒货 <商品名>`

```shell
@茉子 雷索纳斯市场 沙金

# 或
@茉子 倒货 沙金
```

返回示例：
![demo](/imgs/resonance-demo.png)


## 发言排行
展示当前群聊中（调用指令的群聊）本日群友发言次数排行榜

```shell
@茉子 发言排行
```

## 跑代码
可以运行多种编程语言代码

统一命令格式为：
```shell
@茉子 跑代码 <语言> <你的代码> 
```

举例：
```shell
@茉子 跑代码 文言
吾有一數。曰三。名之曰「甲」。
為是「甲」遍。
	吾有一言。曰「「問天地好在。」」。書之。
云云。
```

茉子会回答：
```
問天地好在。
問天地好在。
問天地好在。
```

目前支持的语言：
- **JavaScript**

  <语言>可以填`js`,`javascript`

- [**文言文编程语言(Wenyan-lang)**](https://github.com/wenyan-lang/wenyan)

  <语言>可以填`文言`,`wenyan`

- **TypeScript**

  <语言>可以填`ts`,`typescript`

- **Python**

  <语言>可以填`py`,`python`

- **Java**

  <语言>填`java`

  示例代码：

  ```java
  class Main {
      public static void main(String[] args) {
          System.out.println("现在可以写Java了");
      }
  }
  ```

- **C++**

  <语言>可以填`cpp`,`c++`

  示例代码：
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      cout << "Hello World!";
      return 0;
  }
  ```

- **C**

  <语言>可以填`c`,`C`

  示例代码：
  ```c
  #include <stdio.h>

  int main(void) {
      printf("Hello World!\n");
      return 0;
  }
  ```

## 点歌

使用命令：

```shell
@茉子 点歌 <你想搜索的内容>
```

来搜索歌曲，茉子会给出一个歌单列表，输入对应`编号`来获得歌曲语音。

![music](/imgs/music.png)

## 娶群友
每天随机从群友中抽一位作为你的老婆～～

```shell
@茉子 娶群友
# 或者
@茉子 今日老婆
```

### 派生

- 强娶 (支持NTR)

在**没有老婆**的状态下，使用命令

```shell
@茉子 强娶 @你要娶的人
```

- 离婚

在**有老婆**的状态下，使用命令

```shell
@茉子 离婚
```


## 重开你的人生
Remake !!!!

```shell
@茉子 重开
# 或者
@茉子 remake
```

## 妹子图片

随机获取一张妹子图片

> [!NOTE]
> 每次使用该功能需要消耗「1」点柚子点数

```shell
@茉子 妹子图片
```

## 表情包大合集

查看表情包列表

```shell
@茉子 表情列表
```

触发方式：“关键词 + 图片/文字”

发送 “表情详情 + 关键词” 查看表情参数和预览

目前支持的表情列表：

![meme-list](/imgs/meme-list.png)

**举例:**

```shell
# 使用表情无需艾特茉子
搓 @群友id
```

![meme-example](/imgs/meme-example.png)

## 抽象话

把一句话中的文字转为抽象符号。

```shell
@茉子 抽象话 <你的内容>
```

## 智能茉子 <Badge type="warning">实验性功能</Badge>

> [!WARNING]
> 此功能现在处于实验阶段，可能会发生一些预期外的问题，待运行一段时间后，即转为正常功能。

茉子此刻已经不是一个指令式机器人，而是一个AI群友，她会和群友进行聊天。

此功能为被动技能。

## 未完待续..
更多功能敬请期待...