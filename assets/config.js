// iLab サイト全体の設定
// ここを書き換えると、サイトのすべてのページ（トップ・事前登録・利用規約・プライバシーポリシー）に反映されます。
window.ILAB_CONFIG = {
  // Instagram のユーザーネーム（@ のあとの部分）。空にするとリンクは表示されません
  instagram: "ilab_2026",

  // X（旧Twitter）のユーザーネーム。アカウントができたら入れる
  x: "",

  // お問い合わせ先。お問い合わせ用フォームのURL か メールアドレス のどちらかを入れる
  // 空のあいだは、お問い合わせのリンクは隠れ、規約などには「準備中」と表示されます
  contact: "",

  // 理系学生の「出会い・つながり」アンケート（Googleフォーム）のURL
  surveyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSecyi0dE8OrRUZEzaKEHZZYWfbcuwFEV4F-uixOLId8SYLmlg/viewform",
};

// SNS のリンク（data-sns="instagram" などを付けたリンク）に URL を入れる。未設定のものは隠す
document.addEventListener("DOMContentLoaded", () => {
  const base = { instagram: "https://www.instagram.com/", x: "https://x.com/" };
  document.querySelectorAll("[data-sns]").forEach((a) => {
    const name = window.ILAB_CONFIG[a.dataset.sns];
    if (!name) { a.hidden = true; return; }
    a.href = base[a.dataset.sns] + name.replace(/^@/, "") + "/";
    a.target = "_blank";
    a.rel = "noopener";
  });

  // お問い合わせのリンク（data-contact を付けたリンク）
  const contact = (window.ILAB_CONFIG.contact || "").trim();
  document.querySelectorAll("[data-contact]").forEach((a) => {
    if (!contact) { a.hidden = true; return; }
    if (contact.includes("@") && !/^https?:/.test(contact)) {
      a.href = "mailto:" + contact;
    } else {
      a.href = contact;
      a.target = "_blank";
      a.rel = "noopener";
    }
  });
  document.querySelectorAll("[data-contact-none]").forEach((el) => { el.hidden = !!contact; });
});
