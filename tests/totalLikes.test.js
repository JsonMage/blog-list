const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('total likes', () => {
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

    test('when list has only one blog, total likes equals the likes of that blog', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        assert.strictEqual(result, listWithOneBlog[0].likes)
    })

    const emptyList = []

    test('of empty list is zero', () => {
        const result = listHelper.totalLikes(emptyList)
        assert.strictEqual(result, 0)
    })


    const biggerList = [
        {
            _id: "668c569ae426abbfbc0c3202",
            title: "Zero Cloud Blog",
            author: "Zero-Cool",
            url: "https://cloud-xd-xd.com",
            likes: 1,
            __v: 0
        },
        {
            _id: "668c569ae426abbfbc0c3202",
            title: "Zero Cloud Blog",
            author: "Zero-Cool",
            url: "https://cloud-xd-xd.com",
            likes: 1,
            __v: 0
        },
        {
            _id: "668c569ae426abbfbc0c3202",
            title: "Zero Cloud Blog",
            author: "Zero-Cool",
            url: "https://cloud-xd-xd.com",
            likes: 2,
            __v: 0
        }
    ]

    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(biggerList)
        assert.strictEqual(result, 4)
    })
})