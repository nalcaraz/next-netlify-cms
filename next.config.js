
const fetch = require('isomorphic-unfetch')

module.exports = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            }
        )
        return cfg;
    },
    // exportPathMap: async function (defaultPathMap) {
    //     const paths = await fetch('./content/events')
    //       .then(data =>
    //         data.reduce(
    //           (acc, slug) => ({
    //             '/': { page: '/' },
    //             ...acc,
    //             [`/content/events/${slug}`]: { page: 'content/events/[slug]', query: { slug } }
    //           }),
    //           defaultPathMap
    //         )
    //       )
    //       .catch(console.error)
    //     return paths
    //   }
}