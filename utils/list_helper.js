const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let sumOfLikes = 0
    blogs.forEach(item => sumOfLikes += item.likes)

    return sumOfLikes
}

const favoriteBlog = (blogs) => {
    const blogsCopy = [...blogs]
    blogsCopy.sort((a, b) => b.likes - a.likes)
    return blogsCopy[0]
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}