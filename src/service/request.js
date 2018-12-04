import { Get, Post } from './http'

export function Request() {
    return Post(API_HOST + '/request', {});
}