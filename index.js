#!/usr/bin/env node
function handleResult(err) {
  if (err) {
    console.log('Error!')
  } else {
    console.log('OK! The command ran successfully!')
  }
}

var Command = require('./command')

Command.add(handleResult)
Command.find(handleResult)