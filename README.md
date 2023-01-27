# frontend

## install vscode plugins

- ESLint v2.2.6

- Prettier v9.5.0

- Stylelint v1.2.2

# 开发技巧

## 定义变量首选 const,其次才是 let

## 检查 number 是否为空

if (n == null)
if (n != null)

## 检查 number 以外类型是否为空

if (!o)
if (!!o)

## boolean 型不推荐做 3 项选择

## 解决精度问题用 BigNumber

## 日期类型推荐使用 moment

## 使用 union type 定义取代 enum

const option: 'one' | 'two';

## union type 可以支持 class

const something: Goods | Product;

## 使用 find,map,forEach 等方法取代 for 循环

## function 尽量别用

## css 的 z-index 定义限定在 1-10
