/** Sudarshan AI Labs JSON-LD graph builder. No invented modification dates, socials, or prices. */
export const SITE = 'https://sudarshan-ai.com';
export const IDS = Object.freeze({
  organization: `${SITE}/#organization`,
  website: `${SITE}/#website`,
  founder: `${SITE}/about-sheevum-goel#person`
});
const ref = id => ({'@id': id});
const founderUrl = `${SITE}/about-sheevum-goel`;
const address = {
  '@type': 'PostalAddress',
  streetAddress: 'C-469/C, Indira Nagar, Near HAL',
  addressLocality: 'Lucknow', addressRegion: 'Uttar Pradesh',
  postalCode: '226016', addressCountry: 'IN'
};
const org = () => ({
  '@type': 'Organization', '@id': IDS.organization, name: 'Sudarshan AI Labs',
  legalName: 'NAVA-NETRA NEURAL SUDARSHAN AI LABS PRIVATE LIMITED',
  url: `${SITE}/`, description: 'Lucknow-based digital marketing, web development and practical AI automation for MSMEs.',
  address, telephone: '+919336299912', email: 'sudarshanailabs@gmail.com',
  founder: ref(IDS.founder), areaServed: [{'@type':'City',name:'Lucknow'},{'@type':'AdministrativeArea',name:'Uttar Pradesh'},{'@type':'Country',name:'India'}]
});
const website = () => ({'@type':'WebSite','@id':IDS.website,url:`${SITE}/`,name:'Sudarshan AI Labs',publisher:ref(IDS.organization),inLanguage:'en-IN'});
const founder = () => ({
  '@type': 'Person', '@id': IDS.founder, name: 'Sheevum Goel', url: founderUrl,
  jobTitle: 'Founder and AI Consultant', worksFor: ref(IDS.organization),
  description: 'Lucknow-based entrepreneur, AI consultant, and founder of Sudarshan AI Labs.',
  homeLocation: {'@type':'Place',name:'Lucknow, Uttar Pradesh, India'},
  knowsAbout: ['AI consulting','Business automation','Digital marketing','Local SEO','Web development','MSME growth']
});
function canonical(url){
  const u = new URL(url);
  if(u.origin !== SITE || u.search || u.hash) throw new Error('Use a clean canonical URL on sudarshan-ai.com');
  u.pathname = u.pathname.replace(/\/+$/,'') || '/';
  return u.href;
}
/** Require a real, timezone-aware ISO 8601 timestamp; never substitute the build time. */
function assertDateTime(value){
  if(typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-](?:0\d|1\d|2[0-3]):[0-5]\d)$/.test(value) || !Number.isFinite(Date.parse(value))) throw new Error('dateModified must be an actual ISO 8601 timestamp with timezone');
  const date = value.slice(0,10), time = value.slice(11,19);
  if(new Date(`${date}T${time}Z`).toISOString().slice(0,19) !== `${date}T${time}`) throw new Error('Invalid calendar date/time');
  return value;
}
function breadcrumbs(url, label, parents=[]){
  const elements = [{name:'Home', item:`${SITE}/`},...parents,{name:label,item:url}];
  return {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:elements.map((x,i)=>({'@type':'ListItem',position:i+1,name:x.name,item:x.item}))};
}
function pageNode(url, name, description, type='WebPage'){
  return {'@type':type,'@id':`${url}#webpage`,url,name,description,inLanguage:'en-IN',isPartOf:ref(IDS.website),publisher:ref(IDS.organization),breadcrumb:ref(`${url}#breadcrumb`)};
}
export const STARTER_OFFERS = Object.freeze([
  {key:'micro-growth-audit',name:'Micro Growth Audit',start:89,description:'Digital visibility check and prioritized action plan for micro-businesses.'},
  {key:'swaraj-tech-pack',name:'Swaraj Tech Pack',start:4900,description:'Digital launch pack for micro-businesses.'},
  {key:'prarambh-kick-start-pack',name:'Prarambh Kick-Start Pack',start:9500,description:'WhatsApp Business, catalogue and digital onboarding essentials.'},
  {key:'udaan-vyapari-pack',name:'Udaan Vyapari Pack',start:14500,description:'Digital marketing and lead organization for local merchants.'},
  {key:'raftaar-booster-pack',name:'Raftar Booster Pack',start:18500,description:'Campaign support and lead generation workflows.'},
  {key:'ai-chatbot-assistant',name:'AI Chatbot & Assistant',start:24000,description:'Customer-facing assistance and lead capture.'},
  {key:'seo-content-boost',name:'SEO & Content Boost',start:12500,description:'SEO audit with content optimization.'},
  {key:'landing-page-lead-gen',name:'Landing Page Lead Gen',start:15000,description:'Focused landing page for lead capture.'},
  {key:'website-launch-pack',name:'Website Launch Pack',start:39000,description:'Five-page website foundation with local SEO and branding essentials.'}
]);
function starterService(p){
  const id=`${SITE}/#service-${p.key}`;
  return {'@type':'Service','@id':id,name:p.name,description:p.description,provider:ref(IDS.organization),areaServed:{'@type':'Country',name:'India'},offers:{'@type':'Offer','@id':`${id}-offer`,url:`${SITE}/`,description:`Indicative starting price of INR ${p.start}; final scope and payment terms agreed after review.`,priceSpecification:{'@type':'PriceSpecification',minPrice:p.start,priceCurrency:'INR'},offeredBy:ref(IDS.organization),itemOffered:ref(id)}};
}
/** Build a page-specific graph. Pass only real, on-page metadata. */
export function buildSchema({kind, url, title, description, modifiedAt, parents=[], service, software, article}={}){
  if(!url) throw new Error('url required');
  url=canonical(url);
  if(modifiedAt !== undefined && modifiedAt !== null && modifiedAt !== '') assertDateTime(modifiedAt);
  const graph=[website(),org()];
  if(kind==='home'){
    if(url!==`${SITE}/`) throw new Error('Homepage URL must be site root');
    const page=pageNode(url,'Sudarshan AI Labs | AI & Digital Marketing Services in Lucknow','Local SEO, websites, digital marketing, and AI automation for MSMEs in Lucknow.');
    page.mainEntity=ref(IDS.organization);
    page.mentions=STARTER_OFFERS.map(p=>ref(`${SITE}/#service-${p.key}`));
    graph.push(page,...STARTER_OFFERS.map(starterService));
  } else if(kind==='profile'){
    if(url!==founderUrl) throw new Error('Founder page must use the canonical founder URL');
    const page=pageNode(url,'Sheevum Goel | Sudarshan AI Labs Founder','Founder profile of Sheevum Goel, entrepreneur and AI consultant based in Lucknow.','ProfilePage');
    page.mainEntity=ref(IDS.founder);
    if(modifiedAt) page.dateModified=modifiedAt;
    graph.push(page,founder(),breadcrumbs(url,'Sheevum Goel'));
  } else if(kind==='service'){
    if(!title || !description) throw new Error('Service page needs its real on-page title and description');
    const page=pageNode(url,title,description);page.mainEntity=ref(`${url}#service`);
    const s={'@type':'Service','@id':`${url}#service`,name:service?.name||title,description,provider:ref(IDS.organization),url,areaServed:{'@type':'City',name:'Lucknow'}};
    if(service?.startingPrice !== undefined){
      if(!Number.isFinite(service.startingPrice)||service.startingPrice<0||service.visibleOnPage!==true) throw new Error('Only advertise prices that are actually visible on this page');
      s.offers={'@type':'Offer',description:'Indicative starting price; final scope requires review.',priceSpecification:{'@type':'PriceSpecification',minPrice:service.startingPrice,priceCurrency:'INR'},offeredBy:ref(IDS.organization)};
    }
    graph.push(page,s,breadcrumbs(url,title,parents));
  } else if(kind==='location'){
    if(!title||!description) throw new Error('Location page needs its real title and description');
    const page=pageNode(url,title,description);
    if(service?.name) {
      const s={'@type':'Service','@id':`${url}#service`,name:service.name,description,provider:ref(IDS.organization),areaServed:{'@type':'Place',name:service.areaName||'Lucknow'}};
      page.mainEntity=ref(s['@id']); graph.push(s);
    }
    graph.push(page,breadcrumbs(url,title,parents));
  } else if(kind==='software'){
    if(!title||!description||!software?.name) throw new Error('Software page requires name, title, and description');
    const page=pageNode(url,title,description); page.mainEntity=ref(`${url}#software`);
    const product={'@type':'SoftwareApplication','@id':`${url}#software`,name:software.name,description,url,publisher:ref(IDS.organization),applicationCategory:'BusinessApplication'};
    if(software?.price!==undefined){
      if(!Number.isFinite(software.price)||software.price<0||software.visibleOnPage!==true) throw new Error('Software price must be visible and current');
      product.offers={'@type':'Offer',price:software.price,priceCurrency:'INR'};
    }
    graph.push(page,product,breadcrumbs(url,title,parents));
  } else if(kind==='article'){
    if(!title||!description||!article?.datePublished)throw new Error('Article needs visible title/description and verified publication date');
    const page=pageNode(url,title,description);page.mainEntity=ref(`${url}#article`);
    const story={'@type':'BlogPosting','@id':`${url}#article`,headline:title,description,url,datePublished:article.datePublished,author:ref(article.author==='founder'?IDS.founder:IDS.organization),publisher:ref(IDS.organization),mainEntityOfPage:ref(page['@id'])};
    if(modifiedAt)story.dateModified=modifiedAt;
    graph.push(page,story,breadcrumbs(url,title,parents));
  } else if(kind==='generic' || kind==='contact'){
    if(!title||!description)throw new Error('Page needs real title and description');
    const page=pageNode(url,title,description,kind==='contact'?'ContactPage':'WebPage');
    page.about=ref(IDS.organization); graph.push(page,breadcrumbs(url,title,parents));
  } else throw new Error('Unrecognized page kind');
  // No inferred social URLs, opening hours, registration IDs, fake reviews, or guessed image paths.
  return {'@context':'https://schema.org','@graph':graph};
}
export function asScriptTag(schema){
  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>`;
}
