import { prev, random } from "../ring/ring_tools"

/** send the visitor to the previous citizen of the webring */
export default function handler(request, response) {
    if ('user' in request.query) {
        response.redirect(prev(request.query.user).url)
        return
    }

    if ('referer' in request.headers) {
        let refererUrl = new URL(request.headers.referer)
        if (refererUrl.searchParams.has('user')) {
            console.log('referer')
            response.redirect(prev(refererUrl.searchParams.get('user')).url)
            return
        }
    }
    
    response.redirect(random().url)
}
