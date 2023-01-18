import { next, random } from "../ring/ring_tools"

/** send the visitor to the next citizen of the webring */
export default function handler(request, response) {
    if ('user' in request.query) {
        console.log('query')
        response.redirect(next(request.query.user).url)
        return
    }

    let refererUrl = new URL(request.headers.referer)
    if (refererUrl.searchParams.has('user')) {
        console.log('referer')
        response.redirect(next(refererUrl.searchParams.get('user')).url)
        return
    }
    console.log('random')
    response.redirect(random().url)
}
