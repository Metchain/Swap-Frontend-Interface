(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[53],{1675:function(t,e,r){"use strict";r.r(e),r.d(e,"getClientSideQuote",(function(){return q}));var n=r(25),o=r.n(n),a=r(111),i=r.n(a),u=r(56),s=r.n(u),c=r(5),d=r(409),l=r(159),m=r(8),p=r.n(m),b=r(45);r(1),r(134),r(40),r(189),r(352),r(133),r(33),r(18),r(188),r(175),r(288),r(121),r(122),r(158),r(232),r(137),r(100),r(23),r(246),r(262),r(203),r(445),r(509),r(408),r(698),r(221),r(412),r(325),r(294),r(281),r(752),r(91),r(497),r(645),r(480),r(700),r(298),r(701),r(703),r(704),r(495),r(496),r(285),r(114),r(705);function f(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"===typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(t){var e,r=t.quote,n=t.quoteGasAdjusted,o=t.route,a=t.routeString,i=t.estimatedGasUsed,u=t.estimatedGasUsedQuoteToken,s=t.estimatedGasUsedUSD,c=t.gasPriceWei,d=t.methodParameters,m=t.blockNumber,p=t.trade,y=p.tradeType,h=p.inputAmount,g=p.outputAmount,v=[],O=f(o);try{for(O.s();!(e=O.n()).done;){var k=e.value,I=k.amount,S=k.quote,w=k.tokenPath;if(k.protocol===b.Protocol.V3){for(var j=k.route.pools,q=[],P=0;P<j.length;P++){var A=j[P],E=w[P],x=w[P+1],C=void 0;0===P&&(C=Object(l.k)(y)?I.quotient.toString():S.quotient.toString());var D=void 0;P===j.length-1&&(D=Object(l.k)(y)?S.quotient.toString():I.quotient.toString()),q.push({type:"v3-pool",tokenIn:{chainId:E.chainId,decimals:E.decimals,address:E.address,symbol:E.symbol},tokenOut:{chainId:x.chainId,decimals:x.decimals,address:x.address,symbol:x.symbol},fee:A.fee.toString(),liquidity:A.liquidity.toString(),sqrtRatioX96:A.sqrtRatioX96.toString(),tickCurrent:A.tickCurrent.toString(),amountIn:C,amountOut:D})}v.push(q)}else if(k.protocol===b.Protocol.V2){for(var T=k.route.pairs,U=[],G=0;G<T.length;G++){var N=T[G],M=w[G],L=w[G+1],Q=void 0;0===G&&(Q=Object(l.k)(y)?I.quotient.toString():S.quotient.toString());var R=void 0;G===T.length-1&&(R=Object(l.k)(y)?S.quotient.toString():I.quotient.toString());var B=N.reserve0,W=N.reserve1;U.push({type:"v2-pool",tokenIn:{chainId:M.chainId,decimals:M.decimals,address:M.address,symbol:M.symbol},tokenOut:{chainId:L.chainId,decimals:L.decimals,address:L.address,symbol:L.symbol},reserve0:{token:{chainId:B.currency.wrapped.chainId,decimals:B.currency.wrapped.decimals,address:B.currency.wrapped.address,symbol:B.currency.wrapped.symbol},quotient:B.quotient.toString()},reserve1:{token:{chainId:W.currency.wrapped.chainId,decimals:W.currency.wrapped.decimals,address:W.currency.wrapped.address,symbol:W.currency.wrapped.symbol},quotient:W.quotient.toString()},amountIn:Q,amountOut:R})}v.push(U)}}}catch(V){O.e(V)}finally{O.f()}var J=Object(l.k)(y)?h:g;return{methodParameters:d,blockNumber:m.toString(),amount:J.quotient.toString(),amountDecimals:J.toExact(),quote:r.quotient.toString(),quoteDecimals:r.toExact(),quoteGasAdjusted:n.quotient.toString(),quoteGasAdjustedDecimals:n.toExact(),gasUseEstimateQuote:u.quotient.toString(),gasUseEstimateQuoteDecimals:u.toExact(),gasUseEstimate:i.toString(),gasUseEstimateUSD:s.toExact(),gasPriceWei:c.toString(),route:v,routeString:a}}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=Object.values(d.b).filter((function(t){return Number.isInteger(t)}));function k(t){return Boolean(t&&O.includes(t))}var I=new WeakMap;function S(t,e){var r,n,o,a=I.get(e)||{},i=a[t];if(i)return i;t!==d.b.MAINNET&&(r=new d.g(t)),[d.b.POLYGON,d.b.POLYGON_MUMBAI].includes(t)&&(o=new d.i(t,e,375e3),n=new d.e(t,e,o,{retries:2,minTimeout:100,maxTimeout:1e3},{multicallChunk:10,gasLimitPerCall:5e6,quoteMinSuccessRate:.1},{gasLimitOverride:5e6,multicallChunk:5},{gasLimitOverride:625e4,multicallChunk:4}));var u=new d.a({chainId:t,provider:e,v2SubgraphProvider:r,multicall2Provider:o,onChainQuoteProvider:n});return a[t]=u,I.set(e,a),u}function w(t,e,r){return j.apply(this,arguments)}function j(){return(j=i()(s.a.mark((function t(e,r,n){var o,a,i,u,m,b,f,y,g,O,k,I;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.tradeType,a=e.tokenIn,i=e.tokenOut,u=e.amount,m=Object.values(l.g).includes(a.address),b=Object.values(l.g).includes(i.address),f=m?Object(l.l)(a.chainId):new c.Token(a.chainId,a.address,a.decimals,a.symbol),y=b?Object(l.l)(i.chainId):new c.Token(i.chainId,i.address,i.decimals,i.symbol),g=Object(l.k)(o)?f:y,O=Object(l.k)(o)?y:f,k=c.CurrencyAmount.fromRawAmount(g,p.a.BigInt(null!==u&&void 0!==u?u:"1")),t.next=10,r.route(k,O,o,void 0,n);case 10:if(I=t.sent,u){t.next=13;break}return t.abrupt("return",l.d);case 13:if(I){t.next=15;break}return t.abrupt("return",l.e);case 15:return t.abrupt("return",h(v(v({},I),{},{routeString:Object(d.k)(I.route)})));case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(t,e){return P.apply(this,arguments)}function P(){return(P=i()(s.a.mark((function t(e,r){var n,o,a,i,u,c,d,l,m,p,b,f;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.tokenInAddress,o=e.tokenInChainId,a=e.tokenInDecimals,i=e.tokenInSymbol,u=e.tokenOutAddress,c=e.tokenOutChainId,d=e.tokenOutDecimals,l=e.tokenOutSymbol,m=e.amount,p=e.tradeType,b=e.provider,k(o)){t.next=3;break}throw new Error("Router does not support this token's chain (chainId: ".concat(o,")."));case 3:return f=S(o,b),t.abrupt("return",w({tradeType:p,tokenIn:{address:n,chainId:o,decimals:a,symbol:i},tokenOut:{address:u,chainId:c,decimals:d,symbol:l},amount:m},f,r));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=53.beebabeb.chunk.js.map