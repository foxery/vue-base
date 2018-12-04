import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

export function Get(url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data
        }).then((res) => {
            if (res) {
                if (res.status == 200) {
                    if (res.data.status == 1) {
                        resolve(res.data.data);
                    } else {
                        reject(res.data.msg);
                    }
                } else {
                    reject(res);
                }
            }
        }).catch((res) => {
            reject(res);
        });
    });
}

export function Post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data)).then((res) => {
            if (res) {
                if (res.status == 200) {
                    if (res.data.status == 1) {
                        resolve(res.data.data);
                    }
                    else {
                        reject(res.data.msg);
                    }
                } else {
                    reject(res);
                }
            }
        }).catch((res) => {
            reject(res);
        });
    });
}

export function PostFlie(url, data) {
    return new Promise((resolve, reject) => {
        //根据data对象生成FormData对象
        var temp = new FormData();
        for (var t in data) {
            temp.append(t, data[t]);
        }
        axios.post(url, temp).then((res) => {
            if (res.status == 200) {
                resolve(res.data.data);
            } else {
                reject(res);
            }
        }).catch((res) => {
            reject(res);
        });
    })
}