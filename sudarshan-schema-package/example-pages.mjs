import {writeFileSync} from 'node:fs';
import {buildSchema,SITE} from './schema-builder.mjs';
const examples={
 'home-page.jsonld':buildSchema({kind:'home',url:`${SITE}/`}),
 // dateModified is intentionally omitted: replace by a VERIFIED date, e.g., via the application CMS.
 'founder-profile.jsonld':buildSchema({kind:'profile',url:`${SITE}/about-sheevum-goel`}),
 'seo-service.jsonld':buildSchema({kind:'service',url:`${SITE}/seo-services-lucknow`,title:'SEO Services in Lucknow',description:'Technical SEO, local visibility, service content and conversion tracking for Lucknow MSMEs.',parents:[{name:'Digital Marketing Services',item:`${SITE}/digital-marketing-services`}],service:{name:'SEO Services in Lucknow'}}),
 'digital-marketing-services.jsonld':buildSchema({kind:'service',url:`${SITE}/digital-marketing-services`,title:'Digital Marketing Services in Lucknow',description:'Local SEO, Google Maps, websites, social media, paid ads and automation for Lucknow businesses.',service:{name:'Digital Marketing Services in Lucknow'}})
};
for(const [name,graph] of Object.entries(examples)){writeFileSync(new URL(name,import.meta.url),JSON.stringify(graph,null,2)+'\n')}
