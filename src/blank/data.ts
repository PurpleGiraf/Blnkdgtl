// Page content for Template 06 (BLANK_digital). Branding and contact details live in config.ts.

export type Service = {
  slug: string;
  name: string;
  short: string;
  speed: string;
  speedLong: string;
  card: string;
  blurb: string;
  h1: string;
  intro: string;
  deliverables: [string, string][];
  timeline: [string, string][];
  metrics: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'paid-ads', name: 'Paid ads', short: 'paid ads', speed: 'Live in 72h', speedLong: 'Live in 72 hours',
    card: 'Google, Meta and TikTok campaigns tuned daily against real bookings, not vanity clicks.',
    blurb: 'Google, Meta and TikTok campaigns tuned daily against real bookings.',
    h1: 'Ads that pay for themselves.',
    intro: 'Google, Meta and TikTok campaigns built around bookings and sales, not clicks. Launched in three days, then tuned every day after.',
    deliverables: [['Channel strategy', 'The right mix of Google, Meta and TikTok for your market, with a clear budget split.'], ['Campaign build', 'Account structure, audiences, keywords and offers set up properly from the start.'], ['Ad creative', 'Static, carousel and short video ads, with multiple hooks to test.'], ['Conversion tracking', 'Pixels, call tracking and form tracking so every lead is counted.'], ['Daily optimisation', 'Bids, budgets and creative rotated daily toward what is working.'], ['Weekly report', 'Spend, leads, cost per lead and what we are testing next.']],
    timeline: [['Day 0', 'Brief and account access'], ['24 hours', 'Strategy, audiences and first creative'], ['72 hours', 'Campaigns live and tracked'], ['Ongoing', 'Daily tuning, weekly reports']],
    metrics: ['Cost per lead', 'Return on ad spend', 'Conversion rate', 'Booked appointments'],
    faqs: [
      { q: 'What budget do I need?', a: 'We work with ad budgets from around $1,000 a month and recommend a split based on your goals and market.' },
      { q: 'Do I keep my ad accounts?', a: 'Yes. Everything is built in accounts you own, and you keep full access at all times.' },
      { q: 'How soon will I see results?', a: 'Data starts flowing on day one. Most clients see a stable cost per lead within two to three weeks.' },
    ],
  },
  {
    slug: 'social-content', name: 'Social content', short: 'social', speed: 'Weekly', speedLong: 'Weekly cadence',
    card: 'Posts, reels and stories in your voice across Facebook, Instagram, LinkedIn and TikTok, published on schedule.',
    blurb: 'Posts, reels and stories in your voice, published on schedule.',
    h1: 'A feed that never goes quiet.',
    intro: 'Posts, reels, stories and captions in your voice across Facebook, Instagram, LinkedIn and TikTok, published on schedule, with your profiles and Google Business Profile kept up to date.',
    deliverables: [['Scheduled content', 'Posts and reels planned and produced every month, from 8 a month up to daily.'], ['On-demand content', 'Extra posts and stories when something happens, like a new offer or an event.'], ['Profile management', 'Your profiles, bios and details reviewed and kept up to date.'], ['Google Business Profile', 'Posts, updates and reviews looked after on your Google Business Profile.'], ['Community management', 'Comments, tags and messages answered Monday to Friday, with active engagement on larger plans.'], ['Reporting', 'Quarterly reports on what is working, with live online reporting on our top plan.']],
    timeline: [['Day 0', 'Brand voice and goals'], ['48 hours', 'First month planned'], ['72 hours', 'First posts live'], ['Ongoing', 'Scheduled publishing, quarterly reports']],
    metrics: ['Reach', 'Engagement rate', 'Profile visits', 'Enquiries from social'],
    faqs: [
      { q: 'Which platforms do you cover?', a: 'Facebook, Instagram, LinkedIn and TikTok. We focus on where your customers actually spend time.' },
      { q: 'Do I approve posts?', a: 'Yes. You see the calendar ahead of time and can approve or request changes in one click.' },
      { q: 'Do you reply to comments and messages?', a: 'Yes. We answer likes, comments, tags and messages Monday to Friday. Larger plans also include engaging with relevant content and growing your following.' },
      { q: 'Can you use our own photos?', a: 'Absolutely. Send what you have and we build around it, filling the gaps with design.' },
    ],
  },
  {
    slug: 'seo', name: 'SEO & AI search', short: 'SEO and AI search', speed: 'Compounding', speedLong: 'Compounding results',
    card: 'Get found on Google and in AI answers from ChatGPT, Google and Copilot, with local search and content that keeps you there.',
    blurb: 'Found on Google and in AI answers, and kept there.',
    h1: 'Show up when they search, and when they ask.',
    intro: 'Local SEO, technical fixes and content built to rank on Google and to be quoted in AI answers from ChatGPT, Google AI Overviews and Copilot, for the searches and questions that matter.',
    deliverables: [['SEO and AI visibility audit', 'A full review of your site, rankings, competitors and how AI tools describe you, with a keyword map.'], ['Google Business Profile', 'Categories, services, photos and posts optimised for the map pack.'], ['Technical and on-page fixes', 'Speed, indexing, schema, meta titles and headings fixed, so search engines and AI tools can read you.'], ['Monthly blog article', 'One keyword-informed article a month, 500 to 1,200 words, linked to your key pages and published on your site.'], ['AI answer optimisation', 'Clear, summarised answers, FAQs and structured content for conversational and long-tail questions, so AI tools can quote you.'], ['Tracking and reporting', 'Rankings, traffic, AI visibility and enquiries from search, reported every month.']],
    timeline: [['Day 0', 'Audit and access'], ['72 hours', 'Quick wins fixed'], ['30 days', 'First article and AI-ready content live'], ['Ongoing', 'Monthly reports']],
    metrics: ['Map pack rankings', 'Organic traffic', 'AI answer mentions', 'Calls from search'],
    faqs: [
      { q: 'How long does SEO take?', a: 'Technical quick wins land in days. Meaningful ranking gains usually build over two to four months.' },
      { q: 'What is AI search visibility?', a: 'More people now ask ChatGPT, Google AI Overviews or Copilot instead of scrolling search results. We structure your content so those tools understand your business and can quote and recommend it, alongside your regular Google rankings.' },
      { q: 'Do you guarantee number one rankings?', a: 'No one honestly can, on Google or in AI answers. We guarantee the work, the reporting and steady movement on the terms that bring in customers.' },
      { q: 'Is local SEO different?', a: 'Yes. It focuses on Google Maps, reviews and location signals, and is usually the fastest win for local businesses.' },
    ],
  },
  {
    slug: 'web-design', name: 'Web design & dev', short: 'web design', speed: 'From 3 days', speedLong: 'Live in 3 days to 3 weeks',
    card: 'Fast, mobile-first sites and landing pages designed for one job: the enquiry.',
    blurb: 'Fast, mobile-first sites built for one job: the enquiry.',
    h1: 'Sites that turn visits into calls.',
    intro: 'Fast, mobile-first websites and landing pages designed around one job: getting the enquiry. A landing page can be live within a week, a full website within three.',
    deliverables: [['Research and copy', 'Your goals, competitors and an SEO and AI visibility baseline, then a sitemap, keywords and copy for every page.'], ['Template or custom design', 'Our website framework styled to your brand, or a bespoke design that starts with a moodboard and concepts.'], ['Responsive build', 'WordPress or a fast static site, quick on every device, with accessibility built in.'], ['Forms and booking', 'Contact forms, booking tools and call tracking connected.'], ['Review rounds', 'Feedback on the working site before launch, plus design review rounds on custom builds.'], ['Hosting and care', 'Hosting in a Sydney data centre with SSL, backups, monitoring and updates, plus monthly care plans for ongoing changes.']],
    timeline: [['Day 0', 'Brief and research'], ['3–5 days', 'Landing pages live'], ['1–2 weeks', 'Template websites live'], ['2–3 weeks', 'Custom websites live']],
    metrics: ['Conversion rate', 'Page speed score', 'Form submissions', 'Calls from site'],
    faqs: [
      { q: 'Which website package do I need?', a: 'Focus is a single landing page, inside your current site or standalone, best for a campaign, event or single offer. Core is up to 5 pages, best for sole traders and small businesses. Scale is 6 to 10 pages on WordPress, best for service businesses ready to grow. Each comes as template or custom.' },
      { q: 'Template or custom: which do I need?', a: 'Template means we style our website framework to your brand, using your logo, colours, fonts and images. It is faster, more cost-effective and the right fit for most small and growing businesses. Custom means we design from scratch, starting with a moodboard and design concepts, with two design review rounds before we build. Choose custom if you want a distinctive look or your brand is a key point of difference.' },
      { q: 'Can I edit the site myself?', a: 'Yes. We build on platforms that are easy to update, and show you how.' },
      { q: 'What about hosting?', a: 'We host in a Sydney data centre with SSL, backups, monitoring and security updates, on a simple monthly plan. Our Care and Care Plus plans add plugin and theme updates, a monthly report and time for changes each month.' },
      { q: 'Do you look after Shopify stores?', a: 'Yes. Shopify Care covers theme and app updates, monitoring, a monthly report and time for small changes each month.' },
      { q: 'Do you redesign or take over existing sites?', a: 'Often. We keep what works, fix what does not and migrate content without losing your rankings. For sites we did not build, we start with a takeover audit before we host or make changes.' },
    ],
  },
  {
    slug: 'branding', name: 'Branding', short: 'branding', speed: '1–2 weeks', speedLong: 'Delivered in 1–2 weeks',
    card: 'Logo design, logo refreshes and style guides that make you look like the category leader.',
    blurb: 'Logos and style guides that make you look like the category leader.',
    h1: 'Look like the obvious choice.',
    intro: 'Logo design, logo refreshes and brand style guides that make a local business look like the leader in its category, ready to use everywhere.',
    deliverables: [['Brand consultation', 'A focused session to understand your brand personality, goals and audience.'], ['Design brief', 'A written brief you sign off before any design starts.'], ['Logo concepts', 'Two draft logo concepts, then a round of feedback and edits on the one you prefer.'], ['Final logo files', 'Your chosen logo, supplied in every standard file format.'], ['Style guide', 'Logos, fonts, colour palette, usage guidelines and exclusion zones, in one PDF.'], ['Logo refresh', 'A sharper version of your current logo, built on a review of your existing brand and positioning.']],
    timeline: [['Day 0', 'Brand consultation'], ['Brief', 'Signed off before design starts'], ['Concepts', 'Two logo options to choose from'], ['Final', 'Files and style guide delivered']],
    metrics: ['Brand recall', 'Enquiry quality', 'Social engagement', 'Consistency across channels'],
    faqs: [
      { q: 'How many logo options do I get?', a: 'Two draft concepts. You choose one, and we refine it with a round of feedback and edits.' },
      { q: 'Do I own the files?', a: 'Yes. Full ownership, and every standard file format you need.' },
      { q: 'Can you refresh rather than rebrand?', a: 'Yes. A logo refresh starts with a review of your existing brand, messaging and positioning, then two refreshed concepts to choose from.' },
    ],
  },
  {
    slug: 'email-crm', name: 'Email & CRM', short: 'email & CRM', speed: 'Always on', speedLong: 'Always on',
    card: 'Welcome flows, reminders and win-backs that turn one-time buyers into regulars.',
    blurb: 'Flows that turn first-time buyers into regulars.',
    h1: 'Follow-up that never forgets.',
    intro: 'Welcome flows, reminders and win-back sequences that turn first-time buyers into regulars, running quietly in the background.',
    deliverables: [['CRM setup', 'Your customer list organised, cleaned and connected.'], ['Welcome sequence', 'A warm introduction that turns new subscribers into customers.'], ['Booking reminders', 'Automatic reminders that cut no-shows.'], ['Review requests', 'Timed asks that build your reputation on autopilot.'], ['Win-back flows', 'Messages that bring lapsed customers back.'], ['Monthly campaigns', 'Newsletters and offers written and sent for you.']],
    timeline: [['Day 0', 'Tools and list audit'], ['72 hours', 'Welcome flow live'], ['Week 2', 'Reminder and review flows'], ['Ongoing', 'Monthly campaigns']],
    metrics: ['Open rate', 'Click rate', 'Repeat bookings', 'Revenue per subscriber'],
    faqs: [
      { q: 'Which platform do you use?', a: 'We work with Klaviyo, Mailchimp, HubSpot and most booking systems. If you have none, we set one up.' },
      { q: 'Will it feel spammy?', a: 'No. Every flow is triggered by real customer behaviour, so messages arrive when they are useful.' },
      { q: 'Do you do SMS too?', a: 'Yes. Appointment reminders and offers by SMS work well alongside email.' },
    ],
  },
  {
    slug: 'analytics', name: 'Analytics', short: 'analytics', speed: 'Day one', speedLong: 'Live dashboard on day one',
    card: 'Google Analytics, search and social engagement tracked properly, in one live dashboard.',
    blurb: 'Google and social engagement analytics in one live dashboard.',
    h1: 'Know exactly what works.',
    intro: 'Google Analytics, Search Console, Google Business Profile and social engagement data set up properly and brought together in one live dashboard, with plain-English reports. Every visit, enquiry and dollar, accounted for.',
    deliverables: [['Tracking audit', 'A full check of what is and is not being measured today.'], ['Google Analytics 4 and Tag Manager', 'Analytics, tags and conversion events configured correctly.'], ['Search and Business Profile insights', 'Search Console and Google Business Profile connected, so you see how people find you.'], ['Social engagement analytics', 'Reach, engagement and follower growth from Facebook, Instagram, LinkedIn and TikTok in one place.'], ['Enquiry tracking', 'Every form, call and booking attributed to its source.'], ['Live dashboard and reports', 'Your key numbers updated continuously, with plain-English weekly reports.']],
    timeline: [['Day 0', 'Audit existing tracking'], ['48 hours', 'Tracking fixed and verified'], ['72 hours', 'Live dashboard'], ['Ongoing', 'Weekly reports']],
    metrics: ['Website traffic', 'Engagement rate', 'Lead source', 'Cost per lead'],
    faqs: [
      { q: 'I already have Google Analytics. Why change?', a: 'Most setups miss calls, forms or bookings. We audit, fix and connect everything so the numbers are real.' },
      { q: 'Which platforms do you report on?', a: 'Google Analytics, Search Console, Google Business Profile and Google Ads, plus Facebook, Instagram, LinkedIn and TikTok.' },
      { q: 'Can I see results any time?', a: 'Yes. Your live dashboard updates continuously and works on any device.' },
      { q: 'Do you report on other agencies’ work?', a: 'Yes. We can track every channel you run, whoever manages it.' },
    ],
  },
];

export const combos = [
  { tag: 'Launch kit', title: 'New business, new offer, new location.', body: 'Everything you need to open with a bang: a brand that looks established, a site that converts and ads that bring the first customers in.', items: ['Branding', 'Web design', 'Paid ads'] },
  { tag: 'Always-on growth', title: 'Steady leads, every single week.', body: 'Paid and organic working together, with follow-up that brings customers back and reporting that shows exactly what is working.', items: ['Paid ads', 'Social', 'Email & CRM', 'Analytics'] },
  { tag: 'Local leader', title: 'Own your area on Google.', body: 'Rank in the map pack, turn searches into calls and build the reviews that keep you on top.', items: ['SEO & AI search', 'Web design', 'Email & CRM'] },
];

// Process: short version on the home page, full version on /process/.
export const steps = [
  {
    title: 'Brief', time: '15 minutes', short: 'Send the form or email us, any time. One conversation captures everything.',
    body: 'Send the quote form or email us, whenever suits you. One focused conversation captures your goals, budget, audience and deadlines. No discovery workshops, no week-long back and forth.',
    happens: ['We ask the right questions, once', 'We review your current channels and competitors', 'You receive a fixed quote within the hour'], get: ['Fixed quote', 'Clear scope'], yours: '15 minutes',
  },
  {
    title: 'Plan', time: 'Within 24h', short: 'Strategy, channel mix, budget and first creative, ready to approve.',
    body: 'Your strategy lands in your inbox the next day. It covers the channel mix, budget split, messaging and first creative concepts, all in one document you can approve in a single reply.',
    happens: ['Channel and budget strategy', 'Audience and keyword research', 'First creative concepts'], get: ['Strategy document', 'Creative concepts'], yours: 'One approval',
  },
  {
    title: 'Launch', time: 'Within 72h', short: 'Ads and content go live, tracked from the first click.',
    body: 'Ads and content go live across every channel, with tracking in place from the first click. Landing pages follow within a week and full websites within three. You get your live dashboard the same day.',
    happens: ['Campaigns built and published', 'Tracking verified end to end', 'Dashboard connected'], get: ['Live campaigns', 'Live dashboard'], yours: 'None',
  },
  {
    title: 'Grow', time: 'Every hour after', short: 'Constant testing and reallocation, with a weekly report on what moved.',
    body: 'This is where most agencies slow down and we speed up. We test, adjust and reallocate continuously, and send a clear weekly report on what moved and what is next.',
    happens: ['Daily optimisation', 'New creative tested every week', 'Budget moved to what is working'], get: ['Weekly report', 'Monthly strategy call'], yours: 'Five minutes a week',
  },
];

export const never = [
  { v: 'Any time', l: 'Questions welcome by email, whenever suits you' },
  { v: '1 hour', l: 'From brief to fixed quote' },
  { v: 'Same day', l: 'Changes and edits turned around' },
  { v: 'Weekly', l: 'Plain-English reports, without asking' },
];

export const principles = [
  { t: 'No hand-offs', b: 'The same team plans, builds and runs your work, so nothing gets lost between departments.' },
  { t: 'Systems, not heroics', b: 'Templates, tracking and approvals are built once and reused, which is why every launch is fast.' },
  { t: 'Launch, then learn', b: 'Real data from a live campaign beats any forecast. We ship a strong first version and improve from there.' },
];

// Home page
export const industries = ['Dental clinics', 'Cafés', 'Gyms', 'Trades', 'Salons', 'Real estate', 'Restaurants', 'Physios', 'Retail', 'Law firms'];

export const statement =
  'Most agencies spend six weeks planning. We spend six minutes understanding your goal, seventy-two hours launching, and every hour after that making it perform better.';

// The hero dashboard is an example of how a client's first weeks are planned and reported, not live data or a promise of results.
export const dashboard = {
  path: 'your growth plan · example',
  milestones: [
    { when: 'Hour 1', what: 'Fixed quote', note: 'plan in your inbox' },
    { when: 'Day 3', what: 'Live', note: 'ads and content' },
    { when: 'Week 1', what: 'Every lead', note: 'tracked to its source' },
    { when: 'Every week', what: 'Report', note: 'and next steps' },
  ],
  feed: [
    ['Strategy agent drafted your 90-day plan', '#7D96FF'], ['Marketing lead reviewed and approved the plan', '#7EE2A8'], ['Ads agent launched 4 headline tests', '#E8C77E'],
    ['Website agent published landing page v2', '#7D96FF'], ['Content agent answered 6 comments and messages', '#7EE2A8'], ['Budget moved to the best-performing ad set', '#E8C77E'],
    ['Content agent scheduled 3 reels for this week', '#7D96FF'], ['Reporting agent sent your weekly summary', '#7EE2A8'], ["Marketing lead set next week's priorities", '#E8C77E'],
  ] as [string, string][],
};

// Your team: AI agents do the work, experienced marketing leadership oversees it.
export const lead = {
  title: 'Marketing leadership',
  tag: 'Human-led · 30+ years',
  body: 'Over 30 years of marketing experience behind every decision. Sets your strategy, reviews every plan and signs off before anything goes live.',
};
export const agents = [
  { name: 'Strategy agent', body: 'Turns your brief into a tailored plan and fixed quote within the hour.' },
  { name: 'Ads agent', body: 'Builds, tests and optimises your campaigns, hour by hour.' },
  { name: 'Website agent', body: 'Builds and improves your landing pages and website.' },
  { name: 'Content agent', body: 'Writes and schedules posts, reels and emails in your voice.' },
  { name: 'SEO agent', body: 'Keeps you visible on Google and in AI answers, with fresh content every month.' },
  { name: 'Reporting agent', body: 'Tracks every lead and sends your weekly report.' },
];
export const touch = [
  { when: 'Within the hour', body: 'Our agent team emails your tailored plan and fixed quote, reviewed by our marketing lead.' },
  { when: 'Any time', body: 'Send questions by email whenever suits you. No phone tag, no waiting for a call back.' },
  { when: 'Every week', body: 'Your report and next steps, plus a monthly strategy call with your marketing lead.' },
];

export const why = [
  { title: 'Experienced', body: 'Marketing leadership with over 30 years of experience sets the strategy and reviews the work.' },
  { title: 'Fast', body: 'AI agents work in hours, not weeks. No hand-offs or bottlenecks.' },
  { title: 'Always on', body: 'Campaigns monitored around the clock, and questions answered by email.' },
  { title: 'Accountable', body: 'Live dashboards and weekly reports. Every dollar tracked.' },
];

export const faqs = [
  { q: 'How fast can you really launch?', a: 'Most ad campaigns and content plans go live within 72 hours of your brief. Landing pages take three to five business days, full websites one to three weeks.' },
  { q: 'What does it cost?', a: 'You get a fixed quote within the hour. Ongoing work runs on a flat monthly plan with no lock-in.' },
  { q: 'Who will I be dealing with?', a: 'Our agent team handles the day-to-day work and stays in touch by email. Everything they do is overseen by our marketing leadership, with over 30 years of experience.' },
  { q: 'Is it all AI?', a: 'No. AI agents give us speed and accuracy. Experienced marketers set the strategy, review the plans and sign off the work. You get both.' },
  { q: 'Do I need to sign a long contract?', a: 'No. Plans roll month to month. We keep clients with results, not paperwork.' },
  { q: 'We are a small local business. Is this for us?', a: 'That is exactly who BLANK_ is built for. Clinics, cafés, trades, gyms, salons and retailers.' },
];

export const quote = {
  services: services.map((s) => s.name),
  budgets: ['Under $2k', '$2k – $5k', '$5k – $10k', '$10k +'],
  timings: ['ASAP', 'This month', 'Next 3 months', 'Just exploring'],
};

// Insights
export type Post = { slug: string; cat: string; read: string; title: string; excerpt: string; date: string; sections: [string, string][] };

export const postCats = ['All', 'SEO', 'Paid ads', 'Web', 'Social', 'Email', 'Strategy'];

export const posts: Post[] = [
  {
    slug: 'local-seo-72-hours', cat: 'SEO', read: '6 min read', date: '2026-10-01', title: 'The 72-hour local SEO checklist',
    excerpt: 'Seven fixes that move a local business up the map pack in three days, no new content required.',
    sections: [
      ['Start with your Google Business Profile', 'For most local searches, your Business Profile is the first thing people see. Make sure your primary category is specific, your hours are accurate and every service you offer is listed. Add at least ten recent, real photos.'],
      ['Fix the basics on your site', 'Your business name, address and phone number should match your profile exactly, on every page. Add LocalBusiness schema, compress large images and make sure the site loads in under three seconds on mobile.'],
      ['Ask for reviews, systematically', 'Review count and recency are strong ranking signals. Send a short review request after every job with a direct link, and reply to every review, good or bad, within a day.'],
    ],
  },
  {
    slug: 'meta-ads-small-budget', cat: 'Paid ads', read: '5 min read', date: '2026-10-01', title: 'Running Meta ads on under $2k a month',
    excerpt: 'Small budgets need tighter structure, fewer campaigns and faster decisions. Here is the setup we use.',
    sections: [
      ['One campaign, not five', 'Splitting a small budget across many campaigns starves each one of data. Start with a single conversion campaign and two or three ad sets at most.'],
      ['Let creative do the targeting', 'Broad audiences paired with strong, specific creative often outperform narrow interest targeting. Test three hooks at once and keep the winner.'],
      ['Judge on cost per lead, not clicks', 'Clicks are cheap and misleading. Set up proper conversion tracking from day one and make every decision against cost per lead or cost per booking.'],
    ],
  },
  {
    slug: 'landing-page-one-job', cat: 'Web', read: '4 min read', date: '2026-10-01', title: 'Why your landing page should do one job',
    excerpt: 'Every extra link is an exit. The highest-converting pages ask visitors to do exactly one thing.',
    sections: [
      ['Remove the menu', 'A landing page is not your homepage. Strip the navigation and keep visitors focused on a single action: call, book or enquire.'],
      ['Say the offer in five seconds', 'Your headline should state what you offer and who it is for. If a visitor has to scroll to understand it, most of them are already gone.'],
      ['Make the action obvious', 'One button style and one form, repeated down the page. Fewer fields mean more submissions, so ask only for what you need to follow up.'],
    ],
  },
  {
    slug: 'reels-that-sell', cat: 'Social', read: '5 min read', date: '2026-10-01', title: 'Short-form video that actually sells',
    excerpt: 'Views are easy. Enquiries are harder. What separates reels that entertain from reels that convert.',
    sections: [
      ['Hook in the first second', 'Open with the result, the problem or a bold claim. The first frame decides whether anyone watches the rest.'],
      ['Show the work', 'Before-and-after clips, behind the scenes and real customers beat polished brand films for local businesses. People buy what they can picture.'],
      ['End with one clear step', 'Tell viewers exactly what to do next: book, call or tap the link. A reel without a call to action is just content.'],
    ],
  },
  {
    slug: 'speed-is-strategy', cat: 'Strategy', read: '4 min read', date: '2026-10-01', title: 'Speed is a strategy',
    excerpt: 'Why the business that launches first usually wins, and how to move faster without cutting corners.',
    sections: [
      ['The cost of waiting', 'Every week spent planning is a week a competitor collects the customers you wanted. Most marketing decisions are reversible, so treat them that way.'],
      ['Launch, then learn', 'Real data from a live campaign beats any amount of forecasting. Launch a solid first version quickly and let the results guide the next move.'],
      ['Build systems, not one-offs', 'Speed comes from repeatable processes: templates, tracking and clear approval steps. Build them once and every launch after gets faster.'],
    ],
  },
  {
    slug: 'email-win-back', cat: 'Email', read: '5 min read', date: '2026-10-01', title: 'The win-back flow every local business needs',
    excerpt: 'Three emails that bring lapsed customers back, set up once and running for good.',
    sections: [
      ['Define what lapsed means', 'Pick a window that fits your business. For a café it might be 30 days; for a dentist, seven months. That window becomes your trigger.'],
      ['Three messages, spaced out', 'Start with a friendly check-in, follow with a reason to return and finish with a time-limited offer. Space them about a week apart.'],
      ['Measure returns, not opens', 'Track how many customers book or buy again after the flow. That is the only number that matters.'],
    ],
  },
];

// Legal (sample text: have a lawyer review it for the client's jurisdiction before launch)
export const legal = {
  updated: '30 Oct 2026',
  privacy: {
    title: 'Privacy policy',
    intro: 'This policy explains what personal information BLANK_digital collects, how we use it and the choices you have.',
    sections: [
      ['Information we collect', 'Details you give us when you request a quote, call, email or subscribe, such as your name, business name, email, phone number and project details. We also collect basic usage data from our website through cookies and analytics tools.'],
      ['How we use it', 'To respond to enquiries, prepare quotes, deliver and improve our services, send updates you have asked for and meet our legal obligations.'],
      ['Calls and messages', 'Calls, messages and form submissions may be recorded and processed by automated systems to route, transcribe and respond to your request, and to improve service quality.'],
      ['Sharing', 'We do not sell your information. We share it only with service providers who help us operate, such as hosting, email and analytics providers, under appropriate agreements, or where required by law.'],
      ['Retention and security', 'We keep personal information only as long as needed for the purposes above and protect it with reasonable technical and organisational measures.'],
      ['Your rights', 'Depending on where you live, you may have the right to access, correct, delete or export your information, or to object to certain processing. Contact us to make a request.'],
    ] as [string, string][],
  },
  terms: {
    title: 'Terms of service',
    intro: 'These terms govern your use of the BLANK_digital website and the services we provide. Project-specific terms in your quote or agreement take precedence.',
    sections: [
      ['Services', 'We provide the marketing services described in your quote. Scope, deliverables and timelines are confirmed in writing before work begins.'],
      ['Quotes and payment', 'Quotes are fixed for the agreed scope and valid for 30 days. Monthly plans are billed in advance. Ad spend is billed separately or paid directly by you to the platform.'],
      ['Your content and approvals', 'You confirm you have the rights to any material you provide. Timelines depend on timely access, information and approvals from you.'],
      ['Ownership', 'Once paid in full, you own the final deliverables created for you. We may show non-confidential work in our portfolio unless you ask us not to.'],
      ['Cancellation', 'Monthly plans roll month to month and can be cancelled with 30 days notice. Fixed projects can be cancelled at any time; completed work is billed.'],
      ['Liability', 'We work to agreed standards but cannot guarantee specific results from advertising, search or social platforms. Our total liability is limited to the fees paid in the three months before a claim.'],
    ] as [string, string][],
  },
};

export const pad2 = (n: number) => String(n).padStart(2, '0');
