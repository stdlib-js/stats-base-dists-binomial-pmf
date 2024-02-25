<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Binomial][binomial-distribution] distribution probability mass function (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_pmf" align="center" raw="f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a binomial distribution."> -->

```math
f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:binomial_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/pmf/docs/img/equation_binomial_pmf.svg" alt="Probability mass function (PMF) for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-pmf@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-binomial-pmf/tags). For example,

```javascript
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-pmf@v0.2.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-pmf@esm/index.mjs';
```

#### pmf( x, n, p )

Evaluates the [probability mass function][pmf] (PMF) for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = pmf( 3.0, 20, 0.2 );
// returns ~0.205

y = pmf( 21.0, 20, 0.2 );
// returns 0.0

y = pmf( 5.0, 10, 0.4 );
// returns ~0.201

y = pmf( 0.0, 10, 0.4 );
// returns ~0.006
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 20, 0.5 );
// returns NaN

y = pmf( 0.0, NaN, 0.5 );
// returns NaN

y = pmf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 1.5, 0.5 );
// returns NaN

y = pmf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 20, -1.0 );
// returns NaN

y = pmf( 2.0, 20, 1.5 );
// returns NaN
```

#### pmf.factory( n, p )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var mypmf = pmf.factory( 10, 0.5 );

var y = mypmf( 3.0 );
// returns ~0.117

y = mypmf( 5.0 );
// returns ~0.246
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-pmf@esm/index.mjs';

var i;
var n;
var p;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 20.0 );
    n = round( randu() * 100.0 );
    p = randu();
    y = pmf( x, n, p );
    console.log( 'x: %d, n: %d, p: %d, P(X = x;n,p): %d', x, n, p.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-binomial-pmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-binomial-pmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-binomial-pmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-binomial-pmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-binomial-pmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-binomial-pmf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-binomial-pmf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-pmf/main/LICENSE

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
