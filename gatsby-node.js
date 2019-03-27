const axios = require('axios');

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

const getRepositoryData = async () => {
    console.log(process.env.API_URL);
    return axios.get(`${process.env.API_URL}/repositories`);
};

exports.createPages = async ({actions: {createPage}}) => {
    let repositories = await getRepositoryData();
    repositories = repositories.data;

    // Create a page that lists all repositories.
    createPage({
        path: `/`,
        component: require.resolve('./src/templates/all-repositories.js'),
        context: {repositories}
    });

    // Create a page for each repository.
    repositories.forEach(repository => {
        createPage({
            path: `/repository/${repository.owner}/${repository.name}`,
            component: require.resolve('./src/templates/repository.js'),
            context: {repository}
        });
    });
};
