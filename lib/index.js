/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/**
* Binomial distribution probability mass function (PMF).
*
* @module @stdlib/stats-base-dists-binomial-pmf
*
* @example
* var pmf = require( '@stdlib/stats-base-dists-binomial-pmf' );
*
* var y = pmf( 3.0, 20, 0.2 );
* // returns ~0.205
*
* y = pmf( 21.0, 20, 0.2 );
* // returns 0.0
*
* y = pmf( 5.0, 10, 0.4 );
* // returns ~0.201
*
* y = pmf( 0.0, 10, 0.4 );
* // returns ~0.006
*
* @example
* var factory = require( '@stdlib/stats-base-dists-binomial-pmf' ).factory;
*
* var pmf = factory( 10, 0.5 );
*
* var y = pmf( 3.0 );
* // returns ~0.117
*
* y = pmf( 5.0 );
* // returns ~0.246
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
