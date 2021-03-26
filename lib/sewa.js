const fs = require('fs-extra')
const toMs = require('ms')

/**
 * Add sewa grup.
 * @param {String} groupId 
 * @param {String} expired 
 * @param {Object} _dir 
 */

const addSewaGroup = (groupId, expired, _dir) => {
    const obj = { id: groupId, expired: Date.now() + toMs(expired) }
    _dir.push(obj)
    fs.writeFileSync('./settings/sewa.json', JSON.stringify(_dir))
}

/**
 * Get sewa grup position.
 * @param {String} groupId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaPosition = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get sewa group expired.
 * @param {String} groupId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaExpired = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check Group Is Sewa.
 * @param {String} groupId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkSewa = (groupId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking sewa.
 * @param {Object} _dir 
 */
const expiredCheck = (_dir , piyo , message , groupId) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Sewa Expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./settings/sewa.json', JSON.stringify(_dir))
            piyo.leaveGroup(groupId))
        }
    }, 1000)
}

/**
 * Get all sewa id.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllSewa = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

/**
 * BY PIYOBOT
*/

module.exports = {
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewa,
    getAllSewa
}
