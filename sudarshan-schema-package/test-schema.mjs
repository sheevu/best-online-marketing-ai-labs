import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {buildSchema, SITE, STARTER_OFFERS} from './schema-builder.mjs';
const files=['home-page.jsonld','founder-profile.jsonld','seo-service.jsonld','digital-marketing-services.jsonld'];
for(const file of files){
 const data=JSON.parse(readFileSync(new URL(file,import.meta.url),'utf8'));
 assert.equal(data['@context'],'https://schema.org');
 const ids=data['@graph'].map(o=>o['@id']);assert.equal(ids.length,new Set(ids).size);
 assert(ids.includes(`${SITE}/#organization`));assert(ids.includes(`${SITE}/#website`));
 for(const obj of data['@graph']){
  if(obj.dateModified)assert(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d{1,3})?(Z|[+-]\d\d:\d\d)$/.test(obj.dateModified));
  if(obj['@type']==='BreadcrumbList') assert(obj.itemListElement.length>=2);
 }
 console.log('PASS schema syntax, unique IDs, shared IDs, breadcrumb/date where applicable:',file);
}
let example=buildSchema({kind:'profile',url:`${SITE}/about-sheevum-goel`,modifiedAt:'2026-08-20T00:00:00+00:00'});
assert.equal(example['@graph'].find(x=>x['@type']==='ProfilePage').dateModified,'2026-08-20T00:00:00+00:00');
for(const bad of ['2026-08-20','2026-08-20 00:00:00','2026-02-30T00:00:00+00:00','2026-08-20T00:00:00'])assert.throws(()=>buildSchema({kind:'profile',url:`${SITE}/about-sheevum-goel`,modifiedAt:bad}));
assert.equal(STARTER_OFFERS.length,9);
assert.equal(STARTER_OFFERS[0].start,89);
assert.equal(STARTER_OFFERS.at(-1).start,39000);
console.log('PASS dateModified accepts timezone-aware example and rejects four invalid values');
console.log('PASS nine homepage offers and published minimum prices');
