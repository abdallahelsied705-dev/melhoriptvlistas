# خطة SEO — melhoriptvlistas.pt

آخر تحديث: 2026-09-25

## تحديث 2026-09-26: مراجعة المنافسين والنسخة الحية

- تمت معاينة الصفحات الحية لـ `iptvpremium.pt` و`iptvpt.pt/iptv/` و`xctvgo.pt/iptv-portugal-teste`. الأول يعرض صورة الأجهزة والأسعار وشرح IPTV، الثاني يبرز باقة في أول شاشة ويعرض المقارنة والقنوات، والثالث يقدّم مسار طلب تجربة بحسب الجهاز والتطبيق.
- أضفنا في الرئيسية قائمة عملية بأربعة أمور يفحصها الزائر في اختبار 24 ساعة: توافق الجهاز، الاستقرار، المحتوى والـEPG، والدعم. تؤدي البطاقات إلى أدلة الموقع ذات الصلة. لا ننسخ ادعاءات تقييمات العملاء أو أرقام زمن الاستجابة أو طرق الدفع من المنافسين من دون دليل خاص بالخدمة.
- صارت مقارنة المشغلين تعرض أسئلة وشروطًا يمكن للزائر التحقق منها، بدل تعميمات عن جميع باقات MEO وNOS وVodafone.
- **مشكلة فهرسة مهمة:** `https://melhoriptvlistas.pt/` يعيد 502 حاليًا، بينما النسخة العاملة على `https://melhoriptvlistas.vercel.app/`. كانت canonical وOG وsitemap تشير إلى `.pt` غير المتاح. الأصل الافتراضي الآن هو رابط Vercel الحي، ويمكن تبديله عبر `SITE_URL` بعد تفعيل DNS وHTTPS للدومين المخصص. عندها أعد فحص كل canonical وsitemap والروابط وإعادة التوجيه قبل إرسال الخريطة إلى Search Console.
- لم يعد وصف «من غير صور تقيلة» أدناه دقيقًا بعد تحديث التصميم؛ الصور الجديدة WebP وتستخدم `next/image` بأحجام متجاوبة.
- وجود FAQ مفيد للقارئ، لكن لا تعتمد الخطة على ظهور FAQ rich results في Google لموقع تجاري. البيانات المنظمة يجب أن تطابق المحتوى المرئي، ولا تضمن ظهور نتيجة محسّنة.
- ما زال تأكيد أرقام القنوات وVOD وPPV وCatch-Up وساعات الدعم من مالك الخدمة مطلوبًا؛ لا تُنشأ تقييمات أو ضمانات أو شعارات قنوات قبل التحقق.

## 1. تحليل المنافسين (نتائج بحث "melhor iptv portugal" / "lista iptv portugal")

> ملاحظة: أداة البحث عندي مرتبطة بفهرس أمريكي، يعني ترتيب google.pt الحقيقي ممكن يختلف. تحليل الصفحات اتعمل على الـ HTML الحي لكل موقع.

| # | الموقع | عدد الكلمات في الرئيسية | Schema | llms.txt | صفحات في الـ sitemap | ملاحظات |
|---|---|---|---|---|---|---|
| 1 | listaiptvportugal.com | 4499 | كثيف (Product, FAQ, HowTo, Review, DefinedTerm) | ✅ | 11 | أقوى صفحة رئيسية. «+77.000 canais». قاموس مصطلحات |
| 2 | fmmportugal.com | 4618 | Product, FAQ, AggregateRating | ❌ | 1 | صفحة واحدة طويلة. H2 محشوة كلمات مفتاحية |
| 3 | troiaportugal.pt | 3089 | Product, FAQ, AggregateRating | ❌ | 7 | عنده H1 مكرر (خطأ) |
| 4 | iptvpremium.pt | 2690 | Product + MerchantReturnPolicy | ✅ | 3 | Elementor، الصفحة تقيلة (866KB) |
| 5 | iptv-portugal.pro | 2162 | Product, Review, AggregateRating | ❌ | 35 | يستعمل تقييمات مزيفة في الـ schema |
| 6 | melhoriptv-portugal.com | 1907 | FAQ بس | ❌ | 14 | أقرب منافس للدومين بتاعنا ("melhor iptv") |
| 7 | iptvpt.tv | 1902 | Article | ✅ | 4 | WordPress. فيه نص إسباني بالغلط |
| 8 | lista-iptv-portugal.com | 1454 | Product, FAQ | ✅ | 42 | الوحيد اللي مسموح فيه لبوتات الـ AI في robots |
| 9 | portugaliptv.space | 1354 | Product, FAQ, Service | ❌ | 0 | مفيش sitemap |
| 10 | iptvportugal.com.pt | 1201 | FAQ, Article | ❌ | 3 | Elementor |
| 11 | portugaliptv.org | 960 | Product, AggregateRating | ❌ | 72 | من غير meta description |

### الثغرات اللي بنستغلها
1. **الصفحة الرئيسية بس**: أغلب المنافسين موقعهم صفحة واحدة، أو فيه 3 لـ 14 صفحة. إحنا عندنا 28 صفحة، كل صفحة لنية بحث مختلفة (تثبيت على كل جهاز، أسعار، تجربة، مقارنة، حل مشاكل).
2. **مفيش صفحات تثبيت لكل جهاز**: ده بحث عالي ومفيش حد مغطيه كويس (Samsung, LG, Fire TV, Android, iPhone, PC).
3. **الـ AI**: 4 من 11 بس عندهم llms.txt، وواحد بس بيسمح صراحة لبوتات الـ AI. إحنا عندنا الاتنين، وكمان «Resposta curta» (إجابة قصيرة) في أول كل صفحة.
4. **ثقة حقيقية**: المنافسين بيستعملوا AggregateRating وتقييمات مزيفة، وده بيعرّضهم لعقوبة يدوية من جوجل. إحنا بنستعمل حقائق حقيقية بس (أسعار، قنوات، تجربة).
5. **السرعة**: أغلبهم Elementor/WordPress. موقعنا Next.js ستاتيك، من غير صور تقيلة (الـ hero عبارة عن HTML/CSS).

## 2. خريطة الكلمات المفتاحية (صفحة واحدة لكل نية، من غير تكرار)

| الكلمة | الصفحة | النية |
|---|---|---|
| melhor iptv portugal / listas iptv | `/` | تجارية |
| preços iptv portugal | `/precos` | تجارية |
| teste iptv grátis | `/teste-iptv-gratis` | تجارية |
| lista iptv portugal / canais | `/lista-iptv-portugal` | تجارية/معلوماتية |
| melhor lista iptv | `/melhor-lista-iptv` | مقارنة |
| como instalar iptv | `/instalar-iptv` + 6 أجهزة | معلوماتية |
| melhores apps iptv | `/melhores-apps-iptv` | مقارنة |
| lista m3u / xtream codes | `/lista-m3u-vs-xtream-codes` | معلوماتية |
| iptv vs meo nos vodafone | `/iptv-vs-meo-nos-vodafone` | مقارنة |
| iptv futebol | `/iptv-futebol` | تجارية |
| iptv buffering / a parar | `/resolver-buffering-iptv` | حل مشكلة |
| quanto custa iptv | `/blog/quanto-custa-iptv-portugal` | معلوماتية |
| burlas iptv | `/blog/como-evitar-burlas-iptv` | ثقة |
| velocidade internet iptv | `/blog/internet-minima-para-iptv` | معلوماتية |
| iptv vários dispositivos | `/blog/iptv-varios-dispositivos` | 27-09 |
| epg iptv | `/blog/epg-catch-up-iptv` | 29-09 |
| iptv portugueses no estrangeiro | `/blog/iptv-portugueses-no-estrangeiro` | 01-10 |

## 3. الـ SEO التقني (متنفذ)
- كل صفحة ليها: title فريد (≤ 60 حرف)، description (120–160 حرف)، canonical، Open Graph، وصورة OG مخصوصة (`/og/...`).
- JSON-LD بصيغة `@graph`: Organization، WebSite، WebPage، BreadcrumbList، Article، FAQPage، Product/AggregateOffer بأسعار حقيقية. **من غير تقييمات مزيفة**.
- sitemap ديناميكي: المقالات المجدولة بتدخل يوم نشرها.
- robots بيسمح لـ Googlebot وBingbot وOAI-SearchBot وChatGPT-User وPerplexityBot وClaudeBot وGoogle-Extended وApplebot. ومن غير سطر `Host` (ده اللي كان عامل التحذير في iptvbr).
- `/llms.txt` بيتولد من نفس البيانات، فعمره ما هيبقى قديم.
- IndexNow (لـ Bing وCopilot وChatGPT Search): المفتاح موجود في `public/`، وتشغّل `npm run indexnow` بعد كل نشر.
- Preview على Vercel = noindex تلقائي.
- www بيتحول لـ apex بـ 308.
- `npm run verify:seo` بيفحص كل الصفحات: canonical، H1 واحد، العناوين والوصف مش مكررين، الروابط الداخلية، صور OG، و404.

## 4. الـ SEO للـ AI (GEO)
- **Resposta curta**: إجابة من 2 لـ 4 جمل في أول كل صفحة، سهلة يتعملها اقتباس.
- **جدول حقائق** (`<dl>`) بأرقام واضحة: 45.000 قناة، الأسعار، 24 ساعة تجربة.
- FAQ حقيقي في آخر الصفحات + FAQPage schema.
- تاريخ «Atualizado a» ظاهر + dateModified في الـ schema.
- جداول مقارنة (المحركات بتحب تقتبس من الجداول).
- لغة pt-PT ثابتة («tu»، «ecrã»، «telemóvel»).

## 5. بعد الإطلاق (مطلوب منك)
1. **DNS في Dynadot** للدومين melhoriptvlistas.pt: سجل `A @ → 76.76.21.21` وسجل `CNAME www → cname.vercel-dns.com` (أو القيم اللي Vercel هيطلعهالك).
2. **Vercel**: اعمل import للريبو، وضيف الدومينين (apex وwww).
3. **Google Search Console**: خاصية Domain (TXT) أو URL-prefix. لو هتستعمل meta tag: ضيف `GOOGLE_SITE_VERIFICATION` في Vercel. وبعدها ابعت `https://melhoriptvlistas.pt/sitemap.xml`.
4. **Bing Webmaster**: Import من GSC (الأسرع)، أو `BING_SITE_VERIFICATION`.
5. شغّل `npm run indexnow` بعد أول نشر.
6. **الأسبوع 2–4**: مقال جديد كل يومين (المقالات المجدولة موجودة لحد 10-01، وضيف غيرها في `content/blog.ts`).
7. **روابط خارجية**: منتديات وجروبات البرتغاليين في الخارج (فرنسا، سويسرا، لوكسمبورغ)، وأدلة اشتراكات IPTV. ابعد عن شراء روابط بالجملة.
8. **بعد 28 يوم**: في GSC، شوف الصفحات اللي ليها ظهور بس الـ CTR بتاعها قليل، وحسّن الـ title والـ description بتوعها.

## 6. حقائق تجارية محتاجة تأكيد منك
- **+120.000 filmes e séries**: الرقم ده منقول من صفحة أسعار iptvbr.pt، بس في `business-input.json` بتاع iptvbr مكتوب إنه "unverified". لو مش دقيق، عدّله في `config/offer.ts`.
- «Eventos PPV»، و«Catch-Up»، و«apoio 24/7»: منقولين من iptvbr.pt.
- مفيش سياسة استرجاع منشورة، لأنها مش متأكدة.
