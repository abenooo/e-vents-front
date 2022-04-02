// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
module.exports = function(api) {
    api.chainWebpack((config, { isServer }) => {
        if (isServer) {
            config.externals([
                nodeExternals({
                    whitelist: [/^vuetify/]
                })
            ])
        }
    })
    api.loadSource(async actions => {
        const { post } = await axios.get('http://localhost:1337/api/events')
            // const { data } = await axios.get(`${process.env.STRAPI_URL}/events/`)
        const collection = actions.addCollection({
            typeName: 'Event'
                // path: '/events/:id'
        })

        for (const event in post) {
            collection.addNode({
                id: event.id,
                title: event.title
                    // "attributes": {
                    //     title: event.title,
                    //     description: event.description,
                    //     date: event.date,
                    //     duration: event.duration,
                    //     price: event.price
                    // }

            })
        }
    })
}