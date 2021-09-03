---
title: Docker 関連のトラブル
---

# Docker 関連のトラブル

---
**目次**
- [(1) Docker Desktop がインストールできない](#1)
- [(2) docker-compose up -d（コンテナ起動）で失敗する](#2)
- [(3) (winpty) docker-compose exec app bash で失敗する](#3)
---

## (1) Docker Desktop がインストールできない <a id="1"></a>

### 問題詳細

コンピュータの記憶容量の残りが十分あるにもかかわらず、Docker Desktop がインストールできない場合があります。

### 原因

OS が Docker が対応していない古いバージョンであることが原因です。
Docker が対応している OS のバージョンは、次の通りです（2021.7.12 最終確認）。

- macOS（Intel の CPU を搭載する端末）：**バージョン 10.14（Mojave）以降**
- macOS（Apple silicon を搭載する端末）：**Rosetta 2 がインストールされていること**
  - 以上 2 つは、[Docker のヘルプページ](https://docs.docker.com/docker-for-mac/install/#system-requirements)の内容に基づきます。
- Windows：Windows 10（詳細なバージョンは [Docker のヘルプページ](https://docs.docker.com/docker-for-windows/install/#system-requirements)を参照してください。Windows の Edition（例えば Windows 10 Home や Windows 10 Pro など）によってバージョンが異なります。）

### → 解決方法

OS のアップデートを試してください。

- macOS をお使いの方は、[Apple のサポートページ](https://support.apple.com/ja-jp/HT201541)を参照してください。
- Windows をお使いの方は、[Microsoft のサポートページ](https://support.microsoft.com/ja-jp/windows/windows-10-%E3%82%92%E6%9B%B4%E6%96%B0%E3%81%99%E3%82%8B-3c5ae7fc-9fb6-9af1-1984-b5e0412c556a)を参照してください。

なお、今後も OS のバージョンが古くなると、Docker が動かなくなる可能性があります。OS はこまめにアップデートすると良いでしょう。

<br>

## (2) `docker-compose up -d` （コンテナ起動）で失敗する<a id="2"></a>

### 問題詳細

Docker Desktop のインストールには成功したものの、コンテナ起動に失敗する場合があります。  
複数の原因が考えられます。

- [・原因1（Windows、Mac）](#2-1)
- [・原因2（Windows、Mac）](#2-2)
- [・原因3（Windows、Mac）](#2-3)
- [・原因4（Windows のみ）](#2-4)

### 原因1（Windows、Mac）<a id="2-1"></a>

そもそも Docker Desktop が起動していない場合 `docker` コマンドを使用することはできません。  
デフォルトでは Docker Desktop は PC 起動時に同時に立ち上がる設定になっていることが多いのですが、PC の状態により起動していないケースもあります。  

Docker Desktop が起動している場合、タスクバー（Windows）やメニューバー（Mac）にクジラのアイコンが **止まって** 表示されます。  
なお、クジラのアイコンが動いているのは起動中という意味です。  

また、コマンドラインからも Docker Desktop のステータスを確認できます。

```
docker version
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

### → 原因1の解決方法

アプリケーション一覧から Docker のアイコンをクリックし、起動してください。

<br>

### 原因2（Windows、Mac）<a id="2-2"></a>

他の起動中の Docker コンテナと衝突して、新しくコンテナが起動できないことがあります。

例えば、次のようなエラーが表示されます。

```
Starting sample_app_1 ... error

ERROR: for sample_app_1  Cannot start service app: driver failed programming external connectivity on endpoint sample_app_1 (5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0): Bind for 0.0.0.0:8000 failed: port is already allocated

...
```

### → 原因2の解決方法

どのディレクトリのコンテナが衝突しているかわかる場合は、当該ディレクトリに移動してコンテナを終了・破棄します。

```
docker-compose down
```

わからない場合は、次のように**全てのコンテナを終了・破棄**します（コンテナは原則破棄するものなので、特に悪影響はありません）。

```
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```

再度起動したいコンテナのディレクトリに移動して、`docker-compose up -d` を試してみてください。

<br>

### 原因3（Windows、Mac）<a id="2-3"></a>

Docker Desktop が正常に起動していない場合、次のように表示される場合があります。

```
Traceback (most recent call last):
  File "urllib3/connectionpool.py", line 670, in urlopen
  File "urllib3/connectionpool.py", line 392, in _make_request
  File "http/client.py", line 1255, in request
  File "http/client.py", line 1301, in _send_request
  File "http/client.py", line 1250, in endheaders
...
```

### → 原因3の解決方法

Docker Desktop を再起動してみてください。

<br>

### 原因4（Windows ユーザー向け）<a id="2-4"></a>

やや特殊ですが、過去に Docker Desktop ではなく [Docker Toolbox](https://docs.docker.jp/toolbox/overview.html) を使って Docker を使用した経験のある方は、その際の設定が誤って読み込まれてしまうことがあります。

具体的には、以下のような環境変数が Docker Toolbox によって設定されてしまうことが問題になります。

```
DOCKER_HOST
DOCKER_CERT_PATH
DOCKER_TLS_VERIFY
DOCKER_MACHINE_NAME
```

### → 原因4の解決方法

`DOCKER_` で始まる環境変数を一括して削除します。

管理者権限で PowerShell を起動し、

```
Remove-Item Env:DOCKER_*
```

と入力してください。

## (3) `(winpty) docker-compose exec app bash` で失敗する <a id="3"></a>

### 表記について

ここでは、表記を簡単にするため、**Windows でのコマンドと Mac でのコマンドをまとめて「`(winpty) docker-compose exec app bash`」と書きます**。そのため、Windows の場合は「`winpty docker-compose exec app bash`」に、Mac の場合は「`docker-compose exec app bash`」に、それぞれ読み替えてください。

### 問題詳細

`docker-compose up -d`（コンテナ起動）には成功したものの、`(winpty) docker-compose exec app bash` でコンテナに入れない場合があります。

### 原因

Dockerfile を一度変更したことがあるにもかかわらず、`docker-compose up --build` でイメージをビルドし直していない可能性があります。

### →解決方法

`docker-compose up --build` 実行した後に、`(winpty) docker-compose exec app bash` を実行してみてください。
