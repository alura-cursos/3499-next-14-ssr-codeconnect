async function getPostBySlug (slug) {
    const url  = `http://localhost:3042/posts?slug=${slug}`
    const response = await fetch(url)
    if (!response.ok) {
      logger.error('Ops, alguma coisa correu mal')
      return {}
    }
    logger.info('Posts obtidos com sucesso')
    const data = await response.json()
    if (data.length == 0) {
        return {}
    }

    return data[0];
} 

const PagePost = () => {
    const post = getPostBySlug(???)
    return <h1>Olá posts</h1>
}

export default PagePost