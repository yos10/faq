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

## `docker-compose up -d` （コンテナ起動）で失敗する

### 問題詳細

Docker Desktop のインストールには成功したものの、コンテナ起動に失敗する場合があります。  
複数の原因が考えられます。

### 原因1

そもそも Docker Desktop が起動していない場合 `docker` コマンドを使用することはできません。  
デフォルトでは Docker Desktop は PC 起動時に同時に立ち上がる設定になっていることが多いのですが、PC の状態により起動していないケースもあります。  

Docker Desktop が起動している場合、タスクバー（Windows）やメニューバー（Mac）にクジラのアイコンが **止まって** 表示されます。  
なお、クジラのアイコンが動いているのは起動中という意味です。  

また、コマンドラインからも Docker Desktop のステータスを確認できます。

```
docker --version
```

というコマンドを入力した際に

```
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

や

```
Error response from daemon: dial unix docker.raw.sock: connect: connection refused
```

というメッセージが表示されなければ、正しく起動できているはずです。

### 解決方法

アプリケーション一覧から Docker のアイコンをクリックし、起動してください。

### 原因2（Windows ユーザー向け）

やや特殊ですが、過去に Docker Desktop ではなく [Docker Toolbox](https://docs.docker.jp/toolbox/overview.html) を使って Docker を使用した経験のある方は、その際の設定が誤って読み込まれてしまうことがあります。

具体的には、以下のような環境変数が Docker Toolbox によって設定されてしまうことが問題になります。

```
DOCKER_HOST
DOCKER_CERT_PATH
DOCKER_TLS_VERIFY
DOCKER_MACHINE_NAME
```

### 解決方法

`DOCKER_` で始まる環境変数を一括して削除します。

管理者権限で PowerShell を起動し、

```
Remove-Item Env:DOCKER_*
```

と入力してください。