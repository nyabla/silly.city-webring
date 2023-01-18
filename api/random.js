import { random } from "../ring/ring_tools"

/** send the visitor to a random citizen of silly.city */
export default function handler(_request, response) {
    response.redirect(random().url)
}
