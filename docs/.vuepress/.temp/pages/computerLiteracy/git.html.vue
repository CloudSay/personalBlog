<template><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1>
<p>本文不会介绍 Git 的基本操作，会对一些高级操作进行说明。</p>
<h2 id="rebase-合并" tabindex="-1"><a class="header-anchor" href="#rebase-合并" aria-hidden="true">#</a> Rebase 合并</h2>
<p>该命令可以让和 <code>merge</code> 命令得到的结果基本是一致的。</p>
<p>通常使用 <code>merge</code> 操作将分支上的代码合并到 <code>master</code> 中，分支样子如下所示</p>
<p><img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043128.png" alt=""></p>
<p>使用 <code>rebase</code> 后，会将 <code>develop</code> 上的 <code>commit</code> 按顺序移到 <code>master</code> 的第三个 <code>commit</code> 后面，分支样子如下所示</p>
<p><img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043129.png" alt=""></p>
<p>Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 merge 出现冲突只需要解决一次。</p>
<p>使用 rebase 应该在需要被 rebase 的分支上操作，并且该分支是本地分支。如果 <code>develop</code> 分支需要 rebase 到 <code>master</code> 上去，那么应该如下操作</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## branch develop</span>
<span class="token function">git</span> rebase master
<span class="token function">git</span> checkout master
<span class="token comment">## 用于将 `master` 上的 HEAD 移动到最新的 commit</span>
<span class="token function">git</span> merge develop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="stash" tabindex="-1"><a class="header-anchor" href="#stash" aria-hidden="true">#</a> stash</h2>
<p><code>stash</code> 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 <code>commit</code> 的话，就可以使用该命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> stash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> stash pop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这样你之前临时保存的代码又回来了</p>
<h2 id="reflog" tabindex="-1"><a class="header-anchor" href="#reflog" aria-hidden="true">#</a> reflog</h2>
<p><code>reflog</code> 可以看到 HEAD 的移动记录，假如之前误删了一个分支，可以通过 <code>git reflog</code> 看到移动 HEAD 的哈希值</p>
<p><img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-43130.png" alt=""></p>
<p>从图中可以看出，HEAD 的最后一次移动行为是 <code>merge</code> 后，接下来分支 <code>new</code> 就被删除了，那么我们可以通过以下命令找回 <code>new</code> 分支</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout 37d9aca
<span class="token function">git</span> checkout -b new
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>PS：<code>reflog</code> 记录是时效的，只会保存一段时间内的记录。</p>
<h2 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> Reset</h2>
<p>如果你想删除刚写的 commit，就可以通过以下命令实现</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset --hard HEAD^
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>但是 <code>reset</code> 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。</p>
</template>
