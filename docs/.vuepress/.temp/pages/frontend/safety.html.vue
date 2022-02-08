<template><h1 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h1>
<h2 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h2>
<blockquote>
<p><strong>跨网站指令码</strong>（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是<a href="https://www.wikiwand.com/zh-hans/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5" target="_blank" rel="noopener noreferrer">代码注入<ExternalLinkIcon/></a>的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。</p>
</blockquote>
<p>XSS 分为三种：反射型，存储型和 DOM-based</p>
<h3 id="如何攻击" tabindex="-1"><a class="header-anchor" href="#如何攻击" aria-hidden="true">#</a> 如何攻击</h3>
<p>XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。</p>
<p>例如通过 URL 获取某些参数</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- http://www.domain.com?name=&lt;script>alert(1)&lt;/script> --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>                                                  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上述 URL 输入可能会将 HTML 改为 <code>&lt;div&gt;&lt;script&gt;alert(1)&lt;/script&gt;&lt;/div&gt;</code> ，这样页面中就凭空多了一段可执行脚本。这种攻击类型是反射型攻击，也可以说是 DOM-based 攻击。</p>
<p>也有另一种场景，比如写了一篇包含攻击代码 <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> 的文章，那么可能浏览文章的用户都会被攻击到。这种攻击类型是存储型攻击，也可以说是 DOM-based 攻击，并且这种攻击打击面更广。</p>
<h3 id="如何防御" tabindex="-1"><a class="header-anchor" href="#如何防御" aria-hidden="true">#</a> 如何防御</h3>
<p>最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">escape</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&amp;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"&amp;amp;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"&amp;lt;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">></span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"&amp;gt;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">"</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"&amp;quto;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">'</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"&amp;#39;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">`</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"&amp;#96;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"&amp;#x2F;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> str
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过转义可以将攻击代码 <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> 变成</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// -> &amp;lt;script&amp;gt;alert(1)&amp;lt;&amp;#x2F;script&amp;gt;</span>
<span class="token function">escape</span><span class="token punctuation">(</span><span class="token string">'&lt;script>alert(1)&lt;/script>'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xss <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"xss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token function">xss</span><span class="token punctuation">(</span><span class="token string">'&lt;h1 id="title">XSS Demo&lt;/h1>&lt;script>alert("xss");&lt;/script>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -> &lt;h1>XSS Demo&lt;/h1>&amp;lt;script&amp;gt;alert("xss");&amp;lt;/script&amp;gt;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>以上示例使用了 <code>js-xss</code> 来实现。可以看到在输出中保留了 <code>h1</code> 标签且过滤了 <code>script</code> 标签</p>
<h3 id="csp" tabindex="-1"><a class="header-anchor" href="#csp" aria-hidden="true">#</a> CSP</h3>
<blockquote>
<p>内容安全策略   (<a href="https://developer.mozilla.org/en-US/docs/Glossary/CSP" target="_blank" rel="noopener noreferrer">CSP<ExternalLinkIcon/></a>) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (<a href="https://developer.mozilla.org/en-US/docs/Glossary/XSS" target="_blank" rel="noopener noreferrer">XSS<ExternalLinkIcon/></a>) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。</p>
</blockquote>
<p>我们可以通过 CSP 来尽量减少 XSS 攻击。CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码。</p>
<p>通常可以通过 HTTP Header 中的 <code>Content-Security-Policy</code> 来开启 CSP</p>
<ul>
<li>
<p>只允许加载本站资源</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Content-Security-Policy</span><span class="token punctuation">:</span> <span class="token header-value csp languages-csp">default-src ‘self’</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>只允许加载 HTTPS 协议图片</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Content-Security-Policy</span><span class="token punctuation">:</span> <span class="token header-value csp languages-csp">img-src https://*</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>允许加载任何来源框架</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Content-Security-Policy</span><span class="token punctuation">:</span> <span class="token header-value csp languages-csp">child-src 'none'</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<p>更多属性可以查看 <a href="https://content-security-policy.com/" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a></p>
<h2 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf" aria-hidden="true">#</a> CSRF</h2>
<blockquote>
<p><strong>跨站请求伪造</strong>（英语：Cross-site request forgery），也被称为 <strong>one-click attack</strong> 或者 <strong>session riding</strong>，通常缩写为 <strong>CSRF</strong> 或者 <strong>XSRF</strong>， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。[<a href="https://www.wikiwand.com/zh/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0#citenoteRistic1" target="_blank" rel="noopener noreferrer">1]<ExternalLinkIcon/></a> 跟<a href="https://www.wikiwand.com/zh/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC" target="_blank" rel="noopener noreferrer">跨網站指令碼<ExternalLinkIcon/></a>（XSS）相比，<strong>XSS</strong> 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。</p>
</blockquote>
<p>简单点说，CSRF 就是利用用户的登录态发起恶意请求。</p>
<h3 id="如何攻击-1" tabindex="-1"><a class="header-anchor" href="#如何攻击-1" aria-hidden="true">#</a> 如何攻击</h3>
<p>假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.domain.com/xxx?comment=<span class="token punctuation">'</span>attack<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.domain.com/xxx<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CSRF<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>comment<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>attack<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="如何防御-1" tabindex="-1"><a class="header-anchor" href="#如何防御-1" aria-hidden="true">#</a> 如何防御</h3>
<p>防范 CSRF 可以遵循以下几种规则：</p>
<ol>
<li>Get 请求不对数据进行修改</li>
<li>不让第三方网站访问到用户 Cookie</li>
<li>阻止第三方网站请求接口</li>
<li>请求时附带验证信息，比如验证码或者 token</li>
</ol>
<h4 id="samesite" tabindex="-1"><a class="header-anchor" href="#samesite" aria-hidden="true">#</a> SameSite</h4>
<p>可以对 Cookie 设置 <code>SameSite</code> 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。</p>
<h4 id="验证-referer" tabindex="-1"><a class="header-anchor" href="#验证-referer" aria-hidden="true">#</a> 验证 Referer</h4>
<p>对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。</p>
<h4 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h4>
<p>服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。</p>
<h2 id="密码安全" tabindex="-1"><a class="header-anchor" href="#密码安全" aria-hidden="true">#</a> 密码安全</h2>
<p>密码安全虽然大多是后端的事情，但是作为一名优秀的前端程序员也需要熟悉这方面的知识。</p>
<h3 id="加盐" tabindex="-1"><a class="header-anchor" href="#加盐" aria-hidden="true">#</a> 加盐</h3>
<p>对于密码存储来说，必然是不能明文存储在数据库中的，否则一旦数据库泄露，会对用户造成很大的损失。并且不建议只对密码单纯通过加密算法加密，因为存在彩虹表的关系。</p>
<p>通常需要对密码加盐，然后进行几次不同加密算法的加密。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 加盐也就是给原密码添加字符串，增加原密码长度</span>
<span class="token function">sha256</span><span class="token punctuation">(</span><span class="token function">sha1</span><span class="token punctuation">(</span><span class="token function">md5</span><span class="token punctuation">(</span>salt <span class="token operator">+</span> password <span class="token operator">+</span> salt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但是加盐并不能阻止别人盗取账号，只能确保即使数据库泄露，也不会暴露用户的真实密码。一旦攻击者得到了用户的账号，可以通过暴力破解的方式破解密码。对于这种情况，通常使用验证码增加延时或者限制尝试次数的方式。并且一旦用户输入了错误的密码，也不能直接提示用户输错密码，而应该提示账号或密码错误。</p>
</template>
