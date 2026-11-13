# iLab 事前登録サイト

理系学生だけのコミュニティアプリ「iLab」の事前登録用ウェブサイトです。

## ファイル構成

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ |
| `register.html` | 事前登録ページ（送信先は Google フォーム） |
| `terms.html` | 利用規約 |
| `privacy.html` | プライバシーポリシー |
| `assets/config.js` | **サイト全体の設定**（SNS・アンケート・お問い合わせ先） |
| `assets/doc.css` | 利用規約・プライバシーポリシー用のスタイル |
| `assets/il-icon.svg` | アイコン（iL） |
| `assets/ogp.png` | SNS でシェアしたときの画像（1200×630） |
| `_ogp/ogp.html` | `ogp.png` の元になるページ（公開はされません） |

## よく変える設定

### SNS・アンケート・お問い合わせ先
`assets/config.js` を書き換えると、すべてのページに反映されます。

```js
instagram: "ilab_2026",   // Instagram のユーザーネーム
x: "",                    // X のユーザーネーム（空ならリンクは非表示）
contact: "",              // お問い合わせフォームのURL か メールアドレス（空なら非表示）
surveyUrl: "https://…",   // アンケート（Google フォーム）のURL
```

### 事前登録フォームの送信先
`register.html` の下のほうにある `FORM_ACTION` と `ENTRY` に、Google フォームの情報を入れます。
空のあいだは「テスト表示」になり、送信しても記録されません。

## 公開前のチェックリスト

- [ ] 事前登録フォーム（Google フォーム）を作り、`register.html` につなぐ
- [ ] アンケートをチーム用アカウントで作り直し、`surveyUrl` を差し替える
- [ ] お問い合わせフォームを作り、`contact` に入れる
- [ ] 利用規約・プライバシーポリシーを専門家に確認してもらう
- [ ] 公開するURLを決め、`index.html` と `register.html` の `og:image` を完全なURL（`https://…/assets/ogp.png`）に書き換える
- [ ] 全体の文章をチームで最終確認する

## 公開のしかた（GitHub Pages）

1. GitHub のリポジトリの「Settings」→「Pages」を開く
2. 「Branch」で `main` と `/ (root)` を選んで保存する
3. 数分後に表示される URL でサイトが見られるようになる

※ 無料プランでは、公開リポジトリでしか GitHub Pages を使えません。非公開のまま公開したい場合は GitHub Student Developer Pack（学生は無料で Pro プラン）を使います。

## SNS 共有用の画像を作り直すとき

`_ogp/ogp.html` の文言を直してから、Mac のターミナルでこのフォルダに移動して次を実行します。

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=8000 --screenshot="$PWD/assets/ogp.png" "file://$PWD/_ogp/ogp.html"
```
