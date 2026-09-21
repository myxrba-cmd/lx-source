const _0x4fb34b=_0x29fe;(function(_0x21b967,_0x843b80){const _0x58a4c9=_0x29fe,_0x41a08c=_0x21b967();while(!![]){try{const _0x442add=parseInt(_0x58a4c9(0x2e6))/0x1*(parseInt(_0x58a4c9(0x416))/0x2)+-parseInt(_0x58a4c9(0x2a7))/0x3+parseInt(_0x58a4c9(0x43c))/0x4+parseInt(_0x58a4c9(0x38c))/0x5*(-parseInt(_0x58a4c9(0x238))/0x6)+-parseInt(_0x58a4c9(0x3f7))/0x7*(-parseInt(_0x58a4c9(0x4ad))/0x8)+-parseInt(_0x58a4c9(0x3aa))/0x9*(-parseInt(_0x58a4c9(0x514))/0xa)+-parseInt(_0x58a4c9(0x422))/0xb*(-parseInt(_0x58a4c9(0x1bc))/0xc);if(_0x442add===_0x843b80)break;else _0x41a08c['push'](_0x41a08c['shift']());}catch(_0x462397){_0x41a08c['push'](_0x41a08c['shift']());}}}(_0x4bee,0x85f2d));const _0xf9cbf1=(function(){let _0x1aa0e3=!![];return function(_0x2993d8,_0x48b8c1){const _0xea262a=_0x1aa0e3?function(){if(_0x48b8c1){const _0x394f68=_0x48b8c1['apply'](_0x2993d8,arguments);return _0x48b8c1=null,_0x394f68;}}:function(){};return _0x1aa0e3=![],_0xea262a;};}()),_0x35ce65=_0xf9cbf1(this,function(){const _0x1e4bde=_0x29fe;return _0x35ce65[_0x1e4bde(0x3c8)]()['search'](_0x1e4bde(0x39c))['toString']()[_0x1e4bde(0x2dd)](_0x35ce65)[_0x1e4bde(0x221)](_0x1e4bde(0x39c));});_0x35ce65();const _0x1175ca=(function(){let _0x48759b=!![];return function(_0x5b2428,_0x664fd1){const _0x7d1ed9=_0x48759b?function(){const _0x25e929=_0x29fe;if(_0x664fd1){const _0x3cf3f2=_0x664fd1[_0x25e929(0x450)](_0x5b2428,arguments);return _0x664fd1=null,_0x3cf3f2;}}:function(){};return _0x48759b=![],_0x7d1ed9;};}()),_0xa2d83d=_0x1175ca(this,function(){const _0x96d525=_0x29fe;let _0x286254;try{const _0x4e7c4a=Function(_0x96d525(0x50e)+_0x96d525(0x2d6)+');');_0x286254=_0x4e7c4a();}catch(_0x1df5a8){_0x286254=window;}const _0x2e4fec=_0x286254[_0x96d525(0x314)]=_0x286254[_0x96d525(0x314)]||{},_0x129663=[_0x96d525(0x3b8),_0x96d525(0x3d7),'info','error',_0x96d525(0x243),_0x96d525(0x40c),_0x96d525(0x21a)];for(let _0x3b1800=0x0;_0x3b1800<_0x129663[_0x96d525(0x1b7)];_0x3b1800++){const _0xbc2ea=_0x1175ca[_0x96d525(0x2dd)][_0x96d525(0x4ff)][_0x96d525(0x512)](_0x1175ca),_0xe49126=_0x129663[_0x3b1800],_0x5778b6=_0x2e4fec[_0xe49126]||_0xbc2ea;_0xbc2ea[_0x96d525(0x49a)]=_0x1175ca[_0x96d525(0x512)](_0x1175ca),_0xbc2ea[_0x96d525(0x3c8)]=_0x5778b6[_0x96d525(0x3c8)][_0x96d525(0x512)](_0x5778b6),_0x2e4fec[_0xe49126]=_0xbc2ea;}});_0xa2d83d();import{connect}from'cloudflare:sockets';const VERSION=_0x4fb34b(0x309),DEPLOY_EDITION=_0x4fb34b(0x442);function deployKind(){const _0xf42882=_0x4fb34b;try{return DEPLOY_EDITION===_0xf42882(0x442)?_0xf42882(0x3ef):_0xf42882(0x27a);}catch(_0xded1a1){return _0xf42882(0x27a);}}const UPDATE_REPO=_0x4fb34b(0x2b8);let UPDATE_CACHE=null;function parseVer(_0x15f33e){const _0x537a2d=_0x4fb34b,_0x3b0144=String(_0x15f33e||'')[_0x537a2d(0x428)](/(\d+)\.(\d+)\.(\d+)/);return _0x3b0144?[parseInt(_0x3b0144[0x1],0xa),parseInt(_0x3b0144[0x2],0xa),parseInt(_0x3b0144[0x3],0xa)]:null;}function cmpVer(_0x551de8,_0x5335e3){const _0x3aa0ba=parseVer(_0x551de8),_0x254f9f=parseVer(_0x5335e3);if(!_0x3aa0ba||!_0x254f9f)return 0x0;for(let _0x361ae8=0x0;_0x361ae8<0x3;_0x361ae8++){if(_0x3aa0ba[_0x361ae8]!==_0x254f9f[_0x361ae8])return _0x3aa0ba[_0x361ae8]<_0x254f9f[_0x361ae8]?-0x1:0x1;}return 0x0;}function extractVersion(_0x520c34){const _0x327b4b=_0x4fb34b,_0x351f14=_0x520c34[_0x327b4b(0x428)](/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return _0x351f14?_0x351f14[0x1]:null;}async function checkUpdate(_0x2ab290){const _0x23c607=_0x4fb34b,_0x10c7aa=Date['now']();if(UPDATE_CACHE&&_0x10c7aa-UPDATE_CACHE['t']<0xea60)return UPDATE_CACHE['r'];const _0x275b80=deployKind()==='obfuscated'?'混淆':'明文';let _0x2e38bd=null,_0x55a64d='',_0x576d1f='';const _0x2f1cf0='https://raw.githubusercontent.com/'+UPDATE_REPO+_0x23c607(0x4e6)+encodeURIComponent('CFNext\x20明文版.js');try{const _0x5695b8=await fetch(_0x2f1cf0,{'headers':{'User-Agent':_0x23c607(0x275)}});if(_0x5695b8['ok']){const _0x1498d5=await _0x5695b8[_0x23c607(0x207)](),_0x14b81d=extractVersion(_0x1498d5);if(_0x14b81d)_0x2e38bd=_0x14b81d;}}catch(_0x5436ef){_0x576d1f=_0x5436ef&&_0x5436ef[_0x23c607(0x4cd)]||String(_0x5436ef);}if(_0x2e38bd){const _0x23a9bf=_0x275b80==='混淆'?_0x23c607(0x401):_0x23c607(0x1dc),_0x951500=_0x23c607(0x45f)+UPDATE_REPO+_0x23c607(0x4e6)+encodeURIComponent(_0x23a9bf);try{const _0xfd6427=await fetch(_0x951500,{'headers':{'User-Agent':_0x23c607(0x275)}});if(_0xfd6427['ok'])_0x55a64d=await _0xfd6427[_0x23c607(0x207)]();}catch(_0x244427){}return UPDATE_CACHE={'t':_0x10c7aa,'r':{'current':VERSION,'kind':_0x275b80,'latest':_0x2e38bd,'hasUpdate':cmpVer(_0x2e38bd,VERSION)>0x0,'code':_0x55a64d,'checkedAt':_0x10c7aa}},UPDATE_CACHE['r'];}const _0xde4d3c=_0x23c607(0x45f)+UPDATE_REPO+_0x23c607(0x4e6)+encodeURIComponent('CFNext\x20混淆版.js');try{const _0x17eee9=await fetch(_0xde4d3c,{'headers':{'User-Agent':_0x23c607(0x275)}});if(_0x17eee9['ok']){const _0x3617ac=await _0x17eee9[_0x23c607(0x207)](),_0x59a6b3=extractVersion(_0x3617ac);if(_0x59a6b3)_0x2e38bd=_0x59a6b3;}}catch(_0x52f88e){_0x576d1f=_0x52f88e&&_0x52f88e[_0x23c607(0x4cd)]||String(_0x52f88e);}if(_0x2e38bd)return UPDATE_CACHE={'t':_0x10c7aa,'r':{'current':VERSION,'kind':_0x275b80,'latest':_0x2e38bd,'hasUpdate':cmpVer(_0x2e38bd,VERSION)>0x0,'code':'','checkedAt':_0x10c7aa}},UPDATE_CACHE['r'];return{'current':VERSION,'kind':_0x275b80,'latest':null,'hasUpdate':![],'code':'','error':_0x576d1f||_0x23c607(0x236)};}const CLASH_TEMPLATE=_0x4fb34b(0x388),CLOUDFLARE_CIDRS=[_0x4fb34b(0x331),_0x4fb34b(0x4f0),_0x4fb34b(0x24b),_0x4fb34b(0x2d2),_0x4fb34b(0x4ab),_0x4fb34b(0x2f7),_0x4fb34b(0x4cb),_0x4fb34b(0x36f),_0x4fb34b(0x400),_0x4fb34b(0x4ed),_0x4fb34b(0x41e),_0x4fb34b(0x30c),_0x4fb34b(0x2c8),_0x4fb34b(0x269),_0x4fb34b(0x355)],REACHABLE_CIDRS=[_0x4fb34b(0x30c),_0x4fb34b(0x2c8),_0x4fb34b(0x269),_0x4fb34b(0x41e),_0x4fb34b(0x36f)],CLOUDFLARE_CIDRS_V6=[_0x4fb34b(0x3a7),'2606:4700::/32',_0x4fb34b(0x2ea),_0x4fb34b(0x260),'2405:8100::/32','2a06:98c0::/29','2c0f:f248::/32'],REACHABLE_CIDRS_V6=[_0x4fb34b(0x4ba),_0x4fb34b(0x3a7),'2803:f800::/32',_0x4fb34b(0x3ec),_0x4fb34b(0x2be)];let OFFICIAL_V6_CIDRS=CLOUDFLARE_CIDRS_V6[_0x4fb34b(0x396)](),OFFICIAL_V6_CIDRS_T=0x0;async function refreshOfficialV6CIDRs(){const _0x180a08=_0x4fb34b,_0x3cada6=Date['now']();if(OFFICIAL_V6_CIDRS_T&&_0x3cada6-OFFICIAL_V6_CIDRS_T<0x6*0x3c*0x3c*0x3e8)return;try{const _0x114444=await fetch(_0x180a08(0x4f1),{'signal':AbortSignal[_0x180a08(0x383)](0x2710)});if(!_0x114444['ok'])return;const _0x3e2ec4=await _0x114444[_0x180a08(0x207)](),_0x544fe0=String(_0x3e2ec4)[_0x180a08(0x26f)]('\x0a')[_0x180a08(0x454)](_0x5ad356=>_0x5ad356[_0x180a08(0x2ae)]())[_0x180a08(0x1cf)](_0x3085a4=>/^[0-9a-fA-F:.]+\/\d+$/[_0x180a08(0x3a5)](_0x3085a4)&&_0x3085a4[_0x180a08(0x276)](':')>=0x0);_0x544fe0[_0x180a08(0x1b7)]>=0x3&&(OFFICIAL_V6_CIDRS=_0x544fe0,OFFICIAL_V6_CIDRS_T=_0x3cada6);}catch(_0x5cbaa6){}}function ipInCidrV6(_0x5bbabd,_0x9840c1){const _0x27be25=_0x4fb34b,[_0x506ef5,_0xc059ff]=_0x9840c1[_0x27be25(0x26f)]('/'),_0x41e031=parseInt(_0xc059ff,0xa),_0x4707d5=_0x432184=>{const _0x10db3b=_0x27be25,_0x358a70=_0x432184[_0x10db3b(0x276)]('::');let _0x46aac4;if(_0x358a70>=0x0){const _0x1329fe=_0x432184[_0x10db3b(0x396)](0x0,_0x358a70)['split'](':')['filter'](Boolean),_0x1a115b=_0x432184[_0x10db3b(0x396)](_0x358a70+0x2)['split'](':')['filter'](Boolean),_0x4883da=0x8-_0x1329fe[_0x10db3b(0x1b7)]-_0x1a115b[_0x10db3b(0x1b7)];_0x46aac4=[..._0x1329fe,...Array(_0x4883da)[_0x10db3b(0x49f)]('0'),..._0x1a115b];}else _0x46aac4=_0x432184[_0x10db3b(0x26f)](':');return _0x46aac4[_0x10db3b(0x454)](_0x4cdb6a=>_0x4cdb6a[_0x10db3b(0x515)](0x4,'0'));},_0x48cb2f=_0x62c484=>_0x62c484[_0x27be25(0x454)](_0x394701=>parseInt(_0x394701,0x10)['toString'](0x2)[_0x27be25(0x515)](0x10,'0'))['join']('');return _0x48cb2f(_0x4707d5(_0x5bbabd))[_0x27be25(0x396)](0x0,_0x41e031)===_0x48cb2f(_0x4707d5(_0x506ef5))[_0x27be25(0x396)](0x0,_0x41e031);}function isCloudflareIP(_0x7b546e){const _0x58173f=_0x4fb34b;_0x7b546e=String(_0x7b546e||'');if(!isValidIp(_0x7b546e))return![];if(_0x7b546e['indexOf'](':')>=0x0)return CLOUDFLARE_CIDRS_V6[_0x58173f(0x3b2)](_0x3d5d5b=>ipInCidrV6(_0x7b546e,_0x3d5d5b));const _0x1851fa=_0x7b546e[_0x58173f(0x26f)]('.')[_0x58173f(0x454)](Number),_0x4de5fa=(_0x1851fa[0x0]<<0x18|_0x1851fa[0x1]<<0x10|_0x1851fa[0x2]<<0x8|_0x1851fa[0x3])>>>0x0;return CLOUDFLARE_RANGES[_0x58173f(0x3b2)](([_0x17e4b7,_0x170e12])=>_0x4de5fa>=_0x17e4b7&&_0x4de5fa<=_0x170e12);}const REGION_CN={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':_0x4fb34b(0x3f5),'US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':_0x4fb34b(0x28f),'AU':_0x4fb34b(0x1e8),'SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':'意大利','ES':_0x4fb34b(0x389),'PT':_0x4fb34b(0x1c6),'IE':_0x4fb34b(0x327),'BE':_0x4fb34b(0x3e7),'AT':_0x4fb34b(0x3d3),'PL':'波兰','CZ':'捷克','RO':_0x4fb34b(0x2a6),'HU':_0x4fb34b(0x31d),'GR':'希腊','RU':_0x4fb34b(0x334),'TR':_0x4fb34b(0x461),'UA':_0x4fb34b(0x34b),'IN':'印度','TH':'泰国','MY':_0x4fb34b(0x4f7),'VN':'越南','PH':_0x4fb34b(0x477),'ID':'印尼','BR':'巴西','MX':'墨西哥','AR':'阿根廷','CL':'智利','ZA':'南非','EG':'埃及','AE':_0x4fb34b(0x49e),'IL':_0x4fb34b(0x288),'NZ':_0x4fb34b(0x372),'KZ':_0x4fb34b(0x4ea),'SA':'沙特'},DEFAULT_REGION_POOLS=[_0x4fb34b(0x30e),_0x4fb34b(0x4d8),_0x4fb34b(0x44f),_0x4fb34b(0x35c),_0x4fb34b(0x4d7),_0x4fb34b(0x2de)]['join']('\x0a'),TRUSTED_REGION_POOL_RE=/random-region\/[A-Z]{2,}\/\d+\.txt/i;function isTrustedRegionPool(_0x2ee84c){const _0x23de9a=_0x4fb34b;return TRUSTED_REGION_POOL_RE[_0x23de9a(0x3a5)](String(_0x2ee84c||''));}const DEFAULT_CONFIG={'uuid':'','path':'','admin':'','host':'','enableVless':!![],'enableTrojan':![],'trojanPassword':'','enableXhttp':![],'alpn':'','ech':![],'echHost':_0x4fb34b(0x24f),'echDns':'','tlsOnly':![],'nodeLimit':![],'nodeLimitCount':0x64,'polling':![],'cfAccountId':'','cfApiToken':'','quotaAuto':![],'proxyIP':'','outboundProxy':'','outboundMode':'','preferredDomains':_0x4fb34b(0x325),'preferredIPs':[],'optimizer':{'source':'wetest_v4','sourceURL':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!![],'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':![]},'filter':{'region':_0x4fb34b(0x2d5),'ipType':['IPv4',_0x4fb34b(0x33d)],'isp':['移动','联通','电信']}},BUILTIN_OFFICIAL_DOMAINS=[_0x4fb34b(0x484),'www.cloudflare.com',_0x4fb34b(0x1d3)],BUILTIN_STABLE_IPS=[_0x4fb34b(0x2c6),_0x4fb34b(0x374),_0x4fb34b(0x27b),_0x4fb34b(0x431),_0x4fb34b(0x3b7),'104.16.98.7',_0x4fb34b(0x306),'104.17.44.9',_0x4fb34b(0x3ac),_0x4fb34b(0x337),'104.19.191.31',_0x4fb34b(0x344),_0x4fb34b(0x219),_0x4fb34b(0x434),_0x4fb34b(0x3f3),_0x4fb34b(0x501),'104.24.12.10',_0x4fb34b(0x1d9),'104.26.1.1','162.159.128.1'],BESTCF_REGION_URLS=[{'label':'香港','region':'HK','url':_0x4fb34b(0x30e),'count':0xc},{'label':'日本','region':'JP','url':_0x4fb34b(0x44f),'count':0xc},{'label':'美国','region':'US','url':'https://bestcf.pages.dev/random-region/US/100.txt','count':0xc},{'label':_0x4fb34b(0x3f5),'region':'SG','url':_0x4fb34b(0x35c),'count':0xc},{'label':'台湾','region':'TW','url':_0x4fb34b(0x4d8),'count':0xc}],PROXY_IP_DOMAINS={'HK':'ProxyIP.HK.CMLiussss.net','US':_0x4fb34b(0x3d9),'JP':_0x4fb34b(0x417),'TW':_0x4fb34b(0x42e),'SG':_0x4fb34b(0x4d1),'KR':_0x4fb34b(0x295),'DE':_0x4fb34b(0x4d5),'GB':_0x4fb34b(0x4ec),'NL':_0x4fb34b(0x3bf)},BUILTIN_PREFERRED_IPS=[_0x4fb34b(0x256),_0x4fb34b(0x2a0),_0x4fb34b(0x2f4),'104.16.125.96#优选IP-004','104.16.126.96#优选IP-005',_0x4fb34b(0x436),_0x4fb34b(0x2e7),_0x4fb34b(0x3c9),_0x4fb34b(0x203),_0x4fb34b(0x2bd),_0x4fb34b(0x497),_0x4fb34b(0x46f),_0x4fb34b(0x3ff),_0x4fb34b(0x290),_0x4fb34b(0x22c),_0x4fb34b(0x38b),'104.21.213.24#优选IP-017',_0x4fb34b(0x3d4),'104.16.245.187#优选IP-019',_0x4fb34b(0x404),_0x4fb34b(0x425),_0x4fb34b(0x271),'104.18.40.93#优选IP-023',_0x4fb34b(0x3b4),_0x4fb34b(0x1db),_0x4fb34b(0x20f),_0x4fb34b(0x310),'172.64.146.15#优选IP-028',_0x4fb34b(0x42b),_0x4fb34b(0x2fa),_0x4fb34b(0x284),_0x4fb34b(0x508),_0x4fb34b(0x4ae),_0x4fb34b(0x340),_0x4fb34b(0x46b),'162.159.137.205#优选IP-036',_0x4fb34b(0x25a),_0x4fb34b(0x2ad),'104.19.88.253#优选IP-039','162.159.136.73#优选IP-040',_0x4fb34b(0x370),_0x4fb34b(0x278),_0x4fb34b(0x459),'104.24.54.254#优选IP-044',_0x4fb34b(0x40f),'188.114.98.144#优选IP-046',_0x4fb34b(0x3df),'104.17.127.106#优选IP-048',_0x4fb34b(0x289),'104.18.255.187#优选IP-050',_0x4fb34b(0x25f),_0x4fb34b(0x343),_0x4fb34b(0x24a),_0x4fb34b(0x206),_0x4fb34b(0x36e),_0x4fb34b(0x2c1),_0x4fb34b(0x205),_0x4fb34b(0x266),_0x4fb34b(0x424),_0x4fb34b(0x397),'104.19.169.53#优选IP-061',_0x4fb34b(0x1e4),_0x4fb34b(0x272),'188.114.98.91#优选IP-064','162.159.236.5#优选IP-065',_0x4fb34b(0x298),_0x4fb34b(0x496),_0x4fb34b(0x3d5),_0x4fb34b(0x366),_0x4fb34b(0x2f0),'162.159.228.244#优选IP-071',_0x4fb34b(0x4e3),'104.19.214.25#优选IP-073',_0x4fb34b(0x455),_0x4fb34b(0x35f),_0x4fb34b(0x37a),_0x4fb34b(0x43a),_0x4fb34b(0x346),_0x4fb34b(0x20b),'188.114.98.53#优选IP-080',_0x4fb34b(0x29d),_0x4fb34b(0x37d),_0x4fb34b(0x4f4),_0x4fb34b(0x443),_0x4fb34b(0x51b),_0x4fb34b(0x472),_0x4fb34b(0x385),_0x4fb34b(0x3cb),_0x4fb34b(0x246),_0x4fb34b(0x42a),_0x4fb34b(0x335),_0x4fb34b(0x291),_0x4fb34b(0x462),_0x4fb34b(0x26d),_0x4fb34b(0x2cd),_0x4fb34b(0x45b),_0x4fb34b(0x40d),_0x4fb34b(0x264),_0x4fb34b(0x3e0),_0x4fb34b(0x471),'104.27.113.151#优选IP-101',_0x4fb34b(0x1fc),_0x4fb34b(0x200),_0x4fb34b(0x268),_0x4fb34b(0x35e),_0x4fb34b(0x22f),_0x4fb34b(0x22e),_0x4fb34b(0x1f7),'104.24.230.213#优选IP-109','104.19.106.1#优选IP-110','104.27.72.4#优选IP-111',_0x4fb34b(0x367),'172.65.162.213#优选IP-113','172.67.255.83#优选IP-114',_0x4fb34b(0x3e9),_0x4fb34b(0x2f2),_0x4fb34b(0x23f),_0x4fb34b(0x2c5),_0x4fb34b(0x2b7),_0x4fb34b(0x516),_0x4fb34b(0x2f3),_0x4fb34b(0x415),'104.24.184.158#优选IP-123',_0x4fb34b(0x33c),_0x4fb34b(0x3af),'104.25.93.154#优选IP-126',_0x4fb34b(0x255),'172.67.64.94#优选IP-128',_0x4fb34b(0x3b3),_0x4fb34b(0x1de),_0x4fb34b(0x2da),'172.67.173.89#优选IP-132',_0x4fb34b(0x43b),_0x4fb34b(0x1c5),_0x4fb34b(0x4ce),_0x4fb34b(0x347),'172.67.229.44#优选IP-137','104.24.51.58#优选IP-138','104.19.97.238#优选IP-139',_0x4fb34b(0x1d0),_0x4fb34b(0x3ee),_0x4fb34b(0x45c),_0x4fb34b(0x4de),_0x4fb34b(0x39d),_0x4fb34b(0x311),_0x4fb34b(0x231),_0x4fb34b(0x34c),_0x4fb34b(0x212),_0x4fb34b(0x23d),_0x4fb34b(0x3a1),'104.25.36.200#优选IP-151','104.17.195.133#优选IP-152',_0x4fb34b(0x2fc),_0x4fb34b(0x3c3),_0x4fb34b(0x267),_0x4fb34b(0x2c0),_0x4fb34b(0x2d0),_0x4fb34b(0x36b),_0x4fb34b(0x4a4),_0x4fb34b(0x201),_0x4fb34b(0x2a8),_0x4fb34b(0x48e),_0x4fb34b(0x30d),_0x4fb34b(0x2c9),'104.17.240.245#优选IP-165',_0x4fb34b(0x349),'104.17.25.173#优选IP-167',_0x4fb34b(0x2b1),_0x4fb34b(0x2ca),_0x4fb34b(0x27f),_0x4fb34b(0x4b5),'104.18.18.214#优选IP-172',_0x4fb34b(0x475),_0x4fb34b(0x502),'188.114.96.89#优选IP-175',_0x4fb34b(0x36d),_0x4fb34b(0x399),_0x4fb34b(0x1e2),'162.159.153.10#优选IP-179',_0x4fb34b(0x392),_0x4fb34b(0x1bb),_0x4fb34b(0x4bd),_0x4fb34b(0x377),'104.19.78.144#优选IP-184',_0x4fb34b(0x373),'104.19.69.150#优选IP-186','104.25.73.92#优选IP-187',_0x4fb34b(0x357),_0x4fb34b(0x2b3),_0x4fb34b(0x492),_0x4fb34b(0x37b),_0x4fb34b(0x460),_0x4fb34b(0x491),_0x4fb34b(0x2dc),_0x4fb34b(0x34e),'162.159.43.223#优选IP-196',_0x4fb34b(0x4c4),_0x4fb34b(0x323),'162.159.6.246#优选IP-199','104.24.46.127#优选IP-200',_0x4fb34b(0x1e0),_0x4fb34b(0x2d4),_0x4fb34b(0x429),'162.159.241.11#优选IP-204',_0x4fb34b(0x1d8),_0x4fb34b(0x3b0),'104.19.68.127#优选IP-207',_0x4fb34b(0x352),_0x4fb34b(0x3a4),_0x4fb34b(0x499),_0x4fb34b(0x4ee),_0x4fb34b(0x3bb),_0x4fb34b(0x292),'104.16.77.112#优选IP-214','104.19.181.118#优选IP-215',_0x4fb34b(0x287),_0x4fb34b(0x482),'172.65.44.103#优选IP-218',_0x4fb34b(0x408),_0x4fb34b(0x359),_0x4fb34b(0x261),_0x4fb34b(0x3c2),_0x4fb34b(0x391),_0x4fb34b(0x3fa),_0x4fb34b(0x2b9),_0x4fb34b(0x4a8),_0x4fb34b(0x2a1),_0x4fb34b(0x2c3),_0x4fb34b(0x262),'162.159.9.18#优选IP-230','104.18.41.168#优选IP-231','162.159.192.111#优选IP-232',_0x4fb34b(0x4b4),'104.17.0.4#优选IP-234',_0x4fb34b(0x24e),_0x4fb34b(0x368),_0x4fb34b(0x439),_0x4fb34b(0x413),_0x4fb34b(0x2bf),_0x4fb34b(0x423),_0x4fb34b(0x32c),_0x4fb34b(0x446),_0x4fb34b(0x41a),_0x4fb34b(0x240),_0x4fb34b(0x1fa),_0x4fb34b(0x412),_0x4fb34b(0x208),_0x4fb34b(0x2ba),'162.159.135.234#优选IP-249',_0x4fb34b(0x4f3),_0x4fb34b(0x426),_0x4fb34b(0x4af),_0x4fb34b(0x4d3),_0x4fb34b(0x3ca),_0x4fb34b(0x235),_0x4fb34b(0x1d5),'104.17.151.244#优选IP-257',_0x4fb34b(0x369),_0x4fb34b(0x3ae),_0x4fb34b(0x318),_0x4fb34b(0x259),_0x4fb34b(0x301),_0x4fb34b(0x34f),_0x4fb34b(0x1ea),_0x4fb34b(0x440),_0x4fb34b(0x2af),_0x4fb34b(0x3b5),_0x4fb34b(0x43e),_0x4fb34b(0x402),_0x4fb34b(0x4f6),_0x4fb34b(0x4e7),_0x4fb34b(0x433),_0x4fb34b(0x350),_0x4fb34b(0x465),_0x4fb34b(0x274),'162.159.137.71#优选IP-276','104.25.238.28#优选IP-277',_0x4fb34b(0x494),_0x4fb34b(0x4dc),_0x4fb34b(0x41c),_0x4fb34b(0x3ed),_0x4fb34b(0x258),_0x4fb34b(0x45e),_0x4fb34b(0x410),_0x4fb34b(0x3dd),_0x4fb34b(0x3fc),'104.16.45.249#优选IP-287','104.16.234.241#优选IP-288',_0x4fb34b(0x507),_0x4fb34b(0x37f),_0x4fb34b(0x1b8),_0x4fb34b(0x4b7),'162.159.43.85#优选IP-293','172.67.71.106#优选IP-294',_0x4fb34b(0x4fd),_0x4fb34b(0x31f),_0x4fb34b(0x34a),_0x4fb34b(0x4a0),_0x4fb34b(0x39b),_0x4fb34b(0x33b)],DEFAULT_PREFERRED_DOMAINS=[_0x4fb34b(0x466),_0x4fb34b(0x32a),_0x4fb34b(0x42d),_0x4fb34b(0x41d),'cdn.2020111.xyz',_0x4fb34b(0x2e5),_0x4fb34b(0x1c7),'cf.090227.xyz','cf.zhetengsha.eu.org',_0x4fb34b(0x4d6),_0x4fb34b(0x441),_0x4fb34b(0x47c),_0x4fb34b(0x1c1),_0x4fb34b(0x448),_0x4fb34b(0x490),_0x4fb34b(0x250),_0x4fb34b(0x40e),_0x4fb34b(0x29c),_0x4fb34b(0x4b8),'cf.877771.xyz',_0x4fb34b(0x228),_0x4fb34b(0x313),_0x4fb34b(0x469),_0x4fb34b(0x4a5),'saas.sin.fan'][_0x4fb34b(0x4bb)]('\x0a'),HTTP_PORTS=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),HTTP_PORTS_LIST=[0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f],TLS_PORTS=[0x1bb,0x805,0x823,0x827,0x830,0x20fb];function hashStr(_0xbb512e){const _0x45567d=_0x4fb34b;let _0x3e4b3b=0x0;for(let _0x2fece4=0x0;_0x2fece4<_0xbb512e[_0x45567d(0x1b7)];_0x2fece4++){_0x3e4b3b=(_0x3e4b3b<<0x5)-_0x3e4b3b+_0xbb512e[_0x45567d(0x1f9)](_0x2fece4)|0x0;}return Math[_0x45567d(0x3d0)](_0x3e4b3b);}const OPTIMIZE_SOURCES={'wetest_v4':{'label':'微测网\x20IPv4','url':_0x4fb34b(0x30a)},'wetest_v6':{'label':_0x4fb34b(0x38d),'url':_0x4fb34b(0x362)},'bestcf':{'label':_0x4fb34b(0x1ba),'url':_0x4fb34b(0x386)},'hostmonit':{'label':_0x4fb34b(0x49d),'url':_0x4fb34b(0x2e1)},'wetest_cname':{'label':'微测网\x20优选域名','url':'https://www.wetest.vip/page/cloudflare/cname.html'}},TE=new TextEncoder(),TD=new TextDecoder();function b64FromBytes(_0x54f9b5){const _0x204bc7=_0x4fb34b;let _0x3f87ac='';const _0x5c8a73=0x8000;for(let _0x307007=0x0;_0x307007<_0x54f9b5[_0x204bc7(0x1b7)];_0x307007+=_0x5c8a73){_0x3f87ac+=String['fromCharCode'](..._0x54f9b5[_0x204bc7(0x324)](_0x307007,_0x307007+_0x5c8a73));}return btoa(_0x3f87ac);}const MD5_S=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],MD5_K=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function rotl32(_0x47d8d1,_0x5145af){return(_0x47d8d1<<_0x5145af|_0x47d8d1>>>0x20-_0x5145af)>>>0x0;}function md5hex(_0x4d82e1){const _0x51d4e1=_0x4fb34b,_0x1d96b4=TE[_0x51d4e1(0x31c)](String(_0x4d82e1)),_0x7b650e=_0x1d96b4[_0x51d4e1(0x1b7)]*0x8,_0x2a0fda=(_0x1d96b4[_0x51d4e1(0x1b7)]+0x8>>0x6)+0x1<<0x6,_0x47b653=new Uint8Array(_0x2a0fda);_0x47b653['set'](_0x1d96b4),_0x47b653[_0x1d96b4[_0x51d4e1(0x1b7)]]=0x80;const _0x4f5435=new DataView(_0x47b653['buffer']);_0x4f5435[_0x51d4e1(0x487)](_0x2a0fda-0x8,_0x7b650e>>>0x0,!![]),_0x4f5435[_0x51d4e1(0x487)](_0x2a0fda-0x4,Math[_0x51d4e1(0x3a9)](_0x7b650e/0x100000000),!![]);let _0x1a4e32=0x67452301,_0x549ab6=0xefcdab89,_0x1dbb60=0x98badcfe,_0x445cfd=0x10325476;for(let _0x46be50=0x0;_0x46be50<_0x2a0fda;_0x46be50+=0x40){const _0x57a110=new Uint32Array(0x10);for(let _0x264c61=0x0;_0x264c61<0x10;_0x264c61++)_0x57a110[_0x264c61]=_0x4f5435['getUint32'](_0x46be50+_0x264c61*0x4,!![]);let _0x56697d=_0x1a4e32,_0x594594=_0x549ab6,_0x219a12=_0x1dbb60,_0x24e307=_0x445cfd;for(let _0x1e4d1a=0x0;_0x1e4d1a<0x40;_0x1e4d1a++){let _0x5cd074,_0x27b418;if(_0x1e4d1a<0x10)_0x5cd074=_0x594594&_0x219a12|~_0x594594&_0x24e307,_0x27b418=_0x1e4d1a;else{if(_0x1e4d1a<0x20)_0x5cd074=_0x24e307&_0x594594|~_0x24e307&_0x219a12,_0x27b418=(0x5*_0x1e4d1a+0x1)%0x10;else _0x1e4d1a<0x30?(_0x5cd074=_0x594594^_0x219a12^_0x24e307,_0x27b418=(0x3*_0x1e4d1a+0x5)%0x10):(_0x5cd074=_0x219a12^(_0x594594|~_0x24e307),_0x27b418=0x7*_0x1e4d1a%0x10);}const _0x20198c=_0x56697d+_0x5cd074+MD5_K[_0x1e4d1a]+_0x57a110[_0x27b418]>>>0x0,_0x5d4543=_0x594594+rotl32(_0x20198c,MD5_S[_0x1e4d1a])>>>0x0;_0x56697d=_0x24e307,_0x24e307=_0x219a12,_0x219a12=_0x594594,_0x594594=_0x5d4543;}_0x1a4e32=_0x1a4e32+_0x56697d>>>0x0,_0x549ab6=_0x549ab6+_0x594594>>>0x0,_0x1dbb60=_0x1dbb60+_0x219a12>>>0x0,_0x445cfd=_0x445cfd+_0x24e307>>>0x0;}let _0x2de219='';for(const _0x431dfd of[_0x1a4e32,_0x549ab6,_0x1dbb60,_0x445cfd]){_0x2de219+=(_0x431dfd&0xff)['toString'](0x10)['padStart'](0x2,'0'),_0x2de219+=(_0x431dfd>>>0x8&0xff)[_0x51d4e1(0x3c8)](0x10)['padStart'](0x2,'0'),_0x2de219+=(_0x431dfd>>>0x10&0xff)['toString'](0x10)[_0x51d4e1(0x515)](0x2,'0'),_0x2de219+=(_0x431dfd>>>0x18&0xff)[_0x51d4e1(0x3c8)](0x10)[_0x51d4e1(0x515)](0x2,'0');}return _0x2de219;}function uuidv4(){const _0x549fb6=_0x4fb34b;if(crypto[_0x549fb6(0x3e6)])return crypto['randomUUID']();const _0x2bb1de=crypto[_0x549fb6(0x3a8)](new Uint8Array(0x10));return _0x2bb1de[0x6]=_0x2bb1de[0x6]&0xf|0x40,_0x2bb1de[0x8]=_0x2bb1de[0x8]&0x3f|0x80,[..._0x2bb1de][_0x549fb6(0x454)]((_0x3aaa76,_0x4bac01)=>(_0x4bac01===0x4||_0x4bac01===0x6||_0x4bac01===0x8||_0x4bac01===0xa?'-':'')+_0x3aaa76[_0x549fb6(0x3c8)](0x10)[_0x549fb6(0x515)](0x2,'0'))[_0x549fb6(0x4bb)]('');}function isUUID(_0x402471){const _0x5e3772=_0x4fb34b;return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/[_0x5e3772(0x3a5)](_0x402471||'');}function parseHostPort(_0x665037,_0xa1c5f3=0x1bb){const _0x15cd38=_0x4fb34b;_0x665037=String(_0x665037||'')[_0x15cd38(0x2ae)]();if(!_0x665037)return{'host':'','port':_0xa1c5f3};if(_0x665037['startsWith']('[')){const _0x58e68f=_0x665037[_0x15cd38(0x428)](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':_0x58e68f?_0x58e68f[0x1]:_0x665037[_0x15cd38(0x449)](/^\[|\]$/g,''),'port':_0x58e68f&&_0x58e68f[0x2]?parseInt(_0x58e68f[0x2]):_0xa1c5f3};}const _0x194470=_0x665037[_0x15cd38(0x3c5)](':');if(_0x194470>0x0&&/^\d+$/[_0x15cd38(0x3a5)](_0x665037['slice'](_0x194470+0x1)))return{'host':_0x665037['slice'](0x0,_0x194470),'port':parseInt(_0x665037[_0x15cd38(0x396)](_0x194470+0x1))};return{'host':_0x665037,'port':_0xa1c5f3};}function isValidIp(_0x1cb61a){const _0x97fbe8=_0x4fb34b;_0x1cb61a=String(_0x1cb61a||'')[_0x97fbe8(0x2ae)]();if(!_0x1cb61a)return![];const _0x3e2b74=_0x1cb61a[_0x97fbe8(0x428)](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(_0x3e2b74)return _0x3e2b74[_0x97fbe8(0x396)](0x1)[_0x97fbe8(0x3a2)](_0x2c77b3=>Number(_0x2c77b3)<=0xff);if(!/^[0-9a-fA-F:]+$/['test'](_0x1cb61a))return![];if((_0x1cb61a[_0x97fbe8(0x428)](/::/g)||[])[_0x97fbe8(0x1b7)]>0x1)return![];const _0x4c8085=_0x1cb61a[_0x97fbe8(0x307)]('::'),_0x3445f3=_0x1cb61a[_0x97fbe8(0x449)](/::/g,':')[_0x97fbe8(0x26f)](':')[_0x97fbe8(0x1cf)](Boolean);if(!_0x4c8085&&_0x3445f3[_0x97fbe8(0x1b7)]!==0x8)return![];if(_0x4c8085&&(_0x3445f3['length']<0x1||_0x3445f3[_0x97fbe8(0x1b7)]>0x7))return![];return _0x3445f3['every'](_0x16fdad=>/^[0-9a-fA-F]{1,4}$/[_0x97fbe8(0x3a5)](_0x16fdad));}function formatIPv6(_0x4d12e7){const _0x2667d3=_0x4fb34b,_0x1302fb=[];for(let _0x844059=0x0;_0x844059<0x10;_0x844059+=0x2)_0x1302fb[_0x2667d3(0x33a)]((_0x4d12e7[_0x844059]<<0x8|_0x4d12e7[_0x844059+0x1])[_0x2667d3(0x3c8)](0x10));let _0x28ab26=-0x1,_0x4dff7d=0x0,_0x5d2c88=-0x1,_0x168e60=0x0;for(let _0x4c3f8c=0x0;_0x4c3f8c<0x8;_0x4c3f8c++){if(_0x1302fb[_0x4c3f8c]==='0'){if(_0x5d2c88<0x0)_0x5d2c88=_0x4c3f8c,_0x168e60=0x1;else _0x168e60++;_0x168e60>_0x4dff7d&&(_0x4dff7d=_0x168e60,_0x28ab26=_0x5d2c88);}else _0x5d2c88=-0x1,_0x168e60=0x0;}if(_0x4dff7d>=0x2){const _0x4dfbb6=_0x1302fb['slice'](0x0,_0x28ab26)[_0x2667d3(0x4bb)](':'),_0x2ea3e9=_0x1302fb[_0x2667d3(0x396)](_0x28ab26+_0x4dff7d)[_0x2667d3(0x4bb)](':');return(_0x4dfbb6?_0x4dfbb6+'::':'::')+_0x2ea3e9;}return _0x1302fb[_0x2667d3(0x4bb)](':');}function cidrToRange(_0x577a3a){const _0x56d509=_0x4fb34b,[_0x550f80,_0x1ee1c8]=_0x577a3a[_0x56d509(0x26f)]('/'),_0xb9ffa2=_0x550f80['split']('.')[_0x56d509(0x454)](Number),_0x43a069=(_0xb9ffa2[0x0]<<0x18|_0xb9ffa2[0x1]<<0x10|_0xb9ffa2[0x2]<<0x8|_0xb9ffa2[0x3])>>>0x0,_0x46dbc2=_0x1ee1c8>=0x20?0x0:0xffffffff<<0x20-_0x1ee1c8>>>0x0,_0x361102=(_0x43a069&_0x46dbc2)>>>0x0,_0x36e23b=(_0x43a069|~_0x46dbc2>>>0x0)>>>0x0;return[_0x361102,_0x36e23b];}const CLOUDFLARE_RANGES=CLOUDFLARE_CIDRS['map'](cidrToRange),_rangeCache=new Map();function cidrRangeCached(_0x2cc0f5){const _0x22a4a4=_0x4fb34b;let _0x19e248=_rangeCache[_0x22a4a4(0x2a4)](_0x2cc0f5);return!_0x19e248&&(_0x19e248=cidrToRange(_0x2cc0f5),_rangeCache[_0x22a4a4(0x30b)](_0x2cc0f5,_0x19e248)),_0x19e248;}function randomIPFromCidr(_0x351c72){const _0x39ec2d=_0x4fb34b;if(String(_0x351c72)[_0x39ec2d(0x276)](':')>=0x0)return randomIP6FromCidr(_0x351c72);const [_0x4f70ff,_0xf27faa]=cidrRangeCached(_0x351c72),_0x30a6af=_0x4f70ff+Math['floor'](Math[_0x39ec2d(0x3e4)]()*(_0xf27faa-_0x4f70ff>>>0x0));return(_0x30a6af>>>0x18&0xff)+'.'+(_0x30a6af>>>0x10&0xff)+'.'+(_0x30a6af>>>0x8&0xff)+'.'+(_0x30a6af&0xff);}function randomIP6FromCidr(_0x3f3d31){const _0x1aa5d5=_0x4fb34b,[_0x4fc3a6,_0x51eb8b]=_0x3f3d31[_0x1aa5d5(0x26f)]('/'),_0x5dbae9=parseInt(_0x51eb8b,0xa)||0x0,_0x2a29af=_0x420473=>{const _0x290df2=_0x1aa5d5,_0x556d97=_0x420473[_0x290df2(0x276)]('::');let _0x1ca270;if(_0x556d97>=0x0){const _0x39f85e=_0x420473['slice'](0x0,_0x556d97)[_0x290df2(0x26f)](':')[_0x290df2(0x1cf)](Boolean),_0x30c5c=_0x420473[_0x290df2(0x396)](_0x556d97+0x2)['split'](':')[_0x290df2(0x1cf)](Boolean),_0x352ee9=0x8-_0x39f85e[_0x290df2(0x1b7)]-_0x30c5c[_0x290df2(0x1b7)];_0x1ca270=[..._0x39f85e,...Array(_0x352ee9)[_0x290df2(0x49f)]('0'),..._0x30c5c];}else _0x1ca270=_0x420473[_0x290df2(0x26f)](':');return _0x1ca270['map'](_0x2a26e3=>_0x2a26e3[_0x290df2(0x515)](0x4,'0'));},_0x5059d2=_0x2a29af(_0x4fc3a6)[_0x1aa5d5(0x454)](_0xfa5f15=>parseInt(_0xfa5f15,0x10));let _0x2907ad=0x0;for(let _0x580b2d=0x0;_0x580b2d<0x8;_0x580b2d++)for(let _0x36eac8=0xf;_0x36eac8>=0x0;_0x36eac8--){if(_0x2907ad>=_0x5dbae9)_0x5059d2[_0x580b2d]|=(Math['random']()<0.5?0x1:0x0)<<_0x36eac8;_0x2907ad++;}return _0x5059d2[_0x1aa5d5(0x454)](_0x55141b=>_0x55141b[_0x1aa5d5(0x3c8)](0x10))[_0x1aa5d5(0x4bb)](':');}function ipv4ToEmbeddedV6(_0x185e3d){const _0x161657=_0x4fb34b,_0x3d56d1=String(_0x185e3d||'')[_0x161657(0x26f)]('.')[_0x161657(0x454)](_0x4d578f=>parseInt(_0x4d578f,0xa)['toString'](0x10)[_0x161657(0x515)](0x2,'0'));if(_0x3d56d1['length']!==0x4||_0x3d56d1[_0x161657(0x3b2)](_0x5a4ffa=>_0x5a4ffa===_0x161657(0x47e)))return null;return _0x161657(0x1d6)+_0x3d56d1[0x0]+_0x3d56d1[0x1]+':'+_0x3d56d1[0x2]+_0x3d56d1[0x3];}function randomIPsFromCidrs(_0x453f6a,_0x24d3e1){const _0x4a0e5c=_0x4fb34b,_0x3d589b=new Set(),_0x4fe1c2=[];let _0xb27007=0x0;while(_0x4fe1c2[_0x4a0e5c(0x1b7)]<_0x24d3e1&&_0xb27007++<_0x24d3e1*0x14){const _0x1c3e14=randomIPFromCidr(_0x453f6a[Math[_0x4a0e5c(0x3a9)](Math[_0x4a0e5c(0x3e4)]()*_0x453f6a[_0x4a0e5c(0x1b7)])]);!_0x3d589b[_0x4a0e5c(0x283)](_0x1c3e14)&&(_0x3d589b[_0x4a0e5c(0x464)](_0x1c3e14),_0x4fe1c2[_0x4a0e5c(0x33a)](_0x1c3e14));}return _0x4fe1c2;}function parseIPList(_0x1420fe){const _0x61911f=_0x4fb34b,_0xf3e89f=[],_0x149af5=new Set();return String(_0x1420fe||'')[_0x61911f(0x26f)](/[\n,;]+/)[_0x61911f(0x454)](_0x3cef3e=>_0x3cef3e['trim']())[_0x61911f(0x1cf)](Boolean)[_0x61911f(0x2ff)](_0x5f4228=>{const _0x353540=_0x61911f;let _0x127fbc='';if(_0x5f4228[_0x353540(0x307)]('#')){const [_0x4414fa,_0x562ea2]=_0x5f4228['split']('#');_0x5f4228=_0x4414fa,_0x127fbc=_0x562ea2;}const {host:_0x3655d7,port:_0x272c02}=parseHostPort(_0x5f4228,0x1bb);_0x3655d7&&isValidIp(_0x3655d7)&&!_0x149af5[_0x353540(0x283)](_0x3655d7)&&(_0x149af5[_0x353540(0x464)](_0x3655d7),_0xf3e89f['push']({'ip':_0x3655d7,'port':_0x272c02,'name':_0x127fbc}));}),_0xf3e89f;}function parseProxyAddress(_0x4629f2){const _0x499328=_0x4fb34b;if(!_0x4629f2)return null;let _0x3716a9=_0x499328(0x39a),_0x174bc1=String(_0x4629f2)[_0x499328(0x2ae)]();const _0x1f23f4=_0x174bc1[_0x499328(0x428)](/^(socks5|http|https):\/\/(.+)$/i);_0x1f23f4&&(_0x3716a9=_0x1f23f4[0x1][_0x499328(0x3fb)](),_0x174bc1=_0x1f23f4[0x2]);let _0x21aa2f='',_0x109301='';if(_0x174bc1[_0x499328(0x307)]('@')){const [_0x394b80,_0x1e3b50]=_0x174bc1[_0x499328(0x26f)]('@'),_0x22a003=_0x394b80[_0x499328(0x276)](':');if(_0x22a003>=0x0)_0x21aa2f=_0x394b80[_0x499328(0x396)](0x0,_0x22a003),_0x109301=_0x394b80[_0x499328(0x396)](_0x22a003+0x1);else _0x21aa2f=_0x394b80;_0x174bc1=_0x1e3b50;}const _0x204db9=_0x3716a9===_0x499328(0x2d1)?0x50:_0x3716a9===_0x499328(0x3dc)?0x1bb:0x438,{host:_0x1410a0,port:_0x2bcb3f}=parseHostPort(_0x174bc1,_0x204db9);return{'type':_0x3716a9,'host':_0x1410a0,'port':_0x2bcb3f,'user':_0x21aa2f,'pass':_0x109301};}function json(_0x828753,_0x22c95f){const _0x3abaf6=_0x4fb34b;return new Response(JSON[_0x3abaf6(0x31e)](_0x828753),{'status':_0x22c95f||0xc8,'headers':{'Content-Type':'application/json;\x20charset=utf-8'}});}async function loadConfig(_0x4739d4){const _0x2173f6=_0x4fb34b,_0x31c7a4=JSON['parse'](JSON[_0x2173f6(0x31e)](DEFAULT_CONFIG));let _0x165a56=![];if(_0x4739d4['U'])_0x31c7a4[_0x2173f6(0x2cc)]=String(_0x4739d4['U'])['toLowerCase']();if(_0x4739d4['D']||_0x4739d4[_0x2173f6(0x3ce)])_0x31c7a4['path']=String(_0x4739d4['D']||_0x4739d4['PATH']);if(_0x4739d4[_0x2173f6(0x329)]||_0x4739d4[_0x2173f6(0x3e2)])_0x31c7a4[_0x2173f6(0x3e2)]=String(_0x4739d4['ADMIN']||_0x4739d4[_0x2173f6(0x3e2)]);if(_0x4739d4['HOST'])_0x31c7a4[_0x2173f6(0x480)]=String(_0x4739d4['HOST'])[_0x2173f6(0x449)](/^https?:\/\//,'')[_0x2173f6(0x26f)]('/')[0x0];if(_0x4739d4[_0x2173f6(0x1e5)])_0x31c7a4[_0x2173f6(0x405)]=String(_0x4739d4['PROXYIP']);if(_0x4739d4['S']||_0x4739d4[_0x2173f6(0x40a)])_0x31c7a4[_0x2173f6(0x217)]=String(_0x4739d4['S']||_0x4739d4['OUTBOUND']);if(_0x4739d4['ECH']==='true'||_0x4739d4[_0x2173f6(0x234)]==='1')_0x31c7a4['ech']=!![];if(_0x4739d4[_0x2173f6(0x4e2)]===_0x2173f6(0x4b0)||_0x4739d4[_0x2173f6(0x4e2)]==='1')_0x31c7a4[_0x2173f6(0x296)]=!![];if(_0x4739d4[_0x2173f6(0x1f4)])_0x31c7a4[_0x2173f6(0x51a)]=String(_0x4739d4[_0x2173f6(0x1f4)]);if(_0x4739d4[_0x2173f6(0x3fe)])_0x31c7a4[_0x2173f6(0x432)]=String(_0x4739d4[_0x2173f6(0x3fe)]);if(_0x4739d4['YX'])_0x31c7a4[_0x2173f6(0x398)]=parseIPList(_0x4739d4['YX']);if(_0x4739d4['YXURL'])_0x31c7a4[_0x2173f6(0x3d1)][_0x2173f6(0x437)]=String(_0x4739d4[_0x2173f6(0x4be)]);if(_0x4739d4['K']&&typeof _0x4739d4['K'][_0x2173f6(0x2a4)]==='function')try{const _0x28a349=await _0x4739d4['K'][_0x2173f6(0x2a4)](_0x2173f6(0x4e5));if(_0x28a349){const _0xdb32c2=JSON[_0x2173f6(0x34d)](_0x28a349);if(_0xdb32c2['quotaAuto']!==undefined)_0x165a56=!![];Object[_0x2173f6(0x1c2)](_0x31c7a4,_0xdb32c2);if(_0xdb32c2[_0x2173f6(0x3d1)])_0x31c7a4[_0x2173f6(0x3d1)]=Object[_0x2173f6(0x1c2)](JSON[_0x2173f6(0x34d)](JSON['stringify'](DEFAULT_CONFIG[_0x2173f6(0x3d1)])),_0xdb32c2[_0x2173f6(0x3d1)]);if(_0xdb32c2[_0x2173f6(0x398)]&&Array[_0x2173f6(0x1f8)](_0xdb32c2[_0x2173f6(0x398)]))_0x31c7a4['preferredIPs']=_0xdb32c2[_0x2173f6(0x398)];if(_0xdb32c2['admin'])_0x31c7a4[_0x2173f6(0x3e2)]=String(_0xdb32c2['admin']);if(_0xdb32c2[_0x2173f6(0x2cc)])_0x31c7a4[_0x2173f6(0x2cc)]=String(_0xdb32c2[_0x2173f6(0x2cc)])[_0x2173f6(0x3fb)]();}}catch(_0x16f3d5){}delete _0x31c7a4[_0x2173f6(0x1ff)],delete _0x31c7a4[_0x2173f6(0x421)],_0x31c7a4[_0x2173f6(0x2cc)]=String(_0x31c7a4[_0x2173f6(0x2cc)]||'')[_0x2173f6(0x3fb)]();if(!isUUID(_0x31c7a4['uuid']))_0x31c7a4[_0x2173f6(0x2cc)]=uuidv4();if(!_0x31c7a4[_0x2173f6(0x2fe)]||_0x31c7a4[_0x2173f6(0x2fe)]==='/'||_0x31c7a4[_0x2173f6(0x2fe)]==='')_0x31c7a4[_0x2173f6(0x2fe)]=_0x31c7a4[_0x2173f6(0x2cc)];if(!Array[_0x2173f6(0x1f8)](_0x31c7a4[_0x2173f6(0x398)]))_0x31c7a4[_0x2173f6(0x398)]=parseIPList(_0x31c7a4[_0x2173f6(0x398)]);if(!_0x165a56){const _0x13cbd6=Boolean(_0x31c7a4['cfAccountId']&&_0x31c7a4[_0x2173f6(0x252)]||_0x4739d4[_0x2173f6(0x4a3)]&&_0x4739d4['CF_API_TOKEN']);if(_0x13cbd6)_0x31c7a4['quotaAuto']=!![];}return _0x31c7a4;}async function saveConfig(_0x449ef4,_0x4bed1b){const _0x5cde36=_0x4fb34b;if(!_0x449ef4['K']||typeof _0x449ef4['K'][_0x5cde36(0x25b)]!==_0x5cde36(0x409))return![];const _0x448359=JSON['parse'](JSON[_0x5cde36(0x31e)](_0x4bed1b));if(_0x448359[_0x5cde36(0x3e2)])_0x448359[_0x5cde36(0x3e2)]=String(_0x448359[_0x5cde36(0x3e2)]);return await _0x449ef4['K']['put'](_0x5cde36(0x4e5),JSON[_0x5cde36(0x31e)](_0x448359)),!![];}let QUOTA_CACHE=null,QUOTA_BACKOFF=0x0;const QUOTA_LIMIT=0x186a0,QUOTA_TTL=0x493e0,QUOTA_BACKOFF_TTL=0xdbba0;async function getQuota(_0x6ecc82,_0x25ebb9){const _0x3c0c53=_0x4fb34b,_0x51388f=String(_0x6ecc82[_0x3c0c53(0x4a3)]||_0x25ebb9&&_0x25ebb9[_0x3c0c53(0x45d)]||'')[_0x3c0c53(0x2ae)](),_0x50604a=String(_0x6ecc82[_0x3c0c53(0x4e0)]||_0x25ebb9&&_0x25ebb9[_0x3c0c53(0x252)]||'')[_0x3c0c53(0x2ae)]();if(!_0x51388f||!_0x50604a)return{'configured':![]};const _0x23ba55=Date[_0x3c0c53(0x486)]();if(_0x23ba55<QUOTA_BACKOFF){if(QUOTA_CACHE&&QUOTA_CACHE[_0x3c0c53(0x1df)])return Object['assign']({},QUOTA_CACHE[_0x3c0c53(0x1df)],{'stale':!![],'error':'CF\x20API\x20限流(429)，显示缓存数据（可能滞后）'});return{'configured':!![],'error':'CF\x20API\x20限流(429)，请\x2015\x20分钟后再试'};}if(QUOTA_CACHE&&QUOTA_CACHE['at']&&_0x23ba55-QUOTA_CACHE['at']<QUOTA_TTL)return QUOTA_CACHE[_0x3c0c53(0x1df)];try{const _0xc7b2c5=new Date();_0xc7b2c5[_0x3c0c53(0x29a)](0x0,0x0,0x0,0x0);const _0x582fbd=new Date(),_0x32f0b7={'query':_0x3c0c53(0x3eb),'variables':{'accountId':_0x51388f,'filter':{'datetime_geq':_0xc7b2c5['toISOString'](),'datetime_leq':_0x582fbd[_0x3c0c53(0x27d)]()}}},_0xad3067=await fetch('https://api.cloudflare.com/client/v4/graphql',{'method':_0x3c0c53(0x4f5),'headers':{'Content-Type':'application/json','Authorization':'Bearer\x20'+_0x50604a},'body':JSON[_0x3c0c53(0x31e)](_0x32f0b7)});if(!_0xad3067['ok'])throw new Error(_0x3c0c53(0x315)+_0xad3067['status']);const _0x3cabfa=await _0xad3067[_0x3c0c53(0x393)]();if(_0x3cabfa[_0x3c0c53(0x322)]&&_0x3cabfa[_0x3c0c53(0x322)][_0x3c0c53(0x1b7)])throw new Error(_0x3c0c53(0x4fe)+JSON['stringify'](_0x3cabfa[_0x3c0c53(0x322)])[_0x3c0c53(0x396)](0x0,0xc8));const _0x2a16a9=_0x3cabfa&&_0x3cabfa[_0x3c0c53(0x1df)]&&_0x3cabfa[_0x3c0c53(0x1df)][_0x3c0c53(0x328)]&&_0x3cabfa['data'][_0x3c0c53(0x328)]['accounts']||[];if(!_0x2a16a9[_0x3c0c53(0x1b7)])throw new Error(_0x3c0c53(0x4a1));const _0x150931=_0x2a16a9[0x0],_0x1471cb=(_0x150931[_0x3c0c53(0x48a)]||[])[0x0]||{},_0xfeb353=(_0x150931[_0x3c0c53(0x25e)]||[])[_0x3c0c53(0x384)]((_0x17e411,_0x8f84a4)=>_0x17e411+(_0x8f84a4&&_0x8f84a4[_0x3c0c53(0x38e)]&&_0x8f84a4[_0x3c0c53(0x38e)][_0x3c0c53(0x4c1)]||0x0),0x0),_0x4050f8=(_0x1471cb[_0x3c0c53(0x38e)]&&_0x1471cb[_0x3c0c53(0x38e)][_0x3c0c53(0x4c1)]||0x0)+_0xfeb353,_0xd9289d=_0x1471cb['quantiles']&&_0x1471cb[_0x3c0c53(0x519)][_0x3c0c53(0x3e8)]||0x0,_0x53c7be=_0x1471cb[_0x3c0c53(0x38e)]&&_0x1471cb[_0x3c0c53(0x38e)][_0x3c0c53(0x28b)]||0x0,_0x463a85=QUOTA_LIMIT>0x0?Math['round'](_0x4050f8/QUOTA_LIMIT*0x3e8)/0xa:0x0,_0x1b5fb5={'configured':!![],'limit':QUOTA_LIMIT,'today':{'requests':_0x4050f8,'cpuTime':_0xd9289d,'subrequests':_0x53c7be},'percent':_0x463a85,'remaining':Math[_0x3c0c53(0x438)](0x0,QUOTA_LIMIT-_0x4050f8),'updatedAt':_0x582fbd[_0x3c0c53(0x27d)]()};return QUOTA_CACHE={'at':_0x23ba55,'data':_0x1b5fb5},_0x1b5fb5;}catch(_0xec75a7){const _0x30bc25=_0xec75a7&&_0xec75a7[_0x3c0c53(0x4cd)]||String(_0xec75a7);if(_0x30bc25[_0x3c0c53(0x276)](_0x3c0c53(0x453))>=0x0){QUOTA_BACKOFF=_0x23ba55+QUOTA_BACKOFF_TTL;if(QUOTA_CACHE&&QUOTA_CACHE[_0x3c0c53(0x1df)])return Object['assign']({},QUOTA_CACHE[_0x3c0c53(0x1df)],{'stale':!![],'error':'CF\x20API\x20限流(429)，显示缓存数据（可能滞后）'});return{'configured':!![],'error':_0x3c0c53(0x218)};}return{'configured':!![],'error':_0x30bc25};}}function readAddress(_0x338a88,_0x5d901b,_0x1f8ef4,_0xcb6b2d){const _0x326d7a=_0x4fb34b;if(_0xcb6b2d===0x1)return{'addr':_0x5d901b[_0x326d7a(0x3a6)](_0x1f8ef4)+'.'+_0x5d901b[_0x326d7a(0x3a6)](_0x1f8ef4+0x1)+'.'+_0x5d901b[_0x326d7a(0x3a6)](_0x1f8ef4+0x2)+'.'+_0x5d901b[_0x326d7a(0x3a6)](_0x1f8ef4+0x3),'len':0x4};if(_0xcb6b2d===0x2){const _0x1b15a4=_0x5d901b[_0x326d7a(0x3a6)](_0x1f8ef4),_0x824819=_0x338a88[_0x326d7a(0x324)](_0x1f8ef4+0x1,_0x1f8ef4+0x1+_0x1b15a4);return{'addr':TD['decode'](_0x824819),'len':0x1+_0x1b15a4};}if(_0xcb6b2d===0x3){const _0x5c3829=_0x338a88[_0x326d7a(0x324)](_0x1f8ef4,_0x1f8ef4+0x10);return{'addr':formatIPv6(_0x5c3829),'len':0x10};}throw new Error(_0x326d7a(0x1d4));}function parseVlessHeader(_0x2320c5){const _0x579b79=_0x4fb34b;if(!_0x2320c5||_0x2320c5[_0x579b79(0x510)]<0x1)throw new Error('VLESS\x20头部过短');const _0x19320e=new DataView(_0x2320c5['buffer'],_0x2320c5[_0x579b79(0x1c3)],_0x2320c5[_0x579b79(0x510)]);let _0x417ac1=0x0;if(_0x19320e[_0x579b79(0x3a6)](0x0)!==0x0)throw new Error(_0x579b79(0x245));_0x417ac1+=0x1+0x10;if(_0x417ac1>=_0x2320c5[_0x579b79(0x510)])throw new Error(_0x579b79(0x351));const _0x1622ae=_0x19320e[_0x579b79(0x3a6)](_0x417ac1);_0x417ac1+=0x1,_0x417ac1+=_0x1622ae;if(_0x417ac1+0x3>_0x2320c5['byteLength'])throw new Error('VLESS\x20头部过短');const _0x485929=_0x19320e[_0x579b79(0x3a6)](_0x417ac1);_0x417ac1+=0x1;const _0xaea0da=_0x19320e['getUint16'](_0x417ac1);_0x417ac1+=0x2;const _0x4fa5ae=_0x19320e['getUint8'](_0x417ac1);_0x417ac1+=0x1;const {addr:_0x79ce34,len:_0x168a57}=readAddress(_0x2320c5,_0x19320e,_0x417ac1,_0x4fa5ae);return _0x417ac1+=_0x168a57,{'command':_0x485929,'port':_0xaea0da,'addr':_0x79ce34,'headerLength':_0x417ac1,'earlyData':_0x2320c5['subarray'](_0x417ac1)};}function parseTrojanHeader(_0x3f5ab1){const _0x18577f=_0x4fb34b;if(!_0x3f5ab1||_0x3f5ab1['byteLength']<0x3a+0x8)throw new Error(_0x18577f(0x379));const _0x1a35af=new DataView(_0x3f5ab1[_0x18577f(0x273)],_0x3f5ab1['byteOffset'],_0x3f5ab1[_0x18577f(0x510)]);let _0x222f24=0x3a;const _0xa2596d=_0x1a35af[_0x18577f(0x3a6)](_0x222f24);_0x222f24+=0x1;const _0x509875=_0x1a35af[_0x18577f(0x3a6)](_0x222f24);_0x222f24+=0x1;let _0x50fda9,_0x245cdc;if(_0x509875===0x1)_0x50fda9=_0x1a35af[_0x18577f(0x3a6)](_0x222f24)+'.'+_0x1a35af[_0x18577f(0x3a6)](_0x222f24+0x1)+'.'+_0x1a35af[_0x18577f(0x3a6)](_0x222f24+0x2)+'.'+_0x1a35af['getUint8'](_0x222f24+0x3),_0x245cdc=0x4;else{if(_0x509875===0x3){const _0x1be4e4=_0x1a35af['getUint8'](_0x222f24);_0x50fda9=TD['decode'](_0x3f5ab1['subarray'](_0x222f24+0x1,_0x222f24+0x1+_0x1be4e4)),_0x245cdc=0x1+_0x1be4e4;}else{if(_0x509875===0x4)_0x50fda9=formatIPv6(_0x3f5ab1[_0x18577f(0x324)](_0x222f24,_0x222f24+0x10)),_0x245cdc=0x10;else throw new Error('无法识别的地址类型');}}_0x222f24+=_0x245cdc;const _0x5b8859=_0x1a35af[_0x18577f(0x26c)](_0x222f24);return _0x222f24+=0x2,_0x222f24+=0x2,{'command':_0xa2596d,'port':_0x5b8859,'addr':_0x50fda9,'password':TD[_0x18577f(0x2cb)](_0x3f5ab1[_0x18577f(0x324)](0x0,0x38)),'headerLength':_0x222f24};}const SHA256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];function sha224hex(_0x511e39){const _0x57a1ca=_0x4fb34b,_0x1f075e=TE[_0x57a1ca(0x31c)](String(_0x511e39)),_0x378f62=_0x1f075e[_0x57a1ca(0x1b7)]*0x8,_0x52f2cb=(_0x1f075e[_0x57a1ca(0x1b7)]+0x8>>0x6)+0x1<<0x6,_0x590285=new Uint8Array(_0x52f2cb);_0x590285[_0x57a1ca(0x30b)](_0x1f075e),_0x590285[_0x1f075e[_0x57a1ca(0x1b7)]]=0x80;const _0x24c204=new DataView(_0x590285[_0x57a1ca(0x273)]);_0x24c204[_0x57a1ca(0x487)](_0x52f2cb-0x8,Math[_0x57a1ca(0x3a9)](_0x378f62/0x100000000),![]),_0x24c204[_0x57a1ca(0x487)](_0x52f2cb-0x4,_0x378f62>>>0x0,![]);let _0x35f171=0xc1059ed8,_0x4049ef=0x367cd507,_0x8375b2=0x3070dd17,_0x2dc5d9=0xf70e5939,_0x1be79f=0xffc00b31,_0x237d99=0x68581511,_0x217846=0x64f98fa7,_0x219aa3=0xbefa4fa4;const _0x3df2c8=(_0x4e8e78,_0x2f6aa4)=>_0x4e8e78>>>_0x2f6aa4|_0x4e8e78<<0x20-_0x2f6aa4;for(let _0x51c676=0x0;_0x51c676<_0x52f2cb;_0x51c676+=0x40){const _0x1ce428=new Uint32Array(0x40);for(let _0x315aa0=0x0;_0x315aa0<0x10;_0x315aa0++)_0x1ce428[_0x315aa0]=_0x24c204[_0x57a1ca(0x2ec)](_0x51c676+_0x315aa0*0x4,![]);for(let _0x1f675f=0x10;_0x1f675f<0x40;_0x1f675f++){const _0x4d3208=_0x3df2c8(_0x1ce428[_0x1f675f-0xf],0x7)^_0x3df2c8(_0x1ce428[_0x1f675f-0xf],0x12)^_0x1ce428[_0x1f675f-0xf]>>>0x3,_0x41f42c=_0x3df2c8(_0x1ce428[_0x1f675f-0x2],0x11)^_0x3df2c8(_0x1ce428[_0x1f675f-0x2],0x13)^_0x1ce428[_0x1f675f-0x2]>>>0xa;_0x1ce428[_0x1f675f]=_0x1ce428[_0x1f675f-0x10]+_0x4d3208+_0x1ce428[_0x1f675f-0x7]+_0x41f42c>>>0x0;}let _0x3fcec4=_0x35f171,_0xb670e8=_0x4049ef,_0xa363d=_0x8375b2,_0xc54ff6=_0x2dc5d9,_0x1ad51e=_0x1be79f,_0x2b3e5e=_0x237d99,_0x2709ca=_0x217846,_0x42746a=_0x219aa3;for(let _0x2c2b69=0x0;_0x2c2b69<0x40;_0x2c2b69++){const _0x413b62=_0x3df2c8(_0x1ad51e,0x6)^_0x3df2c8(_0x1ad51e,0xb)^_0x3df2c8(_0x1ad51e,0x19),_0x34e5a0=_0x1ad51e&_0x2b3e5e^~_0x1ad51e&_0x2709ca,_0x544661=_0x42746a+_0x413b62+_0x34e5a0+SHA256_K[_0x2c2b69]+_0x1ce428[_0x2c2b69]>>>0x0,_0x1b4e79=_0x3df2c8(_0x3fcec4,0x2)^_0x3df2c8(_0x3fcec4,0xd)^_0x3df2c8(_0x3fcec4,0x16),_0x22cd55=_0x3fcec4&_0xb670e8^_0x3fcec4&_0xa363d^_0xb670e8&_0xa363d,_0xce4f19=_0x1b4e79+_0x22cd55>>>0x0;_0x42746a=_0x2709ca,_0x2709ca=_0x2b3e5e,_0x2b3e5e=_0x1ad51e,_0x1ad51e=_0xc54ff6+_0x544661>>>0x0,_0xc54ff6=_0xa363d,_0xa363d=_0xb670e8,_0xb670e8=_0x3fcec4,_0x3fcec4=_0x544661+_0xce4f19>>>0x0;}_0x35f171=_0x35f171+_0x3fcec4>>>0x0,_0x4049ef=_0x4049ef+_0xb670e8>>>0x0,_0x8375b2=_0x8375b2+_0xa363d>>>0x0,_0x2dc5d9=_0x2dc5d9+_0xc54ff6>>>0x0,_0x1be79f=_0x1be79f+_0x1ad51e>>>0x0,_0x237d99=_0x237d99+_0x2b3e5e>>>0x0,_0x217846=_0x217846+_0x2709ca>>>0x0,_0x219aa3=_0x219aa3+_0x42746a>>>0x0;}let _0x15a5b8='';for(const _0x5517f3 of[_0x35f171,_0x4049ef,_0x8375b2,_0x2dc5d9,_0x1be79f,_0x237d99,_0x217846]){_0x15a5b8+=(_0x5517f3>>>0x18&0xff)[_0x57a1ca(0x3c8)](0x10)[_0x57a1ca(0x515)](0x2,'0'),_0x15a5b8+=(_0x5517f3>>>0x10&0xff)[_0x57a1ca(0x3c8)](0x10)[_0x57a1ca(0x515)](0x2,'0'),_0x15a5b8+=(_0x5517f3>>>0x8&0xff)[_0x57a1ca(0x3c8)](0x10)[_0x57a1ca(0x515)](0x2,'0'),_0x15a5b8+=(_0x5517f3&0xff)[_0x57a1ca(0x3c8)](0x10)[_0x57a1ca(0x515)](0x2,'0');}return _0x15a5b8;}let _trojanPassC='',_trojanHashC='';function trojanPasswordHash(_0x167198){return _0x167198!==_trojanPassC&&(_trojanPassC=_0x167198,_trojanHashC=sha224hex(_0x167198)),_trojanHashC;}function detectTrojan(_0x26cf81,_0x5c2d63){const _0x28fa08=_0x4fb34b;if(!_0x5c2d63['enableTrojan']||!_0x26cf81||_0x26cf81[_0x28fa08(0x510)]<0x3a)return![];const _0x40d92a=_0x26cf81[_0x28fa08(0x324)](0x0,0x38);if(TD[_0x28fa08(0x2cb)](_0x40d92a)[_0x28fa08(0x3fb)]()===trojanPasswordHash(_0x5c2d63[_0x28fa08(0x51a)]||_0x5c2d63['uuid']))return!![];if(_0x26cf81[0x38]===0xd&&_0x26cf81[0x39]===0xa){for(let _0x47c4b6=0x0;_0x47c4b6<0x38;_0x47c4b6++){const _0x1b2ebd=_0x40d92a[_0x47c4b6];if(!(_0x1b2ebd>=0x30&&_0x1b2ebd<=0x39||_0x1b2ebd>=0x61&&_0x1b2ebd<=0x66||_0x1b2ebd>=0x41&&_0x1b2ebd<=0x46))return![];}return!![];}return![];}function _0x4bee(){const _0x1cc53e=['104.16.0.133#优选IP-093','keys','add','104.24.46.107#优选IP-274','cloudflare.182682.xyz','latency','href','cdns.doon.eu.org','/login?next=','104.18.184.243#优选IP-035','x-padding-header','|raw','\x20\x20\x20\x20servername:\x20','104.17.24.252#优选IP-012','prefIp','104.25.20.146#优选IP-100','188.114.99.155#优选IP-086','writable','&extra=','104.17.46.187#优选IP-173','SIN','菲律宾','🚀\x20节点选择','密码错误','x-padding-key','concat','cfip.1323123.xyz','send','NaN','反代·','host','hostname','104.17.169.109#优选IP-217','proxyip.oracle.cmliussss.net','cloudflare.com','&fp=chrome&host=','now','setUint32','presetErr','SEL','workersInvocationsAdaptive','threads','所有出站方式均失败','stats','172.67.82.86#优选IP-162',',\x20obfs=','115155.xyz','104.18.211.8#优选IP-193','172.65.202.216#优选IP-190','dns','104.27.124.239#优选IP-278','no\x20answer','162.159.46.167#优选IP-067','188.114.96.1#优选IP-011',',\x20tls=true,\x20skip-cert-verify=true,\x20sni=','104.24.178.200#优选IP-210','__proto__','security','kind','HostMonit\x20优选','阿联酋','fill','104.27.21.175#优选IP-298','未找到账户数据（检查账户\x20ID\x20与令牌权限）','native','CF_ACCOUNT_ID','104.25.166.112#优选IP-159','fn.130519.xyz','查询失败:\x20','tun0','104.21.7.133#优选IP-226','tlsOnly','server','141.101.64.0/18',',\x20method=none,\x20password=','35576emvCWe','104.18.217.109#优选IP-033','162.159.26.248#优选IP-252','true','\x20\x20\x20\x20\x20\x20ech:','stream-one','ech','162.159.240.54#优选IP-233','188.114.96.64#优选IP-171','内置·保底-','104.27.27.106#优选IP-292','cdn.tzpro.xyz','readable','2606:4700::/32','join','TYO','172.67.232.109#优选IP-182','YXURL','&ech=','region','requests','text/plain','value','104.21.224.5#优选IP-197','&type=xhttp&mode=stream-one','tag','quanx','GET','enqueue','startsWith','190.93.240.0/20','addr','message','104.17.195.184#优选IP-135','method','source','ProxyIP.SG.CMLiussss.net','\x20\x20\x20\x20sni:\x20','162.159.90.82#优选IP-253','current','ProxyIP.DE.CMLiussss.net','cloudflare.9jy.cc','https://bestcf.pages.dev/random-region/US/100.txt','https://bestcf.pages.dev/random-region/TW/100.txt','\x20\x20\x20\x20\x20\x20x-padding-header:\x20','\x20\x20\x20\x20\x20\x20x-padding-method:\x20','code','104.24.34.149#优选IP-279','setUint16','104.17.99.0#优选IP-143','仅支持\x20POST','CF_API_TOKEN','security=tls&sni=','TROJAN','162.159.235.27#优选IP-072','KIX','config','/main/','104.27.46.114#优选IP-271','Mozilla/5.0','geosite-cn','哈萨克斯坦','geosite-telegram','ProxyIP.GB.CMLiussss.net','198.41.128.0/17','188.114.96.164#优选IP-211','headerLength','103.21.244.0/22','https://www.cloudflare.com/ips-v6/','\x20\x20\x20\x20port:\x20','172.65.45.102#优选IP-250','104.25.245.147#优选IP-083','POST','162.159.42.67#优选IP-270','马来西亚','text/html;\x20charset=utf-8','count','HEL','write','trojan','162.159.228.164#优选IP-295','GraphQL:\x20','prototype','\x20\x20\x20\x20skip-cert-verify:\x20true','104.21.2.1','104.17.153.58#优选IP-174','\x20\x20\x20\x20udp:\x20true','read','loon','BESTIP_AUTO','104.24.18.62#优选IP-289','162.159.44.214#优选IP-032','close','@edtunnel','未绑定\x20KV\x20命名空间，无需重置','OSA','colo','return\x20(function()\x20','geosite-netflix','byteLength','IPv4','bind','addEventListener','7922590MJIAwI','padStart','104.25.193.135#优选IP-120','\x0a[policy]\x0astatic=🚀\x20节点选择,\x20','pathname','quantiles','trojanPassword','104.18.133.24#优选IP-085','CONNECT\x20','length','104.25.169.144#优选IP-291','empty','优选\x20IP\x20列表','172.65.3.67#优选IP-181','12KxhYjR','tls-opts','_skipIssued','://','proxyip.us.cmliussss.net','cnamefuckxxs.yuchen.icu','assign','byteOffset','queryInHeader','188.114.97.91#优选IP-134','葡萄牙','cf.0sm.com','object','\x20\x20\x20\x20\x20\x20x-padding-obfs-mode:\x20','连接被关闭','configured','reset','&path=','?name=','filter','104.25.161.217#优选IP-140','redirect','\x20\x20\x20\x20server:\x20','speed.cloudflare.com','无法识别的地址类型','104.19.143.220#优选IP-256','2606:4700::','x-padding-obfs-mode','188.114.97.0#优选IP-205','104.25.0.1','\x20\x20\x20\x20xhttp-opts:','104.18.47.234#优选IP-025','CFNext\x20明文版.js','proxyip.se.cmliussss.net','104.24.168.96#优选IP-130','data','104.17.87.46#优选IP-201','\x20\x20\x20\x20ws-opts:','104.27.195.79#优选IP-178','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','104.16.113.211#优选IP-062','PROXYIP','检测失败:\x20','boolean','澳大利亚','race','104.20.17.160#优选IP-264','password','Upgrade','exec','geosite-apple','自定义源:\x20','AMS','MUC','doh\x20unavailable','pass','TROJAN_PASSWORD','已重置：KV\x20已清空，面板还原为初始部署状态','proxyip.gb.cmliussss.net','172.67.163.14#优选IP-108','isArray','charCodeAt','162.159.198.200#优选IP-245','明文版','104.24.230.144#优选IP-102','useCidr',';\x20charset=utf-8','fragment','172.65.134.100#优选IP-103','104.16.201.45#优选IP-160','proxyip.fi.cmliussss.net','104.16.249.249#优选IP-009','domains','104.25.101.186#优选IP-057','188.114.96.116#优选IP-054','text','104.21.215.255#优选IP-247','surge','only','104.21.114.216#优选IP-079','xhttp','shadowrocket','quota','104.18.42.54#优选IP-026','values','preset','104.25.24.66#优选IP-148','#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','cloudflare','MAN','proxyip.multacom.cmliussss.net','outboundProxy','CF\x20API\x20限流(429)，请\x2015\x20分钟后再试','104.20.15.15','trace','ceil','操作超时',',\x20tag=','geosite-spotify','echDns','SOCKS5\x20连接失败\x20码','search','size','number','_quotaCap','_ctx','[General]\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','relay','xn--b6gac.eu.org','raw','from','&alpn=','162.159.5.175#优选IP-015','shift','172.64.233.36#优选IP-107','104.16.108.18#优选IP-106','stash','188.114.96.141#优选IP-146','已保存并生效',',\x20ws-headers=Host:','ECH','162.159.236.19#优选IP-255','未在仓库中找到版本信息','proxy\x20timeout','6DPGwAt','mixed','prefDomain','Sec-WebSocket-Protocol','\x20\x20-\x20name:\x20','104.16.123.26#优选IP-149','\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>CFNext\x20·\x20登录</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\x0a[data-theme=\x22light\x22]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\x0a.box{width:340px;max-width:100%;background:var(--card);border:1px\x20solid\x20var(--border);border-radius:16px;padding:30px\x2028px;box-shadow:0\x2018px\x2050px\x20rgba(0,0,0,.25)}\x0a[data-theme=\x22light\x22]\x20.box{box-shadow:0\x2014px\x2040px\x20rgba(30,45,70,.10)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#0d131b}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--bg);border:1px\x20solid\x20var(--border);color:var(--text);border-radius:9px;padding:10px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\x0ainput:focus{border-color:var(--accent);box-shadow:0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\x0abutton:hover{filter:brightness(1.06)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CFNext</b><span>Cloudflare\x20全新代理管理面板</span></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>登录</h1>\x0a\x20\x20<p>请输入管理密码以继续</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>密码错误，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22管理密码\x22\x20autofocus\x20autocomplete=\x22current-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>登录</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>配置保存在\x20Cloudflare\x20KV\x20中，密码错误\x2024\x20小时后自动失效</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20\x27/\x27;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(\x27/login\x27,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27password=\x27\x20+\x20encodeURIComponent(document.getElementById(\x27pwd\x27).value)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a','162.159.197.16#优选IP-117','188.114.98.27#优选IP-244','abort','172.19.0.1/30','exception','\x20\x20\x20\x20uuid:\x20','不支持的\x20VLESS\x20版本','104.19.78.30#优选IP-089','command','singbox','proxyip.jp.cmliussss.net','104.25.122.6#优选IP-053','103.22.200.0/22','LHR','#\x20CFNext\x20订阅\x0atest-url:\x20\x27http://www.gstatic.com/generate_204\x27\x0aproxies:\x0a','104.25.86.143#优选IP-235','cloudflare-ech.com','cname.xirancdn.us','198.18.0.0/15','cfApiToken','luma_auth=','then','172.66.199.166#优选IP-127','104.17.127.180#优选IP-001','.top','104.27.96.232#优选IP-282','104.17.100.40#优选IP-261','172.65.64.7#优选IP-037','put','ws-opts','toUpperCase','pagesFunctionsInvocationsAdaptiveGroups','172.65.173.221#优选IP-051','2405:b500::/32','104.17.245.237#优选IP-221','188.114.97.21#优选IP-229','\x20\x20\x20\x20alpn:\x20[http/1.1]','104.27.207.36#优选IP-098','xPaddingKey','172.64.81.44#优选IP-058','104.16.218.231#优选IP-155','188.114.96.94#优选IP-104','172.64.0.0/13','limit','wetest_cname','getUint16','104.16.238.98#优选IP-094','servername','split','info','104.18.43.224#优选IP-022','104.27.40.81#优选IP-063','buffer','104.25.109.0#优选IP-275','Mozilla/5.0\x20(CFNext)','indexOf','name','104.25.141.168#优选IP-042','encryption=none','plain','104.17.201.77','xPaddingObfsMode','toISOString','enableVless','104.25.124.155#优选IP-170','tls','重置失败:\x20','dns-out','has','162.159.44.215#优选IP-031','subIncludeDefault','issued','172.67.165.245#优选IP-216','以色列','162.159.4.175#优选IP-049','#原生地址','subrequests','https://','geosite-category-ads-all','fillCount','加拿大','162.159.94.229#优选IP-014','172.65.35.169#优选IP-092','104.17.97.72#优选IP-213','network','vless','ProxyIP.KR.CMLiussss.net','enableTrojan','custom','104.25.44.144#优选IP-066','CHINAMOBILE','setUTCHours','&host=','8.889288.xyz','172.65.145.187#优选IP-081','ipv4_only','proxyip.vultr.cmliussss.net','104.16.123.96#优选IP-002','162.159.134.174#优选IP-227','http://','SOCKS5\x20握手失败','get','v2ray','罗马尼亚','2752083GNBMiH','104.16.91.33#优选IP-161','HTTP\x20代理\x20CONNECT\x20失败:\x20','no-store','BER','user','104.25.45.44#优选IP-038','trim','104.27.20.220#优选IP-266','https://cloudflare-dns.com/dns-query','104.18.26.28#优选IP-168','echHost','172.65.184.114#优选IP-189','block','未授权（需要管理密码）','HTTP\x20','162.159.237.243#优选IP-119','PAICNI/CFNext','172.65.118.105#优选IP-225','172.67.131.200#优选IP-248','proxyip.de.cmliussss.net','优选IP-S','162.159.0.1#优选IP-010','2c0f:f248::/32','104.25.223.90#优选IP-239','104.18.28.48#优选IP-156','104.16.223.195#优选IP-056','拉取失败\x20HTTP\x20','104.18.194.107#优选IP-228','alive','172.67.103.87#优选IP-118','104.16.128.11','status','104.24.0.0/14','188.114.97.61#优选IP-164','104.18.123.15#优选IP-169','decode','uuid','104.18.28.140#优选IP-095',',\x20obfs-uri=','accept','162.159.143.225#优选IP-157','http','103.31.4.0/22','searchParams','188.114.97.80#优选IP-202','all','{}.constructor(\x22return\x20this\x22)(\x20)','STR','catch','HAM','104.18.173.224#优选IP-131','bestcf','104.17.160.131#优选IP-194','constructor','https://bestcf.pages.dev/random-region/KR/100.txt','原生地址','x-padding-placement','https://stock.hostmonit.com/CloudFlareYes','🎯\x20全球直连','proxyip.hk.cmliussss.net',',\x20obfs-host=','cfip.cfcdn.vip','1uGjVOG','104.16.132.229#优选IP-007','SOCKS5\x20不支持的认证方法\x20','binaryType','2803:f800::/32','mixed-in','getUint32','getReader','application/dns-json','🌐\x20谷歌服务','104.24.155.234#优选IP-070','Ⓜ️\x20微软服务','162.159.230.149#优选IP-116','104.18.141.27#优选IP-121','104.16.124.96#优选IP-003',',\x20ws=true,\x20ws-path=','dns-direct','108.162.192.0/18','next','application/json;\x20charset=utf-8','104.17.101.139#优选IP-030','优选IP-','104.16.68.175#优选IP-153','.list','path','forEach','today','104.27.116.114#优选IP-262','getWriter','direct','\x20\x20\x20\x20\x20\x20headers:','unknown','104.17.2.7','includes','customErr','2.0.0','https://www.wetest.vip/page/cloudflare/address_v4.html','set','104.16.0.0/13','104.16.11.246#优选IP-163','https://bestcf.pages.dev/random-region/HK/100.txt','isp','172.64.144.49#优选IP-027','104.19.23.222#优选IP-145','vless=','bestcf.030101.xyz','console','CF\x20API\x20HTTP\x20','订阅生成失败:\x20','FRA','162.159.228.231#优选IP-260',';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax','保存失败:\x20','\x20\x20\x20\x20network:\x20','encode','匈牙利','stringify','104.24.250.89#优选IP-296','waitUntil','security=none&host=','errors','104.25.18.216#优选IP-198','subarray','https://bestcf.pages.dev/random-region/HK/100.txt\x0ahttps://bestcf.pages.dev/random-region/TW/100.txt\x0ahttps://bestcf.pages.dev/random-region/JP/100.txt\x0ahttps://bestcf.pages.dev/random-region/SG/100.txt\x0ahttps://bestcf.pages.dev/random-region/US/100.txt\x0ahttps://bestcf.pages.dev/random-region/KR/100.txt','clash','爱尔兰','viewer','ADMIN','speed.marisalnc.com','headers','172.65.167.52#优选IP-241','https://dns.google/dns-query','string','\x20\x20\x20\x20\x20\x20x-padding-placement:\x20','any','173.245.48.0/20','http:','xhttp\x20代理错误:\x20','俄罗斯','104.17.13.179#优选IP-091','\x20\x20\x20\x20client-fingerprint:\x20chrome','104.18.7.34','拉取失败:\x20','&security=tls&sni=','push','172.67.85.54#优选IP-300','188.114.97.52#优选IP-124','IPv6','ARN','ICN','172.65.127.225#优选IP-034','flatMap','xPaddingHeader','104.18.176.111#优选IP-052','104.19.1.1','https://dns.alidns.com/resolve','104.21.61.179#优选IP-078','162.159.14.18#优选IP-136','&security=none','172.66.157.150#优选IP-166','104.18.185.26#优选IP-297','乌克兰','104.19.247.23#优选IP-147','parse','162.159.6.39#优选IP-195','162.159.199.220#优选IP-263','104.25.173.14#优选IP-273','VLESS\x20头部过短','162.159.10.45#优选IP-208','websocket','sing-box','131.0.72.0/22','hasUpdate','172.67.195.152#优选IP-188','Status','172.65.47.182#优选IP-220','TTL','预设源:\x20','https://bestcf.pages.dev/random-region/SG/100.txt','https://1.1.1.1/dns-query','104.25.197.107#优选IP-105','104.24.244.237#优选IP-075','opened','sub','https://www.wetest.vip/page/cloudflare/address_v6.html','delete','Proxy-Authorization:\x20Basic\x20','ipType','104.18.196.199#优选IP-069','104.21.57.47#优选IP-112','104.27.97.130#优选IP-236','104.17.121.245#优选IP-258','remote','162.159.19.201#优选IP-158','https://cloudflare-dns.com/dns-query?name=','172.67.174.143#优选IP-176','104.25.214.211#优选IP-055','188.114.96.0/20','104.18.185.40#优选IP-041','geosite-github','新西兰','104.18.63.107#优选IP-185','172.67.72.4','selector','trojan://','104.18.178.193#优选IP-183','enableXhttp','Trojan\x20头部过短','104.27.66.179#优选IP-076','172.65.21.190#优选IP-191','url','188.114.96.255#优选IP-082','done','172.65.45.248#优选IP-290','182682','\x20\x20\x20\x20type:\x20','customPref','timeout','reduce','172.64.34.109#优选IP-087','https://cf.090227.xyz/ip.164746.xyz','application/json','\x0a#\x20====================\x20锚点配置\x20====================\x0a#\x20代理提供者模板\x20-\x20订阅源基础配置\x0a\x0a#\x20节点筛选正则表达式\x20-\x20仅保留常用地区\x0aFilterHK:\x20&FilterHK\x20\x27^(?=.*(?i)(港|🇭🇰|HK|Hong|HKG))(?!.*5x).*$\x27\x0aFilterSG:\x20&FilterSG\x20\x27^(?=.*(?i)(坡|🇸🇬|SG|Sing|SIN|XSP))(?!.*5x).*$\x27\x0aFilterJP:\x20&FilterJP\x20\x27^(?=.*(?i)(日|🇯🇵|JP|Japan|NRT|HND|KIX|CTS|FUK))(?!.*(尼日利亚|5x)).*$\x27\x0aFilterUS:\x20&FilterUS\x20\x27^(?=.*(?i)(美|🇺🇸|US|USA|JFK|SJC|LAX|ORD|ATL|DFW|SFO|MIA|SEA|IAD))(?!.*(Plus|Australia|5x)).*$\x27\x0a#\x20注意：🇼🇸\x20是萨摩亚旗帜，不是台湾，已移除，避免误匹配\x0aFilterTW:\x20&FilterTW\x20\x27^(?=.*(?i)(台|🇹🇼|TW|tai|TPE|TSA|KHH))(?!.*5x).*$\x27\x0a\x0a#\x20====================\x20监听器\x20====================\x0alisteners:\x0a\x20\x20#\x20Shadowsocks监听器\x20-\x20远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）\x0a\x20\x20-\x20{name:\x20SS-IN,\x20\x20type:\x20shadowsocks,\x20listen:\x20\x27::\x27,\x20port:\x2010000,\x20udp:\x20true,\x20password:\x20Xf3#Lp9WqZ,\x20cipher:\x20aes-256-gcm}\x0a\x20\x20#\x20Mixed监听器\x20-\x20分地区专用端口\x20玩法：本地浏览器插件或手机APP配置代理，实现分地区访问\x0a\x20\x20-\x20{name:\x20MIXED-SG,\x20type:\x20mixed,\x20port:\x2050000,\x20proxy:\x20新加坡节点}\x0a\x20\x20-\x20{name:\x20MIXED-US,\x20type:\x20mixed,\x20port:\x2050001,\x20proxy:\x20美国节点}\x0a\x20\x20-\x20{name:\x20MIXED-TW,\x20type:\x20mixed,\x20port:\x2050002,\x20proxy:\x20台湾节点}\x0a\x20\x20-\x20{name:\x20MIXED-HK,\x20type:\x20mixed,\x20port:\x2050003,\x20proxy:\x20香港节点}\x0a\x20\x20-\x20{name:\x20MIXED-JP,\x20type:\x20mixed,\x20port:\x2050004,\x20proxy:\x20日本节点}\x0a\x20\x20-\x20{name:\x20MIXED-AL,\x20type:\x20mixed,\x20port:\x2050007,\x20proxy:\x20一键连接}\x0a\x0a#\x20====================\x20核心配置\x20====================\x0amode:\x20rule\x0aport:\x207890\x0asocks-port:\x207891\x0aredir-port:\x207892\x0amixed-port:\x207893\x0atproxy-port:\x207895\x0aipv6:\x20true\x0aallow-lan:\x20true\x0aunified-delay:\x20true\x0atcp-concurrent:\x20true\x0alog-level:\x20warning\x0abind-address:\x20\x27*\x27\x0afind-process-mode:\x20\x27always\x27\x0akeep-alive-interval:\x2015\x0akeep-alive-idle:\x20600\x0a\x0a#\x20认证配置（默认凭据请务必修改！）\x0aauthentication:\x0a\x20\x20-\x20mihomo:yyds666\x0askip-auth-prefixes:\x0a\x20\x20-\x20192.168.1.0/24\x0a\x20\x20-\x20192.168.31.0/24\x0a\x20\x20-\x20192.168.100.0/24\x0a\x20\x20-\x20127.0.0.1/8\x0a\x0a#\x20实验性功能\x0aexperimental:\x0a\x20\x20quic-go-disable-gso:\x20true\x0a\x0a#\x20管理面板配置\x0aexternal-ui-url:\x20https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip\x0aexternal-ui-name:\x20zashboard\x0aexternal-ui:\x20ui\x0aexternal-controller:\x20127.0.0.1:9090\x0asecret:\x20yyds666\x20\x20\x20\x20#\x20请修改为自定义密钥\x0a#\x20允许网页面板跨域访问\x0aexternal-controller-cors:\x0a\x20\x20allow-origins:\x0a\x20\x20\x20\x20-\x20\x22*\x22\x0a\x20\x20allow-private-network:\x20true\x0a\x0a#\x20配置存储\x0aprofile:\x0a\x20\x20store-selected:\x20true\x0a\x20\x20store-fake-ip:\x20true\x0a\x0a#\x20流量嗅探\x0asniffer:\x0a\x20\x20enable:\x20true\x0a\x20\x20force-dns-mapping:\x20true\x20\x20\x20#\x20强制\x20DNS\x20映射，提高分流准确度\x0a\x20\x20parse-pure-ip:\x20true\x20\x20\x20\x20\x20\x20\x20#\x20解析纯\x20IP\x20连接\x0a\x20\x20override-destination:\x20true\x0a\x20\x20sniff:\x0a\x20\x20\x20\x20HTTP:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[80,\x208080-8880]\x0a\x20\x20\x20\x20TLS:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20\x20\x20QUIC:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20skip-domain:\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x0a#\x20TUN模式配置\x0atun:\x0a\x20\x20enable:\x20false\x0a\x20\x20stack:\x20mixed\x0a\x20\x20mtu:\x201480\x0a\x20\x20dns-hijack:\x0a\x20\x20\x20\x20-\x20\x22any:53\x22\x0a\x20\x20\x20\x20-\x20\x22tcp://any:53\x22\x0a\x20\x20udp-timeout:\x20300\x0a\x20\x20auto-route:\x20true\x0a\x20\x20strict-route:\x20true\x0a\x20\x20auto-redirect:\x20true\x0a\x20\x20auto-detect-interface:\x20true\x0a\x20\x20#\x20提示：系统级防泄露的最强手段是开启\x20TUN（自动劫持全部\x20DNS\x20流量）；\x0a\x20\x20#\x20不开\x20TUN\x20时，请把系统\x20/\x20LAN\x20设备的\x20DNS\x20指向\x20127.0.0.1:53（本机）或本机局域网\x20IP:53。\x0a\x0ahosts:\x0a\x20\x20miwifi.com:\x20192.168.31.2\x0a\x20\x20\x22epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\x22:\x20[87.194.8.8,\x2087.194.88.8,\x2087.194.89.8,\x2087.194.9.8]\x0a\x20\x20services.googleapis.cn:\x20services.googleapis.com\x0a\x20\x20cn.bing.com:\x20www4.bing.com\x0a\x0a#\x20====================\x20DNS\x20配置\x20====================\x0a#\x20防泄露要点：\x0a#\x20\x20\x201)\x20respect-rules:\x20true：DNS\x20服务器连接遵循路由规则（国外\x20DoH\x20走代理隧道、国内\x20DoH\x20直连），\x0a#\x20\x20\x20\x20\x20\x20解析行为与规则分流一致，避免“规则走代理、解析却直连”的泄露。\x0a#\x20\x20\x202)\x20默认\x20nameserver\x20用国内\x20DoH；只有“将走代理”的规则集才用国外\x20DoH，\x0a#\x20\x20\x20\x20\x20\x20且其域名在\x20rules\x20中显式固定走代理。\x0a#\x20\x20\x203)\x20fake-ip-filter\x20补齐系统连通性检测\x20/\x20时间同步\x20/\x20运营商登录等域名，防止系统误判断网而回退运营商\x20DNS。\x0adns:\x0a\x20\x20enable:\x20true\x0a\x20\x20listen:\x200.0.0.0:53\x20\x20\x20\x20\x20\x20\x20\x20#\x20本机\x20/\x20LAN\x20设备可把\x20DNS\x20指向此地址，避免走运营商\x20DNS\x0a\x20\x20ipv6:\x20true\x0a\x20\x20prefer-h3:\x20false\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20respect-rules\x20下官方不推荐\x20DoH3；且\x20QUIC\x20已被规则拦截\x0a\x20\x20cache-algorithm:\x20arc\x20\x20\x20\x20\x20\x20#\x20性能更优的\x20ARC\x20缓存算法\x0a\x20\x20cache-size:\x204096\x0a\x20\x20enhanced-mode:\x20fake-ip\x0a\x20\x20fake-ip-range:\x20198.18.0.1/16\x0a\x20\x20fake-ip-filter:\x0a\x20\x20\x20\x20-\x20\x22+.lan\x22\x0a\x20\x20\x20\x20-\x20\x22+.local\x22\x0a\x20\x20\x20\x20-\x20\x22+.localhost\x22\x0a\x20\x20\x20\x20-\x20\x22+.home.arpa\x22\x0a\x20\x20\x20\x20-\x20\x22+.internal\x22\x0a\x20\x20\x20\x20#\x20系统连通性检测（防止\x20fake-ip\x20导致“无网络”判断，回退\x20ISP\x20DNS\x20造成泄露）\x0a\x20\x20\x20\x20-\x20\x22+.msftconnecttest.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.msftncsi.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20dns.msftncsi.com\x0a\x20\x20\x20\x20-\x20\x22captive.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22connectivitycheck.gstatic.com\x22\x0a\x20\x20\x20\x20-\x20\x22detectportal.firefox.com\x22\x0a\x20\x20\x20\x20#\x20时间同步\x0a\x20\x20\x20\x20-\x20\x22time.nist.gov\x22\x0a\x20\x20\x20\x20-\x20\x22+.pool.ntp.org\x22\x0a\x20\x20\x20\x20-\x20\x22time.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20time.windows.com\x0a\x20\x20\x20\x20-\x20\x22ntp.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20ntp.ubuntu.com\x0a\x20\x20\x20\x20#\x20运营商\x20Wi-Fi\x20登录页\x0a\x20\x20\x20\x20-\x20\x22+.cmpassport.com\x22\x0a\x20\x20\x20\x20-\x20\x22id6.me\x22\x0a\x20\x20\x20\x20-\x20\x22open.e.189.cn\x22\x0a\x20\x20\x20\x20-\x20\x22mdn.open.wo.cn\x22\x0a\x20\x20\x20\x20-\x20\x22opencloud.wostore.cn\x22\x0a\x20\x20\x20\x20-\x20\x22auth.wosms.cn\x22\x0a\x20\x20\x20\x20-\x20\x22+.10099.com.cn\x22\x0a\x20\x20\x20\x20#\x20原配置保留项\x0a\x20\x20\x20\x20-\x20\x22+.market.xiaomi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.pub.3gppnetwork.org\x22\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.bing.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.miwifi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.docker.io\x22\x0a\x20\x20\x20\x20#\x20国内应用登录（+.qq.com\x20已覆盖\x20localhost.ptlogin2.qq.com）\x0a\x20\x20\x20\x20-\x20\x22+.qq.com\x22\x0a\x20\x20\x20\x20#\x20直连\x20/\x20国内类规则集：返回真实\x20IP\x0a\x20\x20\x20\x20-\x20rule-set:Direct\x0a\x20\x20\x20\x20-\x20rule-set:Private\x0a\x20\x20\x20\x20-\x20rule-set:China\x0a\x20\x20use-hosts:\x20true\x0a\x20\x20respect-rules:\x20true\x0a\x20\x20#\x20引导用\x20DNS（解析\x20DoH/DoT\x20服务器自身的域名），必须是\x20IP\x0a\x20\x20default-nameserver:\x0a\x20\x20\x20\x20-\x20223.5.5.5\x0a\x20\x20\x20\x20-\x20119.29.29.29\x0a\x20\x20#\x20默认解析：未命中\x20nameserver-policy\x20的域名（国内\x20DoH，直连）\x0a\x20\x20nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20直连出口的解析\x0a\x20\x20direct-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20解析代理节点域名（防套娃\x20/\x20防循环，用国内直连可达的\x20DoH）\x0a\x20\x20proxy-server-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20nameserver-policy:\x0a\x20\x20\x20\x20#\x20广告域名直接返回空应答\x0a\x20\x20\x20\x20\x22rule-set:Advertising,AWAvenueAds\x22:\x20rcode://success\x0a\x20\x20\x20\x20#\x20直连类：国内\x20DoH\x0a\x20\x20\x20\x20\x22rule-set:Direct,Private,China\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20\x20\x20#\x20走代理类：国外\x20DoH（连接本身经代理隧道，不直连暴露查询）\x0a\x20\x20\x20\x20\x22rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Microsoft,Proxy\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.google/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://cloudflare-dns.com/dns-query\x22\x0a\x0a#\x20====================\x20代理策略组（9\x20个可见\x20+\x206\x20个隐藏自动子组）\x20====================\x0aproxy-groups:\x0a\x20\x20#\x20主入口：默认自动选择，可手动切换各地区\x20/\x20故障转移\x20/\x20全部节点\x20/\x20直接连接\x0a\x20\x20-\x20{name:\x20一键连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[自动选择,\x20故障转移,\x20香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点,\x20直接连接],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Static.png}\x0a\x20\x20#\x20自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换\x0a\x20\x20-\x20{name:\x20自动选择,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20hidden:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20故障转移,\x20\x20\x20\x20\x20type:\x20fallback,\x20proxies:\x20[香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点],\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/ULB.png}\x0a\x20\x20#\x20常用地区节点组（select：默认选中“XX自动”=自动优选该地区最快节点，也可手动指定单个节点）\x0a\x20\x20-\x20{name:\x20香港节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20proxies:\x20[香港自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Hong_Kong.png}\x0a\x20\x20-\x20{name:\x20台湾节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20proxies:\x20[台湾自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Taiwan.png}\x0a\x20\x20-\x20{name:\x20日本节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20proxies:\x20[日本自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Japan.png}\x0a\x20\x20-\x20{name:\x20美国节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20proxies:\x20[美国自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/United_States.png}\x0a\x20\x20-\x20{name:\x20新加坡节点,\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20proxies:\x20[新加坡自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Singapore.png}\x0a\x20\x20#\x20全部节点（手动挑选任意节点；首个选项“自动选择”=全部节点中最快）\x0a\x20\x20-\x20{name:\x20全部节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20proxies:\x20[自动选择],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Global.png}\x0a\x20\x20#\x20各地区自动优选子组（隐藏，作为各地区分组内的“自动选择”选项）\x0a\x20\x20-\x20{name:\x20香港自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20台湾自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20日本自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20美国自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20新加坡自动,\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20#\x20直连分组（放在最下方）\x0a\x20\x20-\x20{name:\x20直接连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[DIRECT],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Direct.png}\x0a\x0a#\x20====================\x20规则路由\x20====================\x0arules:\x0a\x20\x20#\x20广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\x0a\x20\x20-\x20RULE-SET,Tracking,REJECT\x0a\x20\x20-\x20RULE-SET,AWAvenueAds,REJECT\x0a\x20\x20-\x20RULE-SET,Advertising,REJECT\x0a\x0a\x20\x20#\x20DNS\x20服务器域名：解析通道固定，避免\x20DNS\x20流量走错路径（防泄露关键）\x0a\x20\x20-\x20DOMAIN-SUFFIX,alidns.com,直接连接\x0a\x20\x20-\x20DOMAIN-SUFFIX,doh.pub,直接连接\x0a\x20\x20-\x20DOMAIN,dns.google,一键连接\x0a\x20\x20-\x20DOMAIN,cloudflare-dns.com,一键连接\x0a\x0a\x20\x20#\x20直连规则\x0a\x20\x20-\x20RULE-SET,Private,直接连接\x0a\x20\x20-\x20RULE-SET,Direct,直接连接\x0a\x20\x20-\x20RULE-SET,Download,直接连接\x0a\x20\x20-\x20RULE-SET,AppleCN,直接连接\x0a\x20\x20#\x20阻止走代理的\x20QUIC（强制回退\x20TCP，避免\x20QUIC\x20绕过代理\x20/\x20被干扰）。\x0a\x20\x20#\x20放在直连规则之后：直连\x20QUIC\x20不受影响。如需\x20Telegram\x20语音等\x20UDP，可删除此行。\x0a\x20\x20-\x20AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\x0a\x0a\x20\x20#\x20常用国外服务（统一走一键连接）\x0a\x20\x20-\x20RULE-SET,AI,一键连接\x0a\x20\x20-\x20RULE-SET,Telegram,一键连接\x0a\x20\x20-\x20RULE-SET,Twitter,一键连接\x0a\x20\x20-\x20RULE-SET,SocialMedia,一键连接\x0a\x20\x20-\x20RULE-SET,Netflix,一键连接\x0a\x20\x20-\x20RULE-SET,YouTube,一键连接\x0a\x20\x20-\x20RULE-SET,Spotify,一键连接\x0a\x20\x20-\x20RULE-SET,TikTok,一键连接\x0a\x20\x20-\x20RULE-SET,disney,一键连接\x0a\x20\x20-\x20RULE-SET,Google,一键连接\x0a\x20\x20-\x20RULE-SET,Microsoft,一键连接\x0a\x20\x20-\x20RULE-SET,github,一键连接\x0a\x20\x20-\x20RULE-SET,Proxy,一键连接\x0a\x20\x20-\x20RULE-SET,China,直接连接\x0a\x0a\x20\x20#\x20IP规则\x0a\x20\x20-\x20RULE-SET,PrivateIP,直接连接,no-resolve\x0a\x20\x20-\x20RULE-SET,TelegramIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ProxyIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ChinaIP,直接连接,no-resolve\x0a\x0a\x20\x20#\x20兜底规则：国内\x20IP\x20直连（ChinaIP\x20规则集已覆盖），其余走一键连接\x0a\x20\x20-\x20MATCH,一键连接\x0a\x0a#\x20====================\x20规则集\x20====================\x0a#\x20规则集行为模板\x0aBehaviorDN:\x20&BehaviorDN\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20mrs,\x20interval:\x2086400}\x0aBehaviorDY:\x20&BehaviorDY\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20yaml,\x20interval:\x2086400}\x0aBehaviorIP:\x20&BehaviorIP\x20{type:\x20http,\x20behavior:\x20ipcidr,\x20format:\x20mrs,\x20interval:\x2086400}\x0aClassicalYaml:\x20&ClassicalYaml\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x203600,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x0a\x0a#\x20规则提供者（仅保留常用）\x0arule-providers:\x0a\x20\x20#\x20广告\x0a\x20\x20Tracking:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs}\x0a\x20\x20Advertising:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs}\x0a\x20\x20AWAvenueAds:\x20\x20\x20\x20{<<:\x20*BehaviorDY,\x20url:\x20https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml}\x0a\x20\x20#\x20直连\x20/\x20国内\x0a\x20\x20Direct:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs}\x0a\x20\x20Private:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs}\x0a\x20\x20Download:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs}\x0a\x20\x20AppleCN:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs}\x0a\x20\x20China:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/China.mrs}\x0a\x20\x20#\x20常用国外服务\x0a\x20\x20AI:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}\x0a\x20\x20Telegram:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}\x0a\x20\x20Twitter:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}\x0a\x20\x20SocialMedia:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}\x0a\x20\x20Netflix:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}\x0a\x20\x20YouTube:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}\x0a\x20\x20Google:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}\x0a\x20\x20Microsoft:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Microsoft.mrs}\x0a\x20\x20Proxy:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs}\x0a\x20\x20#\x20媒体（DustinWin）\x0a\x20\x20Spotify:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs}\x0a\x20\x20TikTok:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs}\x0a\x20\x20disney:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs}\x0a\x20\x20#\x20GitHub\x0a\x20\x20github:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*ClassicalYaml,\x20url:\x20https://rule.kelee.one/Clash/GitHub.yaml}\x0a\x20\x20#\x20IP规则\x0a\x20\x20PrivateIP:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs}\x0a\x20\x20TelegramIP:\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs}\x0a\x20\x20ProxyIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs}\x0a\x20\x20ChinaIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs}\x0a\x0a#\x20====================\x20EOF\x20====================\x0a\x0a','西班牙','subMode','104.18.119.34#优选IP-016','1509645fIOUaq','微测网\x20IPv6','sum','🐟\x20漏网之鱼','\x20=\x20','188.114.96.151#优选IP-223','104.25.129.238#优选IP-180','json','https://223.5.5.5/dns-query','AAAA','slice','188.114.99.114#优选IP-060','preferredIPs','104.25.251.220#优选IP-177','socks5','104.24.49.39#优选IP-299','(((.+)+)+)+$','104.25.100.203#优选IP-144','doh\x20fail','🍎\x20苹果服务','list','104.27.23.242#优选IP-150','every','\x20=\x20trojan,\x20','104.25.181.74#优选IP-209','test','getUint8','2400:cb00::/32','getRandomValues','floor','9jIaLNW','body','104.18.34.34','🌍\x20国外媒体','104.18.144.168#优选IP-259','104.27.4.144#优选IP-125','188.114.99.14#优选IP-206','http/1.1','some','104.27.94.231#优选IP-129','104.18.37.92#优选IP-024','172.65.118.85#优选IP-267','preferredDomains','104.16.88.7','log','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20','text/yaml','104.24.41.240#优选IP-212','port','\x20\x20\x20\x20\x20\x20mode:\x20','polling','ProxyIP.NL.CMLiussss.net',',\x20obfs=wss,\x20obfs-host=','.xyz','162.159.2.86#优选IP-222','188.114.98.19#优选IP-154','releaseLock','lastIndexOf','proxyip.digitalocean.cmliussss.net','Answer','toString','104.16.248.248#优选IP-008','172.65.50.167#优选IP-254','172.64.145.202#优选IP-088','chrome',',\x20over-tls=true,\x20tls-host=','PATH','vless://','abs','optimizer','\x20\x20\x20\x20tls-opts:','奥地利','104.17.234.5#优选IP-018','104.18.84.180#优选IP-068','\x20\x20\x20\x20\x20\x20\x20\x20enable:\x20true','warn','SOCKS5\x20服务器要求认证但未提供凭据','ProxyIP.US.CMLiussss.net','\x20=\x20vless,\x20','v2rayn','https','104.24.84.86#优选IP-285','dns-remote','188.114.99.18#优选IP-047','104.21.192.230#优选IP-099','geosite-disney','admin','xhttp-opts','random','quantumultx','randomUUID','比利时','cpuTimeP50','172.67.189.246#优选IP-115','latest','query\x20getBillingMetrics($accountId:\x20string!,\x20$filter:\x20AccountWorkersInvocationsAdaptiveFilter_InputObject)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20viewer\x20{\x20accounts(filter:{accountTag:$accountId})\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20workersInvocationsAdaptive(limit:10000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20subrequests\x20}\x20quantiles\x20{\x20cpuTimeP50\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pagesFunctionsInvocationsAdaptiveGroups(limit:1000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20}','2a06:98c0::/29','162.159.10.243#优选IP-281','104.17.146.117#优选IP-141','obfuscated','round','tokenish','[general]\x0anetwork_check_url=http://www.gstatic.com/generate_204\x0aserver_check_url=http://www.gstatic.com/generate_204\x0adns_exclusion_list=*.cmpassport.com,\x20*.qq.com,\x20*.weibo.com,\x20*.icloud.com\x0a[dns]\x0aserver=223.5.5.5\x0aserver=119.29.29.29\x0a[server_local]\x0a','104.21.23.1','&type=','新加坡','\x20HTTP/1.1\x0d\x0aHost:\x20','329DmchEk','未知\x20API:\x20','proxyip.kr.cmliussss.net','172.65.139.108#优选IP-224','toLowerCase','104.25.238.237#优选IP-286','subRandomCount','ALPN','188.114.99.52#优选IP-013','197.234.240.0/22','CFNext\x20混淆版.js','188.114.96.238#优选IP-269','🤖\x20OpenAI','172.67.64.211#优选IP-020','proxyIP','error','quantumult','188.114.97.63#优选IP-219','function','OUTBOUND','\x20\x20\x20\x20\x20\x20path:\x20','table','104.24.58.243#优选IP-097','f3058171cad.002404.xyz','104.19.123.4#优选IP-045','104.24.25.178#优选IP-284','proxyip.nl.cmliussss.net','104.17.76.49#优选IP-246','104.25.33.126#优选IP-238','\x20\x20\x20\x20password:\x20','172.65.11.191#优选IP-122','230390aszysC','ProxyIP.JP.CMLiussss.net','\x20\x20\x20\x20tls:\x20true','outboundMode','104.25.113.22#优选IP-243','arraybuffer','104.19.246.234#优选IP-280','bestcf.top','162.158.0.0/15','url:','NRT','fragmentParam','3656180jlxPWw','104.25.123.130#优选IP-240','104.25.143.238#优选IP-059','172.67.64.12#优选IP-021','172.66.164.60#优选IP-251','nodeLimit','match','188.114.97.108#优选IP-203','104.17.118.180#优选IP-090','104.17.185.207#优选IP-029','nekoray','freeyx.cloudflare88.eu.org','ProxyIP.TW.CMLiussss.net','Cookie','geosite-microsoft','104.16.66.7','alpn','104.25.126.144#优选IP-272','104.20.1.1','unreachable','104.16.127.96#优选IP-006','sourceURL','max','172.67.127.122#优选IP-237','104.24.2.253#优选IP-077','104.17.107.217#优选IP-133','1276400huHFcr','Host','104.19.83.33#优选IP-268','ips','104.25.62.39#优选IP-265','cf.zerone-cdn.pp.ua','混淆版','172.66.161.31#优选IP-084',',\x20username=','text/plain;\x20charset=utf-8','172.67.159.243#优选IP-242','find','cloudflare-ip.mofashi.ltd','replace','min','tun-in','api','127.0.0.1:9090','type','https://bestcf.pages.dev/random-region/JP/100.txt','apply',',\x20password=','超时/网络错误','429','map','104.19.168.107#优选IP-074','\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20','quotaAuto','geosite-openai','104.25.246.123#优选IP-043','src','104.19.115.243#优选IP-096','172.67.161.136#优选IP-142','cfAccountId','172.65.78.200#优选IP-283','https://raw.githubusercontent.com/','104.19.32.220#优选IP-192','土耳其'];_0x4bee=function(){return _0x1cc53e;};return _0x4bee();}const DOH_ENDPOINTS=['https://doh.pub/dns-query','https://dns.alidns.com/resolve',_0x4fb34b(0x35d),'https://8.8.8.8/dns-query',_0x4fb34b(0x32d),'https://cloudflare-dns.com/dns-query'];function ipv6ToBytes(_0x1030f6){const _0x523a2c=_0x4fb34b,_0xa1ce24=String(_0x1030f6)[_0x523a2c(0x26f)]('::'),_0x2ddb08=_0xa1ce24[0x0]?_0xa1ce24[0x0]['split'](':')[_0x523a2c(0x1cf)](Boolean):[],_0x38a688=_0xa1ce24[0x1]?_0xa1ce24[0x1][_0x523a2c(0x26f)](':')['filter'](Boolean):[],_0x3b3880=[..._0x2ddb08,...Array(Math[_0x523a2c(0x438)](0x0,0x8-_0x2ddb08['length']-_0x38a688[_0x523a2c(0x1b7)]))[_0x523a2c(0x49f)]('0'),..._0x38a688],_0x1e58b7=new Uint8Array(0x10);return _0x3b3880[_0x523a2c(0x2ff)]((_0x370c69,_0x441742)=>{const _0x42f59a=parseInt(_0x370c69,0x10)||0x0;_0x1e58b7[_0x441742*0x2]=_0x42f59a>>0x8&0xff,_0x1e58b7[_0x441742*0x2+0x1]=_0x42f59a&0xff;}),_0x1e58b7;}async function dnsToDoH(_0x2c707c){const _0x19d8ad=_0x4fb34b;if(!_0x2c707c||_0x2c707c[_0x19d8ad(0x510)]<0x11)return null;const _0x1cd6d8=new DataView(_0x2c707c['buffer'],_0x2c707c[_0x19d8ad(0x1c3)],_0x2c707c[_0x19d8ad(0x510)]),_0x2a96b1=_0x1cd6d8[_0x19d8ad(0x26c)](0x0);if(_0x1cd6d8[_0x19d8ad(0x26c)](0x2)&0x8000)return null;if(_0x1cd6d8[_0x19d8ad(0x26c)](0x4)!==0x1)return null;let _0x5546a9=0xc,_0x3e0c5d=[];while(_0x5546a9<_0x2c707c[_0x19d8ad(0x510)]){const _0x315fb5=_0x1cd6d8[_0x19d8ad(0x3a6)](_0x5546a9);if(_0x315fb5===0x0){_0x5546a9++;break;}if((_0x315fb5&0xc0)===0xc0){_0x5546a9+=0x2;break;}if(_0x5546a9+0x1+_0x315fb5>_0x2c707c['byteLength'])return null;_0x3e0c5d[_0x19d8ad(0x33a)](TD['decode'](_0x2c707c['subarray'](_0x5546a9+0x1,_0x5546a9+0x1+_0x315fb5))),_0x5546a9+=0x1+_0x315fb5;}if(_0x5546a9+0x4>_0x2c707c[_0x19d8ad(0x510)]||_0x3e0c5d[_0x19d8ad(0x1b7)]===0x0)return null;const _0x33e9fe=_0x1cd6d8['getUint16'](_0x5546a9),_0x38396e=_0x1cd6d8[_0x19d8ad(0x26c)](_0x5546a9+0x2),_0x857c39=_0x5546a9+0x4;if(_0x33e9fe!==0x1&&_0x33e9fe!==0x1c)return null;const _0x25c7bb=_0x3e0c5d[_0x19d8ad(0x4bb)]('.'),_0x788300=_0x2c707c[_0x19d8ad(0x324)](0xc,_0x857c39);let _0x410773=null;for(const _0x8a16e3 of DOH_ENDPOINTS){try{const _0xafafa6=await fetchTimeout(_0x8a16e3+_0x19d8ad(0x1ce)+encodeURIComponent(_0x25c7bb)+_0x19d8ad(0x3f4)+_0x33e9fe,{'headers':{'accept':_0x19d8ad(0x2ee)}},0x1388);if(!_0xafafa6||!_0xafafa6['ok'])continue;const _0x1855f6=await _0xafafa6[_0x19d8ad(0x393)]();if(!_0x1855f6||_0x1855f6[_0x19d8ad(0x358)]!==0x0)continue;const _0x481a0f=(_0x1855f6[_0x19d8ad(0x3c7)]||[])['filter'](_0x375222=>_0x375222[_0x19d8ad(0x44e)]===_0x33e9fe&&(_0x375222['type']===0x1?isValidIp(String(_0x375222[_0x19d8ad(0x1df)])):/^[0-9a-fA-F:]+$/['test'](String(_0x375222[_0x19d8ad(0x1df)]))));if(_0x481a0f[_0x19d8ad(0x1b7)]){_0x410773=_0x481a0f;break;}}catch(_0x50bd7d){}}if(!_0x410773)return null;const _0x26924b=new Uint8Array(0xc),_0x5510dd=new DataView(_0x26924b[_0x19d8ad(0x273)]);_0x5510dd[_0x19d8ad(0x4dd)](0x0,_0x2a96b1),_0x5510dd[_0x19d8ad(0x4dd)](0x2,0x8180),_0x5510dd[_0x19d8ad(0x4dd)](0x4,0x1),_0x5510dd[_0x19d8ad(0x4dd)](0x6,_0x410773[_0x19d8ad(0x1b7)]);const _0x30bdf5=[_0x26924b,_0x788300];for(const _0x4d5c23 of _0x410773){const _0xbf864b=String(_0x4d5c23[_0x19d8ad(0x1df)]),_0x216e69=_0x4d5c23[_0x19d8ad(0x44e)]===0x1?Uint8Array['from'](_0xbf864b[_0x19d8ad(0x26f)]('.')[_0x19d8ad(0x454)](Number)):ipv6ToBytes(_0xbf864b);if(_0x216e69[_0x19d8ad(0x1b7)]!==(_0x4d5c23['type']===0x1?0x4:0x10))continue;const _0x1ff630=new Uint8Array(0xa),_0x4200f8=new DataView(_0x1ff630['buffer']);_0x4200f8[_0x19d8ad(0x4dd)](0x0,0xc00c),_0x4200f8[_0x19d8ad(0x4dd)](0x2,_0x4d5c23['type']),_0x4200f8[_0x19d8ad(0x4dd)](0x4,_0x38396e===0x0?0x1:_0x38396e),_0x4200f8['setUint32'](0x6,Number(_0x4d5c23[_0x19d8ad(0x35a)])||0x12c),_0x30bdf5[_0x19d8ad(0x33a)](_0x1ff630,new Uint8Array([_0x216e69[_0x19d8ad(0x1b7)]>>0x8&0xff,_0x216e69[_0x19d8ad(0x1b7)]&0xff]),_0x216e69);}let _0x214b75=0x0;_0x30bdf5[_0x19d8ad(0x2ff)](_0x1d5fc5=>_0x214b75+=_0x1d5fc5['byteLength']);const _0x205d34=new Uint8Array(_0x214b75);let _0x1bcdfe=0x0;for(const _0x30d13c of _0x30bdf5){_0x205d34[_0x19d8ad(0x30b)](_0x30d13c,_0x1bcdfe),_0x1bcdfe+=_0x30d13c[_0x19d8ad(0x510)];}return _0x205d34;}function withTimeout(_0x360f69,_0x1c1311,_0x4a66e0){const _0x2ca2dc=_0x4fb34b;return Promise[_0x2ca2dc(0x1e9)]([_0x360f69,new Promise((_0x37e1af,_0x29ac8a)=>setTimeout(()=>_0x29ac8a(new Error(_0x4a66e0||_0x2ca2dc(0x21c))),_0x1c1311||0x1770))]);}async function connectWithTimeout(_0x3cc8ef,_0x3fedc8,_0x505ba1){const _0x19f342=_0x4fb34b,_0x294219=connect({'hostname':_0x3cc8ef,'port':_0x3fedc8});try{await withTimeout(_0x294219[_0x19f342(0x360)],_0x505ba1||0x1770,'连接超时（SYN\x20被静默丢弃）');}catch(_0x38cc10){try{_0x294219[_0x19f342(0x509)]();}catch(_0x11bcbf){}throw _0x38cc10;}return _0x294219;}async function connectDirect(_0x61086b,_0x3fb335){const _0x1dd78b=_0x4fb34b;return connectWithTimeout(_0x61086b['hostname'],_0x61086b[_0x1dd78b(0x3bc)],_0x3fb335||0x1770);}async function connectViaSocks5(_0x408669,_0x1806bc){const _0x596077=_0x4fb34b,_0xc3e8db=connect({'hostname':_0x408669['host'],'port':_0x408669['port']});await _0xc3e8db[_0x596077(0x360)];const _0x386feb=_0xc3e8db[_0x596077(0x473)][_0x596077(0x302)](),_0x47465f=_0xc3e8db[_0x596077(0x4b9)][_0x596077(0x2ed)]();let _0x14a666=new Uint8Array(0x0);const _0xb5ec34=async _0x409b42=>{const _0x3b9e55=_0x596077;while(_0x14a666[_0x3b9e55(0x1b7)]<_0x409b42){const {done:_0x31952e,value:_0x33c06f}=await _0x47465f[_0x3b9e55(0x504)]();if(_0x31952e)throw new Error(_0x3b9e55(0x1ca));_0x14a666=concatBytes(_0x14a666,_0x33c06f);}const _0x1704f4=_0x14a666[_0x3b9e55(0x396)](0x0,_0x409b42);return _0x14a666=_0x14a666[_0x3b9e55(0x324)](_0x409b42),_0x1704f4;},_0x544abb=_0x408669[_0x596077(0x2ac)]?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await _0x386feb[_0x596077(0x4fb)](new Uint8Array(_0x544abb));const _0x377a47=await _0xb5ec34(0x2);if(_0x377a47[0x0]!==0x5||_0x377a47[0x1]===0xff)throw new Error(_0x596077(0x2a3));if(_0x377a47[0x1]===0x2){if(!_0x408669[_0x596077(0x2ac)])throw new Error(_0x596077(0x3d8));const _0x3fdba1=TE[_0x596077(0x31c)](_0x408669[_0x596077(0x2ac)]),_0x589a47=TE[_0x596077(0x31c)](_0x408669[_0x596077(0x1f3)]),_0x4bf68e=new Uint8Array([0x1,_0x3fdba1[_0x596077(0x1b7)],..._0x3fdba1,_0x589a47[_0x596077(0x1b7)],..._0x589a47]);await _0x386feb[_0x596077(0x4fb)](_0x4bf68e);const _0x581294=await _0xb5ec34(0x2);if(_0x581294[0x1]!==0x0)throw new Error('SOCKS5\x20认证失败');}else{if(_0x377a47[0x1]!==0x0)throw new Error(_0x596077(0x2e8)+_0x377a47[0x1]);}const _0x2c009a=TE[_0x596077(0x31c)](_0x1806bc[_0x596077(0x481)]);let _0x2f1ab2;/^\d+\.\d+\.\d+\.\d+$/['test'](_0x1806bc[_0x596077(0x481)])?_0x2f1ab2=new Uint8Array([0x5,0x1,0x0,0x1,..._0x1806bc[_0x596077(0x481)][_0x596077(0x26f)]('.')['map'](Number),_0x1806bc[_0x596077(0x3bc)]>>0x8&0xff,_0x1806bc[_0x596077(0x3bc)]&0xff]):_0x2f1ab2=new Uint8Array([0x5,0x1,0x0,0x3,_0x2c009a[_0x596077(0x1b7)],..._0x2c009a,_0x1806bc['port']>>0x8&0xff,_0x1806bc[_0x596077(0x3bc)]&0xff]);await _0x386feb[_0x596077(0x4fb)](_0x2f1ab2);const _0x59ac99=await _0xb5ec34(0x4);if(_0x59ac99[0x1]!==0x0)throw new Error(_0x596077(0x220)+_0x59ac99[0x1]);if(_0x59ac99[0x3]===0x1)await _0xb5ec34(0x6);else{if(_0x59ac99[0x3]===0x3){const _0x55ff38=(await _0xb5ec34(0x1))[0x0];await _0xb5ec34(_0x55ff38+0x2);}else{if(_0x59ac99[0x3]===0x4)await _0xb5ec34(0x12);}}return _0x386feb[_0x596077(0x3c4)](),_0x47465f['releaseLock'](),_0xc3e8db;}async function connectViaHttpProxy(_0x4bd4dc,_0x261d0b){const _0x41b5a2=_0x4fb34b,_0x4d9c49=connect({'hostname':_0x4bd4dc['host'],'port':_0x4bd4dc[_0x41b5a2(0x3bc)]});await _0x4d9c49[_0x41b5a2(0x360)];const _0x2973e0=_0x4d9c49[_0x41b5a2(0x473)][_0x41b5a2(0x302)](),_0x461235=_0x4d9c49['readable'][_0x41b5a2(0x2ed)]();let _0x3c6d0b='';if(_0x4bd4dc[_0x41b5a2(0x2ac)])_0x3c6d0b=_0x41b5a2(0x364)+b64FromBytes(TE['encode'](_0x4bd4dc[_0x41b5a2(0x2ac)]+':'+_0x4bd4dc['pass']))+'\x0d\x0a';const _0x1f13d2=_0x41b5a2(0x51c)+_0x261d0b['hostname']+':'+_0x261d0b[_0x41b5a2(0x3bc)]+_0x41b5a2(0x3f6)+_0x261d0b['hostname']+':'+_0x261d0b[_0x41b5a2(0x3bc)]+'\x0d\x0a'+_0x3c6d0b+'\x0d\x0a';await _0x2973e0[_0x41b5a2(0x4fb)](TE['encode'](_0x1f13d2));const _0x8afbeb=await readUntilCRLFCRLF(_0x461235);if(!/^HTTP\/\d\.\d\s+2\d\d/i[_0x41b5a2(0x3a5)](_0x8afbeb))throw new Error(_0x41b5a2(0x2a9)+_0x8afbeb['split']('\x0d\x0a')[0x0]);return _0x2973e0[_0x41b5a2(0x3c4)](),_0x461235[_0x41b5a2(0x3c4)](),_0x4d9c49;}async function readN(_0xccacb6,_0x42149a){const _0x5c69f4=_0x4fb34b,_0x232a9c=new Uint8Array(_0x42149a);let _0x46953a=0x0;while(_0x46953a<_0x42149a){const {done:_0x9ea8c,value:_0x5cadee}=await _0xccacb6['read']();if(_0x9ea8c)throw new Error(_0x5c69f4(0x1ca));const _0x22c955=_0x42149a-_0x46953a;_0x232a9c['set'](_0x5cadee[_0x5c69f4(0x324)](0x0,Math['min'](_0x22c955,_0x5cadee[_0x5c69f4(0x1b7)])),_0x46953a),_0x46953a+=Math[_0x5c69f4(0x44a)](_0x22c955,_0x5cadee[_0x5c69f4(0x1b7)]);}return _0x232a9c;}async function readUntilCRLFCRLF(_0x2c118b){const _0x21266a=_0x4fb34b;let _0x1b66a1=new Uint8Array(0x0);while(_0x1b66a1[_0x21266a(0x1b7)]<0x10000){const {done:_0x4e4dff,value:_0x124621}=await _0x2c118b[_0x21266a(0x504)]();if(_0x4e4dff)break;_0x1b66a1=concatBytes(_0x1b66a1,_0x124621);const _0x2a1f91=findBytes(_0x1b66a1,[0xd,0xa,0xd,0xa]);if(_0x2a1f91>=0x0)return TD['decode'](_0x1b66a1[_0x21266a(0x324)](0x0,_0x2a1f91));}return TD['decode'](_0x1b66a1);}function concatBytes(_0x263767,_0x34da46){const _0x47adbf=_0x4fb34b,_0x1204a5=new Uint8Array(_0x263767['length']+_0x34da46[_0x47adbf(0x1b7)]);return _0x1204a5['set'](_0x263767,0x0),_0x1204a5[_0x47adbf(0x30b)](_0x34da46,_0x263767['length']),_0x1204a5;}function findBytes(_0x3e8826,_0xaf4937){const _0x59a622=_0x4fb34b;_0x4254f1:for(let _0x360602=0x0;_0x360602<=_0x3e8826[_0x59a622(0x1b7)]-_0xaf4937[_0x59a622(0x1b7)];_0x360602++){for(let _0xcb4247=0x0;_0xcb4247<_0xaf4937[_0x59a622(0x1b7)];_0xcb4247++)if(_0x3e8826[_0x360602+_0xcb4247]!==_0xaf4937[_0xcb4247])continue _0x4254f1;return _0x360602;}return-0x1;}const RELAY_DOMAINS={'HK':_0x4fb34b(0x2e3),'US':_0x4fb34b(0x1c0),'SG':'proxyip.sg.cmliussss.net','JP':_0x4fb34b(0x249),'KR':_0x4fb34b(0x3f9),'DE':_0x4fb34b(0x2bb),'SE':_0x4fb34b(0x1dd),'NL':_0x4fb34b(0x411),'FI':_0x4fb34b(0x202),'GB':_0x4fb34b(0x1f6),'Oracle':_0x4fb34b(0x483),'DigitalOcean':_0x4fb34b(0x3c6),'Vultr':_0x4fb34b(0x29f),'Multacom':_0x4fb34b(0x216)};function selectRelayRegion(_0x2ea441){const _0x24aeb8=_0x4fb34b,_0x5124d2=(_0x2ea441||'')[_0x24aeb8(0x25d)]();if(_0x5124d2[_0x24aeb8(0x4ca)]('HKG')||_0x5124d2[_0x24aeb8(0x4ca)]('HK'))return'HK';if(_0x5124d2['startsWith'](_0x24aeb8(0x476))||_0x5124d2['startsWith']('SG'))return'SG';if(_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x420))||_0x5124d2['startsWith'](_0x24aeb8(0x4e4))||_0x5124d2['startsWith'](_0x24aeb8(0x4bc))||_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x50c))||_0x5124d2[_0x24aeb8(0x4ca)]('JP'))return'JP';if(_0x5124d2['startsWith'](_0x24aeb8(0x33f))||_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x489))||_0x5124d2[_0x24aeb8(0x4ca)]('KR'))return'KR';if(/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/['test'](_0x5124d2))return'HK';if(_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x317))||_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x2ab))||_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x1f1))||_0x5124d2[_0x24aeb8(0x4ca)]('DUS')||_0x5124d2['startsWith'](_0x24aeb8(0x2d9))||_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x2d7))||_0x5124d2[_0x24aeb8(0x4ca)]('DE'))return'DE';if(_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x33e))||_0x5124d2[_0x24aeb8(0x4ca)]('SE'))return'SE';if(_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x1f0))||_0x5124d2[_0x24aeb8(0x4ca)]('NL'))return'NL';if(_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x4fa))||_0x5124d2[_0x24aeb8(0x4ca)]('FI'))return'FI';if(_0x5124d2[_0x24aeb8(0x4ca)](_0x24aeb8(0x24c))||_0x5124d2['startsWith'](_0x24aeb8(0x215))||_0x5124d2[_0x24aeb8(0x4ca)]('GB')||_0x5124d2[_0x24aeb8(0x4ca)]('UK'))return'GB';if(/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/[_0x24aeb8(0x3a5)](_0x5124d2))return'DE';return'US';}const PROXYIP_CACHE=new Map();async function resolveProxyIPs(_0x14ea52,_0x3b30c7){const _0x346582=_0x4fb34b;_0x3b30c7=_0x3b30c7||0x1bb;if(isValidIp(_0x14ea52))return[{'hostname':_0x14ea52,'port':_0x3b30c7}];const _0x581ad1=_0x14ea52+':'+_0x3b30c7,_0x3e090d=Date['now'](),_0x4ecf16=PROXYIP_CACHE[_0x346582(0x2a4)](_0x581ad1);if(_0x4ecf16&&_0x3e090d-_0x4ecf16['t']<0x5*0x3c*0x3e8)return _0x4ecf16[_0x346582(0x43f)];const _0x4ace5f=[_0x346582(0x2b0),_0x346582(0x345),'https://doh.pub/dns-query'],_0x3475ef=async(_0x4d3569,_0x3cd7f0)=>{const _0x344b27=_0x346582,_0x33db41=_0x4ace5f[_0x344b27(0x454)](async _0x1be572=>{const _0x3595b9=_0x344b27,_0x305041=await fetchTimeout(_0x1be572+_0x3595b9(0x1ce)+encodeURIComponent(_0x14ea52)+_0x3595b9(0x3f4)+_0x4d3569,{'headers':{'accept':_0x3595b9(0x2ee)}},0xfa0);if(!_0x305041||!_0x305041['ok'])throw new Error(_0x3595b9(0x39e));const _0x51d0c5=await _0x305041[_0x3595b9(0x393)]();return(_0x51d0c5[_0x3595b9(0x3c7)]||[])[_0x3595b9(0x1cf)](_0x229b72=>_0x229b72[_0x3595b9(0x44e)]===_0x3cd7f0)[_0x3595b9(0x454)](_0xa4d1a9=>_0xa4d1a9[_0x3595b9(0x1df)]);});try{return await Promise['any'](_0x33db41);}catch(_0x9648e2){return[];}},[_0x393c33,_0x184785]=await Promise[_0x346582(0x2d5)]([_0x3475ef('TXT',0x10),_0x3475ef('A',0x1)]);let _0x4b2dae=[];for(const _0x3d20a5 of _0x393c33){const _0x48ac30=String(_0x3d20a5)[_0x346582(0x449)](/^"|"$/g,'')[_0x346582(0x449)](/\\010/g,',')[_0x346582(0x449)](/\n/g,',')[_0x346582(0x2ae)]();if(!_0x48ac30)continue;if(_0x48ac30===_0x346582(0x50a)){_0x4b2dae=_0x184785[_0x346582(0x1cf)](_0x59fb3e=>/^\d+\.\d+\.\d+\.\d+$/['test'](_0x59fb3e))['map'](_0x2308dd=>({'hostname':_0x2308dd,'port':_0x3b30c7}));break;}const _0x286f35=_0x48ac30[_0x346582(0x26f)](/[,;\s]+/)[_0x346582(0x454)](_0x5d39d0=>_0x5d39d0[_0x346582(0x2ae)]())[_0x346582(0x1cf)](Boolean),_0xa681ee=[];for(const _0x531f6a of _0x286f35){const {host:_0x499719,port:_0x58b7ff}=parseHostPort(_0x531f6a,_0x3b30c7);if(isValidIp(_0x499719))_0xa681ee[_0x346582(0x33a)]({'hostname':_0x499719,'port':_0x58b7ff});}if(_0xa681ee[_0x346582(0x1b7)]){_0x4b2dae=_0xa681ee;break;}}!_0x4b2dae[_0x346582(0x1b7)]&&(_0x4b2dae=_0x184785[_0x346582(0x1cf)](_0x24415c=>/^\d+\.\d+\.\d+\.\d+$/[_0x346582(0x3a5)](_0x24415c))['map'](_0x1c5f4a=>({'hostname':_0x1c5f4a,'port':_0x3b30c7})));if(!_0x4b2dae[_0x346582(0x1b7)]){const _0x5535d9=await _0x3475ef('AAAA',0x1c);_0x4b2dae=_0x5535d9['filter'](_0x132326=>isValidIp(_0x132326))[_0x346582(0x454)](_0x158a65=>({'hostname':_0x158a65,'port':_0x3b30c7}));}const _0x2a03a2=new Set(),_0x494bce=_0x4b2dae[_0x346582(0x1cf)](_0x322f3c=>{const _0x37ea05=_0x346582,_0x7671d0=_0x322f3c['hostname']+':'+_0x322f3c[_0x37ea05(0x3bc)];if(_0x2a03a2[_0x37ea05(0x283)](_0x7671d0))return![];return _0x2a03a2[_0x37ea05(0x464)](_0x7671d0),!![];});if(_0x494bce[_0x346582(0x1b7)])PROXYIP_CACHE[_0x346582(0x30b)](_0x581ad1,{'t':_0x3e090d,'ips':_0x494bce});return _0x494bce;}async function openOutbound(_0x51254d,_0x4c98ee,_0x4f2a61,_0xb970f0){const _0x2ce383=_0x4fb34b,_0x317620=parseProxyAddress(_0x4c98ee[_0x2ce383(0x217)]),_0x45e879=_0x4c98ee[_0x2ce383(0x419)]||'',_0x3deceb=_0x317620?_0x317620['type']==='http'||_0x317620[_0x2ce383(0x44e)]===_0x2ce383(0x3dc)?_0x5cc3b7=>connectViaHttpProxy(_0x317620,_0x5cc3b7):_0x34eb3e=>connectViaSocks5(_0x317620,_0x34eb3e):null,_0x5c5ab3=(_0x25ebf6,_0x57e9a2)=>{const _0x3b1b52=_0x2ce383,_0x471847=[];if(_0x45e879===_0x3b1b52(0x20a))_0x471847[_0x3b1b52(0x33a)](_0x3deceb?()=>_0x3deceb(_0x25ebf6):()=>connectDirect(_0x25ebf6,_0x57e9a2));else{if(_0x45e879==='no'){_0x471847[_0x3b1b52(0x33a)](()=>connectDirect(_0x25ebf6,_0x57e9a2));if(_0x3deceb)_0x471847['push'](()=>_0x3deceb(_0x25ebf6));}else{if(_0x3deceb)_0x471847[_0x3b1b52(0x33a)](()=>_0x3deceb(_0x25ebf6));_0x471847[_0x3b1b52(0x33a)](()=>connectDirect(_0x25ebf6,_0x57e9a2));}}return _0x471847;};let _0x5b57e9;const _0x44d4b2=async(_0x337702,_0x5d8293)=>{for(const _0x7a5200 of _0x5c5ab3(_0x337702,_0x5d8293)){try{return await _0x7a5200();}catch(_0xe584c4){_0x5b57e9=_0xe584c4;}}return null;},_0x3582ee=await _0x44d4b2({'hostname':_0x51254d[_0x2ce383(0x4cc)],'port':_0x51254d[_0x2ce383(0x3bc)]},0x1770);if(_0x3582ee)return _0x3582ee;const _0x35fb95=_0x4c98ee[_0x2ce383(0x405)]?parseHostPort(_0x4c98ee[_0x2ce383(0x405)],0x1bb):null;if(_0x35fb95&&_0x35fb95[_0x2ce383(0x480)]){let _0x553355=await resolveProxyIPs(_0x35fb95[_0x2ce383(0x480)],_0x35fb95['port']);if(!_0x553355['length'])_0x553355=[{'hostname':_0x35fb95[_0x2ce383(0x480)],'port':_0x35fb95['port']}];for(const _0x52698e of _0x553355){const _0x33d60e=await _0x44d4b2(_0x52698e,0x1770);if(_0x33d60e)return _0x33d60e;}}if(_0xb970f0){const _0x1146f5=selectRelayRegion(_0x4f2a61),_0x38fe29=[_0x1146f5,...Object[_0x2ce383(0x463)](RELAY_DOMAINS)['filter'](_0x53158e=>_0x53158e!==_0x1146f5)][_0x2ce383(0x396)](0x0,0x3);for(const _0x85fb1a of _0x38fe29){const _0xcf1118=RELAY_DOMAINS[_0x85fb1a];if(!_0xcf1118)continue;let _0xa60435=[];try{_0xa60435=await resolveProxyIPs(_0xcf1118,0x1bb);}catch(_0x4eeb6f){}if(!_0xa60435['length'])continue;for(const _0x1e081e of _0xa60435){const _0x1cb5ab=await _0x44d4b2(_0x1e081e,0x1388);if(_0x1cb5ab)return _0x1cb5ab;}}}throw _0x5b57e9||new Error(_0x2ce383(0x48c));}async function pumpToReader(_0x1052b0,_0x6933d9,_0x357c45){try{while(!![]){const {done:_0x5463d6,value:_0x53c392}=await _0x1052b0['read']();if(_0x5463d6)break;_0x6933d9(_0x53c392);}}catch(_0x59b828){}try{if(_0x357c45)_0x357c45();}catch(_0x1984cb){}}async function handleWebSocketProxy(_0x58be99,_0x1e9d7a){const _0x28a589=_0x4fb34b,_0x494842=new WebSocketPair(),[_0x26694b,_0x44bb1f]=Object[_0x28a589(0x210)](_0x494842);try{_0x44bb1f['accept']({'allowHalfOpen':!![]});}catch(_0x2988cb){_0x44bb1f[_0x28a589(0x2cf)]();}_0x44bb1f[_0x28a589(0x2e9)]=_0x28a589(0x41b);let _0x1bdcfd=null,_0x2cfb7e=null,_0x28267b=![],_0x189922=null;const _0x9773a8=_0x11d71e=>{const _0x2a341f=_0x28a589;try{_0x44bb1f[_0x2a341f(0x47d)](_0x11d71e);}catch(_0x4f231e){}};_0x44bb1f['addEventListener']('message',async _0x4a2f19=>{const _0x2676e5=_0x28a589;try{const _0x47802e=typeof _0x4a2f19[_0x2676e5(0x1df)]===_0x2676e5(0x32e)?TE[_0x2676e5(0x31c)](_0x4a2f19[_0x2676e5(0x1df)]):new Uint8Array(_0x4a2f19[_0x2676e5(0x1df)]);if(!_0x28267b){_0x189922=_0x189922?concatBytes(_0x189922,_0x47802e):_0x47802e;let _0x8be8bf,_0x5c62b5;try{let _0x53d6ae=detectTrojan(_0x189922,_0x1e9d7a);if(!_0x53d6ae&&_0x189922[_0x2676e5(0x510)]>0x0&&_0x189922[0x0]!==0x0&&_0x189922['byteLength']<0x3a)return;_0x5c62b5=!_0x53d6ae,_0x8be8bf=_0x53d6ae?parseTrojanHeader(_0x189922):parseVlessHeader(_0x189922);}catch(_0x58a5b8){if(/头部过短/[_0x2676e5(0x3a5)](_0x58a5b8['message']||''))return;throw _0x58a5b8;}_0x28267b=!![];if(_0x8be8bf[_0x2676e5(0x247)]===0x2){try{const _0x28d29a=_0x189922[_0x2676e5(0x324)](_0x8be8bf[_0x2676e5(0x4ef)]);if(_0x8be8bf['port']===0x35&&_0x28d29a[_0x2676e5(0x510)]>=0xc){const _0x76e1ff=await dnsToDoH(_0x28d29a);if(_0x76e1ff)_0x9773a8(_0x76e1ff);}}catch(_0x323f62){}try{_0x44bb1f[_0x2676e5(0x509)](0x3e8);}catch(_0x5e2914){}return;}const _0x1e2edb=await openOutbound(_0x8be8bf,_0x1e9d7a,_0x58be99['cf']&&_0x58be99['cf'][_0x2676e5(0x50d)],_0x5c62b5);_0x1bdcfd=_0x1e2edb,_0x2cfb7e=_0x1e2edb[_0x2676e5(0x473)][_0x2676e5(0x302)]();if(_0x5c62b5)_0x9773a8(new Uint8Array([0x0,0x0]));if(_0x189922&&_0x189922[_0x2676e5(0x510)]>_0x8be8bf['headerLength'])await _0x2cfb7e[_0x2676e5(0x4fb)](_0x189922[_0x2676e5(0x324)](_0x8be8bf[_0x2676e5(0x4ef)]));_0x189922=null,pumpToReader(_0x1e2edb[_0x2676e5(0x4b9)][_0x2676e5(0x2ed)](),_0x9773a8,()=>{const _0x1f76a7=_0x2676e5;try{_0x44bb1f[_0x1f76a7(0x509)](0x3e8);}catch(_0x211473){}});}else{if(_0x2cfb7e)await _0x2cfb7e[_0x2676e5(0x4fb)](_0x47802e);else _0x189922=_0x189922?concatBytes(_0x189922,_0x47802e):_0x47802e;}}catch(_0x4b1fe3){try{_0x44bb1f['close'](0x3f3,String(_0x4b1fe3&&_0x4b1fe3[_0x2676e5(0x4cd)]||_0x4b1fe3));}catch(_0x7ab2fb){}}});const _0x12603f=()=>{const _0x1f53fa=_0x28a589;if(_0x1bdcfd){try{_0x1bdcfd[_0x1f53fa(0x509)]();}catch(_0x244a30){}_0x1bdcfd=null;}};return _0x44bb1f[_0x28a589(0x513)](_0x28a589(0x509),_0x12603f),_0x44bb1f[_0x28a589(0x513)]('error',_0x12603f),new Response(null,{'status':0x65,'webSocket':_0x26694b});}async function handleXhttpProxy(_0x22fef7,_0x3d1711){const _0x5da997=_0x4fb34b,_0x577e77=_0x22fef7['body'][_0x5da997(0x2ed)](),_0x21b43b=await _0x577e77[_0x5da997(0x504)]();if(_0x21b43b[_0x5da997(0x37e)])return new Response(_0x5da997(0x1b9),{'status':0x190});const _0x18478c=parseVlessHeader(_0x21b43b['value']),_0x321320=await openOutbound(_0x18478c,_0x3d1711,_0x22fef7['cf']&&_0x22fef7['cf']['colo'],!![]),_0xdfac5b=_0x321320[_0x5da997(0x473)][_0x5da997(0x302)]();await _0xdfac5b[_0x5da997(0x4fb)](_0x21b43b[_0x5da997(0x4c3)]['subarray'](_0x18478c[_0x5da997(0x4ef)])),((async()=>{const _0x43c60b=_0x5da997;try{while(!![]){const {done:_0x30e076,value:_0x2e2855}=await _0x577e77[_0x43c60b(0x504)]();if(_0x30e076)break;await _0xdfac5b[_0x43c60b(0x4fb)](_0x2e2855);}}catch(_0x26a13e){}try{await _0xdfac5b[_0x43c60b(0x509)]();}catch(_0x5ddcad){}})());const _0x4e09f0=new ReadableStream({async 'start'(_0x1faddb){const _0x1986e4=_0x5da997;_0x1faddb['enqueue'](new Uint8Array([0x0,0x0]));const _0x2cd780=_0x321320[_0x1986e4(0x4b9)][_0x1986e4(0x2ed)]();try{while(!![]){const {done:_0x47430d,value:_0x3a278c}=await _0x2cd780[_0x1986e4(0x504)]();if(_0x47430d)break;_0x1faddb[_0x1986e4(0x4c9)](_0x3a278c);}}catch(_0x43bbc9){}try{_0x1faddb['close']();}catch(_0x483f64){}try{_0x321320['close']();}catch(_0x5724c7){}},'cancel'(){const _0x2afac0=_0x5da997;try{_0x321320[_0x2afac0(0x509)]();}catch(_0x3adc08){}}});return new Response(_0x4e09f0,{'status':0xc8,'headers':{'content-type':'application/octet-stream','x-accel-buffering':'no','cache-control':_0x5da997(0x2aa)}});}function extractCandidates(_0x5baf31){const _0x2f05a7=_0x4fb34b,_0x4eedbe=new Set(),_0x34aece=[],_0x9bec51=(_0x2072b7,_0x39522d,_0x175757)=>{if(!isValidIp(_0x2072b7))return;if(_0x4eedbe['has'](_0x2072b7))return;_0x4eedbe['add'](_0x2072b7),_0x34aece['push']({'ip':_0x2072b7,'port':_0x39522d||0x1bb,'name':_0x175757||''});};parseIPList(_0x5baf31)[_0x2f05a7(0x2ff)](_0xb981cf=>_0x9bec51(_0xb981cf['ip'],_0xb981cf['port'],_0xb981cf[_0x2f05a7(0x277)]));const _0x512c32=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let _0x5401ed;while(_0x5401ed=_0x512c32[_0x2f05a7(0x1ed)](_0x5baf31)){const {host:_0x915d85,port:_0xe3208}=parseHostPort(_0x5401ed[0x0],0x1bb);if(_0x915d85)_0x9bec51(_0x915d85,_0xe3208,'');}const _0x53b5cb=/[0-9a-fA-F:]+/g;while(_0x5401ed=_0x53b5cb[_0x2f05a7(0x1ed)](_0x5baf31)){const _0x175f28=_0x5401ed[0x0];if(_0x175f28[_0x2f05a7(0x307)](':')&&_0x175f28[_0x2f05a7(0x26f)](':')[_0x2f05a7(0x1b7)]>=0x3&&isValidIp(_0x175f28))_0x9bec51(_0x175f28,0x1bb,'');}return _0x34aece;}function extractDomains(_0x23b75d){const _0xfbe043=_0x4fb34b,_0x4b14be=new Set(),_0x45e34a=[],_0x339df9=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let _0x42fcf3;while(_0x42fcf3=_0x339df9['exec'](_0x23b75d)){const _0x188b54=_0x42fcf3[0x0]['toLowerCase']();!_0x4b14be[_0xfbe043(0x283)](_0x188b54)&&(_0x188b54[_0xfbe043(0x307)](_0xfbe043(0x214))||_0x188b54[_0xfbe043(0x307)]('bestcf')||_0x188b54['includes'](_0xfbe043(0x380))||_0x188b54[_0xfbe043(0x307)]('090227')||_0x188b54['endsWith'](_0xfbe043(0x3c1))||_0x188b54['endsWith'](_0xfbe043(0x257)))&&(_0x4b14be[_0xfbe043(0x464)](_0x188b54),_0x45e34a['push'](_0x188b54));}return _0x45e34a[_0xfbe043(0x396)](0x0,0xa);}const SUBPREF_CACHE={'t':0x0,'ips':null};async function fetchLatestPreferredIPs(_0x3af3a8){const _0x2ee568=_0x4fb34b;_0x3af3a8=Math['max'](0x1,parseInt(_0x3af3a8)||0x96);if(Date[_0x2ee568(0x486)]()-SUBPREF_CACHE['t']<0xa*0x3c*0x3e8)return SUBPREF_CACHE[_0x2ee568(0x43f)];const _0x394c05=await fetchTimeout('https://stock.hostmonit.com/CloudFlareYes',{'headers':{'User-Agent':_0x2ee568(0x4e8)}},0x1770);if(_0x394c05&&_0x394c05['ok']){const _0x445c76=extractCandidates(await _0x394c05[_0x2ee568(0x207)]())['filter'](_0x3483c8=>_0x3483c8['ip']&&isCloudflareIP(_0x3483c8['ip'])),_0x511a8=new Set(),_0x1f2242=[];for(const _0x30a286 of _0x445c76){if(_0x511a8['has'](_0x30a286['ip']))continue;_0x511a8['add'](_0x30a286['ip']),_0x1f2242[_0x2ee568(0x33a)](_0x30a286);if(_0x1f2242[_0x2ee568(0x1b7)]>=_0x3af3a8)break;}return SUBPREF_CACHE['t']=Date[_0x2ee568(0x486)](),SUBPREF_CACHE[_0x2ee568(0x43f)]=_0x1f2242,_0x1f2242;}return null;}async function collectCandidates(_0xa4fd34){const _0x3fc499=_0x4fb34b;_0xa4fd34=_0xa4fd34||{};const _0x1a207a=[],_0x87ba0b={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},_0x248927=_0x3f94f3=>{const _0x1eaa04=_0x29fe;if(_0x3f94f3&&_0x3f94f3['ip']&&isCloudflareIP(_0x3f94f3['ip']))_0x1a207a[_0x1eaa04(0x33a)]({'ip':_0x3f94f3['ip'],'port':_0xa4fd34['port']||_0x3f94f3[_0x1eaa04(0x3bc)]||0x1bb,'name':_0x3f94f3[_0x1eaa04(0x277)]||''});};if(_0xa4fd34[_0x3fc499(0x4d0)]&&OPTIMIZE_SOURCES[_0xa4fd34[_0x3fc499(0x4d0)]]){const _0xb8a5e1=await fetchTimeout(OPTIMIZE_SOURCES[_0xa4fd34[_0x3fc499(0x4d0)]][_0x3fc499(0x37c)],{'headers':{'User-Agent':_0x3fc499(0x4e8)}},0x1770);if(_0xb8a5e1&&_0xb8a5e1['ok']){const _0x4fb618=extractCandidates(await _0xb8a5e1[_0x3fc499(0x207)]());_0x4fb618['forEach'](_0x248927),_0x87ba0b[_0x3fc499(0x211)]=_0x4fb618[_0x3fc499(0x1b7)];}else _0x87ba0b['presetErr']=_0xb8a5e1?_0x3fc499(0x2b6)+_0xb8a5e1['status']:_0x3fc499(0x452);}if(_0xa4fd34[_0x3fc499(0x437)]){const _0x5d6950=await fetchTimeout(_0xa4fd34[_0x3fc499(0x437)],{'headers':{'User-Agent':_0x3fc499(0x4e8)}},0x1770);if(_0x5d6950&&_0x5d6950['ok']){const _0xa61969=extractCandidates(await _0x5d6950['text']());_0xa61969[_0x3fc499(0x2ff)](_0x248927),_0x87ba0b[_0x3fc499(0x297)]=_0xa61969[_0x3fc499(0x1b7)];}else _0x87ba0b[_0x3fc499(0x308)]=_0x5d6950?_0x3fc499(0x2b6)+_0x5d6950[_0x3fc499(0x2c7)]:_0x3fc499(0x452);}const _0x27e3a8=new Set(),_0x1b147e=[];for(const _0xc86956 of _0x1a207a){if(_0x27e3a8[_0x3fc499(0x283)](_0xc86956['ip']))continue;_0x27e3a8[_0x3fc499(0x464)](_0xc86956['ip']),_0x1b147e['push'](_0xc86956);}if(_0x1b147e[_0x3fc499(0x1b7)]<(_0xa4fd34[_0x3fc499(0x4f9)]||0x14)){let _0x3c02c9=(_0xa4fd34[_0x3fc499(0x4f9)]||0x14)-_0x1b147e['length'];try{const _0x37cc92=await fetchBestcfPool();for(const _0x1cdcae of _0x37cc92){if(_0x3c02c9<=0x0)break;if(_0x27e3a8[_0x3fc499(0x283)](_0x1cdcae['ip']))continue;if(!isCloudflareIP(_0x1cdcae['ip']))continue;_0x27e3a8['add'](_0x1cdcae['ip']),_0x1b147e[_0x3fc499(0x33a)]({'ip':_0x1cdcae['ip'],'port':_0xa4fd34[_0x3fc499(0x3bc)]||_0x1cdcae[_0x3fc499(0x3bc)]||0x1bb,'name':_0x1cdcae['name']||''}),_0x3c02c9--;}}catch(_0x51dcfe){}_0x87ba0b[_0x3fc499(0x2db)]=(_0xa4fd34['count']||0x14)-_0x1b147e[_0x3fc499(0x1b7)]-_0x3c02c9;}if(_0xa4fd34[_0x3fc499(0x1fd)]!==![]&&_0x1b147e[_0x3fc499(0x1b7)]<(_0xa4fd34[_0x3fc499(0x4f9)]||0x14)){const _0x23a1aa=(_0xa4fd34[_0x3fc499(0x4f9)]||0x14)-_0x1b147e[_0x3fc499(0x1b7)],_0x124634=randomIPsFromCidrs(CLOUDFLARE_CIDRS,_0x23a1aa*0x3);let _0x3986c7=0x0;for(const _0x35001e of _0x124634){if(_0x3986c7>=_0x23a1aa)break;if(_0x27e3a8[_0x3fc499(0x283)](_0x35001e))continue;_0x27e3a8[_0x3fc499(0x464)](_0x35001e),_0x1b147e['push']({'ip':_0x35001e,'port':_0xa4fd34[_0x3fc499(0x3bc)]||0x1bb,'name':''}),_0x3986c7++;}_0x87ba0b['cidr']=_0x3986c7;}return{'candidates':_0x1b147e,'stats':_0x87ba0b};}function testOneLatency(_0x2fdb40,_0x466cf5,_0x37cca1){return new Promise(_0x126105=>{const _0x4300da=_0x29fe,_0x221f74=Date[_0x4300da(0x486)]();let _0x47e51e,_0x3c5f95=![];const _0x23c82f=(_0x3cea3a,_0x19777e)=>{if(_0x3c5f95)return;_0x3c5f95=!![],clearTimeout(_0x5f53d6);try{if(_0x47e51e)_0x47e51e['close']();}catch(_0x4835b4){}_0x126105({'ip':_0x2fdb40,'port':_0x466cf5,'ok':_0x3cea3a,'latency':_0x19777e});},_0x5f53d6=setTimeout(()=>_0x23c82f(![],-0x1),_0x37cca1);try{_0x47e51e=connect({'hostname':_0x2fdb40,'port':_0x466cf5});}catch(_0x48040f){return _0x23c82f(![],-0x1);}_0x47e51e[_0x4300da(0x360)]['then'](()=>_0x23c82f(!![],Date[_0x4300da(0x486)]()-_0x221f74))[_0x4300da(0x2d8)](()=>_0x23c82f(![],-0x1));});}async function runLatencyTest(_0x19de47,_0xaabb7,_0x42d444){const _0x46fda8=_0x4fb34b;_0xaabb7=Math[_0x46fda8(0x438)](0x1,Math[_0x46fda8(0x44a)](0x32,Number(_0xaabb7)||0x5)),_0x42d444=Math[_0x46fda8(0x438)](0x1f4,Number(_0x42d444)||0x1388);const _0x32db6c=[];let _0x358a29=0x0;async function _0x3626ae(){const _0x557ae0=_0x46fda8;while(_0x358a29<_0x19de47[_0x557ae0(0x1b7)]){const _0x4cc051=_0x19de47[_0x358a29++],_0x48b8d5=await testOneLatency(_0x4cc051['ip'],_0x4cc051[_0x557ae0(0x3bc)],_0x42d444);_0x32db6c[_0x557ae0(0x33a)](_0x48b8d5);}}return await Promise[_0x46fda8(0x2d5)](Array['from']({'length':_0xaabb7},_0x3626ae)),_0x32db6c['sort']((_0x16eac5,_0x397c62)=>(_0x16eac5[_0x46fda8(0x467)]<0x0?0x3b9aca00:_0x16eac5['latency'])-(_0x397c62[_0x46fda8(0x467)]<0x0?0x3b9aca00:_0x397c62[_0x46fda8(0x467)])),_0x32db6c;}function xhttpPadding(_0x5a73c5){const _0xed52b4=_0x4fb34b,_0x545a65=_0x5a73c5[_0xed52b4(0x2cc)]||'';return{'xPaddingObfsMode':!![],'xPaddingMethod':_0xed52b4(0x3f1),'xPaddingPlacement':_0xed52b4(0x1c4),'xPaddingHeader':_0x545a65['slice'](0x1,0x7),'xPaddingKey':'_'+_0x545a65[_0xed52b4(0x396)](0x19,0x1f)};}function vlessNode(_0x510a0b,_0x4004c5,_0x3532e2,_0x4f4484,_0x2b7341={}){const _0x22b207=_0x4fb34b,_0x4e9ffd=_0x510a0b[_0x22b207(0x480)],_0x3edabc=_0x4004c5['includes'](':')&&!_0x4004c5[_0x22b207(0x4ca)]('[')?'['+_0x4004c5+']':_0x4004c5,_0x437a9d=!HTTP_PORTS['has'](Number(_0x3532e2)),_0x3ae036=encodeURIComponent;let _0x1172b3=_0x22b207(0x279);if(_0x437a9d)_0x1172b3+=_0x22b207(0x339)+_0x3ae036(_0x4e9ffd)+'&fp=chrome';else _0x1172b3+=_0x22b207(0x348);_0x1172b3+=_0x22b207(0x29b)+_0x3ae036(_0x4e9ffd);if(_0x2b7341[_0x22b207(0x44e)]===_0x22b207(0x20c)&&_0x437a9d)_0x1172b3+=_0x22b207(0x4c5),_0x1172b3+=_0x22b207(0x474)+_0x3ae036(JSON[_0x22b207(0x31e)](xhttpPadding(_0x510a0b)));else _0x1172b3+='&type=ws';_0x1172b3+=_0x22b207(0x1cd)+_0x3ae036('/'+_0x510a0b['path']);if(_0x510a0b[_0x22b207(0x432)])_0x1172b3+='&alpn='+_0x3ae036(_0x510a0b[_0x22b207(0x432)]);return _0x510a0b[_0x22b207(0x4b3)]&&(_0x1172b3+='&ech='+_0x3ae036((_0x510a0b[_0x22b207(0x2b2)]||_0x22b207(0x24f))+'+'+(_0x510a0b[_0x22b207(0x21f)]||_0x22b207(0x394)))),_0x22b207(0x3cf)+_0x510a0b['uuid']+'@'+_0x3edabc+':'+_0x3532e2+'?'+_0x1172b3+'#'+encodeURIComponent(_0x4f4484);}function trojanNode(_0x2600a3,_0x19a93c,_0x1549aa,_0x448c62){const _0x1f9af8=_0x4fb34b,_0x198a35=_0x2600a3[_0x1f9af8(0x480)],_0xf74529=_0x19a93c[_0x1f9af8(0x307)](':')&&!_0x19a93c['startsWith']('[')?'['+_0x19a93c+']':_0x19a93c,_0x2332ac=encodeURIComponent,_0x71f225=!HTTP_PORTS[_0x1f9af8(0x283)](Number(_0x1549aa));let _0x2afe23=_0x71f225?_0x1f9af8(0x4e1)+_0x2332ac(_0x198a35)+_0x1f9af8(0x485)+_0x2332ac(_0x198a35)+'&type=ws&path='+_0x2332ac('/'+_0x2600a3[_0x1f9af8(0x2fe)]):_0x1f9af8(0x321)+_0x2332ac(_0x198a35)+'&type=ws&path='+_0x2332ac('/'+_0x2600a3[_0x1f9af8(0x2fe)]);if(_0x2600a3[_0x1f9af8(0x432)]&&_0x71f225)_0x2afe23+=_0x1f9af8(0x22b)+_0x2332ac(_0x2600a3[_0x1f9af8(0x432)]);if(_0x2600a3[_0x1f9af8(0x4b3)]&&_0x71f225)_0x2afe23+=_0x1f9af8(0x4bf)+_0x2332ac((_0x2600a3[_0x1f9af8(0x2b2)]||_0x1f9af8(0x24f))+'+'+(_0x2600a3[_0x1f9af8(0x21f)]||'https://223.5.5.5/dns-query'));return _0x1f9af8(0x376)+(_0x2600a3['trojanPassword']||_0x2600a3[_0x1f9af8(0x2cc)])+'@'+_0xf74529+':'+_0x1549aa+'?'+_0x2afe23+'#'+encodeURIComponent(_0x448c62);}const DNH_CACHE=new Map();function fetchTimeout(_0x1b08e8,_0x3d2c5a,_0x488b96){return new Promise(_0x1622b1=>{const _0x50495c=_0x29fe,_0x2caeba=new AbortController(),_0xac5627=setTimeout(()=>_0x2caeba[_0x50495c(0x241)](),_0x488b96);fetch(_0x1b08e8,Object['assign']({},_0x3d2c5a,{'signal':_0x2caeba['signal']}))[_0x50495c(0x254)](_0xee5a02=>{clearTimeout(_0xac5627),_0x1622b1(_0xee5a02);})[_0x50495c(0x2d8)](()=>{clearTimeout(_0xac5627),_0x1622b1(null);});});}async function resolvePreferredDomains(_0x26f214,_0x1ea0c7=0x64,_0x392c92=0x12c,_0x26d141=![],_0x5cbac7=!![],_0x275c3f=![]){const _0xe009f7=_0x4fb34b,_0x5cbd6a=String(_0x26f214||'')[_0xe009f7(0x26f)](/[\n,;]+/)[_0xe009f7(0x454)](_0xa005ad=>_0xa005ad['trim']()[_0xe009f7(0x449)](/^\*\./,''))['filter'](Boolean),_0x57f724=Date['now'](),_0x2c09dc=[_0xe009f7(0x2b0),_0xe009f7(0x345)],_0x4d6fd5=async(_0x570f7a,_0xb4a5aa,_0x4f1988)=>{const _0xf9dd46=_0xe009f7,_0x1b01fc=_0x2c09dc['map'](async _0x301bc9=>{const _0x49a0ec=_0x29fe,_0xfb48a1=await fetchTimeout(_0x301bc9+_0x49a0ec(0x1ce)+encodeURIComponent(_0x570f7a)+_0x49a0ec(0x3f4)+_0xb4a5aa,{'headers':{'accept':_0x49a0ec(0x2ee)}},0xfa0);if(!_0xfb48a1||!_0xfb48a1['ok'])throw new Error(_0x49a0ec(0x1f2));const _0x5635fd=await _0xfb48a1[_0x49a0ec(0x393)](),_0x278f75=(_0x5635fd[_0x49a0ec(0x3c7)]||[])[_0x49a0ec(0x1cf)](_0x331bcc=>_0x331bcc[_0x49a0ec(0x44e)]===_0x4f1988&&(_0xb4a5aa==='A'?/^\d+\.\d+\.\d+\.\d+$/['test'](_0x331bcc[_0x49a0ec(0x1df)]):/^[0-9a-fA-F:]+$/['test'](_0x331bcc[_0x49a0ec(0x1df)])))[_0x49a0ec(0x454)](_0x5c9c88=>_0x5c9c88[_0x49a0ec(0x1df)]);if(!_0x278f75[_0x49a0ec(0x1b7)])throw new Error(_0x49a0ec(0x495));return _0x278f75;});try{return await Promise[_0xf9dd46(0x330)](_0x1b01fc);}catch(_0x242809){return[];}},_0x49c104=await Promise['all'](_0x5cbd6a[_0xe009f7(0x454)](async _0x1975d2=>{const _0x478f0a=_0xe009f7;if(_0x1975d2[_0x478f0a(0x307)]('://')){const _0x34d070=_0x478f0a(0x41f)+_0x1975d2+(_0x26d141?'|rf':'')+(_0x5cbac7?'':_0x478f0a(0x46d)),_0x405ebd=DNH_CACHE[_0x478f0a(0x2a4)](_0x34d070);if(_0x405ebd&&_0x57f724-_0x405ebd['t']<0xa*0x3c*0x3e8)return _0x405ebd['ips'][_0x478f0a(0x396)](0x0,_0x1ea0c7);try{const _0x774777=await fetchTimeout(_0x1975d2,{},0x1770);if(!_0x774777||!_0x774777['ok'])throw new Error(_0x478f0a(0x435));const _0x23d54a=await _0x774777[_0x478f0a(0x207)](),_0x4843e0=new Set(),_0x1652f6={},_0x51ef86=[],_0x3656a2=isTrustedRegionPool(_0x1975d2);for(const _0x4ef07c of _0x23d54a[_0x478f0a(0x26f)](/\r?\n/)){if(_0x51ef86['length']>=_0x1ea0c7)break;const _0x47b072=_0x4ef07c[_0x478f0a(0x428)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!_0x47b072)continue;const _0x21aa70=_0x47b072[0x1],_0x4e4fb1=_0x47b072[0x2]?parseInt(_0x47b072[0x2]):0x1bb,_0x1a08c7=_0x21aa70+':'+_0x4e4fb1;if(_0x4843e0[_0x478f0a(0x283)](_0x1a08c7))continue;if(_0x5cbac7&&!isCloudflareIP(_0x21aa70)&&!_0x3656a2)continue;_0x4843e0['add'](_0x1a08c7);const _0x7a5b59=(_0x47b072[0x3]||'')['trim']();if(_0x7a5b59&&!/[\u4e00-\u9fa5]/[_0x478f0a(0x3a5)](_0x7a5b59)&&!_0x7a5b59[_0x478f0a(0x307)]('|')){_0x51ef86[_0x478f0a(0x33a)]({'ip':_0x21aa70,'port':_0x4e4fb1,'name':_0x7a5b59,..._0x3656a2?{'relay':!![]}:{}});continue;}let _0x5e7c25='';if(_0x47b072[0x3]){const _0x413e07=_0x47b072[0x3][_0x478f0a(0x428)](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(_0x413e07){const _0x5f37ec=_0x413e07[0x0][_0x478f0a(0x428)](/[\u4e00-\u9fa5]{2,5}/);if(_0x5f37ec)_0x5e7c25=_0x5f37ec[0x0];}else{const _0x491428=_0x47b072[0x3][_0x478f0a(0x26f)]('|')[_0x478f0a(0x454)](_0x192fa0=>_0x192fa0[_0x478f0a(0x2ae)]()),_0x1601f3=_0x491428[_0x478f0a(0x447)](_0x1c4098=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/[_0x478f0a(0x3a5)](_0x1c4098));if(_0x1601f3){const _0x281dd7=_0x1601f3[_0x478f0a(0x428)](/[\u4e00-\u9fa5]{2,5}/);if(_0x281dd7)_0x5e7c25=_0x281dd7[0x0];}else{const _0xf6b32b=_0x491428[_0x478f0a(0x447)](_0x570169=>/^[\u4e00-\u9fa5]{2,5}$/[_0x478f0a(0x3a5)](_0x570169)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/[_0x478f0a(0x3a5)](_0x570169));if(_0xf6b32b)_0x5e7c25=_0xf6b32b;else{const _0x57ab8d=_0x47b072[0x3]['match'](/\b([A-Z]{2})\b/);if(_0x57ab8d)_0x5e7c25=REGION_CN[_0x57ab8d[0x1]]||_0x57ab8d[0x1];}}}}if(_0x5e7c25)_0x1652f6[_0x5e7c25]=(_0x1652f6[_0x5e7c25]||0x0)+0x1,_0x51ef86['push']({'ip':_0x21aa70,'port':_0x4e4fb1,'name':_0x5e7c25+'-'+String(_0x1652f6[_0x5e7c25])[_0x478f0a(0x515)](0x2,'0'),..._0x3656a2?{'relay':!![]}:{}});else _0x51ef86[_0x478f0a(0x33a)]({'ip':_0x21aa70,'port':_0x4e4fb1,'name':'',..._0x3656a2?{'relay':!![]}:{}});}if(!_0x51ef86[_0x478f0a(0x1b7)]&&_0x26d141){const _0x46b8de=(String(_0x1975d2)[_0x478f0a(0x428)](/\/([A-Z]{2})\//)||[])[0x1]||String(_0x1975d2)['replace'](/^https?:\/\//,'')['split']('.')[0x0];if(REGION_CN[_0x46b8de]){const _0x37ccaa=randomIPsFromCidrs(_0x275c3f?REACHABLE_CIDRS_V6:REACHABLE_CIDRS,_0x1ea0c7);_0x37ccaa['forEach']((_0x12a6f7,_0x3539f2)=>_0x51ef86[_0x478f0a(0x33a)]({'ip':_0x12a6f7,'port':0x1bb,'name':REGION_CN[_0x46b8de]+'-'+String(_0x3539f2+0x1)[_0x478f0a(0x515)](0x2,'0')}));}}return DNH_CACHE[_0x478f0a(0x30b)](_0x34d070,{'t':_0x57f724,'ips':_0x51ef86}),_0x51ef86[_0x478f0a(0x396)]();}catch(_0x476b55){const _0x103606=DNH_CACHE[_0x478f0a(0x2a4)](_0x34d070);if(_0x103606&&_0x103606[_0x478f0a(0x43f)]&&_0x103606[_0x478f0a(0x43f)]['length'])return _0x103606['ips'][_0x478f0a(0x396)](0x0,_0x1ea0c7);return[];}}if(!/^[a-z0-9.-]+\.[a-z]{2,}$/i['test'](_0x1975d2))return[];const _0x1d8e00=DNH_CACHE[_0x478f0a(0x2a4)](_0x1975d2);if(_0x1d8e00&&_0x57f724-_0x1d8e00['t']<0xa*0x3c*0x3e8)return _0x1d8e00['ips'][_0x478f0a(0x396)](0x0,_0x1ea0c7)[_0x478f0a(0x454)]((_0x17e629,_0x1d1185)=>({'ip':_0x17e629,'port':0x1bb,'name':_0x1975d2+'-'+(_0x1d1185+0x1)}));const _0x21aed5=await _0x4d6fd5(_0x1975d2,'A',0x1);let _0x20aaff=_0x21aed5[_0x478f0a(0x1cf)](isCloudflareIP);if(_0x275c3f){const _0x36749f=await _0x4d6fd5(_0x1975d2,_0x478f0a(0x395),0x1c);_0x20aaff=[...new Set(_0x21aed5[_0x478f0a(0x47b)](_0x36749f))]['filter'](isCloudflareIP);}_0x20aaff=_0x20aaff[_0x478f0a(0x396)](0x0,_0x1ea0c7);if(!_0x20aaff[_0x478f0a(0x1b7)]){if(_0x1d8e00&&_0x1d8e00[_0x478f0a(0x43f)]&&_0x1d8e00['ips'][_0x478f0a(0x1b7)])return _0x1d8e00[_0x478f0a(0x43f)][_0x478f0a(0x396)](0x0,_0x1ea0c7)[_0x478f0a(0x454)]((_0x251591,_0x494bfc)=>({'ip':_0x251591,'port':0x1bb,'name':_0x1975d2+'-'+(_0x494bfc+0x1)}));return[];}return DNH_CACHE[_0x478f0a(0x30b)](_0x1975d2,{'t':_0x57f724,'ips':_0x20aaff}),_0x20aaff[_0x478f0a(0x454)]((_0x5b08b3,_0x10476f)=>({'ip':_0x5b08b3,'port':0x1bb,'name':_0x1975d2+'-'+(_0x10476f+0x1)}));})),_0x41845e=[];let _0x4c9903=0x0;while(_0x4c9903<_0x392c92){let _0x1e8481=![];for(const _0x57d518 of _0x49c104){if(_0x4c9903>=_0x392c92)break;_0x57d518[_0xe009f7(0x1b7)]&&(_0x41845e['push'](_0x57d518[_0xe009f7(0x22d)]()),_0x4c9903++,_0x1e8481=!![]);}if(!_0x1e8481)break;}return _0x41845e;}async function buildNodes(_0x11401e,_0x44d337=0x320,_0x52d63f=null){const _0x1492f8=_0x4fb34b,_0x449715=[],_0x37442d=new Set(),_0x20b43c=_0x11401e[_0x1492f8(0x3d1)]&&_0x11401e[_0x1492f8(0x3d1)][_0x1492f8(0x38a)]||'',_0x1b1abb=_0x11401e[_0x1492f8(0x1cf)]&&_0x11401e[_0x1492f8(0x1cf)][_0x1492f8(0x365)]||[],_0x4f64ff=_0x1b1abb[_0x1492f8(0x307)](_0x1492f8(0x33d)),_0x1158af=_0x1b1abb[_0x1492f8(0x1b7)]===0x1&&_0x1b1abb[0x0]===_0x1492f8(0x33d),_0x3145eb=_0x1158af?OFFICIAL_V6_CIDRS:_0x4f64ff?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x366e2d=_0x20b43c===_0x1492f8(0x297)&&!(_0x11401e[_0x1492f8(0x3d1)]&&_0x11401e[_0x1492f8(0x3d1)][_0x1492f8(0x285)]),_0x4c1c6d=(_0xce0d01,_0x48b389,_0x4f8a5b,_0x5a9e1f)=>{const _0x3ff1f7=_0x1492f8;if(_0x449715[_0x3ff1f7(0x1b7)]>=_0x44d337)return;if(isValidIp(_0xce0d01)&&!isCloudflareIP(_0xce0d01)&&!_0x366e2d&&!_0x5a9e1f)return;const _0x457625=_0xce0d01+':'+_0x48b389;if(_0x37442d[_0x3ff1f7(0x283)](_0x457625))return;_0x37442d[_0x3ff1f7(0x464)](_0x457625);const _0x4fb6fd=!HTTP_PORTS['has'](Number(_0x48b389));if(_0x11401e[_0x3ff1f7(0x4a9)]&&!_0x4fb6fd)return;const _0x574d84=_0x4fb6fd?TLS_PORTS[Math[_0x3ff1f7(0x3a9)](Math['random']()*TLS_PORTS[_0x3ff1f7(0x1b7)])]:Number(_0x48b389);if(_0x11401e[_0x3ff1f7(0x27e)])_0x449715[_0x3ff1f7(0x33a)](vlessNode(_0x11401e,_0xce0d01,_0x574d84,_0x4f8a5b));if(_0x11401e['enableTrojan'])_0x449715[_0x3ff1f7(0x33a)](trojanNode(_0x11401e,_0xce0d01,_0x4fb6fd?_0x574d84:Number(_0x48b389),_0x4f8a5b));if(_0x11401e[_0x3ff1f7(0x378)]&&_0x4fb6fd)_0x449715[_0x3ff1f7(0x33a)](vlessNode(_0x11401e,_0xce0d01,_0x574d84,_0x4f8a5b,{'type':'xhttp'}));},_0x69f181=(_0xa1044d,_0x594567,_0x2cc7e1,_0xb52b15)=>{const _0x1e4d02=_0x1492f8,_0x19aad2=Number(_0x594567)||0x1bb;_0x4c1c6d(_0xa1044d,_0x19aad2,_0x2cc7e1,_0xb52b15);if(_0x11401e[_0x1e4d02(0x4a9)])return;if(HTTP_PORTS[_0x1e4d02(0x283)](_0x19aad2))return;const _0x27f566=HTTP_PORTS_LIST[hashStr(String(_0xa1044d))%HTTP_PORTS_LIST[_0x1e4d02(0x1b7)]];_0x4c1c6d(_0xa1044d,_0x27f566,_0x2cc7e1+'-'+_0x27f566,_0xb52b15);};if(_0x20b43c===_0x1492f8(0x3e4)){let _0x2035d2=Math[_0x1492f8(0x44a)](Math[_0x1492f8(0x438)](parseInt(_0x11401e[_0x1492f8(0x3d1)][_0x1492f8(0x3fd)])||0x10,0x1),Math[_0x1492f8(0x44a)](0x63,_0x44d337));if(_0x11401e[_0x1492f8(0x427)]){const _0x266c4d=parseInt(_0x11401e['nodeLimitCount'])||0x0;if(_0x266c4d>0x0)_0x2035d2=Math[_0x1492f8(0x44a)](Math[_0x1492f8(0x438)](_0x2035d2,_0x266c4d),_0x44d337);}const _0x4d899a=(_0x11401e[_0x1492f8(0x27e)]?0x1:0x0)+(_0x11401e[_0x1492f8(0x296)]?0x1:0x0)+(_0x11401e[_0x1492f8(0x378)]?0x1:0x0)||0x1;let _0x2cd33c=0x0;const _0x1aa9e7=randomIPsFromCidrs(_0x3145eb,Math[_0x1492f8(0x21b)](_0x2035d2/_0x4d899a)*0x3);let _0x3fe37a=_0x1aa9e7;if(_0x52d63f){const _0x5e6a8=_0x1aa9e7[_0x1492f8(0x1cf)](_0x59ee10=>!_0x52d63f['has'](_0x59ee10)),_0x560aa6=_0x1aa9e7['filter'](_0x518801=>_0x52d63f[_0x1492f8(0x283)](_0x518801));_0x3fe37a=[..._0x5e6a8,..._0x560aa6];}for(const _0x4307ab of _0x3fe37a){if(_0x2cd33c>=_0x2035d2)break;const _0x342477=HTTP_PORTS_LIST[hashStr(String(_0x4307ab))%HTTP_PORTS_LIST[_0x1492f8(0x1b7)]],_0x446160=TLS_PORTS[Math[_0x1492f8(0x3a9)](Math[_0x1492f8(0x3e4)]()*TLS_PORTS[_0x1492f8(0x1b7)])];_0x11401e['enableVless']&&(_0x449715['push'](vlessNode(_0x11401e,_0x4307ab,_0x446160,_0x1492f8(0x2fb)+String(_0x2cd33c+0x1)[_0x1492f8(0x515)](0x2,'0'))),_0x2cd33c++);if(_0x2cd33c>=_0x2035d2)break;_0x11401e['enableVless']&&!_0x11401e['tlsOnly']&&(_0x449715[_0x1492f8(0x33a)](vlessNode(_0x11401e,_0x4307ab,_0x342477,'优选IP-'+String(_0x2cd33c+0x1)[_0x1492f8(0x515)](0x2,'0')+'-'+_0x342477)),_0x2cd33c++);if(_0x2cd33c>=_0x2035d2)break;_0x11401e[_0x1492f8(0x296)]&&(_0x449715['push'](trojanNode(_0x11401e,_0x4307ab,_0x446160,'优选IP-'+String(_0x2cd33c+0x1)['padStart'](0x2,'0'))),_0x2cd33c++);if(_0x2cd33c>=_0x2035d2)break;_0x11401e[_0x1492f8(0x296)]&&!_0x11401e[_0x1492f8(0x4a9)]&&(_0x449715['push'](trojanNode(_0x11401e,_0x4307ab,_0x342477,'优选IP-'+String(_0x2cd33c+0x1)[_0x1492f8(0x515)](0x2,'0')+'-'+_0x342477)),_0x2cd33c++);if(_0x2cd33c>=_0x2035d2)break;_0x11401e[_0x1492f8(0x378)]&&(_0x449715[_0x1492f8(0x33a)](vlessNode(_0x11401e,_0x4307ab,_0x446160,_0x1492f8(0x2fb)+String(_0x2cd33c+0x1)['padStart'](0x2,'0'),{'type':_0x1492f8(0x20c)})),_0x2cd33c++);}return _0x449715;}const _0x4ff826=String(_0x11401e[_0x1492f8(0x3b6)]||'')[_0x1492f8(0x26f)](/[\n,;]+/)[_0x1492f8(0x454)](_0x5d26c0=>_0x5d26c0[_0x1492f8(0x2ae)]())[_0x1492f8(0x1cf)](_0x24961c=>_0x24961c&&!_0x24961c[_0x1492f8(0x307)]('://'));_0x4ff826[_0x1492f8(0x2ff)]((_0x455318,_0x84eaa2)=>{const _0x3f4168=_0x1492f8,_0x5e0add=_0x455318[_0x3f4168(0x276)]('#'),_0x2812e6=(_0x5e0add>=0x0?_0x455318['slice'](0x0,_0x5e0add):_0x455318)[_0x3f4168(0x2ae)](),_0x429e4b=(_0x5e0add>=0x0?_0x455318[_0x3f4168(0x396)](_0x5e0add+0x1):'')[_0x3f4168(0x2ae)](),_0x2104dd=parseHostPort(_0x2812e6,0x1bb);if(_0x2104dd['host'][_0x3f4168(0x4ca)]('*.'))return;_0x69f181(_0x2104dd[_0x3f4168(0x480)],_0x2104dd[_0x3f4168(0x3bc)],_0x429e4b||_0x3f4168(0x2fb)+String(_0x84eaa2+0x1)[_0x3f4168(0x515)](0x2,'0'));});let _0x2ea251=_0x11401e['preferredIPs']||[];if(_0x4f64ff&&!_0x1158af&&_0x2ea251[_0x1492f8(0x1b7)]>0x1){const _0x124e24=[],_0x3604f4=[];for(const _0x2ed2df of _0x2ea251)(String(_0x2ed2df['ip'])[_0x1492f8(0x276)](':')>=0x0?_0x3604f4:_0x124e24)[_0x1492f8(0x33a)](_0x2ed2df);const _0x2dd71e=[],_0x23bee4=Math['max'](_0x124e24['length'],_0x3604f4[_0x1492f8(0x1b7)]);for(let _0x24c677=0x0;_0x24c677<_0x23bee4;_0x24c677++){if(_0x24c677<_0x124e24[_0x1492f8(0x1b7)])_0x2dd71e['push'](_0x124e24[_0x24c677]);if(_0x24c677<_0x3604f4[_0x1492f8(0x1b7)])_0x2dd71e[_0x1492f8(0x33a)](_0x3604f4[_0x24c677]);}_0x2ea251=_0x2dd71e;}_0x2ea251['forEach']((_0x151515,_0x31b2ab)=>{const _0x30a3b4=_0x1492f8;_0x69f181(_0x151515['ip'],_0x151515[_0x30a3b4(0x3bc)]||0x1bb,_0x151515['name']||'优选IP-'+String(_0x31b2ab+0x1)[_0x30a3b4(0x515)](0x2,'0'),_0x151515[_0x30a3b4(0x227)]===!![]);});if(_0x20b43c===_0x1492f8(0x297)&&!(_0x11401e['optimizer']&&_0x11401e['optimizer'][_0x1492f8(0x285)]))return _0x449715;!_0x4ff826[_0x1492f8(0x1b7)]&&!(_0x11401e['preferredIPs']||[])[_0x1492f8(0x1b7)]&&(parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a'))['forEach'](_0x78037f=>_0x69f181(_0x78037f['ip'],_0x78037f['port']||0x1bb,_0x78037f[_0x1492f8(0x277)]||'0')),BUILTIN_OFFICIAL_DOMAINS[_0x1492f8(0x2ff)]((_0x3b4ed7,_0x22bc8a)=>_0x69f181(_0x3b4ed7,0x1bb,'域名-'+String(_0x22bc8a+0x1)[_0x1492f8(0x515)](0x2,'0'))));const _0x4d694a=Math[_0x1492f8(0x44a)](Math[_0x1492f8(0x438)](parseInt(_0x11401e[_0x1492f8(0x3d1)]&&_0x11401e[_0x1492f8(0x3d1)][_0x1492f8(0x28e)]||0x0)||0x0,0x0),0x1388),_0xe5064c=Math[_0x1492f8(0x44a)](_0x4d694a,_0x44d337)-_0x37442d[_0x1492f8(0x222)];if(_0xe5064c>0x0){const _0x1b2e1a=_0x52d63f?BUILTIN_STABLE_IPS[_0x1492f8(0x1cf)](_0x1bb470=>!_0x52d63f[_0x1492f8(0x283)](_0x1bb470)):BUILTIN_STABLE_IPS['slice'](),_0x13e1d2=randomIPsFromCidrs(_0x3145eb,_0xe5064c*0x3),_0x3be4d2=_0x52d63f?_0x13e1d2[_0x1492f8(0x1cf)](_0x2d82a1=>!_0x52d63f[_0x1492f8(0x283)](_0x2d82a1)):_0x13e1d2;let _0x42bd0b=[..._0x1b2e1a,..._0x3be4d2];if(_0x42bd0b[_0x1492f8(0x1b7)]<_0xe5064c)_0x42bd0b=[...BUILTIN_STABLE_IPS,..._0x13e1d2];if(_0x42bd0b[_0x1492f8(0x1b7)]>0x0){const _0x411036=Math[_0x1492f8(0x44a)](_0x42bd0b[_0x1492f8(0x1b7)],Math[_0x1492f8(0x438)](_0xe5064c,0x14),0x3c),_0x30f216=_0x42bd0b['slice'](0x0,_0x411036)['map'](_0x4d0296=>testProxyAlive(_0x4d0296,0x1bb,0x5dc)[_0x1492f8(0x254)](_0x2a2b39=>({'ip':_0x4d0296,'ok':_0x2a2b39}))),_0x1ad1e6=await Promise[_0x1492f8(0x2d5)](_0x30f216),_0x1086fd=_0x1ad1e6['filter'](_0x3f948d=>_0x3f948d['ok'])[_0x1492f8(0x454)](_0x5de3ee=>_0x5de3ee['ip']),_0x372341=_0x42bd0b[_0x1492f8(0x396)](_0x411036);_0x42bd0b=[..._0x1086fd,..._0x372341][_0x1492f8(0x396)](0x0,_0xe5064c);}let _0x446c2f=0x0;for(const _0x5a77c9 of _0x42bd0b){if(_0x449715[_0x1492f8(0x1b7)]>=_0x44d337)break;_0x446c2f++,_0x69f181(_0x5a77c9,0x1bb,'优选IP-'+String(_0x446c2f)[_0x1492f8(0x515)](0x3,'0'));}}return _0x449715;}function parseNodeServer(_0x3bd82c){const _0x275117=_0x4fb34b,_0x50fdd3=_0x3bd82c[_0x275117(0x276)]('@'),_0x5409c3=_0x3bd82c[_0x275117(0x276)]('?',_0x50fdd3),_0x54dd6a=_0x5409c3>_0x50fdd3&&_0x50fdd3>=0x0?_0x3bd82c[_0x275117(0x396)](_0x50fdd3+0x1,_0x5409c3):_0x3bd82c['slice'](_0x50fdd3+0x1);if(_0x54dd6a['startsWith']('[')){const _0x4b7382=_0x54dd6a[_0x275117(0x276)](']'),_0x430a0f=_0x4b7382>0x0?_0x54dd6a[_0x275117(0x396)](0x1,_0x4b7382):_0x54dd6a,_0x5f8919=_0x54dd6a[_0x275117(0x396)](_0x4b7382+0x1),_0x5b78f8=_0x5f8919[_0x275117(0x4ca)](':')?parseInt(_0x5f8919[_0x275117(0x396)](0x1)):0x1bb;return{'host':_0x430a0f,'port':isNaN(_0x5b78f8)?0x1bb:_0x5b78f8};}const _0x315089=_0x54dd6a[_0x275117(0x3c5)](':');if(_0x315089>0x0){const _0x2605ea=parseInt(_0x54dd6a[_0x275117(0x396)](_0x315089+0x1));return{'host':_0x54dd6a[_0x275117(0x396)](0x0,_0x315089),'port':isNaN(_0x2605ea)?0x1bb:_0x2605ea};}return{'host':_0x54dd6a,'port':0x1bb};}function getParam(_0x732366,_0x5c2c46){const _0x45b41e=_0x4fb34b,_0x31c886=_0x732366[_0x45b41e(0x276)]('?');if(_0x31c886<0x0)return null;const _0x17dc92=_0x732366[_0x45b41e(0x276)]('#',_0x31c886),_0x1e78c3=_0x17dc92>_0x31c886?_0x732366[_0x45b41e(0x396)](_0x31c886+0x1,_0x17dc92):_0x732366[_0x45b41e(0x396)](_0x31c886+0x1);for(const _0xfaa479 of _0x1e78c3[_0x45b41e(0x26f)]('&')){const _0xe221ff=_0xfaa479['indexOf']('='),_0x3ad1c8=_0xe221ff>0x0?_0xfaa479[_0x45b41e(0x396)](0x0,_0xe221ff):_0xfaa479;if(_0x3ad1c8===_0x5c2c46)return _0xe221ff>0x0?decodeURIComponent(_0xfaa479[_0x45b41e(0x396)](_0xe221ff+0x1)):'';}return null;}function parseShareNode(_0xc13883,_0x353e9d){const _0x275075=_0x4fb34b,{host:_0xe5f869,port:_0x414b37}=parseNodeServer(_0xc13883),_0x4c4fd2=_0xe5f869,_0x3974fc=_0xc13883[_0x275075(0x276)]('#');let _0x381151='节点'+(_0x353e9d+0x1);if(_0x3974fc>=0x0)try{_0x381151=decodeURIComponent(_0xc13883[_0x275075(0x396)](_0x3974fc+0x1))||_0x381151;}catch(_0x5c9887){}const _0xf2f5a2=_0xc13883[_0x275075(0x276)]('@');let _0xa081f1='';if(_0xf2f5a2>=0x0){const _0x3a2056=_0xc13883[_0x275075(0x276)](_0x275075(0x1bf)),_0x316478=_0x3a2056>=0x0?_0x3a2056+0x3:0x0;try{_0xa081f1=decodeURIComponent(_0xc13883[_0x275075(0x396)](_0x316478,_0xf2f5a2));}catch(_0x3f3927){_0xa081f1=_0xc13883[_0x275075(0x396)](_0x316478,_0xf2f5a2);}}const _0x1783eb=_0xc13883[_0x275075(0x4ca)](_0x275075(0x376)),_0x225089=_0x1783eb||(getParam(_0xc13883,_0x275075(0x49b))||_0x275075(0x280))==='tls';return{'srv':_0x4c4fd2,'prt':_0x414b37,'name':_0x381151,'user':_0xa081f1,'isTrojan':_0x1783eb,'tls':_0x225089};}const REGION_TAGS={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG',_0x4fb34b(0x3f5)],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},ISP_TAGS={'移动':['移动','CM',_0x4fb34b(0x299)],'联通':['联通','CU','UNICOM'],'电信':['电信','CT','CHINATELECOM']},FILTER_ISPS=['移动','联通','电信'],FILTER_IPTYPES=[_0x4fb34b(0x511),_0x4fb34b(0x33d)];function filterNodes(_0x2366f2,_0x27bba4){const _0x322c86=_0x4fb34b;if(!_0x27bba4||!_0x27bba4[_0x322c86(0x4c0)]&&!_0x27bba4[_0x322c86(0x365)]&&!_0x27bba4[_0x322c86(0x30f)])return _0x2366f2;const _0x3cbe85=_0x27bba4['region']||_0x322c86(0x2d5),_0x2a045b=_0x27bba4[_0x322c86(0x365)]||FILTER_IPTYPES,_0x2d6f2c=_0x27bba4[_0x322c86(0x30f)]||FILTER_ISPS,_0x3fcd6f=_0x2366f2['map'](_0x5b9825=>{const _0xec09ec=_0x322c86,{host:_0x1d417c}=parseNodeServer(_0x5b9825);let _0x43b07b='';try{const _0x5a6e8b=_0x5b9825[_0xec09ec(0x276)]('#');if(_0x5a6e8b>=0x0)_0x43b07b=decodeURIComponent(_0x5b9825[_0xec09ec(0x396)](_0x5a6e8b+0x1)||'');}catch(_0x5d767d){_0x43b07b='';}return{'host':_0x1d417c,'name':_0x43b07b,'up':_0x43b07b[_0xec09ec(0x25d)]()};}),_0x51267e=_0x3fcd6f[_0x322c86(0x3b2)](_0x497bac=>_0x497bac['up']&&Object[_0x322c86(0x463)](ISP_TAGS)[_0x322c86(0x3b2)](_0x2f2465=>(ISP_TAGS[_0x2f2465]||[_0x2f2465])['some'](_0x16109a=>_0x497bac['up'][_0x322c86(0x307)](_0x16109a[_0x322c86(0x25d)]())))),_0x405116=(_0x58846c,_0x1bff01,_0xf084e3)=>{const _0x802bb=_0x322c86,_0x2dd92f=Array[_0x802bb(0x1f8)](_0x58846c)?_0x58846c[_0x802bb(0x1b7)]===0x0||_0x58846c['includes'](_0x802bb(0x2d5))?null:_0x58846c[_0x802bb(0x341)](_0x5aacf2=>REGION_TAGS[_0x5aacf2]||[]):_0x58846c!=='all'?REGION_TAGS[_0x58846c]||[]:null,_0x5e5203=_0xf084e3[_0x802bb(0x1b7)]>0x0&&_0xf084e3['length']<FILTER_ISPS[_0x802bb(0x1b7)];return _0x2366f2['filter']((_0x1a4b9c,_0x47c725)=>{const _0x34f43e=_0x802bb,_0x1b7d3a=_0x3fcd6f[_0x47c725],_0x4b0ce6=_0x1b7d3a['host']['indexOf'](':')>=0x0;if(!_0x1b7d3a['name'])return![];if(_0x2dd92f&&!_0x2dd92f[_0x34f43e(0x3b2)](_0xab7673=>_0x1b7d3a['up'][_0x34f43e(0x307)](_0xab7673[_0x34f43e(0x25d)]()))){if(!/^(优选IP|域名)-\d+/['test'](_0x1b7d3a[_0x34f43e(0x277)])&&_0x1b7d3a[_0x34f43e(0x277)]!==_0x34f43e(0x2df))return![];}if(_0x1bff01[_0x34f43e(0x1b7)]===0x1){if(_0x1bff01[0x0]==='IPv4'&&_0x4b0ce6)return![];if(_0x1bff01[0x0]===_0x34f43e(0x33d)&&!_0x4b0ce6)return![];}if(_0x5e5203&&_0x51267e&&!_0xf084e3[_0x34f43e(0x3b2)](_0x29ae1c=>(ISP_TAGS[_0x29ae1c]||[_0x29ae1c])[_0x34f43e(0x3b2)](_0x1220b9=>_0x1b7d3a['up'][_0x34f43e(0x307)](_0x1220b9[_0x34f43e(0x25d)]()))))return![];return!![];});};let _0xa488c9=_0x405116(_0x3cbe85,_0x2a045b,_0x2d6f2c);if(!_0xa488c9[_0x322c86(0x1b7)])_0xa488c9=_0x405116(_0x3cbe85,_0x2a045b,FILTER_ISPS);if(!_0xa488c9[_0x322c86(0x1b7)])_0xa488c9=_0x405116(_0x3cbe85,FILTER_IPTYPES,FILTER_ISPS);if(!_0xa488c9[_0x322c86(0x1b7)])_0xa488c9=_0x405116(_0x322c86(0x2d5),FILTER_IPTYPES,FILTER_ISPS);return _0xa488c9;}function yamlVal(_0x449174){const _0x102715=_0x4fb34b;if(typeof _0x449174===_0x102715(0x1e7)||typeof _0x449174===_0x102715(0x223))return String(_0x449174);const _0x5538f1=String(_0x449174);return/^[\w.\-/\u4e00-\u9fa5]+$/['test'](_0x5538f1)?_0x5538f1:JSON[_0x102715(0x31e)](_0x5538f1);}function clashProxyYaml(_0x4eb139){const _0x2a7bb1=_0x4fb34b,_0x3a4cbd=[];_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x23c)+yamlVal(_0x4eb139[_0x2a7bb1(0x277)])),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x381)+_0x4eb139[_0x2a7bb1(0x44e)]),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x1d2)+yamlVal(_0x4eb139['server'])),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x4f2)+_0x4eb139[_0x2a7bb1(0x3bc)]);if(_0x4eb139[_0x2a7bb1(0x44e)]===_0x2a7bb1(0x294))_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x244)+yamlVal(_0x4eb139[_0x2a7bb1(0x2cc)]));else _0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x414)+yamlVal(_0x4eb139['password']));_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x31b)+_0x4eb139[_0x2a7bb1(0x293)]),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x503));if(_0x4eb139['tls']){_0x3a4cbd['push'](_0x2a7bb1(0x418)),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x500)),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x263)),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x46e)+yamlVal(_0x4eb139[_0x2a7bb1(0x26e)]));if(_0x4eb139[_0x2a7bb1(0x44e)]===_0x2a7bb1(0x4fc))_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x4d2)+yamlVal(_0x4eb139[_0x2a7bb1(0x26e)]));_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x336)),_0x4eb139[_0x2a7bb1(0x1bd)]&&(_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x3d2)),_0x3a4cbd['push'](_0x2a7bb1(0x4b1)),_0x3a4cbd['push'](_0x2a7bb1(0x3d6)));}if(_0x4eb139[_0x2a7bb1(0x293)]==='ws')_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x1e1)),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x40b)+yamlVal(_0x4eb139[_0x2a7bb1(0x25c)][_0x2a7bb1(0x2fe)])),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x304)),_0x3a4cbd[_0x2a7bb1(0x33a)]('\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20'+yamlVal(_0x4eb139['ws-opts'][_0x2a7bb1(0x32b)][_0x2a7bb1(0x43d)]));else{if(_0x4eb139[_0x2a7bb1(0x293)]===_0x2a7bb1(0x20c)){const _0x4754ff=_0x4eb139[_0x2a7bb1(0x3e3)];_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x1da)),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x40b)+yamlVal(_0x4754ff[_0x2a7bb1(0x2fe)])),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x3bd)+yamlVal(_0x4754ff['mode'])),_0x3a4cbd['push'](_0x2a7bb1(0x304)),_0x3a4cbd[_0x2a7bb1(0x33a)]('\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20'+yamlVal(_0x4754ff[_0x2a7bb1(0x32b)][_0x2a7bb1(0x43d)])),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x1c9)+yamlVal(_0x4754ff[_0x2a7bb1(0x1d7)])),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x4da)+yamlVal(_0x4754ff['x-padding-method'])),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x32f)+yamlVal(_0x4754ff[_0x2a7bb1(0x2e0)])),_0x3a4cbd[_0x2a7bb1(0x33a)](_0x2a7bb1(0x4d9)+yamlVal(_0x4754ff[_0x2a7bb1(0x46c)])),_0x3a4cbd[_0x2a7bb1(0x33a)]('\x20\x20\x20\x20\x20\x20x-padding-key:\x20'+yamlVal(_0x4754ff[_0x2a7bb1(0x47a)]));}}return _0x3a4cbd[_0x2a7bb1(0x4bb)]('\x0a');}function generateClash(_0x279229,_0xb093b6){const _0x26249c=_0x4fb34b,_0x4df8a4=_0x279229[_0x26249c(0x480)],_0x3f6712='/'+_0x279229['path'],_0x3605c9=new Set(),_0x21f594=_0xb093b6[_0x26249c(0x454)](_0x1d3b45=>{const _0x340e2e=_0x26249c,{user:_0x4aa242,srv:_0x24207f,prt:_0x2565f9,name:_0xa17ac0,isTrojan:_0x2d6772,tls:_0x2a8e1f}=parseShareNode(_0x1d3b45,0x0);let _0xb1ca54=_0xa17ac0;const _0x585c60=getParam(_0x1d3b45,'type')||'ws';if(_0x3605c9[_0x340e2e(0x283)](_0xb1ca54)){const _0x40cf70=_0x2d6772?'T':_0x585c60===_0x340e2e(0x20c)?'X':'W';let _0x4610c0=_0xb1ca54+'·'+_0x40cf70,_0x5dd9a3=0x2;while(_0x3605c9['has'](_0x4610c0)){_0x4610c0=_0xb1ca54+'·'+_0x40cf70+_0x5dd9a3,_0x5dd9a3++;}_0xb1ca54=_0x4610c0;}_0x3605c9[_0x340e2e(0x464)](_0xb1ca54);const _0x21c1f9={'name':_0xb1ca54,'server':_0x24207f,'port':_0x2565f9,'udp':!![],..._0x2a8e1f?{'tls':!![],'skip-cert-verify':!![],'servername':_0x4df8a4,'client-fingerprint':_0x340e2e(0x3cc),'alpn':['http/1.1']}:{},..._0x279229['ech']&&_0x2a8e1f?{'tls-opts':{'ech':{'enable':!![]}}}:{}};if(_0x2d6772)return{..._0x21c1f9,'type':'trojan','password':_0x4aa242,'network':'ws','ws-opts':{'path':_0x3f6712,'headers':{'Host':_0x4df8a4}}};if(_0x585c60===_0x340e2e(0x20c)){let _0x48f8fa={};try{_0x48f8fa=JSON['parse'](getParam(_0x1d3b45,'extra')||'{}');}catch(_0x1affb0){}return{..._0x21c1f9,'type':_0x340e2e(0x294),'uuid':_0x4aa242,'network':_0x340e2e(0x20c),'xhttp-opts':{'path':_0x3f6712,'mode':_0x340e2e(0x4b2),'headers':{'Host':_0x4df8a4},'x-padding-obfs-mode':_0x48f8fa[_0x340e2e(0x27c)]!==undefined?_0x48f8fa[_0x340e2e(0x27c)]:!![],'x-padding-method':_0x48f8fa['xPaddingMethod']||_0x340e2e(0x3f1),'x-padding-placement':_0x48f8fa['xPaddingPlacement']||_0x340e2e(0x1c4),'x-padding-header':_0x48f8fa[_0x340e2e(0x342)]||'','x-padding-key':_0x48f8fa[_0x340e2e(0x265)]||''}};}return{..._0x21c1f9,'type':_0x340e2e(0x294),'uuid':_0x4aa242,'network':'ws','ws-opts':{'path':_0x3f6712,'headers':{'Host':_0x4df8a4}}};});_0x21f594['sort']((_0x31ae71,_0x7d81a8)=>(_0x31ae71[_0x26249c(0x3bc)]===0x1bb?0x0:0x1)-(_0x7d81a8['port']===0x1bb?0x0:0x1));const _0x548728=_0x26249c(0x24d)+_0x21f594[_0x26249c(0x454)](_0xb31ef6=>clashProxyYaml(_0xb31ef6))[_0x26249c(0x4bb)]('\x0a')+'\x0a'+CLASH_TEMPLATE+'\x0a';return _0x548728;}function generateSingbox(_0xf61553,_0x1d3a04){const _0x48d766=_0x4fb34b,_0x57d4b2=_0xf61553[_0x48d766(0x480)],_0x183342='/'+_0xf61553['path'],_0x272166=_0x1d3a04[_0x48d766(0x454)]((_0x2d935d,_0x892202)=>{const _0xd8a38d=_0x48d766,{user:_0x301edc,srv:_0x4224c7,prt:_0x2e2813,name:_0x239708,isTrojan:_0x30e062,tls:_0x103cd6}=parseShareNode(_0x2d935d,_0x892202),_0x545b1f=getParam(_0x2d935d,_0xd8a38d(0x44e))||'ws',_0x213655=_0x103cd6?_0x545b1f===_0xd8a38d(0x20c)?{'enabled':!![],'server_name':_0x57d4b2,'insecure':!![],'alpn':[_0xd8a38d(0x3b1)]}:{'enabled':!![],'server_name':_0x57d4b2,'insecure':!![],'alpn':[_0xd8a38d(0x3b1)],'utls':{'enabled':!![],'fingerprint':_0xd8a38d(0x3cc)}}:{'enabled':![]},_0xddf402=_0x545b1f===_0xd8a38d(0x20c)?{'type':_0xd8a38d(0x20c),'mode':_0xd8a38d(0x4b2),'path':_0x183342}:_0x103cd6?{'type':'ws','path':_0x183342,'headers':{'Host':_0x57d4b2},'max_early_data':0x800,'early_data_header_name':_0xd8a38d(0x23b)}:{'type':'ws','path':_0x183342,'headers':{'Host':_0x57d4b2}};if(_0x30e062)return{'type':_0xd8a38d(0x4fc),'tag':_0x239708,'server':_0x4224c7,'server_port':_0x2e2813,'password':_0x301edc,'tls':_0x213655,'transport':_0xddf402};return{'type':_0xd8a38d(0x294),'tag':_0x239708,'server':_0x4224c7,'server_port':_0x2e2813,'uuid':_0x301edc,'packet_encoding':'xudp','tls':_0x213655,'transport':_0xddf402};}),_0x40fb44=_0x272166[_0x48d766(0x454)](_0x581d5a=>_0x581d5a[_0x48d766(0x4c6)]),_0x2cfede=[[_0x48d766(0x4e9),'🎯\x20全球直连'],['geosite-google','🌐\x20谷歌服务'],[_0x48d766(0x1ee),_0x48d766(0x39f)],[_0x48d766(0x430),_0x48d766(0x2f1)],[_0x48d766(0x458),_0x48d766(0x403)],[_0x48d766(0x21e),_0x48d766(0x3ad)],['geosite-youtube','🌍\x20国外媒体'],[_0x48d766(0x50f),_0x48d766(0x3ad)],[_0x48d766(0x3e1),_0x48d766(0x3ad)],['geosite-twitter','🌍\x20国外媒体'],[_0x48d766(0x4eb),_0x48d766(0x3ad)],[_0x48d766(0x371),_0x48d766(0x3ad)],[_0x48d766(0x28d),'block']],_0x1c19b7={'log':{'level':_0x48d766(0x270)},'dns':{'servers':[{'tag':_0x48d766(0x3de),'address':_0x48d766(0x35d)},{'tag':_0x48d766(0x2f6),'address':'udp://223.5.5.5'}],'strategy':_0x48d766(0x29e),'independent_cache':!![],'fakeip':{'enabled':!![],'inet4_range':_0x48d766(0x251),'store_fakeip':!![]}},'inbounds':[{'type':_0x48d766(0x239),'tag':_0x48d766(0x2eb),'listen':'127.0.0.1','listen_port':0x820,'sniff':!![],'sniff_override_destination':!![]},{'type':'tun','tag':_0x48d766(0x44b),'interface_name':_0x48d766(0x4a7),'inet4_address':[_0x48d766(0x242)],'mtu':0x2328,'auto_route':!![],'strict_route':!![],'stack':_0x48d766(0x239),'sniff':!![],'sniff_override_destination':!![]}],'outbounds':[..._0x272166,{'type':_0x48d766(0x303),'tag':_0x48d766(0x303)},{'type':_0x48d766(0x2b4),'tag':'block'},{'type':_0x48d766(0x493),'tag':_0x48d766(0x282)},{'type':_0x48d766(0x375),'tag':'🚀\x20节点选择','outbounds':_0x40fb44},{'type':'selector','tag':_0x48d766(0x2e2),'outbounds':[_0x48d766(0x303)]},{'type':_0x48d766(0x375),'tag':'🐟\x20漏网之鱼','outbounds':[_0x48d766(0x478),_0x48d766(0x2e2)]},{'type':_0x48d766(0x375),'tag':_0x48d766(0x3ad),'outbounds':[_0x48d766(0x478)]},{'type':'selector','tag':_0x48d766(0x2ef),'outbounds':[_0x48d766(0x478)]},{'type':_0x48d766(0x375),'tag':_0x48d766(0x403),'outbounds':[_0x48d766(0x478)]},{'type':'selector','tag':_0x48d766(0x39f),'outbounds':[_0x48d766(0x2e2)]},{'type':_0x48d766(0x375),'tag':_0x48d766(0x2f1),'outbounds':[_0x48d766(0x2e2)]}],'route':{'rules':[{'protocol':_0x48d766(0x493),'outbound':_0x48d766(0x282)},{'ip_is_private':!![],'outbound':_0x48d766(0x303)},..._0x2cfede[_0x48d766(0x454)](([_0x606ad3,_0x4c7b2c])=>({'rule_set':[_0x606ad3],'outbound':_0x4c7b2c})),{'ip_is_private':!![],'outbound':'block'}],'rule_set':_0x2cfede['map'](([_0x5d7028])=>({'type':_0x48d766(0x36a),'tag':_0x5d7028,'format':_0x48d766(0x4d0),'url':'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/'+_0x5d7028+_0x48d766(0x2fd)})),'final':_0x48d766(0x38f),'auto_detect_interface':!![],'default_domain_resolver':{'server':_0x48d766(0x3de)}},'experimental':{'clash_api':{'external_controller':_0x48d766(0x44d)}}};return JSON[_0x48d766(0x31e)](_0x1c19b7,null,0x2);}function generateSurge(_0x419b61,_0x7bcf99){const _0x52edb7=_0x4fb34b,_0x1a3db8=_0x419b61[_0x52edb7(0x480)],_0x230cbc='/'+_0x419b61['path'],_0x4910ed=_0x7bcf99[_0x52edb7(0x454)]((_0x55791d,_0x1fdbd1)=>{const _0x4e93f1=_0x52edb7,{user:_0xdc7c08,srv:_0x3dd0e9,prt:_0x5de3c8,name:_0x52211e,isTrojan:_0x371e17,tls:_0x5a8007}=parseShareNode(_0x55791d,_0x1fdbd1),_0x22ab0d=_0x5a8007?_0x4e93f1(0x498)+_0x1a3db8:',\x20tls=false';return _0x371e17?_0x52211e+_0x4e93f1(0x3a3)+_0x3dd0e9+',\x20'+_0x5de3c8+_0x4e93f1(0x451)+_0xdc7c08+_0x4e93f1(0x2f5)+_0x230cbc+_0x4e93f1(0x233)+_0x1a3db8+_0x22ab0d:_0x52211e+_0x4e93f1(0x3da)+_0x3dd0e9+',\x20'+_0x5de3c8+',\x20username='+_0xdc7c08+',\x20ws=true,\x20ws-path='+_0x230cbc+_0x4e93f1(0x233)+_0x1a3db8+_0x22ab0d;});return _0x52edb7(0x213)+_0x4910ed[_0x52edb7(0x4bb)]('\x0a')+_0x52edb7(0x456)+_0x4910ed['map'](_0x5606fb=>_0x5606fb[_0x52edb7(0x26f)]('\x20=\x20')[0x0])[_0x52edb7(0x4bb)](',\x20')+_0x52edb7(0x1e3);}function generateLoon(_0x56594a,_0x5945d0){const _0x803dbf=_0x4fb34b,_0x5bf04d=_0x56594a[_0x803dbf(0x480)],_0x436124='/'+_0x56594a[_0x803dbf(0x2fe)],_0x4e8e1a=_0x5945d0[_0x803dbf(0x454)]((_0x3e19ac,_0x4a4277)=>{const _0x39b3ff=_0x803dbf,{user:_0x2c6e9d,srv:_0x5ae905,prt:_0x51bd6f,name:_0x2efe9f,isTrojan:_0x3c957c,tls:_0x2f7477}=parseShareNode(_0x3e19ac,_0x4a4277),_0x541886=_0x2f7477?_0x39b3ff(0x498)+_0x5bf04d:',\x20tls=false';return _0x3c957c?_0x2efe9f+_0x39b3ff(0x3a3)+_0x5ae905+',\x20'+_0x51bd6f+_0x39b3ff(0x451)+_0x2c6e9d+_0x39b3ff(0x2f5)+_0x436124+_0x39b3ff(0x233)+_0x5bf04d+_0x541886:_0x2efe9f+_0x39b3ff(0x3da)+_0x5ae905+',\x20'+_0x51bd6f+_0x39b3ff(0x444)+_0x2c6e9d+_0x39b3ff(0x2f5)+_0x436124+_0x39b3ff(0x233)+_0x5bf04d+_0x541886;}),_0x35c8c4=_0x4e8e1a[_0x803dbf(0x454)](_0x216fce=>_0x216fce[_0x803dbf(0x26f)](_0x803dbf(0x390))[0x0])[_0x803dbf(0x4bb)](',\x20');return _0x803dbf(0x226)+_0x4e8e1a[_0x803dbf(0x4bb)]('\x0a')+_0x803dbf(0x456)+_0x35c8c4+_0x803dbf(0x3b9)+_0x35c8c4+'\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a';}function generateQuanX(_0x5e7f7a,_0x4a947a){const _0x54d6c7=_0x4fb34b,_0x5dc645=_0x5e7f7a[_0x54d6c7(0x480)],_0x498c3f='/'+_0x5e7f7a['path'],_0x38c69b=_0x213249=>_0x213249['indexOf'](':')>=0x0?'['+_0x213249+']':_0x213249,_0x36c0d0=_0x4a947a[_0x54d6c7(0x454)]((_0x16fe09,_0x515c19)=>{const _0x3630dd=_0x54d6c7,{user:_0x495e90,srv:_0x1271a9,prt:_0x5c7435,name:_0x3c70f7}=parseShareNode(_0x16fe09,_0x515c19);if(_0x16fe09[_0x3630dd(0x4ca)](_0x3630dd(0x376)))return'trojan='+_0x38c69b(_0x1271a9)+':'+_0x5c7435+_0x3630dd(0x451)+_0x495e90+_0x3630dd(0x3cd)+_0x5dc645+_0x3630dd(0x3c0)+_0x5dc645+_0x3630dd(0x2ce)+_0x498c3f+',\x20tls-verification=true,\x20tag='+_0x3c70f7;const _0x496a09=(getParam(_0x16fe09,_0x3630dd(0x49b))||_0x3630dd(0x280))===_0x3630dd(0x280);return _0x3630dd(0x312)+_0x38c69b(_0x1271a9)+':'+_0x5c7435+_0x3630dd(0x4ac)+_0x495e90+_0x3630dd(0x48f)+(_0x496a09?'wss':'ws')+_0x3630dd(0x2e4)+_0x5dc645+_0x3630dd(0x2ce)+_0x498c3f+(_0x496a09?',\x20tls-verification=true,\x20tls13=true':'')+_0x3630dd(0x21d)+_0x3c70f7;}),_0x130767=_0x4a947a[_0x54d6c7(0x454)]((_0x4d2825,_0x2c1fdb)=>{const _0x346389=_0x54d6c7,_0x5e5a54=_0x4d2825[_0x346389(0x276)]('#');if(_0x5e5a54<0x0)return'节点'+(_0x2c1fdb+0x1);try{return decodeURIComponent(_0x4d2825[_0x346389(0x396)](_0x5e5a54+0x1))||'节点'+(_0x2c1fdb+0x1);}catch(_0x43ff1d){return'节点'+(_0x2c1fdb+0x1);}})['join'](',\x20');return _0x54d6c7(0x3f2)+_0x36c0d0[_0x54d6c7(0x4bb)]('\x0a')+_0x54d6c7(0x517)+_0x130767+',\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\x0astatic=🌐\x20全球直连,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\x0astatic=🐟\x20漏网之鱼,\x20🚀\x20节点选择,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\x0a[filter_local]\x0ageoip,\x20cn,\x20🌐\x20全球直连\x0afinal,\x20🐟\x20漏网之鱼\x0a';}async function testProxyAlive(_0x305eaa,_0x2bf632,_0x43a9fb){const _0xcdfa18=_0x4fb34b,_0x3a6daa=_0x43a9fb||0x7d0;try{const _0x4c3bda=connect({'hostname':_0x305eaa,'port':_0x2bf632});await Promise[_0xcdfa18(0x1e9)]([_0x4c3bda[_0xcdfa18(0x360)],new Promise((_0x219d9f,_0x1176e9)=>setTimeout(()=>_0x1176e9(new Error(_0xcdfa18(0x237))),_0x3a6daa))]);try{_0x4c3bda[_0xcdfa18(0x509)]();}catch(_0x101f77){}return!![];}catch(_0x3330e6){return![];}}const proxyAliveCache={};async function testProxyAliveCached(_0xc007ef,_0x532f47){const _0x373305=_0x4fb34b,_0x352a24=_0xc007ef+':'+_0x532f47,_0x50f0cb=proxyAliveCache[_0x352a24];if(_0x50f0cb&&Date[_0x373305(0x486)]()-_0x50f0cb['at']<0xa*0x3c*0x3e8)return _0x50f0cb[_0x373305(0x2c4)];const _0xf4284=await testProxyAlive(_0xc007ef,_0x532f47);return proxyAliveCache[_0x352a24]={'alive':_0xf4284,'at':Date[_0x373305(0x486)]()},_0xf4284;}async function dohFirstCF(_0x20b52a){const _0x172841=_0x4fb34b;try{const _0x25f86f=await fetchTimeout(_0x172841(0x36c)+encodeURIComponent(_0x20b52a)+'&type=A',{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x25f86f||!_0x25f86f['ok'])return null;const _0x13de70=await _0x25f86f['json'](),_0x2d6064=(_0x13de70[_0x172841(0x3c7)]||[])[_0x172841(0x1cf)](_0x5e5163=>_0x5e5163[_0x172841(0x44e)]===0x1&&/^\d+\.\d+\.\d+\.\d+$/['test'](_0x5e5163[_0x172841(0x1df)]))[_0x172841(0x454)](_0x5da7fb=>_0x5da7fb[_0x172841(0x1df)]);return _0x2d6064[_0x172841(0x1cf)](isCloudflareIP)[0x0]||null;}catch(_0x2fb610){return null;}}const DOMAIN_ALIVE_CACHE={'t':0x0,'list':null};async function filterAliveDomains(_0xda9fe5){const _0x391068=_0x4fb34b;if(Date[_0x391068(0x486)]()-DOMAIN_ALIVE_CACHE['t']<0xa*0x3c*0x3e8&&DOMAIN_ALIVE_CACHE[_0x391068(0x3a0)]!==null)return DOMAIN_ALIVE_CACHE['list'];const _0x5bde04=String(_0xda9fe5||'')[_0x391068(0x26f)](/[\n,;]+/)['map'](_0x493972=>_0x493972[_0x391068(0x2ae)]()[_0x391068(0x449)](/^\*\./,''))[_0x391068(0x1cf)](Boolean),_0x2f15b2=await Promise[_0x391068(0x2d5)](_0x5bde04[_0x391068(0x454)](async _0x597c18=>{const _0x381d82=await dohFirstCF(_0x597c18);if(!_0x381d82||!isCloudflareIP(_0x381d82))return{'d':_0x597c18,'alive':![]};return{'d':_0x597c18,'alive':await testProxyAliveCached(_0x381d82,0x1bb)};})),_0xa49529=_0x2f15b2['filter'](_0x4f9fee=>_0x4f9fee['alive'])[_0x391068(0x454)](_0x498641=>_0x498641['d']);return DOMAIN_ALIVE_CACHE['t']=Date['now'](),DOMAIN_ALIVE_CACHE[_0x391068(0x3a0)]=_0xa49529['join']('\x0a'),DOMAIN_ALIVE_CACHE[_0x391068(0x3a0)];}const bestcfCache={'list':null,'at':0x0};async function fetchBestcfPool(){const _0x5ca1a2=_0x4fb34b;if(bestcfCache[_0x5ca1a2(0x3a0)]&&Date[_0x5ca1a2(0x486)]()-bestcfCache['at']<0xa*0x3c*0x3e8)return bestcfCache[_0x5ca1a2(0x3a0)];const _0x1b9ef9=[],_0x6a21ec=BESTCF_REGION_URLS['map'](async _0x2e99bc=>{const _0xb2302=_0x5ca1a2;try{const _0x367ea9=await fetchTimeout(_0x2e99bc[_0xb2302(0x37c)],{'headers':{'User-Agent':_0xb2302(0x4e8)}},0x1f40);if(!_0x367ea9['ok'])return;const _0x329bc7=await _0x367ea9[_0xb2302(0x207)](),_0x28e48=[];for(const _0x506f58 of _0x329bc7[_0xb2302(0x26f)](/[\r\n]+/)){const _0x30bec1=_0x506f58[_0xb2302(0x2ae)]()[_0xb2302(0x428)](/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);if(_0x30bec1&&_0x28e48[_0xb2302(0x1b7)]<_0x2e99bc[_0xb2302(0x4f9)])_0x28e48['push']({'ip':_0x30bec1[0x1],'port':_0x30bec1[0x2]?parseInt(_0x30bec1[0x2],0xa):0x1bb,'name':_0x2e99bc['label']+'-'+String(_0x28e48['length']+0x1)[_0xb2302(0x515)](0x2,'0')});}_0x28e48[_0xb2302(0x2ff)](_0x18cfe6=>_0x1b9ef9[_0xb2302(0x33a)](_0x18cfe6));}catch(_0x364438){}});return await Promise[_0x5ca1a2(0x2d5)](_0x6a21ec),bestcfCache[_0x5ca1a2(0x3a0)]=_0x1b9ef9,bestcfCache['at']=Date[_0x5ca1a2(0x486)](),_0x1b9ef9;}function appendStableNodes(_0x1a66aa,_0x3b3031,_0x59edc3){const _0x4dc6e3=_0x4fb34b;if(_0x1a66aa['length']>=_0x59edc3)return;const _0xe146b7=new Set();for(const _0x5d6501 of _0x1a66aa){try{_0xe146b7[_0x4dc6e3(0x464)](parseNodeServer(_0x5d6501)[_0x4dc6e3(0x480)]);}catch(_0x2da4f7){}}let _0x561b98=0x0;for(const _0x495a92 of BUILTIN_STABLE_IPS){if(_0x1a66aa['length']>=_0x59edc3)break;if(_0xe146b7['has'](_0x495a92))continue;_0xe146b7[_0x4dc6e3(0x464)](_0x495a92),_0x561b98++;const _0x1c4d6b=_0x4dc6e3(0x4b6)+String(_0x561b98)[_0x4dc6e3(0x515)](0x2,'0');if(_0x3b3031[_0x4dc6e3(0x27e)])_0x1a66aa[_0x4dc6e3(0x33a)](vlessNode(_0x3b3031,_0x495a92,0x1bb,_0x1c4d6b));if(_0x1a66aa[_0x4dc6e3(0x1b7)]>=_0x59edc3)break;if(_0x3b3031[_0x4dc6e3(0x296)])_0x1a66aa[_0x4dc6e3(0x33a)](trojanNode(_0x3b3031,_0x495a92,0x1bb,_0x1c4d6b));if(_0x1a66aa['length']>=_0x59edc3)break;if(_0x3b3031[_0x4dc6e3(0x378)])_0x1a66aa[_0x4dc6e3(0x33a)](vlessNode(_0x3b3031,_0x495a92,0x1bb,_0x1c4d6b,{'type':_0x4dc6e3(0x20c)}));}}function appendFallbackNodes(_0x436df9,_0x2ffb83,_0x4ad343,_0x453ce3){const _0x185c5d=_0x4fb34b;if(_0x436df9['length']>=_0x4ad343)return;const _0x399e3c=new Set();for(const _0x2a23ed of _0x436df9){try{_0x399e3c['add'](parseNodeServer(_0x2a23ed)['host']);}catch(_0x4f885e){}}const _0x3f1ee8=(_0x179476,_0x155536)=>{const _0x58bec6=_0x29fe;if(_0x436df9['length']>=_0x4ad343)return;if(_0x399e3c['has'](_0x179476))return;_0x399e3c['add'](_0x179476);if(_0x2ffb83['enableVless'])_0x436df9[_0x58bec6(0x33a)](vlessNode(_0x2ffb83,_0x179476,0x1bb,_0x155536));if(_0x2ffb83[_0x58bec6(0x296)])_0x436df9[_0x58bec6(0x33a)](trojanNode(_0x2ffb83,_0x179476,0x1bb,_0x155536));if(_0x2ffb83['enableXhttp'])_0x436df9['push'](vlessNode(_0x2ffb83,_0x179476,0x1bb,_0x155536,{'type':_0x58bec6(0x20c)}));};_0x3f1ee8(_0x2ffb83[_0x185c5d(0x480)],_0x185c5d(0x2df));const _0x1e9363=[];if(_0x453ce3&&RELAY_DOMAINS[_0x453ce3])_0x1e9363[_0x185c5d(0x33a)](_0x453ce3);for(const _0x6a9b6a of['HK','JP','US']){if(_0x1e9363[_0x185c5d(0x276)](_0x6a9b6a)<0x0)_0x1e9363[_0x185c5d(0x33a)](_0x6a9b6a);}let _0x33221d=0x0;for(const _0x4b2fef of _0x1e9363){if(_0x33221d>=0x3)break;const _0x201b79=RELAY_DOMAINS[_0x4b2fef];_0x201b79&&!_0x399e3c[_0x185c5d(0x283)](_0x201b79)&&(_0x3f1ee8(_0x201b79,'反代-'+_0x4b2fef),_0x33221d++);}}function _0x29fe(_0x467074,_0x14e30c){const _0x237f43=_0x4bee();return _0x29fe=function(_0xa2d83d,_0x1175ca){_0xa2d83d=_0xa2d83d-0x1b7;let _0x13654d=_0x237f43[_0xa2d83d];return _0x13654d;},_0x29fe(_0x467074,_0x14e30c);}async function generateSubscription(_0x3d5143,_0x5d1b66,_0x384067,_0x17c869,_0xcbc5b1){const _0x2b0354=_0x4fb34b;if(!_0x3d5143['path']||_0x3d5143[_0x2b0354(0x2fe)]==='/'||_0x3d5143[_0x2b0354(0x2fe)]==='')_0x3d5143[_0x2b0354(0x2fe)]=_0x3d5143[_0x2b0354(0x2cc)];const _0x565bdc=_0x3d5143[_0x2b0354(0x1cf)]&&_0x3d5143[_0x2b0354(0x1cf)]['ipType']||[];if(_0x565bdc[_0x2b0354(0x307)]('IPv6'))await refreshOfficialV6CIDRs();const _0x3fe073=!/\.workers\.dev$/i[_0x2b0354(0x3a5)](new URL(_0x5d1b66)[_0x2b0354(0x481)]),_0x2aa9dd=Object[_0x2b0354(0x1c2)]({},_0x3d5143,{'host':_0x3d5143[_0x2b0354(0x480)]||new URL(_0x5d1b66)[_0x2b0354(0x481)]});_0x3fe073&&(_0x2aa9dd[_0x2b0354(0x4a9)]=!![]);const _0x4df486=_0x3d5143['optimizer']&&_0x3d5143[_0x2b0354(0x3d1)]['subMode']||'';let _0x5a3e21=[];const _0x3c3dab=_0x3d5143['filter']&&_0x3d5143['filter'][_0x2b0354(0x365)]||[],_0x2005f9=_0x3c3dab[_0x2b0354(0x307)](_0x2b0354(0x33d)),_0x3ea96d=_0x3c3dab[_0x2b0354(0x1b7)]===0x1&&_0x3c3dab[0x0]===_0x2b0354(0x33d),_0x78c61d=_0x3ea96d?OFFICIAL_V6_CIDRS:_0x2005f9?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x5befeb=parseIPList(BUILTIN_PREFERRED_IPS[_0x2b0354(0x4bb)]('\x0a'))[_0x2b0354(0x454)](_0x3c43cf=>({'ip':_0x3c43cf['ip'],'port':_0x3c43cf[_0x2b0354(0x3bc)]||0x1bb,'name':_0x3c43cf[_0x2b0354(0x277)]||_0x2b0354(0x2fb)+String(BUILTIN_PREFERRED_IPS[_0x2b0354(0x276)](_0x3c43cf)+0x1)['padStart'](0x2,'0')}));if(_0x4df486===_0x2b0354(0x297)){const _0x68eb90=!!(_0x3d5143[_0x2b0354(0x3d1)]&&_0x3d5143[_0x2b0354(0x3d1)][_0x2b0354(0x285)]),_0xcd1cb=!_0x68eb90;_0x5a3e21=await resolvePreferredDomains(_0x3d5143[_0x2b0354(0x3b6)]||'',_0xcd1cb?0xc8:0x28,_0xcd1cb?0x7d0:0x12c,_0x68eb90,_0x68eb90,_0x2005f9);if(_0x68eb90){const _0x432deb=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x28,0xf0,![],!![],_0x2005f9),_0x4316ba=new Set(_0x432deb[_0x2b0354(0x454)](_0x1a404d=>_0x1a404d['ip']));_0x5a3e21=[..._0x432deb,..._0x5a3e21[_0x2b0354(0x1cf)](_0x40aca1=>!_0x4316ba[_0x2b0354(0x283)](_0x40aca1['ip']))],_0x2aa9dd[_0x2b0354(0x398)]=[..._0x2aa9dd['preferredIPs']||[],..._0x5befeb];if(!_0x2aa9dd[_0x2b0354(0x3d1)])_0x2aa9dd[_0x2b0354(0x3d1)]={};_0x2aa9dd[_0x2b0354(0x3d1)][_0x2b0354(0x28e)]=Math[_0x2b0354(0x438)](parseInt(_0x2aa9dd[_0x2b0354(0x3d1)][_0x2b0354(0x28e)])||0x0,0x320);}}else{if(_0x4df486===''){const _0x2d991f=_0x3d5143[_0x2b0354(0x45a)]||{},_0x2c9703=_0x2d991f[_0x2b0354(0x4a2)]===!![],_0x385a8e=_0x2d991f[_0x2b0354(0x23a)]!==![],_0x1f87d9=_0x2d991f[_0x2b0354(0x470)]!==![],_0x5ea893=_0x2d991f[_0x2b0354(0x382)]===!![];_0x2c9703&&!_0x3ea96d&&(_0x2aa9dd['preferredDomains']=(_0x2aa9dd[_0x2b0354(0x3b6)]?_0x2aa9dd[_0x2b0354(0x3b6)]+'\x0a':'')+_0x2aa9dd['host']+_0x2b0354(0x28a));if(!_0x5ea893)_0x2aa9dd[_0x2b0354(0x398)]=[];const _0x26cc3b=_0x3d5143[_0x2b0354(0x1cf)]||{},_0x5bf83c=_0x26cc3b[_0x2b0354(0x4c0)],_0x194fc3=Array[_0x2b0354(0x1f8)](_0x5bf83c)?_0x5bf83c[_0x2b0354(0x1b7)]===0x0||_0x5bf83c[_0x2b0354(0x307)](_0x2b0354(0x2d5)):!_0x5bf83c||_0x5bf83c===_0x2b0354(0x2d5);if(_0x194fc3){_0x5a3e21=[];if(_0x385a8e&&!_0x3ea96d){const _0xd2ce59=await filterAliveDomains(DEFAULT_PREFERRED_DOMAINS);if(_0xd2ce59)_0x2aa9dd[_0x2b0354(0x3b6)]=(_0x2aa9dd[_0x2b0354(0x3b6)]?_0x2aa9dd[_0x2b0354(0x3b6)]+'\x0a':'')+_0xd2ce59;}if(_0x1f87d9&&!_0x3ea96d){const _0x219857=await fetchLatestPreferredIPs(0x96);if(_0x219857&&_0x219857[_0x2b0354(0x1b7)])_0x2aa9dd[_0x2b0354(0x398)]=[..._0x2aa9dd[_0x2b0354(0x398)]||[],..._0x219857];try{const _0x40929=await resolvePreferredDomains(DEFAULT_REGION_POOLS,0x64,0x12c,![],!![],![]);if(_0x40929&&_0x40929[_0x2b0354(0x1b7)])_0x2aa9dd['preferredIPs']=[..._0x2aa9dd[_0x2b0354(0x398)]||[],..._0x40929];}catch(_0xb0b874){}}if(_0x2005f9&&_0x385a8e)try{const _0x3e785f=DEFAULT_PREFERRED_DOMAINS+(_0x3ea96d?'\x0a'+BUILTIN_OFFICIAL_DOMAINS[_0x2b0354(0x4bb)]('\x0a'):''),_0x4c6752=await resolvePreferredDomains(_0x3e785f,0x28,_0x3ea96d?0x320:0xf0,![],!![],!![]);if(_0x4c6752&&_0x4c6752[_0x2b0354(0x1b7)])_0x2aa9dd['preferredIPs']=[..._0x2aa9dd[_0x2b0354(0x398)]||[],..._0x4c6752];}catch(_0x55ed70){}}else _0x385a8e&&(_0x5a3e21=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x64,0x12c,![],!![],_0x2005f9));if(_0x1f87d9){if(_0x3ea96d){const _0x19e8cc=_0x5befeb[_0x2b0354(0x454)](_0x1a3332=>({'ip':ipv4ToEmbeddedV6(_0x1a3332['ip']),'port':_0x1a3332['port']||0x1bb,'name':_0x1a3332[_0x2b0354(0x277)]}))[_0x2b0354(0x1cf)](_0xdc6587=>_0xdc6587['ip']);_0x2aa9dd['preferredIPs']=[..._0x2aa9dd[_0x2b0354(0x398)]||[],..._0x19e8cc];}else{if(_0x2005f9){const _0x1503d2=_0x5befeb[_0x2b0354(0x454)](_0x1118f6=>({'ip':ipv4ToEmbeddedV6(_0x1118f6['ip']),'port':_0x1118f6[_0x2b0354(0x3bc)]||0x1bb,'name':_0x1118f6[_0x2b0354(0x277)]}))[_0x2b0354(0x1cf)](_0x4dc93f=>_0x4dc93f['ip']);_0x2aa9dd[_0x2b0354(0x398)]=[..._0x2aa9dd['preferredIPs']||[],..._0x5befeb,..._0x1503d2];}else _0x2aa9dd[_0x2b0354(0x398)]=[..._0x2aa9dd[_0x2b0354(0x398)]||[],..._0x5befeb];}}if(!_0x2c9703&&!_0x385a8e&&!_0x1f87d9&&!_0x5ea893){if(_0x3ea96d){const _0x45d4a4=_0x5befeb[_0x2b0354(0x454)](_0x293a39=>({'ip':ipv4ToEmbeddedV6(_0x293a39['ip']),'port':_0x293a39[_0x2b0354(0x3bc)]||0x1bb,'name':_0x293a39['name']}))[_0x2b0354(0x1cf)](_0x12e39d=>_0x12e39d['ip']);_0x2aa9dd[_0x2b0354(0x398)]=[..._0x2aa9dd[_0x2b0354(0x398)]||[],..._0x45d4a4];}else _0x2aa9dd['preferredIPs']=[..._0x2aa9dd[_0x2b0354(0x398)]||[],..._0x5befeb];}if(_0x3ea96d&&_0x2aa9dd[_0x2b0354(0x398)])_0x2aa9dd['preferredIPs']=_0x2aa9dd[_0x2b0354(0x398)][_0x2b0354(0x1cf)](_0x1109bc=>String(_0x1109bc['ip'])[_0x2b0354(0x276)](':')>=0x0);if(!_0x2aa9dd[_0x2b0354(0x3d1)])_0x2aa9dd[_0x2b0354(0x3d1)]={};_0x2aa9dd[_0x2b0354(0x3d1)][_0x2b0354(0x28e)]=Math[_0x2b0354(0x438)](parseInt(_0x2aa9dd[_0x2b0354(0x3d1)]['fillCount'])||0x0,_0x3ea96d?0x0:0x1e);if(_0x2aa9dd[_0x2b0354(0x398)]&&_0x2aa9dd[_0x2b0354(0x398)]['length']){const _0x2f9969=BUILTIN_STABLE_IPS['map']((_0x1f6b83,_0x275802)=>({'ip':_0x1f6b83,'port':0x1bb,'name':_0x2b0354(0x2bc)+String(_0x275802+0x1)[_0x2b0354(0x515)](0x2,'0')})),_0x39d2ae=new Set(_0x2f9969[_0x2b0354(0x454)](_0x25a261=>_0x25a261['ip']));_0x2aa9dd[_0x2b0354(0x398)]=[..._0x2f9969,..._0x2aa9dd[_0x2b0354(0x398)][_0x2b0354(0x1cf)](_0x2a65ed=>!_0x39d2ae[_0x2b0354(0x283)](_0x2a65ed['ip']))];}}}const _0x2d0514=_0x3d5143[_0x2b0354(0x1be)]&&_0x3d5143[_0x2b0354(0x1be)][_0x2b0354(0x222)]?_0x3d5143[_0x2b0354(0x1be)]:null;if(_0x5a3e21[_0x2b0354(0x1b7)]){let _0x2f01d6=_0x5a3e21;if(_0x2d0514){const _0x3e9d1d=_0x5a3e21['filter'](_0x1fdba7=>!_0x2d0514['has'](_0x1fdba7['ip'])),_0x490882=_0x5a3e21['filter'](_0x53c31a=>_0x2d0514['has'](_0x53c31a['ip']));_0x2f01d6=[..._0x3e9d1d,..._0x490882];}const _0x1f3079=(_0x2aa9dd[_0x2b0354(0x398)]||[])[_0x2b0354(0x1b7)];_0x2f01d6=_0x2f01d6[_0x2b0354(0x454)]((_0x4b0a30,_0x1684e8)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[_0x2b0354(0x3a5)](_0x4b0a30[_0x2b0354(0x277)]||'')?Object[_0x2b0354(0x1c2)]({},_0x4b0a30,{'name':_0x2b0354(0x2fb)+String(_0x1f3079+_0x1684e8+0x1)['padStart'](0x2,'0')}):_0x4b0a30),_0x2aa9dd['preferredIPs']=[..._0x2aa9dd[_0x2b0354(0x398)]||[],..._0x2f01d6];}if(_0x3ea96d&&_0x2aa9dd['preferredIPs'])_0x2aa9dd[_0x2b0354(0x398)]=_0x2aa9dd['preferredIPs'][_0x2b0354(0x1cf)](_0x432711=>String(_0x432711['ip'])['indexOf'](':')>=0x0);_0x17c869=(_0x17c869||'')[_0x2b0354(0x3fb)]();const _0xd7aa71=(_0x384067||'')[_0x2b0354(0x3fb)](),_0x41dc90=[_0x2b0354(0x326),_0x2b0354(0x248),_0x2b0354(0x354),'surge',_0x2b0354(0x505),'quanx',_0x2b0354(0x3e5)][_0x2b0354(0x307)](_0xd7aa71)||/clash|singbox|sing-box|surge|loon|quantumult/[_0x2b0354(0x3a5)](_0x17c869);let _0x422cb1=_0x41dc90?0x12c:0x320;if(_0x4df486==='custom'&&_0x3d5143[_0x2b0354(0x3d1)]&&_0x3d5143[_0x2b0354(0x3d1)][_0x2b0354(0x285)])_0x422cb1=_0x41dc90?Math[_0x2b0354(0x438)](_0x422cb1,0x12c):Math['max'](_0x422cb1,0x320);if(_0x4df486===_0x2b0354(0x297)&&!(_0x3d5143[_0x2b0354(0x3d1)]&&_0x3d5143['optimizer'][_0x2b0354(0x285)]))_0x422cb1=_0x41dc90?Math[_0x2b0354(0x438)](_0x422cb1,0x320):Math['max'](_0x422cb1,0x7d0);if(_0x3d5143[_0x2b0354(0x3be)]===![])_0x422cb1=0x2710;if(_0x3d5143[_0x2b0354(0x427)]){const _0x400030=parseInt(_0x3d5143['nodeLimitCount'])||0x0;if(_0x400030>0x0)_0x422cb1=Math[_0x2b0354(0x44a)](_0x400030,0x3e8);}if(_0x3d5143['_quotaCap'])_0x422cb1=Math[_0x2b0354(0x44a)](_0x422cb1,_0x3d5143[_0x2b0354(0x224)]);const _0x5b9a71=_0x4df486===_0x2b0354(0x3e4)?Object['assign']({},_0x3d5143[_0x2b0354(0x1cf)],{'region':_0x2b0354(0x2d5)}):_0x3d5143[_0x2b0354(0x1cf)];if(_0x4df486===''&&_0x2aa9dd[_0x2b0354(0x398)]&&_0x2aa9dd[_0x2b0354(0x398)][_0x2b0354(0x1b7)]){const _0x4ccafe=Math[_0x2b0354(0x44a)](_0x2aa9dd['preferredIPs'][_0x2b0354(0x1b7)],0x190),_0x498375=await Promise[_0x2b0354(0x2d5)](_0x2aa9dd['preferredIPs'][_0x2b0354(0x396)](0x0,_0x4ccafe)['map'](_0x820986=>testProxyAliveCached(_0x820986['ip'],_0x820986['port']||0x1bb)[_0x2b0354(0x254)](_0x2e365b=>({'x':_0x820986,'ok':_0x2e365b})))),_0x440bfb=_0x498375[_0x2b0354(0x1cf)](_0x2eea39=>_0x2eea39['ok'])[_0x2b0354(0x454)](_0x44385a=>_0x44385a['x']),_0x57cfe1=_0x498375[_0x2b0354(0x1b7)]-_0x440bfb[_0x2b0354(0x1b7)],_0x15e1ec=_0x2aa9dd[_0x2b0354(0x398)]['slice'](_0x4ccafe);_0x2aa9dd[_0x2b0354(0x398)]=[..._0x440bfb,..._0x15e1ec],_0x57cfe1>0x0&&_0x2aa9dd[_0x2b0354(0x3d1)]&&(_0x2aa9dd[_0x2b0354(0x3d1)][_0x2b0354(0x28e)]=Math['min']((parseInt(_0x2aa9dd[_0x2b0354(0x3d1)][_0x2b0354(0x28e)],0xa)||0x0)+_0x57cfe1,0x1388));}let _0x5444f9=filterNodes(await buildNodes(_0x2aa9dd,_0x422cb1,_0x2d0514),_0x5b9a71);const _0x6d59=_0x4df486===_0x2b0354(0x297)&&!(_0x3d5143[_0x2b0354(0x3d1)]&&_0x3d5143['optimizer']['subIncludeDefault']);if(!_0x6d59&&!_0x3ea96d)appendFallbackNodes(_0x5444f9,_0x2aa9dd,_0x422cb1,_0xcbc5b1);if(!_0x3ea96d&&!(_0x6d59&&_0x5444f9[_0x2b0354(0x1b7)]>0x0))appendStableNodes(_0x5444f9,_0x2aa9dd,_0x422cb1);if(_0x3d5143[_0x2b0354(0x427)]&&_0x4df486&&!_0x6d59&&_0x5444f9['length']<_0x422cb1){const _0x532ddd=_0x422cb1-_0x5444f9[_0x2b0354(0x1b7)],_0x5a0d07=new Set();for(const _0x2ed660 of _0x5444f9){try{_0x5a0d07['add'](parseNodeServer(_0x2ed660)['host']);}catch(_0x2603f0){}}const _0x202920=(_0x380622,_0x58bb0e,_0x17a8a2)=>{const _0x525ed0=_0x2b0354;if(_0x5444f9['length']>=_0x422cb1)return;if(_0x5a0d07[_0x525ed0(0x283)](_0x380622))return;_0x5a0d07[_0x525ed0(0x464)](_0x380622);const _0x530b45=HTTP_PORTS_LIST[hashStr(String(_0x380622))%HTTP_PORTS_LIST[_0x525ed0(0x1b7)]],_0x1350c3=TLS_PORTS[Math[_0x525ed0(0x3a9)](Math[_0x525ed0(0x3e4)]()*TLS_PORTS[_0x525ed0(0x1b7)])];if(!_0x3d5143[_0x525ed0(0x4a9)]&&_0x5444f9[_0x525ed0(0x1b7)]<_0x422cb1)_0x5444f9[_0x525ed0(0x33a)](vlessNode(_0x2aa9dd,_0x380622,_0x530b45,_0x17a8a2+'-'+_0x530b45));if(_0x5444f9[_0x525ed0(0x1b7)]>=_0x422cb1)return;_0x5444f9[_0x525ed0(0x33a)](vlessNode(_0x2aa9dd,_0x380622,_0x1350c3,_0x17a8a2));};try{const _0x27b55b=await fetchBestcfPool(),_0x420b60=_0x2d0514?_0x27b55b[_0x2b0354(0x1cf)](_0x31d53d=>!_0x2d0514[_0x2b0354(0x283)](_0x31d53d['ip'])):_0x27b55b,_0x545818=_0x420b60[_0x2b0354(0x1b7)]>=_0x532ddd?_0x420b60:_0x27b55b;for(const _0x44294a of _0x545818){_0x202920(_0x44294a['ip'],_0x44294a[_0x2b0354(0x3bc)],_0x44294a[_0x2b0354(0x277)]||'优选IP-'+String(_0x44294a[_0x2b0354(0x3bc)]));if(_0x5444f9[_0x2b0354(0x1b7)]>=_0x422cb1)break;}}catch(_0x191b8b){}if(_0x5444f9[_0x2b0354(0x1b7)]<_0x422cb1)try{const _0x299d93=Object[_0x2b0354(0x463)](PROXY_IP_DOMAINS)['map'](_0x4eec2c=>({'server':PROXY_IP_DOMAINS[_0x4eec2c],'port':0x1bb,'name':_0x2b0354(0x47f)+_0x4eec2c})),_0x4cfdd8=[];for(const _0x4421c1 of _0x299d93){if(await testProxyAliveCached(_0x4421c1[_0x2b0354(0x4aa)],_0x4421c1[_0x2b0354(0x3bc)]))_0x4cfdd8[_0x2b0354(0x33a)](_0x4421c1);if(_0x4cfdd8[_0x2b0354(0x1b7)]>=0x6)break;}for(const _0x4081a3 of _0x4cfdd8){_0x202920(_0x4081a3[_0x2b0354(0x4aa)],_0x4081a3['port'],_0x4081a3['name']);if(_0x5444f9[_0x2b0354(0x1b7)]>=_0x422cb1)break;}}catch(_0x129359){}if(_0x5444f9[_0x2b0354(0x1b7)]<_0x422cb1){const _0x1001c8=_0x422cb1-_0x5444f9[_0x2b0354(0x1b7)],_0x5bc99f=randomIPsFromCidrs(REACHABLE_CIDRS,_0x1001c8*0x3),_0x48c6e9=_0x2d0514?_0x5bc99f[_0x2b0354(0x1cf)](_0x20f514=>!_0x2d0514[_0x2b0354(0x283)](_0x20f514)):_0x5bc99f;let _0x303bf4=_0x48c6e9[_0x2b0354(0x1b7)]>=_0x1001c8?_0x48c6e9:_0x5bc99f;if(_0x303bf4[_0x2b0354(0x1b7)]>0x0){const _0x833a76=Math[_0x2b0354(0x44a)](_0x303bf4[_0x2b0354(0x1b7)],Math[_0x2b0354(0x438)](_0x1001c8,0x14),0x3c),_0x1b3284=_0x303bf4[_0x2b0354(0x396)](0x0,_0x833a76)[_0x2b0354(0x454)](_0x4d7bd2=>testProxyAlive(_0x4d7bd2,0x1bb,0x5dc)[_0x2b0354(0x254)](_0x2da3bf=>({'ip':_0x4d7bd2,'ok':_0x2da3bf}))),_0x35f927=await Promise[_0x2b0354(0x2d5)](_0x1b3284),_0x44a6ae=_0x35f927[_0x2b0354(0x1cf)](_0xf3c5fb=>_0xf3c5fb['ok'])[_0x2b0354(0x454)](_0x2f5bb6=>_0x2f5bb6['ip']),_0x4506f5=_0x303bf4['slice'](_0x833a76);_0x303bf4=[..._0x44a6ae,..._0x4506f5][_0x2b0354(0x396)](0x0,_0x1001c8);}let _0x8fc51e=0x0;for(const _0x537d26 of _0x303bf4){if(_0x5444f9[_0x2b0354(0x1b7)]>=_0x422cb1)break;_0x8fc51e++;const _0x10d3c0=HTTP_PORTS_LIST[hashStr(String(_0x537d26))%HTTP_PORTS_LIST[_0x2b0354(0x1b7)]],_0xd633b0=TLS_PORTS[Math[_0x2b0354(0x3a9)](Math[_0x2b0354(0x3e4)]()*TLS_PORTS['length'])];if(!_0x3d5143[_0x2b0354(0x4a9)]&&_0x5444f9[_0x2b0354(0x1b7)]<_0x422cb1)_0x5444f9['push'](vlessNode(_0x2aa9dd,_0x537d26,_0x10d3c0,_0x2b0354(0x2fb)+String(_0x8fc51e)[_0x2b0354(0x515)](0x3,'0')+'-'+_0x10d3c0));if(_0x5444f9[_0x2b0354(0x1b7)]>=_0x422cb1)break;_0x5444f9[_0x2b0354(0x33a)](vlessNode(_0x2aa9dd,_0x537d26,_0xd633b0,_0x2b0354(0x2fb)+String(_0x8fc51e)['padStart'](0x3,'0')));}}}if(_0x5444f9[_0x2b0354(0x1b7)]>_0x422cb1)_0x5444f9['length']=_0x422cb1;const _0x174ea7=[],_0x197695=new Set();for(const _0x4dfabf of _0x5444f9){try{const {host:_0x3141b2}=parseNodeServer(_0x4dfabf);isValidIp(_0x3141b2)&&!_0x197695['has'](_0x3141b2)&&(_0x197695[_0x2b0354(0x464)](_0x3141b2),_0x174ea7[_0x2b0354(0x33a)](_0x3141b2));}catch(_0x457c6b){}}let _0x321465,_0x368199;if(_0xd7aa71===_0x2b0354(0x326))_0x321465=_0x2b0354(0x3ba),_0x368199=generateClash(_0x2aa9dd,_0x5444f9);else{if(_0xd7aa71==='singbox'||_0xd7aa71===_0x2b0354(0x354))_0x321465=_0x2b0354(0x387),_0x368199=generateSingbox(_0x2aa9dd,_0x5444f9);else{if(_0xd7aa71===_0x2b0354(0x209))_0x321465='text/plain',_0x368199=generateSurge(_0x2aa9dd,_0x5444f9);else{if(_0xd7aa71==='loon')_0x321465=_0x2b0354(0x4c2),_0x368199=generateLoon(_0x2aa9dd,_0x5444f9);else{if(_0xd7aa71===_0x2b0354(0x4c7)||_0xd7aa71===_0x2b0354(0x3e5))_0x321465=_0x2b0354(0x4c2),_0x368199=generateQuanX(_0x2aa9dd,_0x5444f9);else{if(_0xd7aa71==='plain'||_0xd7aa71===_0x2b0354(0x229))_0x321465=_0x2b0354(0x4c2),_0x368199=_0x5444f9[_0x2b0354(0x4bb)]('\x0a');else{if(_0xd7aa71===_0x2b0354(0x2a5)||_0xd7aa71===_0x2b0354(0x3db)||_0xd7aa71===_0x2b0354(0x20d)||_0xd7aa71===_0x2b0354(0x42c)||_0xd7aa71===_0x2b0354(0x230))_0x321465=_0x2b0354(0x4c2),_0x368199=btoa(_0x5444f9[_0x2b0354(0x4bb)]('\x0a'));else{if(_0x17c869['includes'](_0x2b0354(0x326))||_0x17c869['includes'](_0x2b0354(0x230)))_0x321465=_0x2b0354(0x3ba),_0x368199=generateClash(_0x2aa9dd,_0x5444f9);else{if(_0x17c869[_0x2b0354(0x307)]('sing-box'))_0x321465='application/json',_0x368199=generateSingbox(_0x2aa9dd,_0x5444f9);else{if(_0x17c869['includes'](_0x2b0354(0x209)))_0x321465='text/plain',_0x368199=generateSurge(_0x2aa9dd,_0x5444f9);else{if(_0x17c869[_0x2b0354(0x307)](_0x2b0354(0x505)))_0x321465=_0x2b0354(0x4c2),_0x368199=generateLoon(_0x2aa9dd,_0x5444f9);else _0x17c869['includes'](_0x2b0354(0x407))?(_0x321465=_0x2b0354(0x4c2),_0x368199=generateQuanX(_0x2aa9dd,_0x5444f9)):(_0x321465=_0x2b0354(0x4c2),_0x368199=btoa(_0x5444f9[_0x2b0354(0x4bb)]('\x0a')));}}}}}}}}}}return{'type':_0x321465,'body':_0x368199,'issued':_0x174ea7};}const PANEL_HTML=String['raw']`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · Cloudflare 隧道面板</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0b0f14;--bg2:#0f141b;--card:#131a23;--card2:#182130;--border:#243041;
  --text:#e8eef6;--dim:#8fa3ba;--faint:#5c6f86;
  --accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);
  --ok:#34c98e;--ok-dim:rgba(52,201,142,.13);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13);--warn:#ffb454;
  --sb-bg:#0d131b;--sb-text:#9fb0c5;--sb-dim:#5c6f86;--sb-border:#1c2737;
  --sb-active-bg:rgba(246,130,31,.13);--sb-active-text:#ffa14d;--sb-active-bar:#f6821f;
  --shadow:0 10px 30px rgba(0,0,0,.28);
}
[data-theme="light"]{
  --bg:#f3f5f9;--bg2:#e9edf3;--card:#ffffff;--card2:#f6f8fb;--border:#dde4ee;
  --text:#1b2634;--dim:#5d6b7d;--faint:#93a1b3;
  --accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);
  --ok:#1f9d6a;--ok-dim:rgba(31,157,106,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--warn:#c07c1e;
  --sb-bg:#ffffff;--sb-text:#5d6b7d;--sb-dim:#a2aec0;--sb-border:#e7ebf2;
  --sb-active-bg:rgba(232,114,14,.09);--sb-active-text:#c96408;--sb-active-bar:#e8720e;
  --shadow:0 10px 28px rgba(30,45,70,.10);
}
html,body{height:100%}
body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.55}
.app{display:flex;min-height:100vh}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}

/* ===== 侧边栏 ===== */
.sidebar{width:236px;flex:0 0 236px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;z-index:50;transition:background .25s,border-color .25s}
.brand{display:flex;align-items:center;gap:10px;padding:18px 18px 14px}
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.brand .bt{display:flex;flex-direction:column;line-height:1.2}
.brand .bt b{font-size:15px;letter-spacing:.3px;color:var(--text)}
.brand .bt span{font-size:11px;color:var(--sb-dim)}
.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;margin:2px 0;border-radius:8px;color:var(--sb-text);cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-size:13.5px;position:relative;transition:background .15s,color .15s}
.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor}
.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}
.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}
.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}
.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}
.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent;cursor:pointer;transition:border-color .15s,color .15s,background .15s}
.ver-chip:hover{color:var(--accent);border-color:var(--accent)}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}

/* ===== 主区 ===== */
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.topbar{display:flex;align-items:center;gap:14px;padding:14px 26px;border-bottom:1px solid var(--border);background:var(--bg);position:sticky;top:0;z-index:40}
.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}
.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 10px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}
.pill.off{background:var(--err-dim);color:var(--err)}
.pill .dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.icon-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.icon-btn:hover{border-color:var(--accent);color:var(--accent)}
.icon-btn svg{width:16px;height:16px;stroke:currentColor}
.hamb{display:none}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}

.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
.view{display:none}
.view.on{display:block;animation:fade .18s ease}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}

/* ===== 卡片 ===== */
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card);transition:border-color .15s,color .15s,background .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:16px}
.card h3{font-size:14px;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.card .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}
.kv{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px dashed var(--border);font-size:13px}
.kv:last-child{border-bottom:none}
.kv .k{color:var(--dim);white-space:nowrap}
.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}

/* ===== 表单 ===== */
.field{margin-bottom:12px}
.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}
input[type=text],input[type=password],input[type=number],select,textarea{
  width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);
  border-radius:8px;padding:8px 11px;font-size:13.5px;outline:none;transition:border-color .15s,box-shadow .15s;
  font-family:inherit;
}
input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}
textarea{resize:vertical;line-height:1.5;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238fa3ba' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}
[data-theme="light"] select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235d6b7d' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")}
input[type=checkbox]{accent-color:var(--accent);width:15px;height:15px;cursor:pointer}
.hint{font-size:12px;color:var(--dim);margin-top:6px;line-height:1.6}
.inrow{display:flex;gap:8px;align-items:flex-start}
.inrow>div{flex:1}
.inrow .btn{margin-top:1px;white-space:nowrap}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}

/* 开关 */
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:background .18s}
.sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}

/* 按钮 */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;transition:border-color .15s,background .15s,transform .05s;font-family:inherit;white-space:nowrap}
.btn:hover{border-color:var(--accent);color:var(--accent)}
.btn:active{transform:translateY(1px)}
.btn:disabled{opacity:.55;cursor:not-allowed}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn.sm{padding:4px 10px;font-size:12px;border-radius:6px}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.row .grow{flex:1;min-width:140px}

/* 表格 */
.tbl-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;table-layout:fixed}
th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--border);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}
td .ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}

/* 消息与提示 */
.msg{display:none;margin-top:12px;padding:9px 12px;border-radius:8px;font-size:12.5px;line-height:1.6}
.msg.show{display:block}
.msg.ok{background:var(--ok-dim);color:var(--ok)}
.msg.err{background:var(--err-dim);color:var(--err)}
.msg.info{background:var(--accent-dim);color:var(--accent2)}
[data-theme="light"] .msg.info{color:#c96408}
pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;overflow:auto;max-height:260px;white-space:pre-wrap;word-break:break-all;color:var(--dim)}

/* 悬浮操作栏 */
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(80px);background:var(--card);border:1px solid var(--border);color:var(--text);padding:10px 20px;border-radius:10px;font-size:13px;opacity:0;transition:all .25s;z-index:100;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast.ok{border-color:var(--ok);color:var(--ok)}
.toast.err{border-color:var(--err);color:var(--err)}
.toast.warn{border-color:var(--warn);color:var(--warn)}

/* 分区 */
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.steps{list-style:none;counter-reset:st}
.steps li{counter-increment:st;position:relative;padding:0 0 14px 34px;font-size:13px;color:var(--dim)}
.steps li::before{content:counter(st);position:absolute;left:0;top:0;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent2);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}
[data-theme="light"] .steps li::before{color:#c96408}
.steps li b{color:var(--text)}

/* ===== 响应式 ===== */
@media (min-width:1100px){
  /* 右侧避让右下角浮动保存栏（尚未保存/重置/保存全部），避免遮挡筛选勾选项 */
  .filter-grid{padding-right:200px}
}
@media (max-width:960px){
  .sidebar{position:fixed;left:0;top:0;transform:translateX(-100%);transition:transform .22s ease;box-shadow:var(--shadow)}
  .sidebar.open{transform:translateX(0)}
  .hamb{display:flex}
  .content{padding:16px 16px 96px}
  .topbar{padding:12px 16px}
  .grid2,.grid3{grid-template-columns:1fr}
}
@media (max-width:560px){
  th,td{padding:8px 8px}
}
</style>
</head>
<body>
<div class="app">

<!-- ===== 侧边栏 ===== -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>CFNext</b><span>Cloudflare 隧道面板</span></div>
  </div>
  <nav class="nav" id="nav"></nav>
  <div class="side-foot">
    <span>部署版本</span>
    <span class="ver-chip" id="sideVer" title="点击检测更新" onclick="checkUpdate()">v—</span>
  </div>
</aside>

<!-- ===== 主区 ===== -->
<div class="main">
  <div class="topbar">
    <button class="icon-btn hamb" id="hamb" title="菜单"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">仪表盘</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">连接中</span></span>
    <button class="icon-btn" id="themeBtn" title="切换日间 / 夜间"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">当前运行在 *.workers.dev 域名上：订阅与节点下发功能正常；若遇连接不稳或访问受限，建议在 Cloudflare 面板绑定自定义域名后使用。</div>

  <div class="content" id="content">
    <!-- ===== 视图：仪表盘 ===== -->
    <section class="view" data-view="dashboard">
      <div class="view-head"><h2>仪表盘</h2><p>快速开始、订阅管理、配额速览与运行状态</p></div>
      <div class="card">
        <h3><span class="tick"></span>快速开始</h3>
        <ol class="steps">
          <li><b>部署即用</b>：绑定域名后客户端订阅即可获得海量节点（内置 300 条优选 IP 与地区域名源）。</li>
          <li><b>调优节点</b>：在「优选配置」在线测速，把最优 IP 加入优选列表（需开启自定义订阅模式，该模式内置六条常用订阅源，可自行增删）。</li>
          <li><b>保障额度</b>：在「配额安全」开启用量监控与自动调节，防止免费额度超支（需在面板设置中配置Cloudflare账户ID及API 令牌）。</li>
        </ol>
      </div>
      <div class="card">
        <h3><span class="tick"></span>订阅地址</h3>
        <div class="row" style="margin-bottom:12px">
          <div class="field grow" style="margin:0"><label>订阅格式</label>
            <select id="subFmt">
              <option value="auto">自动识别</option>
              <option value="clash">Clash / Mihomo</option>
              <option value="singbox">Sing-box</option>
              <option value="surge">Surge</option>
              <option value="loon">Loon</option>
              <option value="quanx">Quantumult X</option>
              <option value="v2ray">v2rayN / Shadowrocket</option>
              <option value="stash">Stash</option>
              <option value="plain">明文 vless</option>
            </select>
          </div>
        </div>
        <div class="field"><label>订阅链接</label>
          <div class="inrow">
            <input type="text" id="subUrl" readonly onclick="this.select()">
            <button class="btn sm" onclick="copySub()">复制</button>
            <button class="btn sm" onclick="toggleQR()">二维码</button>
            <button class="btn sm" onclick="downloadSub()">下载</button>
            <button class="btn sm primary" onclick="previewSub()">预览</button>
          </div>
        </div>
        <div id="qrWrap" style="display:none"></div>
        <p class="hint" style="margin-top:12px" id="subHint"></p>
        <div id="subPrev" style="display:none;margin-top:12px">
          <div class="kv"><span class="k">订阅类型</span><span class="v" id="prevType">—</span></div>
          <div class="kv"><span class="k">节点数量</span><span class="v" id="prevCount">—</span></div>
          <pre class="code" id="prevBody" style="margin-top:10px"></pre>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>地区与线路筛选</h3>
        <div class="filter-region">
          <span class="filter-region-label">节点地区</span>
          <div class="pills">
            <label class="spill"><input type="checkbox" id="fl-region-all" checked><span>全部地区</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-HK"><span>香港</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-TW"><span>台湾</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-US"><span>美国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-SG"><span>新加坡</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-JP"><span>日本</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-KR"><span>韩国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-DE"><span>德国</span></label>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-group">
            <div class="filter-group-title">IP 类型</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-ip4" checked><span>IPv4</span></label>
              <label class="spill"><input type="checkbox" id="fl-ip6" checked><span>IPv6</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">运营商偏好</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-isp-m" checked><span>移动</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-c" checked><span>联通</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-t" checked><span>电信</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">地址来源</div>
            <div class="pills nowrap">
              <label class="spill"><input type="checkbox" id="fl-native"><span>原生地址</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-domain" checked><span>优选域名</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-ip" checked><span>优选 IP</span></label>
              <label class="spill"><input type="checkbox" id="fl-custom-pref"><span>自定义优选</span></label>
              <label class="spill"><input type="checkbox" id="fl-random-pref"><span>随机优选</span></label>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:12px">筛选按 地区 → IP 类型 → 运营商 逐级放宽，任一维度无节点时自动放宽，保证订阅始终非空。「运营商偏好」按节点名称中的运营商标记过滤（移动=移动/CM/CHINAMOBILE、联通=联通/CU/UNICOM、电信=电信/CT/CHINATELECOM），三个全选或节点池无任何运营商标记时不生效。「节点地区」支持多选，仅剔除明确标记为其它地区的节点。「地址来源」控制下发节点的来源：原生地址（工作器域名）、优选域名（第三方优选域名列表）、优选 IP（内置与实时拉取的优选 IP）、自定义优选（「优选配置」保存的优选列表）、随机优选（「优选配置」随机优选模式，与自定义优选互斥）。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>配额速览 <span class="sub" id="dbSub">未配置监控</span></h3>
        <div id="dbWrap" style="display:none">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="dbReq">—</span></div>
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="dbPct">—</span></div>
        </div>
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控选项后即可在此查看当日用量；详细策略与自动调节见「配额安全」。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行状态</h3>
        <div class="kv"><span class="k">协议</span><span class="v" id="stProto">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="stKv">—</span></div>
        <div class="kv"><span class="k">面板入口</span><span class="v" id="stEntry">—</span></div>
      </div>
    </section>

    <!-- ===== 视图：节点配置（协议 / TLS / ECH / 落地出站） ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>节点配置</h2><p>代理协议、TLS/ECH 与落地出站（保存后立即生效）</p></div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-vless" checked><span class="sl"></span></label><span>VLESS 协议（支持所有内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-trojan"><span class="sl"></span></label><span>Trojan 协议（已支持Mihomo内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-xhttp"><span class="sl"></span></label><span>XHTTP 协议（Xray内核专用，须绑定自定义域名并开启gRPC）</span></div>
          <div class="field" style="margin-top:12px"><label>Trojan 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="Trojan 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>ALPN 协商（h2 / http/1.1，逗号分隔）</label><input type="text" id="alpn" placeholder="留空自动，如 h2,http/1.1" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）在开启「仅 TLS」后将从订阅中剔除。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH 加密（可选）</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>启用 ECH 加密（需绑定自定义域名）</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH 域名（留空用默认 cloudflare-ech.com）</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS（DoH 地址，留空用客户端默认）</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">开启后订阅节点将附带 ech 参数与 alpn 协商，客户端需支持 ECH 才能生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地 IP（留空使用内置地区反代；填写后优先，格式 host 或 host:port）</label><input type="text" id="s-proxyIP" placeholder="留空使用内置中继" autocomplete="off"></div>
        <div class="field"><label>出站代理（可选，socks5:// 或 http:// 或 host:port）</label><input type="text" id="s-outbound" placeholder="socks5://user:pass@1.2.3.4:1080" autocomplete="off"></div>
        <div class="field" style="margin-bottom:0"><label>出站方式</label>
          <select id="s-outmode">
            <option value="">默认（优先代理，失败直连）</option>
            <option value="no">直连优先（no）</option>
            <option value="only">仅走代理（only）</option>
          </select>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保存与生效</h3>
        <div class="note-box" style="margin:0">所有配置修改后点击右下角「保存全部」才会写入 KV 并生效，保存成功后订阅地址与节点构成立即更新；「重置」将清空 KV 中全部数据并还原为初始部署状态。</div>
      </div>
    </section>

    <!-- ===== 视图：优选配置 ===== -->
    <section class="view" data-view="optimizer">
      <div class="view-head"><h2>优选配置</h2><p>拉取候选 IP → 本地测速 → 最优节点加入订阅</p></div>
      <div class="card">
        <h3><span class="tick"></span>在线优选</h3>
        <div class="grid3">
          <div class="field" style="grid-column:span 2;margin:0"><label>数据源</label>
            <select id="o-source">
              <option value="wetest_v4">微测网 IPv4</option>
              <option value="wetest_v6">微测网 IPv6</option>
              <option value="bestcf">优选 IP 列表（bestcf）</option>
              <option value="hostmonit">HostMonit 优选</option>
              <option value="cidr">内置 Cloudflare 地址段</option>
              <option value="custom">自定义 URL</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>测速端口</label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">自定义…</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="自定义端口号" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none"><label>自定义数据源 URL</label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt" autocomplete="off"></div>
        <div class="grid3" style="margin-top:6px">
          <div class="field" style="margin:0"><label>并发线程（1-50）</label><input type="number" id="o-threads" min="1" max="50" value="5"></div>
          <div class="field" style="margin:0"><label>候选数量</label><input type="number" id="o-count" min="1" value="20"></div>
          <div class="field" style="margin:0"><label>随机补足（0 关闭）</label><input type="number" id="o-fill" min="0" value="0"></div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
          <span style="font-size:13px;color:var(--dim)">候选不足时用 Cloudflare 地址段随机补足</span>
          <span style="flex:1"></span>
          <button class="btn primary" onclick="runPick()">开始优选</button>
          <button class="btn" onclick="addAllBest()">全部加入最优</button>
        </div>
        <div class="msg" id="oMsg"></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>测速结果 <span class="sub">本地（浏览器）→ 目标 IP</span></h3>
        <div class="tbl-wrap">
          <table><colgroup><col style="width:42%"><col style="width:18%"><col style="width:16%"><col style="width:24%"></colgroup>
          <thead><tr><th>IP : 端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
          <tbody id="oTableBody"><tr><td colspan="4" style="text-align:center;color:var(--faint)">尚未测速 — 点击「开始优选」拉取候选</td></tr></tbody></table>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>优选节点</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>订阅模式</label>
            <select id="o-submode" onchange="onSubMode()">
              <option value="">关闭（使用面板默认节点池）</option>
              <option value="custom">自定义订阅（支持汇聚）</option>
              <option value="random">随机优选模式（官方接口）</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>自定义模式下追加默认节点</label>
            <select id="o-subinc">
              <option value="0">关闭（仅自定义节点）</option>
              <option value="1">开启（追加内置优选池与默认地区源）</option>
            </select>
          </div>
        </div>
        <div class="field" id="sm-custom" style="margin-top:14px;display:none">
          <label>优选节点（域名 / 优选 API / IP，每行一个；IP 格式 IP:端口#名称）</label>
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://bestcf.pages.dev/random-region/HK/100.txt"></textarea>
          <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析为可用 IP 下发。测速结果里的「加入优选」会把最优 IP 写入此列表，保存全部后生效。</div>
          <button class="btn sm" style="margin-top:8px" onclick="fetchDomains()">拉取微测网优选域名</button>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>随机优选数量（1-99）</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">从 Cloudflare 地址段随机生成指定数量的优选节点直接下发，不经域名解析。</div>
        </div>
      </div>
    </section>

    <!-- ===== 视图：配额安全 ===== -->
    <section class="view" data-view="quota">
      <div class="view-head"><h2>配额安全</h2><p>监控 Cloudflare 账户当日用量，按免费额度自动调节下发规模（需在面板设置中配置 Cloudflare 账户 ID 及 API 令牌）</p></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 用量监控 <span class="sub" id="qQuotaSub">未配置</span></h3>
        <div id="qQuotaWrap">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="qReq">—</span></div>
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="qBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="qPct">—</span></div>
          <div class="kv"><span class="k">剩余额度</span><span class="v" id="qRemain">—</span></div>
          <div class="kv"><span class="k">CPU 时间</span><span class="v" id="qCpu">—</span></div>
          <div class="kv"><span class="k">子请求数</span><span class="v" id="qSub">—</span></div>
          <div class="kv"><span class="k">数据更新</span><span class="v" id="qAt">—</span></div>
        </div>
        <div id="qQuotaEmpty" style="display:none">
          <div class="note-box" style="margin:0">尚未配置 Cloudflare 监控：在「面板设置」填写 Cloudflare 账户 ID 与 API 令牌（或部署时配置环境变量 CF_ACCOUNT_ID / CF_API_TOKEN），即可实时查看当日请求量并启用自动调节。</div>
        </div>
        <div id="qQuotaErr" style="display:none">
          <div class="note-box" style="margin:0;border-left-color:var(--err)" id="qQuotaErrText">用量查询失败</div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="q-auto-on"><span class="sl"></span></label>
          <span style="font-size:13px">自动调节：当日用量 ≥ 60% 时按比例收缩节点上限（保护账户免费额度）</span>
          <span style="flex:1"></span>
          <button class="btn sm" onclick="refreshQuota()">刷新用量</button>
        </div>
        <p class="hint">自动调节：当日用量达到免费额度 60% 后，节点上限按比例收缩（基准上限 1000 条）——60% 时下发 1000 条、70% 时 750 条、80% 时 500 条、90% 时 250 条、100% 时 100 条（保底下限），用量越高下发越少，保护账户免费额度。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>精确节点上限（1-1000）</label><input type="number" id="q-nl-count" min="1" max="1000" value="100"></div>
          <p class="hint">开启后所有格式的订阅精确限制到指定数量，替代默认的 300/800 上限。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>轮询换新</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-poll-on"><span class="sl"></span></label><span>启用轮询（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：一次性下发全部节点，不受 300/800 上限限制；开启后按格式上限轮换下发新 IP（200 条去重窗口，避免重复下发），TLS 端口随每次订阅刷新随机换新。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">轮询换新机制</span><span class="v" id="qPoll">—</span></div><div class="kv"><span class="k">结构化格式上限</span><span class="v">300 节点</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">行式格式上限</span><span class="v">800 节点</span></div><div class="kv"><span class="k">严格封顶 / 去重窗口</span><span class="v">1,000 / 200 条</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求都会消耗 Worker 的 CPU 时间（免费计划 10ms/请求）。面板按「免费额度 → 格式 → 节点数」逐层设防，保证稳定运行。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">四道防线（按生效优先级从高到低）：① 用量监控——查看当日请求量，为自动调节提供数据；② 自动调节——用量 ≥60% 时按比例收缩节点上限，位于计算链末端以 min 收敛，只收紧、永不放大，优先级最高且与轮询状态无关；③ 数量上限（下发控制）——按设定值精确限制，全局生效（轮询开/关均受限）；④ 格式分档与轮询去重——结构化/行式格式上限与轮询去重换新。各层上限冲突时取较小值，让订阅生成的 CPU 消耗始终处于免费额度内。</div>
      </div>
    </section>

    <!-- ===== 视图：面板设置 ===== -->
    <section class="view" data-view="account">
      <div class="view-head"><h2>面板设置</h2><p>部署基础信息：UUID、面板路径、管理密码与绑定域名</p></div>
      <div class="card">
        <h3><span class="tick"></span>基础配置</h3>
        <div class="field"><label>UUID（订阅节点身份）</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">生成</button>
          </div>
        </div>
        <div class="field"><label>面板路径（访问入口，留空用 UUID）</label><input type="text" id="a-path" placeholder="留空自动使用 UUID" autocomplete="off"></div>
        <div class="field"><label>管理密码（留空则面板免登录）</label><input type="password" id="a-admin" placeholder="设置后访问面板需登录" autocomplete="new-password"></div>
        <div class="field" style="margin-bottom:0"><label>绑定域名（留空使用 *.workers.dev）</label><input type="text" id="a-host" placeholder="node.example.com" autocomplete="off"></div>
        <p class="hint" style="margin-top:10px">「绑定域名」仅用于订阅节点主机名（XHTTP 协议要求绑定自定义域名），不负责域名解析。自定义域名访问面板需先在 Cloudflare 面板 → Workers 与 Pages → 该 Worker → Domains &amp; Routes 添加自定义域名（DNS 由 Cloudflare 托管，证书自动签发），此字段留空即使用 *.workers.dev。KV 未绑定时配置只在内存中生效，重置后回到默认值。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 监控选项（可选）</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>账户 ID（Account Tag）</label><input type="text" id="a-cfid" placeholder="32 位十六进制 ID，位于 dash.cloudflare.com 右侧栏「账户 ID」" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API 令牌（Bearer）</label><input type="password" id="a-cftoken" placeholder="40 位令牌（My Profile → API Tokens 创建）" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">账户 ID 是 32 位十六进制字符串（<b>不是邮箱</b>），打开并登录Cloudflare账户后，点击「左侧栏」→「管理账户」→「帐户 API 令牌」→「创建令牌」。查询失败提示 401 时请检查这两项是否填错。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行信息</h3>
        <div class="kv"><span class="k">面板版本</span><span class="v" id="aVer">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="aKv">—</span></div>
        <div class="kv"><span class="k">轮询窗口</span><span class="v">最近 200 条</span></div>
      </div>
      <div class="danger-zone">
        <h3 style="margin-bottom:8px;color:var(--err)">危险操作</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:12px">重置将清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为初始部署状态，不可恢复。</p>
        <button class="btn danger" onclick="resetAll()">重置全部数据</button>
      </div>
    </section>

    <!-- ===== 视图：关于 ===== -->
    <section class="view" data-view="about">
      <div class="view-head"><h2>关于项目</h2><p>CFNext — Cloudflare 全新代理管理面板（独立界面 + 独立实现）</p></div>
      <div class="card">
        <h3><span class="tick"></span>相关链接</h3>
        <p style="font-size:13px;color:var(--dim)">YouTube @数字派：<a href="https://www.youtube.com/@PAI_CN" target="_blank" rel="noopener">youtube.com/@PAI_CN</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://t.me/SZ_PAI" target="_blank" rel="noopener">t.me/SZ_PAI</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>特别鸣谢</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">本面板为全新独立设计/全新编写：后端代理、订阅与优选逻辑参考以下开源项目的功能清单</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>参考仓库</th><th>地址</th></tr></thead>
          <tbody>
            <tr><td>cmliu/edgetunnel</td><td><a href="https://github.com/cmliu/edgetunnel" target="_blank" rel="noopener">github.com/cmliu/edgetunnel</a></td></tr>
            <tr><td>zizifn/edgetunnel</td><td><a href="https://github.com/zizifn/edgetunnel" target="_blank" rel="noopener">github.com/zizifn/edgetunnel</a></td></tr>
            <tr><td>6Kmfi6HP/EDtunnel</td><td><a href="https://github.com/6Kmfi6HP/EDtunnel" target="_blank" rel="noopener">github.com/6Kmfi6HP/EDtunnel</a></td></tr>
            <tr><td>IonRh/Cloudflare-BestIP</td><td><a href="https://github.com/IonRh/Cloudflare-BestIP" target="_blank" rel="noopener">github.com/IonRh/Cloudflare-BestIP</a></td></tr>
            <tr><td>zvos/CF-Workers-Monitor</td><td><a href="https://github.com/zvos/CF-Workers-Monitor" target="_blank" rel="noopener">github.com/zvos/CF-Workers-Monitor</a></td></tr>
            <tr><td>MetaCubeX/meta-rules-dat</td><td><a href="https://github.com/MetaCubeX/meta-rules-dat" target="_blank" rel="noopener">github.com/MetaCubeX/meta-rules-dat</a></td></tr>
            <tr><td>666OS/rules</td><td><a href="https://github.com/666OS/rules" target="_blank" rel="noopener">github.com/666OS/rules</a></td></tr>
            <tr><td>DustinWin/ruleset_geodata</td><td><a href="https://github.com/DustinWin/ruleset_geodata" target="_blank" rel="noopener">github.com/DustinWin/ruleset_geodata</a></td></tr>
            <tr><td>TG-Twilight/AWAvenue-Ads-Rule</td><td><a href="https://github.com/TG-Twilight/AWAvenue-Ads-Rule" target="_blank" rel="noopener">github.com/TG-Twilight/AWAvenue-Ads-Rule</a></td></tr>
            <tr><td>Koolson/Qure</td><td><a href="https://github.com/Koolson/Qure" target="_blank" rel="noopener">github.com/Koolson/Qure</a></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>调用接口</h3>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:40%"><col style="width:60%"></colgroup>
          <thead><tr><th>用途</th><th>接口</th></tr></thead>
          <tbody>
            <tr><td>HostMonit 优选</td><td class="mono">stock.hostmonit.com/CloudFlareYes</td></tr>
            <tr><td>优选 IP 列表</td><td class="mono">cf.090227.xyz/ip.164746.xyz</td></tr>
            <tr><td>bestcf 地区优选池</td><td class="mono">bestcf.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH 解析</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare 用量监控（GraphQL）</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>版本更新检测</td><td class="mono">raw.githubusercontent.com/PAICNI/CFNext/...</td></tr>
            <tr><td>远程规则集（sing-box / Clash）</td><td class="mono">raw.githubusercontent.com/MetaCubeX/meta-rules-dat/...</td></tr>
            <tr><td>面板二维码库</td><td class="mono">cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
          </tbody>
        </table></div>
      </div>
    </section>
  </div>
</div>
</div>

<div class="fbar">
  <span class="saved-at" id="savedAt">尚未保存</span>
  <button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
  <button class="btn primary" id="saveBtn" onclick="saveAll()"><span class="dirty-dot"></span>保存全部</button>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===== 基础 ===== */
var APIPATH = location.pathname.replace(/\/+$/, '');
var CFG = null;
var LAST = [];
var toastTimer = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
function toast(t, ty){
  var el = $('toast');
  el.textContent = t;
  el.className = 'toast show ' + (ty || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast'; }, 2600);
}
function showMsg(id, t, ty){
  var el = $(id);
  el.textContent = t;
  el.className = 'msg show ' + (ty || 'info');
}
function copyText(t){
  var done = false;
  function fin(ok2){
    if (done) return; done = true;
    toast(ok2 ? '已复制' : '复制失败，请手动复制', ok2 ? 'ok' : 'err');
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var p = null;
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(fallbackCopy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(fallbackCopy(t)); });
      setTimeout(function(){ fin(fallbackCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
    } else { fin(true); }
  } else {
    fin(fallbackCopy(t));
  }
}
function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  var ok2 = false;
  try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
  document.body.removeChild(ta);
  return ok2;
}
function copySub(){ copyText($('subUrl').value || makeSub()); }
function markDirty(){
  $('saveBtn').classList.add('dirty');
  $('savedAt').textContent = '有未保存的修改';
}

/* ===== 导航 ===== */
var NAV = [
  { id:'dashboard', name:'仪表盘', icon:'<path d="M4 4h7v7H4zM13 4h7v4h-7zM4 13h7v7H4zM13 11h7v9h-7z"/>' },
  { id:'nodes', name:'节点配置', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'优选配置', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'配额安全', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'面板设置', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'关于项目', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'仪表盘', nodes:'节点配置', optimizer:'优选配置', quota:'配额安全', account:'面板设置', about:'关于项目' };
function buildNav(){
  var html = '';
  NAV.forEach(function(n){
    html += '<button class="nav-item" data-v="' + n.id + '" onclick="switchView(\'' + n.id + '\')"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + n.icon + '</svg>' + n.name + '</button>';
  });
  $('nav').innerHTML = html;
}
function switchView(id){
  document.querySelectorAll('.nav-item').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-v') === id);
  });
  document.querySelectorAll('.view').forEach(function(x){
    x.classList.toggle('on', x.getAttribute('data-view') === id);
  });
  $('pageTitle').textContent = TITLES[id] || '';
  $('sidebar').classList.remove('open');
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); });

/* ===== 主题 ===== */
function systemIsLight(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches; }
function storedTheme(){ var t = 'dark'; try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {} return t; }
function resolveTheme(t){ if (t === 'auto') return systemIsLight() ? 'light' : 'dark'; return t; }
function setThemeIcon(t){
  var p = document.getElementById('themeIcon');
  if (!p) return;
  if (t === 'light') p.setAttribute('d', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4');
  else p.setAttribute('d', 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z');
}
function applyTheme(){
  var t = resolveTheme(storedTheme());
  document.documentElement.setAttribute('data-theme', t);
  setThemeIcon(t);
}
function setTheme(t){
  try { localStorage.setItem('tp_theme', t); } catch(e) {}
  applyTheme();
  toast(t === 'auto' ? '已切换为跟随系统' : (t === 'light' ? '已切换为日间模式' : '已切换为夜间模式'), 'ok');
}
$('themeBtn').addEventListener('click', function(){
  var cur = storedTheme();
  var next = (cur === 'light') ? 'dark' : 'light';
  setTheme(next);
});
applyTheme();

/* ===== 更新检测 ===== */
var topVerText = 'v—';
function legacyCopy(t){
  try {
    var ta = document.createElement('textarea');
    ta.value = t;
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok2 = false;
    try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
    document.body.removeChild(ta);
    return ok2;
  } catch (e) { return false; }
}
function copyClipboard(t){
  return new Promise(function(ok){
    var done = false;
    function finish(v){ if (done) return; done = true; ok(v); }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        var p = null;
        try { p = navigator.clipboard.writeText(t); } catch (e) { finish(legacyCopy(t)); return; }
        if (p && typeof p.then === 'function') {
          p.then(function(){ finish(true); }, function(){ finish(legacyCopy(t)); });
          setTimeout(function(){ finish(legacyCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
        } else { finish(true); }
      } else {
        finish(legacyCopy(t));
      }
    } catch (e) { finish(legacyCopy(t)); }
  });
}
function checkUpdate(){
  var sv = $('sideVer');
  if (sv.classList.contains('checking')) return;
  sv.classList.add('checking');
  sv.textContent = '检测中…';
  api('update').then(function(r){
    sv.classList.remove('checking');
    if (!r || !r.ok || !r.data) { sv.textContent = topVerText; toast('检测更新失败，请稍后重试', 'err'); return; }
    var d = r.data;
    var kindName = (d.kind === '混淆') ? '混淆版' : '明文版';
    topVerText = 'v' + d.current + ' ' + kindName;
    sv.textContent = topVerText;
    if (d.hasUpdate && d.code) {
      sv.classList.add('has-update');
      var kind = (d.kind === '混淆') ? '混淆' : '明文';
      copyClipboard(d.code).then(function(copied){
        toast(copied ? '检测到更新，已复制最新' + kind + '代码到剪贴板' : '检测到更新（v' + d.latest + '），复制失败，请前往仓库获取', copied ? 'ok' : 'err');
      });
    } else if (d.hasUpdate) {
      toast('检测到更新（v' + d.latest + '），但未能获取代码', 'err');
    } else if (d.latest) {
      sv.classList.remove('has-update');
      toast('已是最新版本（v' + d.current + ' ' + kindName + '）', 'ok');
    } else {
      toast('检测更新失败：' + (d.error || '仓库暂不可达'), 'err');
    }
  }).catch(function(){
    sv.classList.remove('checking');
    sv.textContent = topVerText;
    toast('检测更新失败，请稍后重试', 'err');
  });
}

/* ===== 配置加载与回填 ===== */
function loadAll(){
  if (/\.workers\.dev$/i.test(location.hostname)) $('wdwarn').style.display = 'block';
  api('status').then(function(r){
    if (r && r.ok) renderStatus(r.data);
  }).catch(function(){});
  api('config').then(function(r){
    if (r && r.ok){
      CFG = r.data;
      fillForm();
      renderAll();
      makeSub(false);
      setConn(true);
      refreshQuota();
      toast('配置已加载', 'ok');
    } else if (r && r.status === 403) {
      location.href = '/login?next=' + encodeURIComponent(APIPATH);
    } else {
      setConn(false);
      toast('无法连接服务器', 'err');
    }
  }).catch(function(){
    setConn(false);
    toast('无法连接服务器', 'err');
  });
}
function setConn(ok){
  var p = $('connPill');
  p.className = 'pill ' + (ok ? '' : 'off');
  $('connText').textContent = ok ? '运行中' : '无法连接';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || '');
  var wd = !!(d.workersDev) || /\.workers\.dev$/i.test(location.hostname);
  $('wdwarn').style.display = wd ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '当前为 *.workers.dev 域名：Cloudflare 可能限制该域名直连，若客户端更新订阅失败（提示无效订阅），请在客户端开启系统代理或「更新订阅使用代理」后重试；节点连接不受影响（直连优选 IP）。'
    : '';
  var kv = d.kv;
  var kvTxt = kv ? '已绑定（配置持久化）' : '未绑定（配置仅内存）';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '—';
  var kindName = (d.kind === '混淆版') ? '混淆版' : '明文版';   // 部署形态（明文版 / 混淆版），由后端自检
  $('sideVer').textContent = 'v' + v + ' ' + kindName;
  topVerText = 'v' + v + ' ' + kindName;
  $('aVer').textContent = v + ' ' + kindName;
}
function protoText(){
  if (!CFG) return '—';
  var a = [];
  if (CFG.enableVless !== false) a.push('VLESS');
  if (CFG.enableTrojan) a.push('Trojan');
  if (CFG.enableXhttp) a.push('XHTTP');
  return a.length ? a.join(' / ') : '未启用';
}
function renderAll(){
  $('stProto').textContent = protoText();
  renderQuota();
}
function renderQuota(){
  var nl = !!(CFG && CFG.nodeLimit);
  $('qNl').textContent = nl ? '已开启' : '关闭（默认分档上限）';
  $('qNl').className = 'v ' + (nl ? 'ok' : '');
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 100) + ' 节点' : '—';
  var po = !(CFG && CFG.polling === false);
  $('qPoll').textContent = po ? '已开启（每轮换新 IP）' : '关闭（每次下发全部）';
  $('qPoll').className = 'v ' + (po ? 'ok' : '');
}
function fmtNum(n){
  if (n == null || isNaN(n)) return '—';
  n = Number(n);
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}
function showQuotaState(kind, text){
  $('qQuotaWrap').style.display = (kind === 'data') ? '' : 'none';
  $('qQuotaEmpty').style.display = (kind === 'empty') ? '' : 'none';
  $('qQuotaErr').style.display = (kind === 'err') ? '' : 'none';
  if (kind === 'err') $('qQuotaErrText').textContent = quotaErrText(text);
  if (kind === 'data'){ $('qQuotaEmpty').style.display = 'none'; }
}
function quotaErrText(e){
  var m = String(e || '');
  if (m.indexOf('401') >= 0) return '认证失败（CF API 401）：请检查账户 ID 是否为 32 位十六进制、API 令牌是否有效且勾选 Account Analytics 读取权限';
  if (m.indexOf('403') >= 0) return '无权限（CF API 403）：API 令牌缺少账户 Analytics 读取权限';
  if (m.indexOf('429') >= 0) return 'CF API 限流（429）：已自动退避 15 分钟，期间沿用缓存数据';
  if (m.indexOf('未找到账户') >= 0) return m + '：请核对 dash.cloudflare.com 右侧栏的 32 位账户 ID';
  return m || '用量查询失败';
}
function renderQuotaData(d){
  updDbQuota(d);
  if (!d || !d.configured){
    $('qQuotaSub').textContent = '未配置';
    showQuotaState('empty');
    return;
  }
  if (d.error && !d.stale){
    $('qQuotaSub').textContent = '查询失败';
    showQuotaState('err', d.error);
    return;
  }
  $('qQuotaSub').textContent = d.stale ? '缓存数据' : '已连接';
  showQuotaState('data');
  $('qReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('qBar').style.width = Math.min(100, p) + '%';
  $('qBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('qPct').textContent = p + '%';
  $('qPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
  $('qRemain').textContent = fmtNum(d.remaining != null ? d.remaining : (d.limit - d.today.requests));
  $('qCpu').textContent = (d.today.cpuTime != null) ? (d.today.cpuTime / 1000).toFixed(2) + ' s' : '—';
  $('qSub').textContent = fmtNum(d.today.subrequests);
  $('qAt').textContent = (d.updatedAt ? String(d.updatedAt).replace('T', ' ').replace('Z', '') + ' UTC' : '—') + (d.stale ? '（限流缓存）' : '');
}
function updDbQuota(d){
  if (!d || !d.configured){ $('dbSub').textContent = '未配置监控'; $('dbWrap').style.display = 'none'; return; }
  if (d.error && !d.stale){ $('dbSub').textContent = '查询失败'; $('dbWrap').style.display = 'none'; return; }
  $('dbSub').textContent = d.stale ? '缓存数据' : '已连接';
  $('dbWrap').style.display = '';
  $('dbReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('dbBar').style.width = Math.min(100, p) + '%';
  $('dbBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('dbPct').textContent = p + '%';
  $('dbPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
}
function refreshQuota(){
  $('qQuotaSub').textContent = '查询中…';
  api('quota').then(function(r){
    if (r && r.ok) renderQuotaData(r.data);
    else { $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', (r && r.msg) || '查询失败'); }
  }).catch(function(){ $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', '无法连接服务器'); });
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if (s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if ((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if ((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function renderPreferred(){
  if (!CFG) return;
  var lines = [];
  String(CFG.preferredDomains || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  $('f-preferred').value = lines.join('\n');
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-port');
  var found = false;
  for (var i = 0; i < sel.options.length; i++){ if (sel.options[i].value === pv){ found = true; break; } }
  if (found){ sel.value = pv; $('o-portC').style.display = 'none'; }
  else { sel.value = 'custom'; $('o-portC').value = pv; $('o-portC').style.display = ''; }
}
function fillForm(){
  if (!CFG) return;
  $('en-vless').checked = CFG.enableVless !== false;
  $('en-trojan').checked = !!CFG.enableTrojan;
  $('tp-pass').value = CFG.trojanPassword || '';
  $('en-xhttp').checked = !!CFG.enableXhttp;
  $('tls-only').checked = !!CFG.tlsOnly;
  $('alpn').value = CFG.alpn || '';
  $('ech-on').checked = !!CFG.ech;
  $('ech-host').value = CFG.echHost || '';
  $('ech-dns').value = CFG.echDns || '';
  var fl = CFG.filter || {};
  var region = fl.region || 'all';
  var regionArr = Array.isArray(region) ? region : (region === 'all' ? ['all'] : [region]);
  $('fl-region-all').checked = regionArr.indexOf('all') >= 0;
  ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ $('fl-region-' + r).checked = regionArr.indexOf(r) >= 0; });
  var ipType = fl.ipType || ['IPv4', 'IPv6'];
  $('fl-ip4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ip6').checked = ipType.indexOf('IPv6') >= 0;
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-m').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-c').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-t').checked = isp.indexOf('电信') >= 0;
  var src = CFG.src || {};
  $('fl-native').checked = src.native === true;
  $('fl-pref-domain').checked = src.prefDomain !== false;
  $('fl-pref-ip').checked = src.prefIp !== false;
  $('fl-custom-pref').checked = src.customPref === true;
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 100;
  $('q-poll-on').checked = CFG.polling !== false;
  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('a-uuid').value = CFG.uuid || '';
  $('a-path').value = CFG.path || '';
  $('a-admin').value = CFG.admin || '';
  $('a-host').value = CFG.host || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('s-proxyIP').value = CFG.proxyIP || '';
  $('s-outbound').value = CFG.outboundProxy || '';
  $('s-outmode').value = CFG.outboundMode || '';
  renderPreferred();
  bindRegionPills();
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
}
// 节点地区多选互斥：勾选具体地区时取消「全部地区」；全部取消时自动恢复「全部地区」（保证筛选非空）
function bindRegionPills(){
  if (window.__regionPillsBound) return;
  window.__regionPillsBound = true;
  var codes = ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'];
  var all = $('fl-region-all');
  all.addEventListener('change', function(){
    if (all.checked) codes.forEach(function(r){ $('fl-region-' + r).checked = false; });
  });
  codes.forEach(function(c){
    $('fl-region-' + c).addEventListener('change', function(){
      if ($('fl-region-' + c).checked) all.checked = false;
      var any = codes.some(function(r){ return $('fl-region-' + r).checked; });
      if (!any) all.checked = true;
    });
  });
}
function collectForm(){
  if (!CFG) return null;
  var ipLines = [], domLines = [];
  String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (parseIps(s).length) ipLines.push(s); else domLines.push(s);
  });
  var ips = [], seen = {};
  ipLines.forEach(function(s){
    var p = parseIps(s);
    if (!p.length) return;
    var k = p[0].ip + ':' + (p[0].port || 443);
    if (seen[k]) return;
    seen[k] = 1;
    ips.push(p[0]);
  });
  return {
    uuid: $('a-uuid').value.trim(),
    path: $('a-path').value.trim() || $('a-uuid').value.trim(),
    admin: $('a-admin').value,
    host: $('a-host').value.trim(),
    alpn: $('alpn').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 100,
    polling: $('q-poll-on').checked,
    cfAccountId: $('a-cfid').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    enableVless: $('en-vless').checked,
    enableTrojan: $('en-trojan').checked,
    trojanPassword: $('tp-pass').value,
    enableXhttp: $('en-xhttp').checked,
    proxyIP: $('s-proxyIP').value.trim(),
    outboundProxy: $('s-outbound').value.trim(),
    outboundMode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      port: parseInt($('o-port').value === 'custom' ? $('o-portC').value : $('o-port').value) || 443,
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fill').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-submode').value,
      subRandomCount: parseInt($('o-rand').value) || 16,
      subIncludeDefault: $('o-subinc').value === '1'
    },
    filter: {
      region: (function(){
        if ($('fl-region-all').checked) return ['all'];
        var a = [];
        ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ if ($('fl-region-' + r).checked) a.push(r); });
        return a.length ? a : ['all'];
      })(),
      ipType: (function(){ var a = []; if ($('fl-ip4').checked) a.push('IPv4'); if ($('fl-ip6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-m').checked) a.push('移动'); if ($('fl-isp-c').checked) a.push('联通'); if ($('fl-isp-t').checked) a.push('电信'); return a; })()
    },
    src: {
      native: $('fl-native').checked,
      prefDomain: $('fl-pref-domain').checked,
      prefIp: $('fl-pref-ip').checked,
      customPref: $('fl-custom-pref').checked
    }
  };
}
function saveAll(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '已保存：' + new Date().toLocaleTimeString();
        toast('已保存并生效', 'ok');
      } else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function resetAll(){
  if (!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为初始部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function genUuid(){
  var u = '';
  if (window.crypto && crypto.randomUUID){ u = crypto.randomUUID(); }
  else {
    var tpl = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    u = tpl.replace(/[xy]/g, function(c){
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
  }
  $('a-uuid').value = u;
  markDirty();
  toast('已生成新 UUID', 'ok');
}
document.querySelectorAll('input,select,textarea').forEach(function(el){
  var id = el.id || '';
  var prefixes = ['f-', 'o-', 'a-', 's-', 'q-', 'e-', 't-', 'fl-', 'en-'];
  for (var i = 0; i < prefixes.length; i++){ if (id.indexOf(prefixes[i]) === 0){ el.addEventListener('change', markDirty); break; } }
});

/* ===== 订阅 ===== */
function subUrlOf(fmt){
  var u = location.origin + APIPATH + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if (showQR) showQRCode(url);
}
$('subFmt').addEventListener('change', function(){ makeSub(false); });
function toggleQR(){
  var w = $('qrWrap');
  if (w.style.display === 'block'){ w.style.display = 'none'; return; }
  showQRCode($('subUrl').value || subUrlOf(''));
}
function showQRCode(url){
  var w = $('qrWrap');
  w.style.display = 'block';
  if (typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  try {
    var fmt = ($('subFmt') && $('subFmt').value) || 'auto';
    var q = qrcode(0, 'M');
    q.addData(qrPayloadOf(fmt, url));
    q.make();
    w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
  } catch(e) { w.innerHTML = '<div class="hint">二维码生成失败：' + e.message + '</div>'; }
}
// 二维码内容随订阅格式（客户端）联动：
// Clash/Mihomo、Stash → clash://install-config（FlyClash / Clash Verge / Stash 扫码装订阅，配置名取订阅响应头 filename=CFNext）
// Sing-box → sing-box://import-remote-profile?url=...#CFNext（官方 scheme，# 后为配置文件名称）
// Surge → surge:///install-config（Surge 官方 scheme）
// auto / v2rayN+Shadowrocket / Loon / Quantumult X / 明文 → 直接使用订阅链接（Shadowrocket / Loon / QuanX 扫码识别）
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === 'clash' || fmt === 'stash') return 'clash://install-config?url=' + enc;
  if (fmt === 'singbox') return 'sing-box://import-remote-profile?url=' + enc + '#CFNext';
  if (fmt === 'surge') return 'surge:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  var a = document.createElement('a');
  a.href = subUrlOf(fmt === 'auto' ? '' : fmt);
  a.download = 'cfnext-sub.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function previewSub(){
  var fmt = $('subFmt').value;
  var box = $('subPrev');
  box.style.display = 'block';
  $('prevType').textContent = '请求中…';
  $('prevCount').textContent = '—';
  $('prevBody').textContent = '';
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok){ $('prevType').textContent = '预览失败'; $('prevBody').textContent = (r && r.msg) || '未知错误'; return; }
      var body = r.body || '';
      var type = r.type || '';
      $('prevType').textContent = type || '—';
      var n = 0;
      if (/clash|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(vless|trojan|ss|xhttp):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* 保持原样 */ }
        }
        n = t.split('\n').filter(function(l){ return /^(vless|trojan|ss|xhttp):\/\//.test(l.trim()); }).length;
      }
      $('prevCount').textContent = n + ' 个节点';
      $('prevBody').textContent = body.length > 2600 ? body.slice(0, 2600) + '\n…（已截断，完整内容请下载）' : body;
    })
    .catch(function(){ $('prevType').textContent = '预览失败：无法连接服务器'; $('prevBody').textContent = ''; });
}

/* ===== 优选配置 ===== */
function onPortSel(){
  var sel = $('o-port');
  var c = $('o-portC');
  c.style.display = sel.value === 'custom' ? '' : 'none';
}
function onSubMode(){
  var m = $('o-submode').value;
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
  // 「追加内置优选池与默认地区源」仅在自定义订阅 / 随机优选模式下可选；
  // 订阅模式关闭（使用面板默认节点池）时强制为关闭并禁用，避免默认模式下误开追加导致行为不符
  if (m === '') {
    $('o-subinc').value = '0';
    $('o-subinc').disabled = true;
  } else {
    $('o-subinc').disabled = false;
  }
  // 订阅模式与仪表盘「地址来源」胶囊互斥同步（三态全部明确跟随）：
  // custom → 自定义优选开、随机优选关；random → 随机优选开、自定义优选关；关闭 → 两个胶囊都关
  if (m === 'custom') {
    $('fl-custom-pref').checked = true;
    $('fl-random-pref').checked = false;
  } else if (m === 'random') {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = true;
  } else {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = false;
  }
}
// 仪表盘「地址来源 → 自定义优选」与优选配置「订阅模式」联动：
// 勾选 → 订阅模式切为「自定义订阅（支持汇聚）」并关闭随机优选；取消 → 订阅模式关闭（使用面板默认节点池）
$('fl-custom-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-random-pref').checked = false;   // 与随机优选互斥
    $('o-submode').value = 'custom';
  } else {
    if ($('o-submode').value === 'custom') $('o-submode').value = '';
  }
  onSubMode();
});
// 仪表盘「地址来源 → 随机优选」与优选配置「订阅模式 → 随机优选模式（官方接口）」联动：
// 勾选 → 订阅模式切为 random 并关闭自定义优选；取消 → 订阅模式关闭（若当前为 random）
$('fl-random-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-custom-pref').checked = false;   // 与自定义优选互斥
    $('o-submode').value = 'random';
  } else {
    if ($('o-submode').value === 'random') $('o-submode').value = '';
  }
  onSubMode();
});
$('o-source').addEventListener('change', function(){
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
});
function pingIp(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var proto = (port === 80 || port === 8080 || port === 8880 || port === 2052 || port === 2082 || port === 2086 || port === 2095) ? 'http' : 'https';
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch(proto + '://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){
      clearTimeout(timer);
      var ms = Date.now() - t0;
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);
      return { ok: ms < timeout, latency: ms };
    });
}
function pingHttps(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch('https://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){ clearTimeout(timer); var ms = Date.now() - t0; return { ok: ms < timeout, latency: ms }; });
}
function localTest(cands, threads, timeout){
  var results = [], idx = 0, pending = 0;
  return new Promise(function(resolve){
    function next(){
      while (pending < threads && idx < cands.length) {
        (function(c){
          pending++;
          pingIp(c.ip, c.port, timeout).then(function(r){
            pending--;
            results.push({ ip: c.ip, port: c.port, ok: r.ok, latency: r.latency });
            if (results.length === cands.length) resolve(results);
            else next();
          });
        })(cands[idx++]);
      }
    }
    next();
  });
}
function runPick(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if (!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if (!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF 补足 ' + st.cidr + ' 条');
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速中…', 'info');
      localTest(cands, o.threads || 5, 3000).then(function(results){
        results.sort(function(a, b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地 → 目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  var seen = {};
  var dedup = [];
  (list || []).forEach(function(r){
    if (seen[r.ip]) return;
    seen[r.ip] = 1;
    dedup.push(r);
  });
  LAST = dedup;
  var tb = $('oTableBody');
  tb.innerHTML = '';
  if (!LAST.length){ tb.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--faint)">没有可用结果</td></tr>'; return; }
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '<span style="color:var(--faint)">—</span>';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if (!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists){ toast('该 IP 已在优选列表中', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('已加入优选列表，点击「保存全部」下发', 'ok');
}
function addAllBest(){
  var n = parseInt($('o-count').value) || 20;
  var seen = {};
  var list = [];
  LAST.filter(function(r){ return r.ok; }).forEach(function(r){
    if (seen[r.ip] || list.length >= n) return;
    seen[r.ip] = 1;
    list.push(r);
  });
  if (!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + '#优选' + (i + 1)); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if (r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}

/* ===== 启动 ===== */
buildNav();
var initView = 'dashboard';
try {
  var qv = new URLSearchParams(location.search).get('v');
  if (qv && TITLES[qv]) initView = qv;
} catch(e) {}
switchView(initView);
loadAll();
</script>
</body>
</html>

`,loginHTML=_0x4fb34b(0x23e);function isBrowserUA(_0x37704e){const _0x165e2c=_0x4fb34b;return(_0x37704e||'')['toLowerCase']()[_0x165e2c(0x307)]('mozilla');}async function requireAuth(_0x11bb7e,_0x4e7cab){const _0x25d34a=_0x4fb34b;if(!_0x4e7cab[_0x25d34a(0x3e2)])return!![];const _0x3601b2=_0x11bb7e[_0x25d34a(0x32b)][_0x25d34a(0x2a4)](_0x25d34a(0x42f))||'',_0x960587=_0x3601b2['match'](/(?:^|;\s*)luma_auth=([^;]+)/);return!!(_0x960587&&_0x960587[0x1]===md5hex(String(_0x4e7cab[_0x25d34a(0x3e2)])));}async function handleRequest(_0x352a69,_0x547c53){const _0x4271e2=_0x4fb34b,_0x403ee1=new URL(_0x352a69[_0x4271e2(0x37c)]),_0x1e0c17=_0x352a69[_0x4271e2(0x32b)][_0x4271e2(0x2a4)]('User-Agent')||'',_0x16829e=(_0x352a69[_0x4271e2(0x32b)]['get'](_0x4271e2(0x1ec))||'')[_0x4271e2(0x3fb)]();if(_0x403ee1['protocol']===_0x4271e2(0x332))return Response[_0x4271e2(0x1d1)](_0x403ee1[_0x4271e2(0x468)][_0x4271e2(0x449)](_0x4271e2(0x2a2),_0x4271e2(0x28c)),0x12d);const _0x4114ad=await loadConfig(_0x547c53),_0x30e071=_0x4114ad[_0x4271e2(0x2fe)]||_0x4114ad[_0x4271e2(0x2cc)],_0x5137f5=_0x403ee1[_0x4271e2(0x518)][_0x4271e2(0x449)](/^\/+|\/+$/g,''),_0x5e066d=_0x5137f5[_0x4271e2(0x26f)]('/');if(_0x5e066d[0x0]==='version')return json({'version':VERSION});if(_0x5e066d[0x0]==='login'){if(_0x352a69[_0x4271e2(0x4cf)]===_0x4271e2(0x4f5)){const _0x48564e=await _0x352a69[_0x4271e2(0x207)](),_0x47de11=new URLSearchParams(_0x48564e);if(_0x47de11['get'](_0x4271e2(0x1eb))===_0x4114ad[_0x4271e2(0x3e2)]){const _0x426bb6=md5hex(String(_0x4114ad[_0x4271e2(0x3e2)]));return new Response(JSON[_0x4271e2(0x31e)]({'ok':!![],'next':_0x47de11['get'](_0x4271e2(0x2f8))||'/'}),{'status':0xc8,'headers':{'Content-Type':_0x4271e2(0x2f9),'Set-Cookie':_0x4271e2(0x253)+_0x426bb6+_0x4271e2(0x319)}});}return json({'ok':![],'msg':_0x4271e2(0x479)},0x193);}if(_0x4114ad[_0x4271e2(0x3e2)])return new Response(loginHTML,{'status':0xc8,'headers':{'Content-Type':_0x4271e2(0x4f8)}});return Response[_0x4271e2(0x1d1)](new URL('/'+_0x30e071,_0x352a69[_0x4271e2(0x37c)])[_0x4271e2(0x468)],0x12e);}const _0x183046=_0x5e066d[0x0]===_0x30e071;if(_0x5e066d[0x0]===''&&isBrowserUA(_0x1e0c17))return Response[_0x4271e2(0x1d1)](new URL('/'+_0x30e071,_0x352a69[_0x4271e2(0x37c)])[_0x4271e2(0x468)],0x12e);if(_0x183046&&_0x5e066d[_0x4271e2(0x1b7)]===0x1){if(_0x16829e===_0x4271e2(0x353))return handleWebSocketProxy(_0x352a69,_0x4114ad);if(_0x352a69[_0x4271e2(0x4cf)]===_0x4271e2(0x4f5)){if(_0x4114ad[_0x4271e2(0x378)])try{return await handleXhttpProxy(_0x352a69,_0x4114ad);}catch(_0x8e545f){return json({'ok':![],'msg':_0x4271e2(0x333)+(_0x8e545f[_0x4271e2(0x4cd)]||_0x8e545f)},0x1f4);}}}if(_0x183046&&(_0x5e066d[0x1]==='sub'||_0x5e066d['length']===0x1&&!isBrowserUA(_0x1e0c17)&&!_0x1e0c17[_0x4271e2(0x4ca)]('luma'))){const _0x5bebe3=_0x5e066d[_0x4271e2(0x1b7)]>=0x3?_0x5e066d[0x2]:'';try{let _0x3aa096=null;if(_0x4114ad[_0x4271e2(0x3be)]!==![]&&_0x547c53['K']&&typeof _0x547c53['K'][_0x4271e2(0x2a4)]===_0x4271e2(0x409))try{const _0xeaf768=await _0x547c53['K'][_0x4271e2(0x2a4)](_0x4271e2(0x286));if(_0xeaf768){const _0x478ae0=JSON[_0x4271e2(0x34d)](_0xeaf768);if(Array[_0x4271e2(0x1f8)](_0x478ae0[_0x4271e2(0x43f)])&&_0x478ae0[_0x4271e2(0x43f)][_0x4271e2(0x1b7)])_0x3aa096=new Set(_0x478ae0['ips']);}}catch(_0x266fc5){}const _0x155984=_0x3aa096?Object[_0x4271e2(0x1c2)]({},_0x4114ad,{'_skipIssued':_0x3aa096}):_0x4114ad;if(_0x4114ad[_0x4271e2(0x457)])try{const _0x51ffb8=await getQuota(_0x547c53,_0x4114ad);if(_0x51ffb8[_0x4271e2(0x1cb)]&&_0x51ffb8['today']&&_0x51ffb8[_0x4271e2(0x300)]['requests']>=Math[_0x4271e2(0x3f0)](QUOTA_LIMIT*0.6)){const _0x5db128=_0x51ffb8[_0x4271e2(0x300)]['requests']/_0x51ffb8[_0x4271e2(0x26a)],_0x1968bb=Math[_0x4271e2(0x438)](0.1,(0x1-_0x5db128)/0.4);_0x155984[_0x4271e2(0x224)]=Math[_0x4271e2(0x438)](0x14,Math['round'](0x3e8*_0x1968bb));}}catch(_0x6f5253){}const _0x45c4fb=await generateSubscription(_0x155984,_0x352a69[_0x4271e2(0x37c)],_0x5bebe3,_0x1e0c17,_0x352a69['cf']&&_0x352a69['cf'][_0x4271e2(0x50d)]);if(_0x4114ad[_0x4271e2(0x3be)]!==![]&&_0x547c53['K']&&typeof _0x547c53['K'][_0x4271e2(0x25b)]===_0x4271e2(0x409)&&_0x45c4fb['issued']&&_0x45c4fb['issued']['length']){const _0x2e4472=_0x3aa096?Array[_0x4271e2(0x22a)](_0x3aa096):[],_0x390904=[...new Set([..._0x45c4fb['issued'],..._0x2e4472])][_0x4271e2(0x396)](0x0,0xc8),_0x1f5863=_0x390904[_0x4271e2(0x1b7)]!==_0x2e4472[_0x4271e2(0x1b7)]||_0x390904[_0x4271e2(0x3b2)]((_0x9475d,_0x1bffd8)=>_0x9475d!==_0x2e4472[_0x1bffd8]);if(_0x1f5863){const _0x506da2=JSON['stringify']({'t':Date[_0x4271e2(0x486)](),'ips':_0x390904});if(_0x547c53[_0x4271e2(0x225)]&&typeof _0x547c53[_0x4271e2(0x225)][_0x4271e2(0x320)]==='function')_0x547c53[_0x4271e2(0x225)][_0x4271e2(0x320)](_0x547c53['K']['put']('issued',_0x506da2)[_0x4271e2(0x2d8)](()=>{}));else await _0x547c53['K'][_0x4271e2(0x25b)](_0x4271e2(0x286),_0x506da2)[_0x4271e2(0x2d8)](()=>{});}}return new Response(_0x45c4fb[_0x4271e2(0x3ab)],{'status':0xc8,'headers':{'Content-Type':_0x45c4fb[_0x4271e2(0x44e)]+_0x4271e2(0x1fe),'Cache-Control':_0x4271e2(0x2aa),'Content-Disposition':'attachment;\x20filename=\x22CFNext\x22;\x20filename*=utf-8\x27\x27CFNext'}});}catch(_0x4ed60d){return new Response(_0x4271e2(0x316)+(_0x4ed60d&&_0x4ed60d[_0x4271e2(0x4cd)]||_0x4ed60d),{'status':0x1f4,'headers':{'Content-Type':_0x4271e2(0x445)}});}}if(_0x183046&&_0x5e066d[_0x4271e2(0x1b7)]===0x1&&isBrowserUA(_0x1e0c17)){if(!await requireAuth(_0x352a69,_0x4114ad))return Response[_0x4271e2(0x1d1)](new URL(_0x4271e2(0x46a)+encodeURIComponent('/'+_0x30e071),_0x352a69[_0x4271e2(0x37c)])[_0x4271e2(0x468)],0x12e);return new Response(PANEL_HTML,{'status':0xc8,'headers':{'Content-Type':'text/html;\x20charset=utf-8'}});}if(_0x183046&&_0x5e066d[0x1]===_0x4271e2(0x44c)){const _0x2e5637=_0x5e066d[0x2]||'',_0x3a9461=await requireAuth(_0x352a69,_0x4114ad);if(!_0x3a9461)return json({'ok':![],'status':0x193,'msg':_0x4271e2(0x2b5)},0x193);if(_0x2e5637==='config'){if(_0x352a69[_0x4271e2(0x4cf)]===_0x4271e2(0x4c8))return json({'ok':!![],'data':Object[_0x4271e2(0x1c2)]({},_0x4114ad,{'version':VERSION})});if(_0x352a69[_0x4271e2(0x4cf)]==='POST')try{const _0x2055aa=await _0x352a69[_0x4271e2(0x393)]();let _0x346567=![];if(_0x547c53['K']&&typeof _0x547c53['K'][_0x4271e2(0x2a4)]===_0x4271e2(0x409))try{const _0x7738e7=await _0x547c53['K'][_0x4271e2(0x2a4)](_0x4271e2(0x4e5));if(_0x7738e7){const _0x1ecca6=JSON[_0x4271e2(0x34d)](_0x7738e7);if(_0x1ecca6[_0x4271e2(0x457)]!==undefined)_0x346567=!![];}}catch(_0x34df47){}const _0x3253e5=Object[_0x4271e2(0x1c2)](JSON[_0x4271e2(0x34d)](JSON['stringify'](_0x4114ad)),_0x2055aa);if(!_0x346567&&_0x3253e5[_0x4271e2(0x457)]===![]){const _0x4210b7=Boolean(_0x3253e5['cfAccountId']&&_0x3253e5[_0x4271e2(0x252)]||_0x547c53[_0x4271e2(0x4a3)]&&_0x547c53[_0x4271e2(0x4e0)]);if(_0x4210b7)_0x3253e5[_0x4271e2(0x457)]=!![];}if(_0x2055aa[_0x4271e2(0x3d1)]&&typeof _0x2055aa['optimizer']===_0x4271e2(0x1c8))_0x3253e5[_0x4271e2(0x3d1)]=Object[_0x4271e2(0x1c2)](_0x3253e5[_0x4271e2(0x3d1)],_0x2055aa[_0x4271e2(0x3d1)]);if(_0x2055aa[_0x4271e2(0x398)]&&Array[_0x4271e2(0x1f8)](_0x2055aa[_0x4271e2(0x398)]))_0x3253e5['preferredIPs']=_0x2055aa[_0x4271e2(0x398)];await saveConfig(_0x547c53,_0x3253e5);const _0x1a6603=await loadConfig(_0x547c53,_0x352a69['url']);return json({'ok':!![],'data':Object[_0x4271e2(0x1c2)]({},_0x1a6603,{'version':VERSION}),'msg':_0x4271e2(0x232)});}catch(_0x4de1a8){return json({'ok':![],'msg':_0x4271e2(0x31a)+(_0x4de1a8[_0x4271e2(0x4cd)]||_0x4de1a8)},0x1f4);}}if(_0x2e5637===_0x4271e2(0x1cc)){if(_0x352a69[_0x4271e2(0x4cf)]!==_0x4271e2(0x4f5))return json({'ok':![],'msg':_0x4271e2(0x4df)},0x195);try{if(!_0x547c53['K']||typeof _0x547c53['K'][_0x4271e2(0x363)]!=='function')return json({'ok':![],'msg':_0x4271e2(0x50b)},0x190);return await _0x547c53['K'][_0x4271e2(0x363)](_0x4271e2(0x4e5)),await _0x547c53['K'][_0x4271e2(0x363)]('issued'),json({'ok':!![],'msg':_0x4271e2(0x1f5)});}catch(_0x3fbe76){return json({'ok':![],'msg':_0x4271e2(0x281)+(_0x3fbe76[_0x4271e2(0x4cd)]||_0x3fbe76)},0x1f4);}}if(_0x2e5637===_0x4271e2(0x2c7))return json({'ok':!![],'data':{'version':VERSION,'kind':deployKind()===_0x4271e2(0x3ef)?'混淆版':_0x4271e2(0x1fb),'host':_0x403ee1[_0x4271e2(0x481)],'path':_0x30e071,'region':_0x352a69['cf']&&_0x352a69['cf'][_0x4271e2(0x50d)]||_0x4271e2(0x305),'kv':!!(_0x547c53['K']&&typeof _0x547c53['K'][_0x4271e2(0x2a4)]==='function'),'workersDev':/\.workers\.dev$/i[_0x4271e2(0x3a5)](_0x403ee1[_0x4271e2(0x481)])}});if(_0x2e5637==='update')try{const _0x31b944=await checkUpdate(_0x547c53),_0x4d4f62={'current':_0x31b944[_0x4271e2(0x4d4)],'latest':_0x31b944[_0x4271e2(0x3ea)],'hasUpdate':_0x31b944[_0x4271e2(0x356)],'kind':_0x31b944[_0x4271e2(0x49c)],'error':_0x31b944[_0x4271e2(0x406)]||''};if(_0x31b944[_0x4271e2(0x356)]&&_0x31b944['code'])_0x4d4f62['code']=_0x31b944[_0x4271e2(0x4db)];return json({'ok':!![],'data':_0x4d4f62});}catch(_0x10e868){return json({'ok':![],'msg':_0x4271e2(0x1e6)+(_0x10e868[_0x4271e2(0x4cd)]||_0x10e868)},0x1f4);}if(_0x2e5637===_0x4271e2(0x20e))try{const _0x1c3f02=await getQuota(_0x547c53,_0x4114ad);return json({'ok':!![],'data':_0x1c3f02});}catch(_0x3cbe24){return json({'ok':![],'msg':_0x4271e2(0x4a6)+(_0x3cbe24[_0x4271e2(0x4cd)]||_0x3cbe24)},0x1f4);}if(_0x2e5637===_0x4271e2(0x361)){const _0x4750e0=_0x403ee1[_0x4271e2(0x2d3)][_0x4271e2(0x2a4)]('fmt')||'';try{const _0x534657=await generateSubscription(_0x4114ad,_0x352a69[_0x4271e2(0x37c)],_0x4750e0,_0x1e0c17,_0x352a69['cf']&&_0x352a69['cf'][_0x4271e2(0x50d)]);return json({'ok':!![],'type':_0x534657[_0x4271e2(0x44e)],'body':_0x534657['body']});}catch(_0x546c0b){return json({'ok':![],'msg':_0x4271e2(0x316)+(_0x546c0b['message']||_0x546c0b)},0x1f4);}}if(_0x2e5637==='candidates'){if(_0x352a69['method']!==_0x4271e2(0x4f5))return json({'ok':![],'msg':_0x4271e2(0x4df)},0x195);try{const _0x447017=await _0x352a69[_0x4271e2(0x393)]()['catch'](()=>({})),_0x412602=await collectCandidates(Object[_0x4271e2(0x1c2)]({},_0x4114ad['optimizer'],_0x447017));if(!_0x412602['candidates'][_0x4271e2(0x1b7)]){const _0x4c3e2d=_0x412602['stats']||{},_0x2ed022=[_0x4c3e2d[_0x4271e2(0x488)]&&_0x4271e2(0x35b)+_0x4c3e2d[_0x4271e2(0x488)],_0x4c3e2d[_0x4271e2(0x308)]&&_0x4271e2(0x1ef)+_0x4c3e2d[_0x4271e2(0x308)]]['filter'](Boolean)[_0x4271e2(0x4bb)]('；');return json({'ok':![],'msg':'没有可测的\x20IP'+(_0x2ed022?'（'+_0x2ed022+'）':'，请换一个数据源')},0x190);}return json({'ok':!![],'data':_0x412602['candidates'],'stats':_0x412602[_0x4271e2(0x48d)]});}catch(_0x35b739){return json({'ok':![],'msg':'拉取失败:\x20'+(_0x35b739[_0x4271e2(0x4cd)]||_0x35b739)},0x1f4);}}if(_0x2e5637===_0x4271e2(0x204))try{const _0x58b8bd=OPTIMIZE_SOURCES[_0x403ee1[_0x4271e2(0x2d3)][_0x4271e2(0x2a4)]('source')||_0x4271e2(0x26b)]||OPTIMIZE_SOURCES[_0x4271e2(0x26b)],_0x41de34=await fetch(_0x58b8bd['url'],{'headers':{'User-Agent':_0x4271e2(0x4e8)}});if(!_0x41de34['ok'])return json({'ok':![],'msg':_0x4271e2(0x2c2)+_0x41de34[_0x4271e2(0x2c7)]});const _0x586b44=extractDomains(await _0x41de34['text']());return json({'ok':!![],'data':_0x586b44});}catch(_0x385883){return json({'ok':![],'msg':_0x4271e2(0x338)+(_0x385883[_0x4271e2(0x4cd)]||_0x385883)},0x1f4);}return json({'ok':![],'msg':_0x4271e2(0x3f8)+_0x2e5637},0x194);}return new Response('Not\x20Found',{'status':0x194});}async function handleScheduled(_0x43164d,_0x25f2ea,_0x23cc76){const _0x1558cc=_0x4fb34b,_0x3d61c5=String(_0x25f2ea[_0x1558cc(0x506)]||'')[_0x1558cc(0x3fb)]();if(_0x3d61c5!=='1'&&_0x3d61c5!==_0x1558cc(0x4b0))return;try{const _0x174517=await loadConfig(_0x25f2ea),_0x452236=await collectCandidates(_0x174517[_0x1558cc(0x3d1)]),_0x4015d9=_0x452236['candidates']||[];if(!_0x4015d9[_0x1558cc(0x1b7)])return;const _0xe31d42=await runLatencyTest(_0x4015d9,_0x174517[_0x1558cc(0x3d1)][_0x1558cc(0x48b)]||0x5,0x1388),_0x57a8b1=_0xe31d42[_0x1558cc(0x1cf)](_0xfac4a7=>_0xfac4a7['ok'])['slice'](0x0,_0x174517[_0x1558cc(0x3d1)][_0x1558cc(0x4f9)]||0x14);if(!_0x57a8b1[_0x1558cc(0x1b7)])return;_0x174517[_0x1558cc(0x398)]=_0x57a8b1['map'](_0x55ef38=>({'ip':_0x55ef38['ip'],'port':_0x55ef38[_0x1558cc(0x3bc)]||0x1bb,'name':''})),await saveConfig(_0x25f2ea,_0x174517);}catch(_0x249ce7){}}export default{async 'fetch'(_0x26b1e9,_0x237b40,_0x471237){const _0x1059ef=_0x4fb34b;return handleRequest(_0x26b1e9,Object[_0x1059ef(0x1c2)]({},_0x237b40,{'_ctx':_0x471237}));},async 'scheduled'(_0x48353b,_0x4ce3d2,_0x31f683){return handleScheduled(_0x48353b,_0x4ce3d2,_0x31f683);}};