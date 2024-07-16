const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('favorite blog', () => {
    const listWithOneBlog = [
        {
            _id: "668c569ae426abbfbc0c3202",
            title: "Zero Cloud Blog",
            author: "Zero-Cool",
            url: "https://cloud-xd-xd.com",
            likes: 999,
            __v: 0
        }
    ]

    test('of a list with one blog is the first entry', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        assert.deepStrictEqual(result, listWithOneBlog[0])
    })

    const emptyList = []

    test('of an empty list is undefined', () => {
        const result = listHelper.favoriteBlog(emptyList)
        assert.deepStrictEqual(result, undefined)
    })


    const biggerList = [
        {
            _id: "668c569ae426abbfbc0c3202",
            title: "Zero Cloud Blog",
            author: "Zero-Cool",
            url: "https://cloud-xd-xd.com",
            likes: 10,
            __v: 0
        },
        {
            _id: "668c569ae426abbfbc0c3202",
            title: "Zero Cloud Blog",
            author: "Zero-Cool",
            url: "https://cloud-xd-xd.com",
            likes: 5,
            __v: 0
        },
        {
            _id: "668c569ae426abbfbc0c3202",
            title: "Zero Cloud Blog",
            author: "Zero-Cool",
            url: "https://cloud-xd-xd.com",
            likes: 48,
            __v: 0
        }
    ]

    test('of a bigger list is calculated right', () => {
        const result = listHelper.favoriteBlog(biggerList)
        assert.deepStrictEqual(result, biggerList[2])
    })
})