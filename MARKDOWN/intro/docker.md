---
title: Docker 関連のトラブル
---

# Docker 関連のトラブル

## Docker Desktop がインストールできない

### 問題詳細

コンピュータの記憶容量の残りが十分あるにもかかわらず、Docker Desktop がインストールできない場合があります。

### 原因

OS が Docker が対応していない古いバージョンであることが原因です。
Docker が対応している OS のバージョンは、次の通りです（2021.7.12 最終確認）。

- macOS（Intel の CPU を搭載する端末）：**バージョン 10.14（Mojave）以降**
- macOS（Apple silicon を搭載する端末）：**Rosetta 2 がインストールされていること**
  - 以上 2 つは、[Docker のヘルプページ](https://docs.docker.com/docker-for-mac/install/#system-requirements)の内容に基づきます。
- Windows：Windows 10（詳細なバージョンは [Docker のヘルプページ](https://docs.docker.com/docker-for-windows/install/#system-requirements)を参照してください。Windows の Edition（例えば Windows 10 Home や Windows 10 Pro など）によってバージョンが異なります。）

### 解決方法

OS のアップデートを試してください。

- macOS をお使いの方は、[Apple のサポートページ](https://support.apple.com/ja-jp/HT201541)を参照してください。
- Windows をお使いの方は、[Microsoft のサポートページ](https://support.microsoft.com/ja-jp/windows/windows-10-%E3%82%92%E6%9B%B4%E6%96%B0%E3%81%99%E3%82%8B-3c5ae7fc-9fb6-9af1-1984-b5e0412c556a)を参照してください。

なお、今後も OS のバージョンが古くなると、Docker が動かなくなる可能性があります。OS はこまめにアップデートすると良いでしょう。

## Docker Desktop がダウンロードできない

### サンプル

```js
const hoge = () => {
  const fuga = 100;
  console.log(fuga);
  return fuga;
}
```

