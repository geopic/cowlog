#!/usr/bin/env node
let linker = require('../lib/misc/linker/linker-dir')
let path = require('path')

let staticUpdate = function () {
  let projectRoot = path.join(__dirname, '../../')
  let src = linker(projectRoot, '<!--- source chat rewrite begin -->', '<!--- source chat rewrite end -->')
  console.log('aaa', src, projectRoot, 'SRCCCCCCCCCCC - ccc')
  linker(projectRoot,
    '<!--- destination chat rewrite begin -->', '<!--- destination chat rewrite end -->',
    src)
}

staticUpdate()
