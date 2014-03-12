/*global describe, it*/


'use strict';


var helpers = require('./helpers');
var testInflate = helpers.testInflate;
var pako  = require('../index');


var samples = helpers.loadSamples();


describe('Inflate defaults', function () {

  it('inflate, no options', function(done) {
    testInflate(samples, {}, done);
  });

  it('inflate raw, no options', function(done) {
    testInflate(samples, { raw: true }, done);
  });

});


describe('Inflate ungzip', function () {
  var orig = samples.lorem_cat;
  var gzipped = pako.gzip(samples.lorem_cat);

  it.skip('ungzip with autodetect', function(done) {
    done(helpers.cmp(orig, pako.inflate(gzipped)));
  });

  it.skip('ungzip with method set directly', function(done) {
    done(helpers.cmp(orig, pako.inflate(gzipped, { windowBits: 15 + 16 })));
  });

});


describe('Inflate levels', function () {

  it('level 9', function(done) {
    testInflate(samples, { level: 9 }, done);
  });
  it('level 8', function(done) {
    testInflate(samples, { level: 8 }, done);
  });
  it('level 7', function(done) {
    testInflate(samples, { level: 7 }, done);
  });
  it('level 6', function(done) {
    testInflate(samples, { level: 6 }, done);
  });
  it('level 5', function(done) {
    testInflate(samples, { level: 5 }, done);
  });
  it('level 4', function(done) {
    testInflate(samples, { level: 4 }, done);
  });
  it('level 3', function(done) {
    testInflate(samples, { level: 3 }, done);
  });
  it('level 2', function(done) {
    testInflate(samples, { level: 2 }, done);
  });
  it('level 1', function(done) {
    testInflate(samples, { level: 1 }, done);
  });
  it('level 0', function(done) {
    testInflate(samples, { level: 0 }, done);
  });

});


describe('Inflate windowBits', function () {

  it('windowBits 15', function(done) {
    testInflate(samples, { windowBits: 15 }, done);
  });
  it('windowBits 14', function(done) {
    testInflate(samples, { windowBits: 14 }, done);
  });
  it('windowBits 13', function(done) {
    testInflate(samples, { windowBits: 13 }, done);
  });
  it('windowBits 12', function(done) {
    testInflate(samples, { windowBits: 12 }, done);
  });
  it('windowBits 11', function(done) {
    testInflate(samples, { windowBits: 11 }, done);
  });
  it('windowBits 10', function(done) {
    testInflate(samples, { windowBits: 10 }, done);
  });
  it('windowBits 9', function(done) {
    testInflate(samples, { windowBits: 9 }, done);
  });
  it('windowBits 8', function(done) {
    testInflate(samples, { windowBits: 8 }, done);
  });

});

describe('Inflate strategy', function () {

  it('Z_DEFAULT_STRATEGY', function(done) {
    testInflate(samples, { strategy: 0 }, done);
  });
  it('Z_FILTERED', function(done) {
    testInflate(samples, { strategy: 1 }, done);
  });
  it('Z_HUFFMAN_ONLY', function(done) {
    testInflate(samples, { strategy: 2 }, done);
  });
  it('Z_RLE', function(done) {
    testInflate(samples, { strategy: 3 }, done);
  });
  it.skip('Z_FIXED', function(done) {
    testInflate(samples, { strategy: 4 }, done);
  });

});


describe('Inflate RAW', function () {
  // Since difference is only in rwapper, test for store/fast/slow methods are enougth
  it('level 4', function(done) {
    testInflate(samples, { level: 4, raw: true }, done);
  });
  it('level 1', function(done) {
    testInflate(samples, { level: 1, raw: true }, done);
  });
  it('level 0', function(done) {
    testInflate(samples, { level: 0, raw: true }, done);
  });

});

