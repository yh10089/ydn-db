// Copyright 2012 YDN Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Interface for full text serach engine.
 *
 * @author kyawtun@yathit.com (Kyaw Tun)
 */


goog.provide('ydn.db.schema.fulltext.Engine');



/**
 * @interface
 */
ydn.db.schema.fulltext.Engine = function() {};


/**
 * @param {string} query
 * @returns {Array.<string>}
 */
fullproof.AbstractEngine.prototype.analyze = function(query) {};


fullproof.AbstractEngine.prototype.score = function(query) {};


/**
 * Score streaming score entries.
 * @param {!ydn.db.Request} req
 * @return {!ydn.db.Request}
 */
ydn.db.schema.fulltext.Engine.prototype.prepare = function(req) {};
