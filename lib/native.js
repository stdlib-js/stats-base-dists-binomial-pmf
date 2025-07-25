/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the probability mass function (PMF) for a binomial distribution with number of trials `n` and success probability `p` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {Probability} evaluated PMF
*
* @example
* var y = pmf( 3.0, 20, 0.2 );
* // returns ~0.205
*
* @example
* var y = pmf( 21.0, 20, 0.2 );
* // returns 0.0
*
* @example
* var y = pmf( 5.0, 10, 0.4 );
* // returns ~0.201
*
* @example
* var y = pmf( 0.0, 10, 0.4 );
* // returns ~0.006
*
* @example
* var y = pmf( NaN, 20, 0.5 );
* // returns NaN
*
* @example
* var y = pmf( 0.0, 20, NaN );
* // returns NaN
*/
function pmf( x, n, p ) {
	return addon( x, n, p );
}


// EXPORTS //

module.exports = pmf;
