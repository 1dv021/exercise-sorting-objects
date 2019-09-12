/**
 * Repository module.
 *
 * @module src/repository
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const path = require('path')
const fs = require('fs')

/**
   * Returns an array of team objects.
   *
   * @returns {Object[]} An array of team objects.
   */
function loadTeams () {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'teams.json')))
}

module.exports.loadTeams = loadTeams
