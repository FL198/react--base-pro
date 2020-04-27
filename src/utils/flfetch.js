import 'whatwg-fetch'
import 'es6-promise'
import QS from 'qs'
import { Toast } from 'antd-mobile'
let count = 0

export function fetchGet(url) {
    if (count === 0) {
        Toast.loading('Loading...', 1)
    }
    count++
    let result = fetch(url, {
        credentials: 'include',
        header: {
            'Accept': 'application/json, text/plain, */*'
        }
    })
    return result.then((response) => {
        --count
        if (count === 0) {
            Toast.hide()
        }
        return response.json()
    })
}

export function fetchPost(url, params) {
    if (count === 0) {
        Toast.loading('Loading...', 1)
    }
    let result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: QS.stringify(params)
    })
    return result.then((response) => {
        --count
        if (count === 0) {
            Toast.hide()
        }
        return response.json()
    })
}