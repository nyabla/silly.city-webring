import citizens from './citizens.json'

/** choose a random citizen */
export function random() {
    let index = Math.floor(Math.random() * citizens.length)
    return citizens[index]
}

/** return index of `user` in webring */
function indexByUser(user) {
    return citizens.findIndex(citizen => {
        return citizen.user.toLowerCase() === user.toLowerCase()
    })
}

/** return the citizen after `user`,
 * if `user` can't be found return random citizen
 */
export function next(user) {
    let index = indexByUser(user)
    if (index === -1) {
        return random()
    } else {
        return citizens[(index + 1) % citizens.length]
    }
}

/** return the citizen before `url`,
 * if `url` can't be found return random citizen
 */
export function prev(user) {
    let index = indexByUser(user)
    if (index === -1) {
        return random()
    } else if (index === 0) {
        return citizens[citizens.length - 1]
    } else {
        return citizens[index - 1]
    }
}
