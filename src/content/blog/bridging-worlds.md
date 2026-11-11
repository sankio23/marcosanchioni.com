---
title: "Bridging Worlds"
description: "Notes after a conference in Castel Gandolfo on religion and development. If religious freedom and integral human development are graded concepts, the search for causes needs a logic of degrees."
date: 2026-11-11
hero: "/assets/bridging-worlds-hero.webp"
heroAlt: "Two overlapping circles with soft, graded edges, one green and one blue-grey, on a dark ground."
thumb: "/assets/bridging-worlds-thumb.webp"
share: "/assets/bridging-worlds-share.jpg"
tags: ["religion", "development", "philosophy of social science"]
---

For the past two days the International Mariapolis Centre in Castel Gandolfo hosted *Bridging Worlds: Religion, Development, and the Future of Global Partnerships*, a conference of the Atlantic Council's Freedom and Prosperity Center, organised with the Center for Interreligious Dialogue of the Focolare Movement and with Sophia University Institute as partner and host, for which I served as conference secretary. It brought together scholars, development practitioners, policy makers and religious leaders from many traditions around a question that is becoming urgent.

## The question

Faith-based institutions run a large share of the world's schools, clinics and hospitals, hold land, manage savings and giving networks, and are often present where states are weak and international organisations struggle to stay. Most of this capacity operates outside the frameworks of mainstream development policy and finance. At the same time official development assistance is shrinking, several major donors are withdrawing, and confidence in top-down development models is low. <mark>The question of the conference was therefore how to build better partnerships between the development community and religious communities, and on what shared ground.</mark> The ground it proposed is *integral human development*, the idea from Catholic social teaching that development "cannot be limited to mere economic growth" and must "promote the good of every man and of the whole man".[^pp]

James Mazzarella, who opened the conference for the Freedom and Prosperity Center, was candid about what is missing. We know that faith-based organisations matter, he said, but we struggle to show how much, in which settings, through which mechanisms and with what outcomes; nor should we assume that religious identity automatically confers effectiveness, legitimacy or accountability. His conclusion was simple: <mark>"We need better evidence. We need stronger analytical frameworks."</mark> Fabio Petito, speaking for the academic committee, described the two lines of work that follow from this: mapping and measuring the faith-based development footprint, and listening to practitioners whose projects already embody a broader idea of development. He presented them as a form of mutual learning, in which religious actors learn the language of evidence and the policy world learns to attend to what it usually does not see.

I would like to take Mazzarella's request at its word, and offer a small contribution from the philosophy of science to the analytical frameworks he asked for. <mark>It concerns the kind of concepts this research works with, and the kind of logic they require.</mark>

## Graded concepts

Religious freedom, integral human development and human flourishing are not concepts that a society either satisfies or fails to satisfy. They come in degrees: a country can have more or less religious freedom, a community can contribute more or less to development. They are also vague, in the technical sense that there is no sharp line at which a society stops being free in matters of religion. And they are multidimensional. The Pew Research Center, for instance, measures government restrictions on religion and social hostilities involving religion as two separate indices, because a country can score well on the first and badly on the second.[^pew]

None of this is a defect. These are simply the concepts we need in order to talk about what matters. However, they have two consequences for anyone who looks for causal arrows between them.

The first is that an index does not simply read off a concept that was already precise. <mark>It makes the concept precise, by choosing which dimensions count and how much each weighs.</mark> When the concept is vague, several choices are legitimate, and they need not agree. The divergence of ESG ratings, which often disagree about the same firm because they define and weigh sustainability differently, is a well-documented example.[^esg] A causal relation found between two indices is therefore a relation between two precisifications of the concepts, and <mark>it holds for the concepts themselves only if it survives the reasonable alternatives.</mark>

The second consequence concerns the logic of the causal arrows themselves, and it deserves a closer look, even at the cost of a short detour.

## A short detour into logic

Much of our talk about causes in the social world is talk about conditions. We say that religious freedom is *necessary* for flourishing, or that a strong civil society together with a functioning state is *sufficient* for it. To see what changes when the concepts are graded, it helps to start from the simplest logical tool we have, the arrow "if… then", and to look at it slowly.

### The classical arrow

In classical logic every statement is either true (1) or false (0). The arrow $X \rightarrow Y$, read "if $X$, then $Y$", is defined by a small table:

| $X$ | $Y$ | $X \rightarrow Y$ |
|:---:|:---:|:---:|
| 1 | 1 | 1 |
| 1 | 0 | **0** |
| 0 | 1 | 1 |
| 0 | 0 | 1 |

The arrow is false in one case only: when $X$ is true and $Y$ is false. If $X$ is false, the arrow makes no claim, and it counts as true.

This is all we need to talk about conditions. Saying that $X$ is *sufficient* for $Y$ means that, in every case we look at, if $X$ then $Y$:

$$
X \rightarrow Y .
$$

Saying that $X$ is *necessary* for $Y$ means that there is no $Y$ without $X$, i.e. that in every case, if $Y$ then $X$. The arrow simply points the other way:

$$
Y \rightarrow X .
$$

<mark>Sufficiency and necessity are the same arrow, read in opposite directions.</mark> And in classical logic a single case in which the arrow fails, one country with $X$ and without $Y$, is enough to refute the claim that $X$ is sufficient for $Y$.

### When truth comes in degrees

Now suppose that the statements themselves are graded. "This country is free in matters of religion" need not be simply true or false: it can be true to degree 0.8, or 0.3. Write $x$ for the degree of truth of $X$ and $y$ for that of $Y$, both between 0 and 1. Fuzzy logic, which grew out of Lotfi Zadeh's work in the 1960s, tells us how to combine such degrees:[^zadeh]

| | Classical logic | With degrees of truth |
|:---|:---:|:---:|
| not $X$ | true when $X$ is false | $1 - x$ |
| $X$ and $Z$ | true when both are true | the smaller of $x$ and $z$ |
| $X$ or $Z$ | true when at least one is true | the larger of $x$ and $z$ |

<mark>When the degrees are only 0 and 1, these rules give back the classical ones exactly.</mark> The arrow can be generalised in the same spirit. A standard choice, due to the Polish logician Jan Łukasiewicz, is

$$
X \rightarrow Y \;\text{ is true to degree }\; \min\big(1,\; 1 - x + y\big).
$$

In words: the arrow is fully true as long as $Y$ is at least as true as $X$, and it loses truth as $X$ becomes truer than $Y$. Its table no longer has four rows, because $x$ and $y$ can take any value between 0 and 1, but a few rows show how it behaves:

| $x$ | $y$ | $X \rightarrow Y$ | |
|:---:|:---:|:---:|:---|
| 1 | 1 | 1 | as in classical logic |
| 1 | 0 | 0 | as in classical logic |
| 0.6 | 0.8 | 1 | $Y$ is at least as true as $X$ |
| 0.8 | 0.6 | 0.8 | a slight shortfall: the arrow is almost true |
| 0.9 | 0.2 | 0.3 | a large shortfall: the arrow is mostly false |

### Three things that change

The first change is that <mark>the causal arrow itself becomes a matter of degree.</mark> A case in which $X$ is slightly truer than $Y$ does not refute sufficiency; it weakens it. Charles Ragin, who turned these ideas into a method for comparative social research, summarises how well a group of cases supports the arrow $X \rightarrow Y$ with an index of *consistency*:[^ragin]

$$
\text{consistency}(X \rightarrow Y) \;=\; \frac{\sum_c \min(x_c,\, y_c)}{\sum_c x_c},
$$

where the sums run over the cases $c$. It equals 1 when, in every case, $Y$ is at least as true as $X$, and it falls as cases depart from this. Here is a toy example with four invented countries:

| Country | $x$ (religious freedom) | $y$ (flourishing) | smaller of the two |
|:---|:---:|:---:|:---:|
| A | 0.9 | 0.8 | 0.8 |
| B | 0.7 | 0.3 | 0.3 |
| C | 0.4 | 0.5 | 0.4 |
| D | 0.2 | 0.1 | 0.1 |
| Sum | 2.2 | 1.7 | 1.6 |

The arrow "freedom → flourishing", i.e. freedom is sufficient, has consistency $1.6 / 2.2 \approx 0.73$: country B has much freedom and little flourishing. The opposite arrow "flourishing → freedom", i.e. there is no flourishing without freedom, has consistency $1.6 / 1.7 \approx 0.94$: only country C is slightly more flourishing than free. <mark>The same four countries support the second arrow far better than the first</mark>, and the logic makes the difference visible.

The second change concerns the principle that a statement and its negation cannot both be true. Classically, "$X$ and not $X$" is always false. With degrees, if "the country is free" is true to degree 0.6, then "the country is not free" is true to degree 0.4, and

$$
X \text{ and not } X \;\text{ is true to degree }\; \min(0.6,\; 0.4) \;=\; 0.4 .
$$

This is not a logical scandal. It is the formal counterpart of the plain observation that <mark>many societies are partly free and partly not</mark>, for instance free in law and hostile in practice, which is exactly what the two Pew indices record.

The third change is the most important for policy. <mark>An arrow has a direction, while a correlation does not.</mark> The statistical estimates on which much policy evidence rests measure how two quantities vary together, and this is symmetric. Suppose instead that a certain degree of religious freedom is necessary for flourishing but far from sufficient. Then no country is more flourishing than it is free, but many free countries flourish little. Plotted on a graph, the countries lie in a triangle below the diagonal, as in the figure below. The correlation between the two may be modest, and a regression would report a weak average effect. <mark>Yet the arrow "no flourishing without freedom" holds perfectly, and it is the one that matters most for anyone who wants to know what cannot be done without.</mark>

<figure class="figure">
<svg viewBox="0 0 800 540" role="img" aria-labelledby="bw1t bw1d" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;max-width:720px;display:block;margin:0 auto"><title id="bw1t">A necessary condition with a modest correlation</title><desc id="bw1d">Illustrative scatter plot of forty invented cases. The horizontal axis is the degree of a condition X, such as religious freedom; the vertical axis is the degree of an outcome Y, such as flourishing. All points lie on or below the diagonal Y equals X, so X is a perfectly consistent necessary condition for Y (consistency 1.00), while the Pearson correlation is only 0.30, because many cases with high X have low Y.</desc><rect x="90" y="40" width="420" height="420" fill="none" stroke="rgba(185,190,196,.68)" stroke-width="1.2"/><polygon points="90,460 510,460 510,40" fill="rgba(182,240,74,.07)"/><line x1="90" y1="460" x2="510" y2="40" stroke="#b6f04a" stroke-width="1.6" stroke-dasharray="6 6"/><circle cx="495.4" cy="455.1" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="399.1" cy="393.6" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="504.3" cy="452.9" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="459.4" cy="173.8" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="387.4" cy="342.2" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="200.6" cy="364.0" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="425.0" cy="366.2" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="478.4" cy="245.2" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="266.3" cy="426.8" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="327.2" cy="308.8" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="361.1" cy="289.9" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="462.6" cy="418.1" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="138.8" cy="440.1" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="323.1" cy="291.4" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="300.9" cy="384.7" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="488.2" cy="311.4" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="436.5" cy="326.3" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="470.0" cy="318.8" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="275.5" cy="428.8" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="471.1" cy="125.6" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="289.3" cy="411.5" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="296.8" cy="302.0" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="401.3" cy="339.4" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="486.7" cy="393.5" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="300.0" cy="258.0" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="500.1" cy="441.9" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="329.2" cy="265.8" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="416.7" cy="210.8" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="380.8" cy="352.6" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="125.7" cy="456.3" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="249.5" cy="314.1" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="340.1" cy="329.1" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="435.1" cy="123.7" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="465.3" cy="85.1" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="307.6" cy="399.6" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="377.5" cy="327.8" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="384.9" cy="317.2" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="451.5" cy="153.9" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="331.9" cy="319.4" r="5" fill="#f4f2ee" opacity=".85"/><circle cx="465.5" cy="405.9" r="5" fill="#f4f2ee" opacity=".85"/><text x="90" y="484" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="13" fill="rgba(185,190,196,.8)">0</text><text x="78" y="465" text-anchor="end" font-family="Inter, system-ui, sans-serif" font-size="13" fill="rgba(185,190,196,.8)">0</text><text x="300.0" y="484" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="13" fill="rgba(185,190,196,.8)">0.5</text><text x="78" y="255.0" text-anchor="end" font-family="Inter, system-ui, sans-serif" font-size="13" fill="rgba(185,190,196,.8)">0.5</text><text x="510" y="484" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="13" fill="rgba(185,190,196,.8)">1</text><text x="78" y="45" text-anchor="end" font-family="Inter, system-ui, sans-serif" font-size="13" fill="rgba(185,190,196,.8)">1</text><text x="300.0" y="514" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="13" letter-spacing=".08em" fill="rgba(185,190,196,.8)">CONDITION X · e.g. degree of religious freedom</text><text transform="translate(38,250.0) rotate(-90)" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="13" letter-spacing=".08em" fill="rgba(185,190,196,.8)">OUTCOME Y · e.g. degree of flourishing</text><text x="321.0" y="157.60000000000002" text-anchor="end" font-family="Spectral, Georgia, serif" font-size="18" font-style="italic" fill="#b6f04a">Y = X</text><text x="540" y="100" font-family="Inter, system-ui, sans-serif" font-size="13" letter-spacing=".08em" fill="#b6f04a">NECESSITY</text><text x="540" y="130" font-family="Spectral, Georgia, serif" font-size="18" fill="#f4f2ee">No case lies above</text><text x="540" y="156" font-family="Spectral, Georgia, serif" font-size="18" fill="#f4f2ee">the diagonal: no case is</text><text x="540" y="182" font-family="Spectral, Georgia, serif" font-size="18" fill="#f4f2ee">more Y than it is X.</text><text x="540" y="208" font-family="Spectral, Georgia, serif" font-size="18" fill="#f4f2ee">Consistency = 1.00</text><text x="540" y="290" font-family="Inter, system-ui, sans-serif" font-size="13" letter-spacing=".08em" fill="rgba(185,190,196,.8)">CORRELATION</text><text x="540" y="320" font-family="Spectral, Georgia, serif" font-size="18" fill="#f4f2ee">Many cases with high X</text><text x="540" y="346" font-family="Spectral, Georgia, serif" font-size="18" fill="#f4f2ee">have low Y.</text><text x="540" y="372" font-family="Spectral, Georgia, serif" font-size="18" fill="#f4f2ee">Pearson r = 0.30</text></svg>
<figcaption>An illustration with forty invented cases. The condition is perfectly necessary for the outcome, since no case lies above the diagonal, yet the correlation between the two is only 0.30.</figcaption>
</figure>

## Why this matters for religion

The difference is not only technical. Average effects assume, roughly, that a factor pushes in the same direction everywhere. A logic of graded conditions allows instead that the same condition contributes to an outcome only in combination with others, and that different combinations can lead to the same result. This is close to what Scott Appleby, one of the academic organisers of the conference, called the ambivalence of the sacred: the same religious resources can sustain violence or reconciliation, depending on the actors who interpret them and the circumstances in which they act.[^appleby] <mark>A logic that only measures average effects tends to cancel precisely this ambivalence, whereas a logic of graded conditions can represent it.</mark>

I do not want to overstate the point. These methods have their own difficulties, from the choice of the degrees assigned to each case to the limits of causal inference from a small number of cases, and vagueness can also be treated without fuzzy logic, for instance by asking what is true under every admissible precisification.[^fine] The point is rather that <mark>the choice of logic is part of the analytical framework, and it should be made deliberately.</mark>

## A proposal

The conference has already produced the material this would need. Its workshops gathered detailed cases of faith-based development from different traditions, and its research agenda includes the possibility of a permanent observatory on faith-based development. My suggestion is that such an observatory pair its indices with a systematic comparison of cases, asking which combinations of conditions, in which degrees, go together with which outcomes, and testing whether its findings survive different ways of making its central concepts precise. This would not replace the measurement of the footprint. <mark>It would make clear what the measurement can and cannot tell us, which is what makes evidence useful to policy.</mark>

There is a broader question here about what can be measured in this field at all, and about what the history of measurement in the natural sciences can teach it. I will try to address it in the next note.

[^pp]: Paul VI, *Populorum Progressio* (1967), §14.

[^pew]: Pew Research Center, *Global Restrictions on Religion*, with its Government Restrictions Index and Social Hostilities Index, published annually since 2009.

[^esg]: F. Berg, J. F. Kölbel and R. Rigobon, "Aggregate confusion: the divergence of ESG ratings", *Review of Finance* 26 (2022), 1315–1344.


[^zadeh]: L. A. Zadeh, "Fuzzy sets", *Information and Control* 8 (1965), 338–353.

[^ragin]: C. C. Ragin, *Fuzzy-Set Social Science*, University of Chicago Press, 2000; *Redesigning Social Inquiry: Fuzzy Sets and Beyond*, University of Chicago Press, 2008.

[^appleby]: R. S. Appleby, *The Ambivalence of the Sacred: Religion, Violence, and Reconciliation*, Rowman & Littlefield, 2000.

[^fine]: This is the supervaluationist approach; see K. Fine, "Vagueness, truth and logic", *Synthese* 30 (1975), 265–300.
