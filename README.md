# ברכה בתנועה — אתר עסקי

אתר תדמית לעסק "ברכה בתנועה" (ברכה בלומשטיין) — הפעלות תנועה והתפתחות לגיל הרך,
תינוקות, הכנה לכיתה א', משפחות, גיל הזהב, קניונים ואירועים.

הפרויקט נבנה כאתר סטטי מרובה-עמודים באמצעות [Eleventy](https://www.11ty.dev/) —
כל עמוד שירות מקבל כתובת URL, כותרת ותיאור משלו (חשוב מאוד ל-SEO), בלי צורך
בפריימוורק JS כבד וללא שרת בזמן ריצה. הפלט הוא HTML/CSS סטטי טהור שאפשר
להעלות לכל שירות אחסון סטטי.

## מבנה הפרויקט

```
src/
  _data/
    site.js       ← כל פרטי העסק (טלפון, וואטסאפ, מייל, דומיין) — נקודת עדכון יחידה
    nav.js        ← רשימת עמודי הניווט
    ldPerson.js   ← נתוני Schema.org (Person / LocalBusiness) לקידום אורגני
  _includes/
    layouts/base.njk     ← תבנית ה-HTML הבסיסית (head, header, footer, JSON-LD)
    partials/             ← header, footer, FAQ, באנר קריאה-לפעולה
  assets/
    css/style.css
    js/main.js            ← רק פתיחת/סגירת תפריט מובייל
  index.njk               ← עמוד הבית
  early-childhood.njk      → /early-childhood/
  babies.njk                → /babies/
  school-readiness.njk      → /school-readiness/
  family.njk                 → /family/
  golden-age.njk              → /golden-age/
  events.njk                   → /events/
  about.njk                     → /about/
  404.njk, robots.njk, sitemap.njk
```

כל עמוד שירות מגדיר את שאלות ה-FAQ שלו ב-front matter (`faq:`), וה-HTML
המוצג לגולש וה-JSON-LD של `FAQPage` נוצרים מאותו מקור נתונים — כך שהם
תמיד תואמים אחד לשני (דרישה מפורשת של גוגל ל-FAQ rich results).

## פיתוח מקומי

```bash
npm install
npm run dev     # שרת פיתוח עם רענון חי על http://localhost:8080
npm run build   # בנייה סופית לתיקיית _site
```

## לפני שעולים לאוויר — TODO

הערכים הבאים הם **placeholders** ויש לעדכן אותם ב-`src/_data/site.js` לפני
ההשקה:

- [ ] `whatsappNumber` — מספר וואטסאפ אמיתי, בפורמט בינלאומי ללא `+` (למשל `972501234567`)
- [ ] `email` — לוודא שכתובת המייל נכונה ופעילה
- [ ] `url` — כתובת הדומיין הסופית של האתר, לאחר רכישה/חיבור

כדאי גם:

- [ ] להוסיף תמונות אמיתיות של ברכה בפעולה (כרגע האתר טקסטואלי בלבד) — תיקיית
      `src/assets/images/` מוכנה לכך
- [ ] להחליף את ה-favicon המופשט (`src/favicon.svg`) בלוגו אמיתי אם קיים
- [ ] להוסיף תמונת שיתוף (Open Graph, מידות מומלצות 1200×630) ולקשר אותה
      ב-`layouts/base.njk` (תג `og:image`)
- [ ] לרשום את העסק ב-Google Business Profile ולחבר את אותם פרטי קשר

## פריסה (Deployment)

הפרויקט כולל תצורה מוכנה לשלוש אפשרויות נפוצות — בחרו אחת:

### Netlify (מומלץ לפשטות)
מחוברים את הריפו ב-Netlify; `netlify.toml` כבר מגדיר `npm run build` ותיקיית
פלט `_site`. כל push לענף הראשי יפרסם אוטומטית.

### Vercel
מחוברים את הריפו ב-Vercel; `vercel.json` מגדיר את אותה פקודת בנייה ותיקיית
פלט.

### GitHub Pages (חינמי, ללא חשבון נוסף)
הריפו כולל workflow ב-`.github/workflows/deploy.yml` שבונה ומפרסם אוטומטית
בכל push ל-`main`. יש להפעיל פעם אחת ב-Settings → Pages → Source:
"GitHub Actions".

בכל שלושת המקרים, לאחר חיבור דומיין מותאם אישית יש לעדכן את `site.url`
ב-`src/_data/site.js` כדי ששדות ה-SEO (canonical, sitemap, Open Graph)
יצביעו לכתובת הנכונה.

## SEO שכבר מוטמע

- כתובת URL, כותרת ותיאור ייחודיים לכל עמוד
- קישור `canonical` לכל עמוד
- תגי Open Graph / Twitter Card
- `robots.txt` ו-`sitemap.xml` נוצרים אוטומטית מרשימת העמודים בפועל
- Schema.org: `Person` + `LocalBusiness` בכל עמוד, ו-`FAQPage` תואם-תוכן
  בעמודי השירות
- HTML נגיש: קישור "דלגו לתוכן", `aria-current` על פריט הניווט הפעיל,
  ניגודיות צבעים ומוקדי מקלדת ברורים
